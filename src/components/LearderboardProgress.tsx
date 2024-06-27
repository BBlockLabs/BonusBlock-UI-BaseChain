import GemBadge from "./GemBadge.tsx";
import { Box, Progress } from "@radix-ui/themes";
import Ellips from '../assets/svg/ellips.svg';

const LeaderBoardProgress = () => {
    return (
        <div className="card-shadow flex flex-col items-center justify-center bg-statsBg rounded-2xl">
            <div className="flex justify-around text-xs mb-12 px-8 space-x-[106px] w-full">
                <GemBadge gemNumber={1} xpNumber={1000} gemColor="text-white" />
                <GemBadge gemNumber={2} xpNumber={10000} gemColor="text-white" disabled />
            </div>
            <Box className="w-full relative">
                <Ellips className="filled-ellips absolute -top-[3px] left-[21%] w-[12px] h-[12px] z-0"/>
                <Ellips className="empty-ellips absolute -top-[3px] left-[77%] w-[12px] h-[12px] z-0"/>
                <Progress
                    style={{ height: '6px', backgroundColor: "#545865" }}
                    variant="classic"
                    radius="medium"
                    value={50}
                />
            </Box>
        </div>
    );
}

export default LeaderBoardProgress;
