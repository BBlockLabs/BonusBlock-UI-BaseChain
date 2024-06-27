import { FC } from "react";
import GemBadge from "./GemBadge.tsx";
import { Button } from "./Button.tsx";

export interface YourBadgeProps {
    username: string;
    date: string;
    xpAmount: number;
    badgeTitle: string;
    badgeSubtitle: string;
    shareBadge?: boolean;
    isLocked?: boolean;
    icon?: number;
}

const YourBadge:FC<YourBadgeProps> = (props) => {
    const { username, date, xpAmount, badgeTitle, badgeSubtitle, shareBadge= true, icon= 1 } = props;

    // const blurClass = isLocked  ? '' : '';

    return (
        <div className={`max-w-sm mx-auto w-[264px]`}>
            <div className="card-shadow px-2 pt-2 pb-5 bg-cardBg rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="text-[10px]/[16px] font-semibold text-white">{username}</div>
                    <div className="text-[10px]/[16px] text-white">{date}</div>
                </div>
                <div className="flex flex-col items-center my-4 mt-12 mb-[60px] rounded-lg">
                    <GemBadge gemNumber={icon} xpNumber={xpAmount} gemBgColor="bg-black" />
                </div>
                <div className="text-center mb-[22px]">
                    <h3 className="text-xl/[23px] font-medium text-white tracking-[-0.01em] mb-2.5">{badgeTitle}</h3>
                    <p className="text-[8px]/[8px] tracking-[-0.01em] text-white">{badgeSubtitle}</p>
                </div>
            </div>

            {shareBadge && (
                <div className="flex justify-center mt-6">
                    <Button>
                        Share Mint
                    </Button>
                </div>
            )}
        </div>
    );
}

export default YourBadge;