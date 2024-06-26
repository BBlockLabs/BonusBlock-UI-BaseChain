import Layout from "../components/Layout.tsx";
// import { useNavigate } from "react-router-dom";
// import useSession from "../hooks/useSession.ts";
import { useGetStatus } from "../hooks/useGetStatus.ts";
// import { useMissions } from "../hooks/useMissions.ts";
// import { PacmanLoader} from "react-spinners";
import { Button } from "@/components/Button.tsx";
import BlockDroplet from '../assets/svg/blockDroplet.svg';
import Triangle from '../assets/svg/triangle.svg';
import Accordion from "@/components/Accordion/Accordion.tsx";
// import Loader  from "@/components/Loader/index.tsx";

const QuestsView = () => {
    // const session = useSession();
    // const navigate = useNavigate();
    useGetStatus();
    // const { missions } = useMissions();

    // const [loading, setLoading] = useState<boolean>(false);

    /* if (!session) {
        return <div>Loading...</div>;
    } */

    // const color = "#CAF033";

    return (
        <Layout>
            {/* <Loader /> */}

            {/* <PacmanLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}

            <div className="flex flex-col mt-[146px] mb-12">
                <div className="flex flex-col justify-evenly items-start ml-16">
                    <h1 className="mb-4 text-[76px]/[91px] text-white uppercase">
                        On-chain <br /> base with <span className="text-gold">bonus</span>
                    </h1>
                    <div className="flex gap-[99px] mb-[145px]">
                        <p className="text-2xl/[34px] text-white">
                            Stake Bonus and earn multipler for each task!
                        </p>
                        <Button onClick={() => {}}>
                            Earn more now
                        </Button>
                    </div>
                    <div className="w-full max-w-[1200px] flex justify-between items-center px-6 py-[35px] border border-stroke/20 rounded-lg">
                        <div className="flex items-center gap-6">
                            <BlockDroplet className="w-[52px] h-auto" />
                            <p
                                className="text-white text-[48px]/[50px]"
                            >
                                Start your
                                <br />
                                Quest journey!
                            </p>
                        </div>
                        <div className="flex gap-[50px]">
                            <div className="flex flex-col items-start gap-3.5">
                                <p className="text-gold text-[30px]/[41px] uppercase">Complete <br />Quests</p>
                                <p className="text-white text-lg">To earn and rank up</p>
                                <button
                                    className="flex items-center gap-2 px-4 py-[5px] border border-white text-white text-lg font-medium rounded-[3px]"
                                >
                                    Quests
                                    <Triangle className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex flex-col items-start gap-3.5">
                                <p className="text-gold text-[30px]/[41px] uppercase">Invite <br />to earn</p>
                                <p className="text-white text-lg">Even more rewards</p>
                                <button
                                    className="flex items-center gap-2 px-4 py-[5px] border border-white text-white text-lg font-medium rounded-[3px]"
                                >
                                    Visit
                                    <Triangle className="h-4 w-4 -rotate-90" />
                                </button>
                            </div>
                            <div className="flex flex-col items-start gap-3.5">
                                <p className="text-gold text-[30px]/[41px] uppercase">Stake <br />$Bonus</p>
                                <p className="text-white text-lg">Stack that multiplier</p>
                                <button
                                    className="flex items-center gap-2 px-4 py-[5px] border border-white text-white text-lg font-medium rounded-[3px]"
                                >
                                    Visit
                                    <Triangle className="h-4 w-4 -rotate-90" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-white/30 my-7" />
                <Accordion />
            </div>
        </Layout>
    );
}

export default QuestsView;
