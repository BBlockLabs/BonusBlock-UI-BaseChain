import Layout from "../components/Layout.tsx";
import Cube from '../assets/svg/baseChainCube.svg';
import Avatar from '../assets/avatars/avatar_2.svg';
import Triangle from '../assets/svg/triangleRounded.svg';
import Copy from '../assets/svg/copy.svg';
import { Button } from "@/components/Button.tsx";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store.ts";
import { useSelector } from "react-redux";
import { truncate } from "@/lib/utils.ts";

const bondingAbi = [{"inputs":[{"internalType":"address","name":"_bbTokenAddress","type":"address"},{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"uint256","name":"_bbLockTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalStaked","type":"uint256"}],"name":"TokensStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalUnstaked","type":"uint256"}],"name":"TokensUnstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"unlockTime","type":"uint256"}],"name":"UnstakeInitiated","type":"event"},{"inputs":[],"name":"bbLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bbToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeAmount","type":"uint256"}],"name":"depositTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initiateUnlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"bbTokens","type":"uint256"},{"internalType":"uint256","name":"bbUnlockTime","type":"uint256"},{"internalType":"bool","name":"unlockInitiated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUnbonding","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bbLockTime","type":"uint256"}],"name":"updateBBTokenLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const bondingAddress = '0x7f7d7806F4EB90D63B0b278DAf32a2dB2C2001bD'
const web3 = new Web3('wss://base-rpc.publicnode.com')
const contract = new web3.eth.Contract(bondingAbi, bondingAddress)

const StakingView = () => {
    const [bondedAmount, setBondedAmount] = useState<string>();
    const [totalBondedAmount, setTotalBondedAmount] = useState<string>();

    const userAccount = useSelector((state: RootState) => state.login.user?.account);
    const baseAddress = userAccount ? userAccount.wallets.find(w=>w.network === 'Base')?.address || '' : ''

    const getBondedAmount = async () => {
        if (!userAccount) return;
        try {
            if (!baseAddress) throw 'Base Wallet not Found'
            const result: any = await contract.methods.stakes(baseAddress).call();
            const decimal = web3.utils.fromWei(result.bbTokens, 18);
            setBondedAmount(parseFloat(decimal).toLocaleString(undefined, { maximumFractionDigits: 4 }));
        } catch (err: any) {
            console.error(err)
        }
    }

    const getTotalBondedAmount = async () => {
        try {
            const result: any = await contract.methods.totalStaked().call();
            const decimal = web3.utils.fromWei(result, 18);
            setTotalBondedAmount(parseFloat(decimal).toLocaleString(undefined, { maximumFractionDigits: 0 }));
        } catch (err: any) {
            console.error(err)
        }
    }

    useEffect(()=>{
        getBondedAmount();
        getTotalBondedAmount();
    }, [userAccount])

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
                <a
                    href='https://bonusblock.io'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-[263px] mb-[66px] px-6 py-4 text-black text-lg font-medium border-[0.4px] border-white bg-gold hover:bg-goldFaded rounded-[4px] text-center"
                >
                    Get $BONUS
                </a>
                <p className="mb-4 text-white text-2xl">Total $BONUS Bonded</p>
                <div className="flex items-center gap-6">
                    <Cube />
                    <span className="text-white text-[32px]/[34px] font-medium">{totalBondedAmount}</span>
                </div>
            </div>
            <div
                className="card-shadow flex flex-col items-start mt-[96px] px-7 py-10 bg-statsBg rounded-2xl"
            >
                <div className="flex items-center justify-start gap-2">
                    <Avatar className="h-7 w-7" />
                    <p className="text-gold text-2xl font-medium">{truncate(baseAddress)}</p>
                </div>
                <div className="flex justify-start gap-7 mt-7">
                    <div className="flex flex-col items-start">
                        <p className="text-white">Bonded $BONUS</p>
                        <div className="flex items-center gap-2">
                            <p className="text-blue text-[28px]/[28px] font-medium">
                                {bondedAmount}
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
                    {/* This should really be an anchor */}
                    <Button isLarge onClick={()=>window.open('https://app.bonusblock.io/dashboard/bonus', '_blank')}>
                        Bond
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
