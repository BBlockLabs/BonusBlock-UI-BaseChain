import Layout from "../components/Layout.tsx";
import Cube from '../assets/svg/baseChainCube.svg';
import Avatar from '../assets/avatars/avatar_2.svg';
import Triangle from '../assets/svg/triangleRounded.svg';
import Copy from '../assets/svg/copy.svg';
import { Button } from "@/components/Button.tsx";

const StakingView = () => {
    return (
        <Layout footerBgColor="bg-cardBg">
            <div className="flex flex-col items-center mt-[96px]">
                <h1
                    className="mb-12 text-[96px]/[91px] text-white uppercase"
                >
                    <span className="text-gold">$Bonus</span> Staking
                </h1>
                <p className="mb-4 text-2xl text-white">
                    Participate in governance and earn rewards
                </p>
                <button
                    className="w-[263px] mb-[66px] px-6 py-4 text-black text-lg font-medium border-[0.4px] border-white bg-gold hover:bg-goldFaded rounded-[4px]"
                >
                    Get $BONUS
                </button>
                <p className="mb-4 text-white text-2xl">Total $BONUS Staked</p>
                <div className="flex items-center gap-6">
                    <Cube />
                    <span className="text-white text-[32px]/[34px] font-medium">51095</span>
                </div>
            </div>
            <div
                className="card-shadow flex flex-col items-start mt-[96px] px-7 py-10 bg-statsBg rounded-2xl"
            >
                <div className="flex items-center justify-start gap-2">
                    <Avatar className="h-7 w-7" />
                    <p className="text-gold text-2xl font-medium">base4211...024</p>
                </div>
                <div className="flex justify-start gap-7 mt-7">
                    <div className="flex flex-col items-start">
                        <p className="text-white">Staked $BONUS</p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue text-[28px]/[28px] font-medium">
                                522,1
                            </p>
                            <Triangle className="h-4 w-auto" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-white">
                            Multiplier “XYZ" based on how many is staked
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue text-[28px]/[28px] font-medium">
                                0,05
                            </p>
                            <Triangle className="h-4 w-auto" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <div className="flex flex-col items-start">
                        <p className="text-white">Invite Codes Received</p>
                        <p className="text-white text-[28px]/[28px] font-medium">
                            5
                        </p>
                    </div>
                    <Button isLarge>
                        Stake
                    </Button>
                </div>
            </div>
            <div
                className="flex flex-col items-start mt-10 px-7 py-[22px] mb-[100px] bg-statsBg rounded-2xl"
            >
                <p className="text-gold text-2xl font-medium">My Referrals</p>
                <div className="flex justify-start gap-7 mt-7">
                    <div className="flex flex-col items-start">
                        <p className="text-white">Total</p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue text-[28px]/[28px] font-medium">
                                41
                            </p>
                            <Triangle className="h-4 w-auto" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-white">This month</p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue text-[28px]/[28px] font-medium">
                                12
                            </p>
                            <Triangle className="h-4 w-auto" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-white">Multiplier</p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue text-[28px]/[28px] font-medium">
                                0.05
                            </p>
                            <Triangle className="h-4 w-auto" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start mt-6">
                    <p className="text-white">Invite Codes Received</p>
                    <p className="text-white text-[28px]/[28px] font-medium">
                        5
                    </p>
                </div>
                <div className="flex flex-col items-start mt-6">
                    <p className="text-white">My Referral Code</p>
                    <div className="flex items-center gap-1">
                        <p className="text-white text-[28px]/[28px] font-medium">
                            41521
                        </p>
                        <Copy className="h-6 w-auto" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default StakingView;
