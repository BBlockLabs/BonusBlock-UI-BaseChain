import PageFooter from "../components/PageFooter.tsx";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { RootState } from "../store/store.ts";
// import { useEffect } from "react";
import XionLogo from '../assets/logo/Base_BB.svg';
import CoinFalling from '../assets/svg/coinFalling.svg';
import { SmartWalletLoginButton } from "@/components/SmartWalletButton.tsx";
import InviteCodeModal from "@/components/InviteCodeModal.tsx";
import { useState } from "react";

const tags = ['Memes', 'RWA', 'DeFi', 'NFTs'];

const LandingView = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);

    /* useEffect(() => {
        if (isAuthenticated) {
            navigate('/landing');
        }
    }, [isAuthenticated, navigate]); */

    const handleLogin = () => {
        navigate('/quests');
    }

    return (
        <div
            className="flex flex-col p-4 px-[54px] lg:py-7 min-h-screen bg-cover bg-center bg-no-repeat bg-landing-mobile lg:bg-landing"
        >
            <div>
                <XionLogo className="h-[44px] w-auto"/>
            </div>
            <div className="flex flex-col justify-center items-start mt-[205px] max-w-[539px] ml-2.5">
                <h1 className="text-[96px]/[91px] text-white uppercase">
                    <span className="text-gold">Get</span> started
                </h1>
                <p className="mt-12 mb-[89px] text-[32px]/[34px] font-medium text-white max-w-[454px]">
                    Contribute. Earn. Win. Ape into Base with Bonus Block.
                </p>
                <SmartWalletLoginButton onClick={handleLogin} />
            </div>
            <div className="flex gap-[30px] py-[29px] mt-[69px]">
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        type="button"
                        className="w-[150px] h-[62px] text-white text-lg/[34px] font-medium border-white bg-tagBtnBg rounded-lg px-[30px] py-[15px]"
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="flex gap-6 py-[30px] px-5 bg-white/10 rounded-2xl">
                <div className="card-shadow flex flex-col gap-[5px] p-[33px] pl-[19px] rounded-xl bg-cardBg">
                    <div className="flex justify-between items-center gap-7">
                        <span className="text-[70px]/[34px] text-cardText">Claim</span>
                        <CoinFalling />
                    </div>
                    <span className="text-[32px]/[34px] text-cardText">
                        Start earning now, engaging directly with Base Chain
                    </span>
                </div>
                <div className="card-shadow flex flex-col gap-[5px] p-[33px] pl-[19px] rounded-xl bg-cardBg">
                    <div className="flex justify-between items-center gap-7">
                        <span className="text-[70px]/[34px] text-cardText">Verify</span>
                        <CoinFalling />
                    </div>
                    <span className="text-[32px]/[34px] text-cardText">
                        Start earning now, engaging directly with Base Chain
                    </span>
                </div>
                <div className="card-shadow flex flex-col gap-[5px] p-[33px] pl-[19px] rounded-xl bg-cardBg">
                    <div className="flex justify-between items-center gap-7">
                        <span className="text-[70px]/[34px] text-cardText">Join</span>
                        <CoinFalling />
                    </div>
                    <span className="text-[32px]/[34px] text-cardText">
                        Start earning now, engaging directly with Base Chain
                    </span>
                </div>
                <div className="card-shadow flex flex-col gap-[5px] p-[33px] pl-[19px] rounded-xl bg-cardBg">
                    <div className="flex justify-between items-center gap-7">
                        <span className="text-[70px]/[34px] text-cardText">Earn</span>
                        <CoinFalling />
                    </div>
                    <span className="text-[32px]/[34px] text-cardText">
                        Start earning now, engaging directly with Base Chain
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center mt-10 py-[38px]">
                <div className="flex flex-col gap-8 text-white">
                    <p className="text-[95px]/[34px]">$1M</p>
                    <span className="text-lg">Rewards Avilable</span>
                </div>
                <div className="flex flex-col gap-8 text-white">
                    <p className="text-[95px]/[34px]">$1228K</p>
                    <span className="text-lg">Missions Completed</span>
                </div>
                <div className="flex flex-col gap-8 text-white">
                    <p className="text-[95px]/[34px]">$520K</p>
                    <span className="text-lg">Already Distributed</span>
                </div>
                <div className="flex flex-col gap-8 text-white">
                    <p className="text-[95px]/[34px]">$32</p>
                    <span className="text-lg">Best user month</span>
                </div>
            </div>
            <div className="self-center mt-2.5 mb-[60px]">
                <SmartWalletLoginButton onClick={handleLogin} />
            </div>
            <PageFooter backgroundColor="bg-transparent" textColor="text-gray-400" iconColor="text-icon" />
            <InviteCodeModal
                open={isModalOpen}
                onOpenChange={() => setIsModalOpen(!isModalOpen)}
            />
        </div>
    );
}

export default LandingView;
