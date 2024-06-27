// import { Flex } from "@radix-ui/themes";
import {CSSProperties, FC, useState} from "react";
import Avatar from '../assets/avatars/avatar_2.svg';
import { InfoCircledIcon } from "@radix-ui/react-icons";

import * as Dialog from '@radix-ui/react-dialog';
import XPCalImage from '../assets/xp_cal.png';
// import YourBadge from "./YourBadge.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {getNextBadgeXp} from "../utils/badgeHelpers.ts";
// import {useNewBadgeAcknowledge} from "../hooks/useNewBadgeAcknowledge.ts";
// import {Bounce, toast, ToastContainer} from "react-toastify";
import {PacmanLoader} from "react-spinners";
// import {useBadgeInit} from "../hooks/useBadgeInit.ts";
// import {useBadgeOk} from "../hooks/useBadgeOk.ts";
// import {ethers} from "ethers";
// import CustomMintRequest from "../common/bonusblock_api/CustomMintRequest.ts";
// import {callMintFunction} from "../smart_contracts/KasuNftMinter.ts";
// import NoAccountsError from "../common/errors/NoAccountsError.ts";
// import MintingError from "../common/errors/MintingError.ts";
import { Button } from "./Button.tsx";

export interface LeaderBoardStatsProps {
    rank: number;
    xpNumber: number;
    completedMissionCount: number;
    yourTopDApp: string;
    newBadgeDialogOpen: boolean;
}

const override: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    margin: '0 auto',
    zIndex: 1000,
};

