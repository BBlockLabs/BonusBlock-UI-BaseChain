import { FC } from "react";
import MetaMaskLogo from '../assets/wallet_logo/metamask_black.svg';
import KeplrLogo from '../assets/wallet_logo/keplr_black.svg';

// Find better way to add logos

export interface WalletButtonProps {
    text: string;
    onClick: () => void;
    logo: string;
}

const WalletButton:FC<WalletButtonProps> = (props) => {
    const { text, onClick, logo } = props;

    return (
        <button
            className="flex items-center justify-center bg-wallet-bg-color text-black px-6 py-2 rounded w-[310px] h-[64px] mb-4 space-x-2"
            onClick={onClick}
        >
            {logo === "metamask" && <MetaMaskLogo className="h-6 w-6"/>}
            {logo === "keplr" && <KeplrLogo className="h-6 w-6"/>}
            <span className="font-bold text-left flex-grow font-calibri">{text}</span>
        </button>
    )
}

export default WalletButton;