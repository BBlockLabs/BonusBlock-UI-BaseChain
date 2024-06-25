import PageFooter from "../components/PageFooter.tsx";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { RootState } from "../store/store.ts";
// import { useEffect } from "react";
import XionLogo from '../assets/logo/BaseChain.svg';
import { Button } from "../components/Button.tsx";

const LandingView = () => {
    const navigate = useNavigate();
    // const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);

    /* useEffect(() => {
        if (isAuthenticated) {
            navigate('/landing');
        }
    }, [isAuthenticated, navigate]); */

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div
            className="flex flex-col p-4 lg:px-10 lg:py-7 justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-landing-mobile lg:bg-landing"
        >
            <div>
                <XionLogo className="h-8 lg:h-6 w-auto"/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="mt-[72px] lg:mt-0 mb-4 lg:mb-8 text-[48px]/[48px] lg:text-[120px]/[96px] text-white font-black uppercase text-center tracking-[-0.05em] max-w-[900px]">
                    Tag line loremipsium
                </h1>
                <p className="mb-8 lg:mb-14 text-lg text-center text-white-negative tracking-[-0.01em] max-w-[670px]">
                    Copy description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex mb-[170px] lg:mb-0">
                    <Button
                        variant="primary"
                        className="w-60 h-16"
                        onClick={handleLogin}
                    >
                        Log in
                    </Button>
                </div>
            </div>

            <PageFooter backgroundColor="bg-transparent" iconColor="text-white-negative" />
        </div>
    );
}

export default LandingView;
