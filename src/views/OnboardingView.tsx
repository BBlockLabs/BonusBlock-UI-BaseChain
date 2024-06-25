import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store.ts";
import { useEffect, useState } from "react";
import XionLogo from '../assets/logo/BaseChain.svg';
import CameraIcon from '../assets/svg/camera.svg';
import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";
import ProfileImg from '../assets/images/profile.jpg';

const OnboardingView = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);

    const [inviteCode, setInviteCode] = useState('');
    const [userName, setUserName] = useState('');
    const [isVerifed, setIsVerifed] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/landing');
        }
    }, [isAuthenticated, navigate]);

    // const handleLogin = () => {
    //     navigate('/login');
    // }

    const handleFinishProfile = () => {
        navigate('/home');
    }

    return (
        <div
            className="flex flex-col p-4 pb-16 lg:px-10 lg:py-7 justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-landing-mobile lg:bg-landing"
        >
            <div>
                <XionLogo className="h-8 lg:h-6 w-auto"/>
            </div>
            {isVerifed ? (
                <div className="mt-[54px] flex flex-col flex-1 md:justify-center items-center m-auto">
                    <h2 className="mb-6 text-[40px]/[44px] text-white font-light text-center tracking-[-0.03em] max-w-[900px]">
                        Setup your profile
                    </h2>
                    <p className="mb-8 text-lg text-center text-white-negative tracking-[-0.01em] max-w-[670px]">
                        You can update your profile picture and username now. Please note that your profile is public and you won’t be able to edit it later.
                    </p>
                    <p className="text-sm text-white underline uppercase">Skip for now</p>
                    <div className="relative mt-12">
                        <img
                            src={ProfileImg}
                            alt="Profile picture"
                            className="w-[106px] rounded-full"
                        />
                        <div className="absolute bottom-0 w-full h-[54px] flex items-center justify-center bg-black/50 rounded-b-full overflow-hidden">
                            <CameraIcon className="h-6 w-auto cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full md:max-w-[385px] flex flex-col mt-[46px]">
                        <Input
                            label="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <div className="flex mt-20 lg:mb-0 w-full">
                            <Button
                                type="button"
                                className="w-full h-12 uppercase hover:bg-transparent hover:border-white hover:text-white"
                                onClick={handleFinishProfile}
                            >
                                Let's go
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="pt-[120px] flex flex-col flex-1 justify-between md:justify-center items-center m-auto">
                    <div>
                        <h2 className="text-[40px]/[44px] text-white font-light text-center tracking-[-0.03em] max-w-[900px]">
                            Welcome onboard!
                        </h2>
                        <h2 className="mb-6 text-[40px]/[44px] text-white font-light text-center tracking-[-0.03em] max-w-[900px]">
                            Input your invite code
                        </h2>
                        <p className="mb-8 text-lg text-center text-white-negative tracking-[-0.01em] max-w-[670px]">
                            Please input your invite code
                        </p>
                    </div>
                    <div className="w-full flex flex-col mt-[72px]">
                        <Input
                            placeholder="Invite Code"
                            value={inviteCode}
                            onChange={(e) => setInviteCode(e.target.value)}
                        />
                        <div className="flex mt-12 lg:mb-0 w-full">
                            <Button
                                type="button"
                                className="w-full h-12 uppercase hover:bg-transparent hover:border-white hover:text-white"
                                onClick={() => setIsVerifed(true)}
                            >
                                Next
                            </Button>
                        </div>
                        <div className="w-full flex justify-between mt-10">
                            <span className="text-white text-sm tracking-[-0.01em]">
                                Don't have access code?
                            </span>
                            <span className="text-white text-sm underline">
                                Join XION discord
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OnboardingView;
