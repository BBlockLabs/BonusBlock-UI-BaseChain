/// <reference types="./svg.d.ts" />

/// <reference types="vite/client" />

import Web3 from 'web3';


interface Window {
    ethereum?: import('ethers').Eip1193Provider;
    Telegram: any | undefined;
    web3: Web3;
}