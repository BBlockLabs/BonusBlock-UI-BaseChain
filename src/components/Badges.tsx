import { FC } from "react";
import YourBadge from "./YourBadge.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";
// import CubeTop from "../assets/svg/cube-top.svg";

export interface BadgesProps {
    score: number;
}

const badgesData = [
    {
        id: 1,
        username: "Username",
        date: "Sep 11, 2001",
        xpAmount: 1000,
        badgeTitle: "A NEW JOURNEY",
        badgeSubtitle: "Faculty Group",
    },
    {
        id: 2,
        username: "Username",
        date: "Sep 12, 2001",
        xpAmount: 2000,
        badgeTitle: "PROGRESS PIONEER",
        badgeSubtitle: "Faculty Group",
    },
    {
        id: 3,
        username: "Username",
        date: "Sep 13, 2001",
        xpAmount: 5000,
        badgeTitle: "RISING STAR",
        badgeSubtitle: "Faculty Group",
    },
    {
        id: 4,
        username: "Username",
        date: "Sep 14, 2001",
        xpAmount: 10000,
        badgeTitle: "THE ASCENDANT",
        badgeSubtitle: "Faculty Group",
    },
    {
        id: 5,
        username: "Username",
        date: "Sep 15, 2001",
        xpAmount: 20000,
        badgeTitle: "THE ASCENDANT",
        badgeSubtitle: "Faculty Group",
    },
    {
        id: 6,
        username: "Username",
        date: "Sep 16, 2001",
        xpAmount: 50000,
        badgeTitle: "THE ASCENDANT",
        badgeSubtitle: "Faculty Group",
    }
];

const Badges:FC<BadgesProps> = (props) => {

    const { score } = props;

    // TODO: fix this later
    const getBadgeIsLocked = (id: number) => {
        if (id === 1) {
            if (score >= 1000) {
                return false;
            } else {
                return true;
            }
        }

        if (id === 2) {
            if (score >= 2000) {
                return false;
            } else {
                return true;
            }
        }

        if (id === 3) {
            if (score >= 5000) {
                return false;
            } else {
                return true;
            }
        }

        if (id === 4) {
            if (score >= 10000) {
                return false;
            } else {
                return true;
            }
        }
    }

    const userName = useSelector((state: RootState) => state.login.user?.account.userId || 'User');

    return (
        <div className="">
            {/*<div className="bg-quest-bg-color h-full text-white px-32 py-16 h-fit">*/}
            {/*    <CubeTop className="text-gray-400 h-32 w-auto mx-auto mt-20"/>*/}
            {/*    <div className="font-bold text-gray-400 mx-auto text-center">Nothing to collect yet</div>*/}
            {/*</div>*/}
            <div className="flex justify-between mb-8 text-white">
                <h2 className="text-2xl font-medium">Mints</h2>
                <div className="flex items-center space-x-2">
                    <InfoCircledIcon height="16" width="16" />
                    <span className="font-medium text-xs">
                        Find out more about mints
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                {badgesData.map(badge => (
                    <YourBadge
                        key={badge.id}
                        username={userName}
                        date={new Date().toDateString()}
                        xpAmount={badge.xpAmount}
                        badgeTitle={badge.badgeTitle}
                        badgeSubtitle={badge.badgeSubtitle}
                        isLocked={getBadgeIsLocked(badge.id)}
                        icon={badge.id}
                    />
                ))}


            </div>
        </div>
    );
}

export default Badges;