const LeaderBoardStats: FC<LeaderBoardStatsProps> = (props) => {

    const { rank, xpNumber, completedMissionCount, yourTopDApp } = props;

    // const xpNumber = 10000;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [loading] = useState<boolean>(false);
    // const [mintBadgeDialogOpen, setMintBadgeDialogOpen] = useState(newBadgeDialogOpen);
    const userName = useSelector((state: RootState) => state.login.user?.account.userId || 'User');

/*     const walletAddress = useSelector((state: RootState) => state.login.user?.account.wallets[0].address || 'invalid');


    const { acknowledgeNewBadge } = useNewBadgeAcknowledge();
    const { badgeInit } = useBadgeInit();
    const { badgeOk } = useBadgeOk();

    const newBadgeAcknowledgeHandler = () => {
        acknowledgeNewBadge();
    }

    // TODO: move to helper
    const calculateMessageHash = (cmr: CustomMintRequest) => {
        const btyes = ethers.toUtf8Bytes(cmr.nonce);
        return ethers.keccak256(btyes);
    } */

 /*    const badgeMintHandler = async () => {
        setLoading(true);

        const nonce = ethers.randomBytes(32).toString();
        const customMintRequest = new CustomMintRequest(
            "test",
            nonce,
            walletAddress,
        );

        const signatureFromApi = await badgeInit(customMintRequest);
        const hash = calculateMessageHash(customMintRequest);

        try {
            await callMintFunction(hash, signatureFromApi);
            await badgeOk();

            setLoading && setLoading(false);
            toast('NFT minted successfully!', {
                containerId: "",
                transition: Bounce,
                autoClose: 5000,
                position: "top-center",
                type: 'success',
            })
        } catch (error) {
            if (error instanceof NoAccountsError || error instanceof MintingError) {
                console.error('Blockchain-related error:', error.message);
                toast('Error minting NFT', {
                    containerId: "leaderboard",
                    transition: Bounce,
                    autoClose: 5000,
                    position: "top-center",
                    type: 'error',
                })
            } else {
                // api errors
                console.error('Error minting NFT:', error);
                toast('Error minting NFT', {
                    containerId: "leaderboard",
                    transition: Bounce,
                    autoClose: 5000,
                    position: "top-center",
                    type: 'error',
                })
            }
        } finally {
            setLoading && setLoading(false);
        }


    } */

/*     const getBadgeTitle = () => {
        if (xpNumber < 2000) {
            return 'A NEW JOURNEY';
        }

        if (xpNumber < 5000) {
            return 'PROGRESS PIONEER';
        }

        if (xpNumber < 10000) {
            return 'RISING STAR';
        }

        return 'THE ASCENDANT';
    }

    const getBadgeXp = () => {
        if (xpNumber < 2000) {
            return 1000;
        }

        if (xpNumber < 5000) {
            return 2000;
        }

        if (xpNumber < 10000) {
            return 5000;
        }

        return 10000;
    } */

    const color = "#F5BF5B";

    return (
        <div className="grid grid-cols gap-6">
            <PacmanLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <div className="flex flex-row items-center space-x-3">
                <Avatar className="w-12 h-12 rounded-full" />
                <p className="text-2xl text-gold font-medium">
                    {userName}
                </p>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <p className="text-white mb-1">
                        Your rank
                    </p>
                    <span className="font-medium text-[28px]/[28px] text-white">
                        # {rank}
                    </span>
                </div>
                <div className="basis-1/2">
                    <p className="text-white mb-1">
                        Your xp
                    </p>
                    <span className="font-medium text-[28px]/[28px] text-white">
                        {xpNumber.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <p className="text-white mb-1">
                        Completed Missions
                    </p>
                    <span className="font-medium text-[28px]/[28px] text-white">
                        {completedMissionCount.toLocaleString()}
                    </span>
                </div>
                <div className="basis-1/2">
                    <p className="text-white mb-1">
                        Your top DApp
                    </p>
                    <span className="font-bold text-[28px]/[28px] text-white">
                        {yourTopDApp}
                    </span>
                </div>
            </div>
            <div className="flex flex-row items-center mt-14 text-sm space-x-1.5 text-blue">
                <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Trigger asChild>
                        <button><InfoCircledIcon height="16" width="16"/></button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
                        <div
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm bg-nav-bg-color rounded-lg p-6 w-full">
                            <Dialog.Title className="text-white font-bold text-center">How calculations work?</Dialog.Title>
                            <img src={XPCalImage} alt="XP Calculation" className="my-4 w-full max-w-xs mx-auto"/>
                            <div className="text-sm break-words text-white">
                                Accomplish missions to earn <span className="font-bold text-gold">Community XP</span>, which will elevate your rank as you gain more experience.
                            </div>

                            <div className="text-sm break-words mt-4 text-white">
                                <span className="font-bold text-gold">Community XP</span> serves the additional purpose of unlocking various community badges!
                            </div>
                            <div className="mt-4 text-center">
                                <Dialog.Close className="px-4 text-gold border border-gold rounded h-9">
                                    <button>Close</button>
                                </Dialog.Close>
                            </div>
                        </div>
                    </Dialog.Portal>
                </Dialog.Root>
                <span className="">Repeating missions allows you to accumulate Community XP</span>
            </div>

            <div className="flex justify-between gap-6">
                <div>
                    <p className="text-sm text-white mb-1">
                        Mint Collection Progress
                    </p>
                    <span className="text-blue text-sm font-medium">
                        {xpNumber.toLocaleString()} / {getNextBadgeXp(xpNumber).toLocaleString()} XP
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="black" isLarge>
                        Share mint
                    </Button>
                    <Button variant="blue" isLarge>
                        Mint badge
                    </Button>
                </div>
                {/* <div className="flex basis-1/2">
                    <Flex align="center" gap="3">
                        <Button className="absolute box-border h-8 w-25 p-4 border py-1 px-1 rounded full m-20">
                            <Dialog.Root open={mintBadgeDialogOpen} onOpenChange={setMintBadgeDialogOpen}>
                                {mintBadgeDialogOpen &&
                                    <Dialog.Trigger asChild>
                                        <button disabled className="border border-gold text-gold text-xs p-2 rounded-lg">Mint Badge</button>
                                    </Dialog.Trigger>
                                }

                                <Dialog.Portal>
                                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>
                                    <div
                                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm bg-project-list-bg-color rounded-lg p-6">

                                        <YourBadge
                                            username={userName}
                                            date={new Date().toDateString()}
                                            xpAmount={getBadgeXp()}
                                            badgeTitle={getBadgeTitle()}
                                            badgeSubtitle="Faculty group"
                                            shareBadge={false}
                                        />

                                        <div className="break-words text-center mt-8 text-white">
                                            Congratulations!.
                                        </div>
                                        <div className="text-sm break-words text-center text-white">
                                            You have unlocked a new mint badge.
                                        </div>

                                        <div className="mt-4 text-center">
                                            <Dialog.Close className="px-4 mx-2 text-gold border border-gold rounded h-9 w-20">
                                                <button onClick={() => newBadgeAcknowledgeHandler()}>Close</button>
                                            </Dialog.Close>

                                            <Dialog.Close className="px-4 mx-2 text-white bg-gold rounded h-9 w-20">
                                                <button onClick={() => badgeMintHandler()}>Mint</button>
                                            </Dialog.Close>
                                        </div>
                                    </div>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </Button>
                    </Flex>
                </div> */}
            </div>
        </div>
    );
}

export default LeaderBoardStats;
