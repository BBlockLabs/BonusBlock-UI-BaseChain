import { FC } from "react";
import GemBadge from "./GemBadge.tsx";

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

    const { username, date, xpAmount, badgeTitle, badgeSubtitle, shareBadge= true, isLocked= false, icon= 1     } = props;

    const blurClass = isLocked  ? 'blur-sm' : '';
    // const blurClass = isLocked  ? '' : '';

    return (
        <div className={`max-w-sm mx-auto  overflow-hidden w-64 ${blurClass}`}>
            <div className="p-1 bg-dark-gray rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="text-xs font-semibold text-white">{username}</div>
                    <div className="text-xs text-white">{date}</div>
                </div>
                <div className="flex flex-col items-center my-4 mt-8 bg-light-gray rounded-lg py-6">
                    <GemBadge gemNumber={icon} xpNumber={xpAmount}/>
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-white">{badgeTitle}</h3>
                    <p className="text-xs text-white">{badgeSubtitle}</p>
                </div>
            </div>

            {shareBadge && (<div className="flex justify-center mt-4 mb-10 h-8">
                <button className="text-orange-500 border border-orange-500 rounded px-2">
                    Share badge
                </button>
            </div>)}
        </div>
    );
}

export default YourBadge;