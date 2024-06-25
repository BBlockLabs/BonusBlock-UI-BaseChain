import useMediaQuery from "../hooks/useMediaQuery";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Ball = () => <div className="bg-custom-radial w-10 h-10 rounded-full" />;

export type BridgeRowProps = {
    name: string;
    chain: string;
    isActive: boolean;
    onClick: () => void;
};

const getChevronPosition = (isActive: boolean, isSmallScreen: boolean) => {
    if (isActive && !isSmallScreen) return '-rotate-90';
    if (!isActive && isSmallScreen) return 'rotate-0';
    if (isActive && isSmallScreen) return 'rotate-180';
    return 'hidden';
}

const BridgeRow = ({ name, chain, isActive, onClick }: BridgeRowProps) => {
    const isSmallScreen = useMediaQuery('(max-width: 960px)');

    return (
        <div
            className={`w-full max-w-[342px] lg:max-w-[442px] flex justify-between px-4 py-5 bg-black border border-white${!isActive && '/10'} rounded-lg`}
            onClick={onClick}
        >
            <div className="flex gap-3 items-center">
                <Ball />
                <div className="flex flex-col">
                    <p className="text-lg/6 text-white font-bold">{name}</p>
                    <span className="text-sm text-g500 tracking-[-0.01em]">{chain}</span>
                </div>
            </div>
            <ChevronDownIcon
                className={`h-6 w-6 self-center text-white ${getChevronPosition(isActive, isSmallScreen)}`}
            />
        </div>
    );
};

export default BridgeRow;
