import React, { createContext, useContext, useState, ReactNode } from 'react';
import WalletLink from 'walletlink';
import Web3 from 'web3';

interface WalletContextProps {
    wallet: WalletLink | null;
    web3: Web3 | null;
    account: string | null;
    connectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};

interface WalletProviderProps {
    children: ReactNode;
}

const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
    const [wallet, setWallet] = useState<WalletLink | null>(null);
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState<string | null>(null);

    const connectWallet = async () => {
        const walletLink = new WalletLink({
            appName: 'BaseChain X BonusBlock',
            appLogoUrl: 'https://example.com/logo.png',
            darkMode: false,
        });

        const ethereum = walletLink.makeWeb3Provider(
            `https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`,
            1
        );

        const web3Instance = new Web3(ethereum);
        setWeb3(web3Instance);

        try {
            const accounts = await ethereum.enable();
            setAccount(accounts[0]);
            setWallet(walletLink);
        } catch (error) {
            console.error('User denied account access:', error);
        }
    };

    return (
        <WalletContext.Provider value={{ wallet, web3, account, connectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export default WalletProvider;
