import { FC, useCallback, useState } from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import { ChevronDownIcon, CopyIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useLogout } from "../hooks/useLogout.ts";
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '../hooks/useMediaQuery.tsx';
import { Button } from './Button.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from './Modal.tsx';
import { useWalletContext, useEVMAddress } from "@coinbase/waas-sdk-web-react";


const navLinkStyles = 'text-[32px]/[38px] text-white font-light uppercase tracking-[-0.02em]';

const Profile:FC = () => {
    const { performLogout } = useLogout();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 960px)');

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userId = useSelector((state: RootState) => state.login.user?.account.userId || {});
    const referralUrl = `${window.location.origin}?r=${userId}`;
    const shortenedReferralUrl = referralUrl.slice(0, 6) + '...' + referralUrl.slice(-6);

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

    const copyInviteCode = () => {};

    const logoutHandler = async  () => {
        performLogout();
    }

    const navigateToProfile = () => {
        navigate('/profile');
    }

    return (
        <>
            <div className="flex flex-col justify-between md:px-[64px]">
                <ToastContainer containerId="ref-link"/>
                <div className="flex flex-col p-6 md:p-0 border-b border-white/10 md:border-none bg-black md:bg-inherit">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-5 items-center">
                            <img src={ProfileImage} alt="Mission Icon" className="rounded-full max-w-[64px]"/>
                            <div className="flex flex-col">
                                <p className="text-white text-2xl/7 font-bold">userId</p>
                                <div className="flex gap-4">
                                    <p className="text-g500 text-sm">{shortenedReferralUrl}</p>
                                    <button onClick={copyToClipboard} aria-label="Copy URL">
                                        <CopyIcon className="h-4 w-4 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isSmallScreen && (
                            <button onClick={() => setIsProfileOpen(!isProfileOpen)} aria-label="Logout">
                                <ChevronDownIcon className={`h-6 w-6 text-white ${isProfileOpen && 'rotate-180'}`} />
                            </button>
                        )}
                    </div>
                    {isSmallScreen && isProfileOpen && (
                        <div className="flex flex-col justify-between mt-6">
                            <div className="w-full flex flex-col gap-2 justify-center items-center py-5 bg-electric-lime/10 rounded-2xl">
                                <p className="text-[32px]/[32px] text-electric-lime font-bold uppercase tracking-[-0.03em]">
                                    34,986 pts
                                </p>
                                <p className="text-[16px]/[24px] text-electric-lime/70 tracking-[-0.01em]">
                                    #172645
                                </p>
                            </div>
                            <div className="flex gap-4 justify-between mt-6 h-[64px] md:h-auto ">
                                <Button
                                    variant="error"
                                    className="text-center !px-0 !flex-1"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Logout
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="text-center !px-0 !flex-1"
                                    onClick={navigateToProfile}
                                >
                                    View profile
                                </Button>
                            </div>
                            <div className="invite-code-background flex flex-col px-4 py-3 mt-6 items-start rounded-2xl">
                                <span className="text-sm text-g500 tracking-negative1">
                                    Invite friends with the code
                                </span>
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-2xl/9 text-white font-bold tracking-negative2">
                                        z97hey76
                                    </span>
                                    <button onClick={copyInviteCode} aria-label="Copy invite code">
                                        <CopyIcon className="h-4 w-auto text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {!isSmallScreen && (
                        <>
                            <div className="flex gap-4 justify-between mt-10">
                                <Button
                                    variant="error"
                                    className="text-center !px-0 !flex-1"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Logout
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="text-center !px-0 !flex-1"
                                    onClick={navigateToProfile}
                                >
                                    Profile
                                </Button>
                            </div>
                            <div className="invite-code-background flex flex-col px-4 py-3 mt-10 items-start rounded-2xl">
                                <span className="text-sm text-g500 tracking-negative1">
                                    Invite friends with the code
                                </span>
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-2xl/9 text-white font-bold tracking-negative2">
                                        z97hey76
                                    </span>
                                    <button onClick={copyInviteCode} aria-label="Copy invite code">
                                        <CopyIcon className="h-4 w-auto text-white" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between mt-10 pb-5 border-b border-white/10">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Bridged (XION)</span>
                                    <span className="text-[40px]/[36px] text-white font-bold tracking-[-0.03em]">1,827</span>
                                    <span className="text-base text-white/70 tracking-[-0.01em]">$18,276</span>
                                </div>
                                <button
                                    className="bg-g900 text-white capitalize !rounded-2xl !px-5 !py-1.5 w-auto h-auto self-end"
                                    onClick={() => {}}
                                >
                                    Stake
                                </button>
                            </div>
                            <div className="flex flex-col gap-3 mt-5 pb-5 border-b border-white/10">
                                <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Staged (XION)</span>
                                <span className="text-[40px]/[36px] text-white font-bold tracking-[-0.03em]">1,827</span>
                                <span className="text-base text-white/70 tracking-[-0.01em]">$18,276</span>
                            </div>
                            <div className="flex flex-col gap-3 mt-5 pb-5 border-b border-white/10">
                                <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Multiplier</span>
                                <span className="text-[40px]/[36px] text-white font-bold tracking-[-0.03em]">8x</span>
                            </div>
                            <div className="flex flex-col gap-3 mt-5 pb-5">
                                <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Points</span>
                                <span className="text-[40px]/[36px] text-electric-lime tracking-[-0.03em]">34,986</span>
                                <span className="text-base text-electric-lime/70 tracking-[-0.01em]">#172645</span>
                            </div>
                        </>
                    )}
                </div>
                {isSmallScreen && (
                    <div className="flex flex-col gap-8 justify-center items-center mt-16 mb-4">
                            <NavLink to="/home" className={navLinkStyles}>Home</NavLink>
                            <NavLink to="/bridge" className={navLinkStyles}>Bridge</NavLink>
                            <NavLink to="/stake" className={navLinkStyles}>Stake</NavLink>
                            <NavLink to="/leaderboard" className={navLinkStyles}>Leaderboard</NavLink>
                            <NavLink to="/info" className={navLinkStyles}>Info</NavLink>
                    </div>
                )}
            </div>
            <Modal
                open={isModalOpen}
                onOpenChange={() => setIsModalOpen(!isModalOpen)}
                title="Log out"
                description="Are you sure you want to log out?"
            >
                <Button
                    type="button"
                    variant="error"
                    className="w-full uppercase"
                    onClick={logoutHandler}
                >
                    Log out
                </Button>
            </Modal>
        </>
    );
}

export default Profile;
