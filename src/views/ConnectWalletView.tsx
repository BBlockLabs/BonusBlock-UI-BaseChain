import Layout from "../components/Layout.tsx";
import { useNavigate } from "react-router-dom";
import RainbowButton from "../components/RainbowButton/index.tsx";
import CoinbaseLogo from "../assets/svg/coinbase-symbol.svg";
import MetaMaskButton from "../assets/svg/metamask-button.svg";
import { useWalletContext, useEVMAddress  } from '@coinbase/waas-sdk-web-react';
import StarBG from "../assets/star-background.png";
import StarBGR from "../assets/star-background-right.png";


const ConnectWalletView = () => {

    const navigate = useNavigate();

    const { waas, user } = useWalletContext();    

    const handleSmartWalletClick = () => { 
        navigate('/quests');
    };

    const handleCoinbaseLogin = async () => {
        try {
            waas?.login();
            navigate('/quests');
        } catch (error) {
            console.error('Failed to connect wallet:', error);
            navigate('/quests');
        }
        return null
    };

    return (
        <Layout noFooter>
            <img src={StarBGR}  className="absolute right-0 w-400 h-400 mt-28 z-0" alt="Background"/>
            <img src={StarBG}  className="absolute inset-0 w-400' h-400 object-cover mt-28 z-0" alt="Background"/>
            <div className="z1"> 
                <div className="text-center p-6 rounded-lg bg-gray-900 max-w-sm mx-auto z-1" >
                    <div className="mb-6 z-1">
                        <div className="flex justify-center">
                        <CoinbaseLogo className="align-middle"/>
                        </div>
                        <h1 className="text-2xl font-bold text-white">Coinbase Wallet</h1>
                        <p className="text-gray-400">The fastest, easiest, and most secure way to get onchain.</p>
                    </div>
                    <div className="space-y-4"> ˇ
                        <RainbowButton text="Create Smart Wallet" onClick={handleSmartWalletClick} />
                        <RainbowButton text="I already have a wallet" onClick={handleCoinbaseLogin} />

                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                        By using Coinbase Wallet, you agree to the <a href="#" className="underline">terms</a> and <a href="#" className="underline">privacy policy</a>.
                    </p>
                    {/* <ConnectMetaMask onClick={handleMetaMaskClick} /> */}
                </div>
                    <div className="flex align-middle">
                        <button onClick={() => navigate('/quests')} className="max-w-13 mx-auto mt-2 align-middle">
                            <MetaMaskButton />
                        </button>
                    </div>
            </div>
        </Layout>
    );
}

export default ConnectWalletView;
