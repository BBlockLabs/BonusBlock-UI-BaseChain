import { FC, useState } from "react";
import YourBadge from "./YourBadge.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";
// import CubeTop from "../assets/svg/cube-top.svg";
import * as Dialog from '@radix-ui/react-dialog';
import GemBadge from "./GemBadge.tsx";
import { Button } from "./Button.tsx";

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

    const [dialogOpen, setDialogOpen] = useState(false);

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
                <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Trigger asChild>
                        <button className="flex items-center space-x-2">
                            <InfoCircledIcon height="16" width="16" />
                            <span className="font-medium text-xs">
                                Find out more about mints
                            </span>
                        </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-90"/>
                        <div
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[360px] bg-leaderboardIcon rounded-2xl p-8 w-full"
                        >
                            <div className={`max-w-sm mx-auto w-[292px]`}>
                                <div className="card-shadow px-2 pt-2 pb-5 bg-cardBg rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <div className="text-[10px]/[16px] font-semibold text-white">Username</div>
                                        <div className="text-[10px]/[16px] text-white">Sep 11, 2024</div>
                                    </div>
                                    <div className="flex flex-col items-center my-4 mt-12 mb-[60px] rounded-lg">
                                        <GemBadge gemNumber={0} xpNumber={1000} gemBgColor="bg-black" />
                                    </div>
                                    <div className="text-center mb-[22px]">
                                        <h3 className="text-xl/[23px] font-medium text-white tracking-[-0.01em] mb-2.5">The Staker</h3>
                                        <p className="text-[8px]/[8px] tracking-[-0.01em] text-white">Base Chain</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-6 text-lg text-white text-center">Congratulations!</h3>
                            <p className="mt-2 text-sm text-accentGrayText text-center">You have unlocked a new mint badge.</p>
                            <div className="mt-8 text-center space-x-2">
                                <Button variant="black" isLarge onClick={() => setDialogOpen(false)}>
                                    Share mint
                                </Button>
                                <Button variant="blue" isLarge onClick={() => setDialogOpen(false)}>
                                    Mint badge
                                </Button>
                            </div>
                        </div>
                    </Dialog.Portal>
                </Dialog.Root>
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
