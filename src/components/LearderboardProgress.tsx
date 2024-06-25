import { FC } from "react";
import GemBadge from "./GemBadge.tsx";

export interface LeaderBoardProgressProps {
    xpNumber: number;
}

const LeaderBoardProgress:FC<LeaderBoardProgressProps> = (props) => {

    const { xpNumber } = props;

    const getProgressValue = (xpNumber: number): number => {
        // Define the thresholds and map them to equally spaced visual segments
        const milestones = [
            { xp: 0, progress: 0 },
            { xp: 1000, progress: 1000 },
            { xp: 2000, progress: 3660 },
            { xp: 5000, progress: 6400 },
            { xp: 10000, progress: 7500 }
        ];

        // Assume the maximum progress value visually is 10,000
        const maxProgress = 10000;

        // If xpNumber exceeds the last milestone, return the maximum progress
        if (xpNumber >= milestones[milestones.length - 1].xp) {
            return maxProgress;
        }

        // Find the range in which the xpNumber falls and interpolate
        for (let i = 0; i < milestones.length - 1; i++) {
            const current = milestones[i];
            const next = milestones[i + 1];
            if (xpNumber >= current.xp && xpNumber < next.xp) {
                const segmentProgress = (next.progress - current.progress);
                const segmentXP = (next.xp - current.xp);
                const xpOffset = xpNumber - current.xp;
                // Calculate the interpolated visual progress in this segment
                return current.progress + (xpOffset / segmentXP) * segmentProgress;
            }
        }

        // Default return value if somehow outside expected range
        return 0;
    }


    return (
        <div className="basis-1/2 bg-interaction-chart-bg-color rounded-lg h-[400px] max-w-[512px]">
                <div className="text-xs mt-16 mb-12 mx-10 overflow-x-auto">
                    <div className="flex justify-between space-x-10">
                        <GemBadge gemNumber={1} xpNumber={1000}/>
                        <GemBadge gemNumber={2} xpNumber={2000}/>
                        <GemBadge gemNumber={3} xpNumber={5000}/>
                        <GemBadge gemNumber={4} xpNumber={10000}/>
                    </div>
                    <div className="flex mt-12 mb-8">
                        <progress className="h-2 min-w-[888px]" value={getProgressValue(xpNumber)} max="10000"></progress>
                    </div>
                </div>
        </div>
    );
}

export default LeaderBoardProgress;