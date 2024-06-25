
interface ChainConfig {
    chainId: string;
    name: string;
}

const chainIds: Record<string, ChainConfig> = {
    production: {
        chainId: '0x14a34',
        name: 'Sepolia Base Testnet'
    },
    development: {
        chainId: '0x14a34',
        name: 'Sepolia Base Testnet'
    },
    local: {
        chainId: '0x14a34',
        name: 'Sepolia Base Testnet'
    }
};

export const getChainConfig = (): ChainConfig => {
    const env = import.meta.env.VITE_APP_ENV || 'local';
    return chainIds[env] || chainIds.development;
};
