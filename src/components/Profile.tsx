import { useCallback } from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import { CopyIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useLogout } from "../hooks/useLogout.ts";
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useWalletContext, useEVMAddress } from "@coinbase/waas-sdk-web-react";
import Pencil from '../assets/svg/pencil.svg';
import TwitterIcon from '../assets/socials/twitter_X.svg';
import TelegramIcon from '../assets/socials/telegram.svg';
import DiscordIcon from '../assets/socials/discord.svg';
import RedditIcon from '../assets/socials/reddit.svg';
import Cash from '../assets/svg/cash.svg';
import LogOut from '../assets/svg/logout.svg';

const Profile = () => {
    const { performLogout } = useLogout();

    const userId = useSelector((state: RootState) => state.login.user?.account.userId || {});
    const referralUrl = `${window.location.origin}?r=${userId}`;
    // const shortenedReferralUrl = referralUrl.slice(0, 6) + '...' + referralUrl.slice(-6);

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(referralUrl).then(() => {
            console.log("Referral URL copied to clipboard!");
            toast('Referral URL copied to clipboard!', {
                containerId: 'ref-link',
                transition: Bounce,
                autoClose: 5000,
                position: "top-center",
                type: 'success',
            })
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    }, [referralUrl]);

    const logoutHandler = async  () => {
        performLogout();
    };

    return (
        <div className="flex flex-col justify-between px-6 py-5">
            <ToastContainer containerId="ref-link"/>
            <div className="flex flex-col items-center justify-between mb-5">
                <img src={ProfileImage} alt="Profile" className="w-[250px] h-[250px]" />
                <div className="flex items-center gap-2 mt-4">
                    <p className="text-blue text-[20px]/[30px] font-medium">userId</p>
                    <button onClick={() => {}} aria-label="Edit profile">
                        <Pencil className="h-5 w-5 text-white" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col bg-black/70 text-start">
                <p className="mb-3 text-white font-medium">Referral Link</p>
                <div className="flex justify-between gap-2 border border-grayscaleWhite rounded-lg px-4 py-2">
                    <p
                        className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-grayscaleWhite text-sm font-medium"
                    >
                        {referralUrl}
                    </p>
                    <button onClick={copyToClipboard} aria-label="Copy URL">
                        <CopyIcon className="h-4 w-4 text-white" />
                    </button>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    <span className="text-sm/4 text-grayscaleDark font-medium tracking-[-0.01em]">
                        On-chain transactions
                    </span>
                    <span className="text-[40px]/[36px] text-gold font-medium tracking-[-0.03em]">152</span>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    <span className="text-sm/4 text-grayscaleDark font-medium tracking-[-0.01em]">Ranking</span>
                    <span className="text-[40px]/[36px] text-gold font-medium tracking-[-0.03em]">#5,612</span>
                </div>
                <p className="mt-6 mb-4 text-white font-medium">Social Media</p>
                <div className="flex flex-col gap-2">
                    <button className="socials-shadow flex items-center justify-between py-2 px-3 border-[0.5px] border-white rounded-lg">
                        <span className="text-white">Connect Twitter</span>
                        <TwitterIcon className="h-5 w-5 text-white" />
                    </button>
                    <button className="socials-shadow flex items-center justify-between py-2 px-3 border-[0.5px] border-white rounded-lg">
                        <span className="text-white">Connect Telegram</span>
                        <TelegramIcon className="h-5 w-5 text-white" />
                    </button>
                    <button className="socials-shadow flex items-center justify-between py-2 px-3 border-[0.5px] border-white rounded-lg">
                        <span className="text-white">Connect Discord</span>
                        <DiscordIcon className="h-5 w-5 text-white" />
                    </button>
                    <button className="socials-shadow flex items-center justify-between py-2 px-3 border-[0.5px] border-white rounded-lg">
                        <span className="text-white">Connect Reddit</span>
                        <RedditIcon className="h-5 w-5 text-white" />
                    </button>
                </div>
                <button className="self-center flex items-center gap-[10px] mt-5 px-[19px] py-1.5 border-[0.4px] border-white rounded-lg">
                    <Cash className="h-6 w-6" />
                    <span className="text-sm text-white font-medium">Claim Pending Rewards</span>
                </button>
                <button onClick={logoutHandler} className="self-center mt-5">
                    <LogOut className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

export default Profile;
