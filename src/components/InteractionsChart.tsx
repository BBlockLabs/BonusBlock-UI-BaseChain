import Chart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import moment, { unitOfTime } from "moment";
import {CSSProperties, useEffect, useState} from "react";
import {RingLoader} from "react-spinners";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {useAxios} from "../hooks/useAxios.ts";
import InteractionsDto from "@/common/bonusblock_api/dto/InteractionsDto.ts";
import {ApiResponseDto} from "@/common/bonusblock_api/dto/ApiResponseDto.ts";
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const override: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    margin: '0 auto',
};


const InteractionsChart = () => {

    const {fetchData} = useAxios();

    const [selectedRange, setSelectedRange] = useState('week');
    const [chartData] = useState({categories: [], data: []});
    const [loading, setLoading] = useState(false);
    const [totalInteractions, setTotalInteractions] = useState(0);


    // const chartOptions: ApexOptions = {
    //     chart: {
    //         type: 'bar',
    //         height: 350,
    //         toolbar: {
    //             show: false, // Show the toolbar, but customize the tools available
    //             tools: {
    //                 download: false, // Disable the download option
    //                 // You can also control other tools here
    //             }
    //         }
    //     },
    //     plotOptions: {
    //         bar: {
    //             borderRadius: 2,
    //             horizontal: false,
    //             columnWidth: '20%',
    //         },
    //     },
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     xaxis: {
    //         categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    //         labels: {
    //             style: {
    //                 colors: 'white' // Set the x-axis label colors to white
    //             }
    //         }
    //     },
    //     yaxis: {
    //         labels: {
    //             formatter: function (val: number) {
    //                 return val >= 1000 ? `${val / 1000}k` : ('' + val);
    //             },
    //             style: {
    //                 colors: 'white' // Set the y-axis label colors to white
    //             }
    //         }
    //     },
    //     colors: ['#FEA120'],
    // };
    //
    // const chartSeries = [
    //     {
    //         name: "Interactions",
    //         data: [0, 0, 0, 0, 0, 0, 0]
    //     }
    // ];

    const [chartOptions, setChartOptions] = useState<ApexOptions>({
            title: {
                text: 'Interactions',
                align: 'left',
                margin: 40,
                style: {
                    fontSize: '20px',
                    color: '#263238'
                }
            },
            subtitle: {
                text: 'Total interactions: ' + totalInteractions,
                align: 'right',
                style: {
                    fontSize: '16px',
                    color: '#263238'
                }
            },
            tooltip: {
                theme: 'dark', // or 'light'
            },
            chart: {
                type: 'bar',
                height: 350,
                parentHeightOffset: 40,
                toolbar: {
                    show: false, // Show the toolbar, but customize the tools available
                    tools: {
                        download: false, // Disable the download option
                        // You can also control other tools here
                    }
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 2,
                    horizontal: false,
                    columnWidth: '20%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                labels: {
                    style: {
                        colors: 'black' // Set the x-axis label colors to white
                    }
                }
            },
            yaxis: {
                labels: {
                    formatter: function (val: number) {
                        return val >= 1000 ? `${val / 1000}k` : ('' + val);
                    },
                    style: {
                        colors: 'black' // Set the y-axis label colors to white
                    }
                }
            },
            colors: ['#000000'],
            noData: {
                text: "No data for selected period yet",
                align: "center",
                verticalAlign: "middle",
            }
        }
    );
    const [chartSeries, setChartSeries] = useState([{name: 'Interactions', data: chartData.data}]);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    const color = '#FFD54A';

    // @ts-ignore
    const currentRangeStart = moment().startOf(selectedRange);
    // @ts-ignore
    const currentRangeEnd = moment().endOf(selectedRange);

    const truncateSettings = {
        'day': 'hours',
        'week': 'days',
        'month': 'days',
        'year': 'months'
    };

    const fetchChartData = async () => {
        setLoading(true);

        try {

            // @ts-ignore
            const tncT0 = truncateSettings[selectedRange];

            const payload = {
                from: currentRangeStart.unix(),
                to: currentRangeEnd.unix(),
                truncateTo: tncT0,
                timeZoneOffset: new Date().getTimezoneOffset() * -1,
                campaignIds: null
            };

            const response: ApiResponseDto<InteractionsDto> = await fetchData({
                url: `/faculty/interactions`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': token
                },
                data: JSON.stringify(payload)
            });

            updateChart(response.payload);

        } catch (e) {
            console.log(e)
            toast('Error while loading chart data!', {
                containerId: 'interaction',
                transition: Bounce,
                autoClose: 5000,
                position: "top-center",
                type: 'error',
            })
        } finally {
            setLoading(false);
        }
    };

    const updateChart = (chartData: InteractionsDto) => {

        if (!chartData) {
            return;
        }

        const from = moment(chartData.from);
        const to = moment(chartData.to);

        let dateFormat = "";
        if (chartData.truncateTo === "hours") {
            dateFormat = "[\u00A0]HH:00[\u00A0]";
        } else if (chartData.truncateTo === "days") {
            dateFormat = to.diff(from, "days") > 8 ? "DD" : "dddd";
        } else {
            dateFormat = "MMM";
        }

        updateLabelRotationAngle((chartData.truncateTo === "hours" || dateFormat === "DD") ? -90 : -45);

        const samples: { [key: string]: number } = {};
        for (const key in chartData.interactions) {
            const formattedDate = moment(key).format(dateFormat);
            samples[formattedDate] = chartData.interactions[key] ?? 0;
        }

        const date = from.clone();
        const data = [];
        const categories = [];
        while (date.diff(to) < 0) {
            const formattedDate = moment(date).format(dateFormat);
            data.push(samples[formattedDate] ?? 0);
            categories.push(formattedDate);
            date.add(1, chartData.truncateTo as unitOfTime.Base);
        }

        // @ts-ignore
        setChartSeries([{name: 'Interactions', data}]);
        setChartOptions({
            ...chartOptions,
            xaxis: {
                ...chartOptions.xaxis,
                categories
            }
        });

        const total = data.reduce((a, b) => a + b, 0);
        setTotalInteractions(total);

        setChartOptions({
            ...chartOptions,
            subtitle: {
                ...chartOptions.subtitle,
                text: `Total interactions: ${total}`
            }
        })
    }

    const updateLabelRotationAngle = (angle: number) => {
        setChartOptions(
            {
                ...chartOptions,
                xaxis: {
                    ...chartOptions.xaxis,
                    labels: {
                        rotate: angle
                    }
                }
            }
        );
    }

    // Fetch data on mount and when selectedRange changes
    useEffect(() => {
        fetchChartData();
    }, [selectedRange]);

    return (
        <div>
            <ToastContainer containerId='interaction'/>

            <RingLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <div className="flex text-right text-white gap-2 mb-8">
                <div><h2 className="text-2xl mb-6 text-white">Your Stats</h2></div>
                <div className="flex-grow"></div>
                <div>
                    <button
                        style={selectedRange === 'year' ? {borderBottom: '2px solid white'} : {}}
                        onClick={() => setSelectedRange('year')}
                        className="mr-4"
                    >
                        All Time
                    </button>
                    <button
                        style={selectedRange === 'month' ? {borderBottom: '2px solid white'} : {}}
                        onClick={() => setSelectedRange('month')}
                        className="mr-4"
                    >
                        Monthly
                    </button>
                    <button
                        style={selectedRange === 'week' ? {borderBottom: '2px solid white'} : {}}
                        onClick={() => setSelectedRange('week')}
                        className="mr-4"
                    >
                        Weekly
                    </button>
                    <button
                        style={selectedRange === 'day' ? {borderBottom: '2px solid white'} : {}}
                        onClick={() => setSelectedRange('day')}
                    >
                        Today
                    </button>
                </div>
            </div>

            <div id="chart" className="bg-interaction-chart-bg-color rounded-lg mb-12">
                <Chart options={chartOptions} series={chartSeries} type="bar" height={350}/>
            </div>
        </div>
    );
};

export default InteractionsChart;
