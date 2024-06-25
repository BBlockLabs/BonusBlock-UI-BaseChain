import DAppImg from "../assets/images/dApp.png";

const DAppCard = () => {
    return (
        <div className="w-[328px] h-[236px] flex flex-col gap-6 rounded-lg bg-white/10 p-6">
            <div className="flex justify-start items-center gap-5">
                <img
                    src={DAppImg}
                    alt="DApp Icon"
                    className="h-[80px] w-auto"
                />
                <div className="h-full flex flex-col justify-between">
                    <span className="text-xs/[14px] text-g600 font-bold tracking-wider uppercase">
                        Music
                    </span>
                    <p className="text-2xl/7 text-white font-bold tracking-negative1">
                        DApp Name
                    </p>
                    <div
                        className="w-fit py-[1px] px-1.5 border border-electric-lime/20 rounded-sm text-xs/5 text-electric-lime tracking-negative1"
                    >
                        2x Multiplier
                    </div>
                </div>
            </div>
            <p className="text-sm text-g600 tracking-negative1">
                Copy description lorem ipsum dolor sit amet consectetur adipiscing consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
};

export default DAppCard;
