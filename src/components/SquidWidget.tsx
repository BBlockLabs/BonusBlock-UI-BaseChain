import { useEffect, useRef, useState } from "react";
import { GridLoader } from "react-spinners";

const integratorId = import.meta.env.VITE_SQUID_INTEGRATOR_ID;

const SquidWidget = () => {
    const [isInView, setIsInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const url = "https://widget.squidrouter.com/iframe?config=" + encodeURIComponent(JSON.stringify({
        integratorId,
        companyName: "XION",
        style: {
            neutralContent: "#C4AEEC",
            baseContent: "#070002",
            base100: "#ffffff",
            base200: "#fafafa",
            base300: "#e8e8e8",
            error: "#ED6A5E",
            warning: "#FFB155",
            success: "#2EAEB0",
            primary: "#A992EA",
            secondary: "#F89CC3",
            secondaryContent: "#F7F6FB",
            neutral: "#FFFFFF",
            roundedBtn: "26px",
            roundedCornerBtn: "999px",
            roundedBox: "1rem",
            roundedDropDown: "20rem"
        },
        slippage: 1.5,
        infiniteApproval: false,
        enableExpress: true,
        apiUrl: "https://api.squidrouter.com",
        comingSoonChainIds: [],
        titles: {
            swap: "Swap",
            settings: "Settings",
            wallets: "Wallets",
            tokens: "Select Token",
            chains: "Select Chain",
            history: "History",
            transaction: "Transaction",
            allTokens: "Select Token",
            destination: "Destination address",
            depositAddress: "Deposit address"
        },
        priceImpactWarnings: {
            warning: 3,
            critical: 5
        },
        environment: "mainnet",
        showOnRampLink: true,
        defaultTokens: []
    }));

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          },
          { threshold: 0.1 }
        );

        if (iframeRef.current) {
          observer.observe(iframeRef.current);
        }

        return () => {
          if (iframeRef.current) {
            observer.unobserve(iframeRef.current);
          }
        };
    }, []);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div
            ref={iframeRef}
            className="relative h-screen xl:h-full min-w-[340px] xl:min-w-[380px] mt-[64px] mb-[80px] xl:m-0"
        >
            {isLoading && isInView && (
                <div className="flex justify-center items-center mt-16 xl:mt-[200px]">
                    <GridLoader
                        color="#CAF033"
                        loading
                    />
                </div>
            )}
            {isInView && (
                <iframe
                    src={url}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                    title="Squid Swap Widget"
                    sandbox="allow-scripts allow-same-origin"
                    onLoad={handleLoad}
                />
            )}
        </div>
    );
};

export default SquidWidget;
