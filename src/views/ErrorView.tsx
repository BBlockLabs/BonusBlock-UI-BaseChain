import XionLogo from '../assets/logo/xion.svg';

const ErrorView = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-landing bg-cover bg-center bg-no-repeat">
            <div className="self-start px-10 py-7">
                <XionLogo className="h-6 w-auto" />
            </div>
            <div className="max-w-[385px] m-auto flex flex-col items-center px-10">
                <h1 className="text-white text-[40px]/[42px] font-light tracking-negative2 text-center">
                    Oops! Something went wrong...
                </h1>
                <p className="mt-3 mb-[48px] text-g500 text-base tracking-negative1 text-center">
                    Please try refreshing the page. If the problem continues, check your internet connection or try again later.
                </p>
                <button className="text-white text-sm underline">
                    Refresh the page
                </button>
            </div>
        </div>
    )
};

export default ErrorView;
