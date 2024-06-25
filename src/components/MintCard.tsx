import Divider from "./Divider";
import MissionImg from "../assets/images/mission.png";

export type MintCardProps = {
    completed?: boolean;
    upcoming?: boolean;
    overflowCount?: number;
    onClick: () => void;
};

const MintCard = ({ completed, upcoming, overflowCount, onClick }: MintCardProps) => {
    const completedStyles = completed ? 'text-white-negative cursor-default' : 'text-white rounded-b-2xl hover:text-black hover:bg-white';

    return (
        <div className="mint-card-shadow relative w-[328px] flex flex-col flex-grow-0 bg-black rounded-2xl">
            <div className="flex justify-center items-center px-[30px] pt-9 pb-6">
                <img
                    src={MissionImg}
                    alt="Mission Icon"
                    className="h-[268px] w-auto"
                />
            </div>
            <div className="flex flex-col justify-start gap-2 p-6">
                <p className="text-2xl/7 text-white font-bold tracking-negative1">
                    Daily Login
                </p>
                <span className="max-h-10 text-sm text-g500 overflow-auto">
                    Copy description lorem ipsum dolor sit amet consectetur adipiscing...
                    <a href="/details" className="text-sm text-white underline">
                        See details
                    </a>
                </span>
            </div>
            <Divider variant="dark" />
            <button
                className={`py-6 text-sm/4 tracking-positive2 uppercase ${completedStyles}`}
                onClick={onClick}
            >
                {completed ? 'You own this' : 'Complete'}
            </button>
            {overflowCount || upcoming ? (
                <div className="absolute top-0 right-0 w-full h-full rounded-2xl bg-black/20 backdrop-blur-xl">
                    {!upcoming && (
                        <div className="flex flex-col justify-center items-center gap-8 h-full px-6">
                            <span className="text-white text-2xl/7 font-bold">
                                2 + available to mint
                            </span>
                            <button
                                className={`w-full py-[22px] px-[60px] text-sm/4 text-white${!completed ? '-negative' : ''} tracking-positive2 uppercase rounded-lg border border-white/10 hover:border-white`}
                                onClick={onClick}
                            >
                                View items
                            </button>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
};

export default MintCard;
