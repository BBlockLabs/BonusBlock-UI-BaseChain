import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store.ts";
import { useEffect, useState } from "react";
import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";
import XionLogo from '../assets/logo/xion.svg';

const LoginView = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/landing');
        }
    }, [isAuthenticated, navigate]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleLogin = () => {
        navigate('/onboarding');
    };

    return (
        <div
            className="login-view relative md:flex pt-[120px] md:px-10 md:py-7 justify-between min-h-screen"
        >
            <div className="flex flex-col justify-center items-center px-10 py-12 md:p-[88px] bg-black/25 border-g500 rounded-[48px] md:w-[560px] m-auto">
                <h2 className="mb-3 text-[32px]/[38px] text-white font-light tracking-[-0.02em] uppercase">
                    Welcome
                </h2>
                <p className="mb-12 md:mb-14 text-sm text-center text-white/50 tracking-[-0.01em] max-w-[670px]">
                    Log in or sign up with your email
                </p>
                <Input label="Email" value={email} onChange={handleEmailChange} />
                <div className="flex mt-12 md:mb-0 w-full">
                    <Button
                        type="button"
                        className="w-full text-sm uppercase hover:bg-transparent hover:border-white hover:text-white"
                        onClick={handleLogin}
                    >
                        Log in / sign up
                    </Button>
                </div>
            </div>

            <footer className="fixed start-4 bottom-10 end-4 md:start-10 md:bottom-6 md:end-10 flex flex-col gap-6 md:flex-row justify-between items-center md:items-end">
                <span className="text-g200 text-[10px]/4 text-center">
                    By continuing, you agree to and acknowledge that you have read and understand the <strong className="text-white">Disclaimer</strong>.
                </span>
                <div className="flex items-end md:items-end gap-2">
                    <span className="md:mb-2 text-variant text-sm tracking-[-0.01em] opacity-50">Powered by</span>
                    <div className="flex flex-row-reverse md:flex-col gap-2 md:gap-0">
                        <span
                            className="self-end md:self-start mb-0.5 md:mb-0 px-1 py-0.5 text-electric-lime text-[8px]/[10px] md:text-[10px]/3 uppercase tracking-[0.05em] rounded bg-electric-lime/20"
                        >
                            MAINNET
                        </span>
                        <XionLogo className="h-7 md:h-12 w-auto text-variant opacity-50"/>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LoginView;
