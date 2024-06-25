import Coinbase from '../assets/svg/coinbase.svg';
import Search from '../assets/svg/search.svg';
import Unicorn from '../assets/svg/unicorn.svg';

export type SmartWalletButtonProps = {
    type?: 'coinbase' | 'search' | 'unicorn';
    onClick: () => void;
};

const IconPicker = (type: SmartWalletButtonProps['type']) => {
    switch (type) {
        case 'search':
            return <Search className="w-6 h-6" />;
        case 'unicorn':
            return <Unicorn className="w-6 h-6" />;
        default:
            return <Coinbase className="w-6 h-6" />;
    }
};

const SmartWalletButton = ({ type = 'coinbase', onClick }: SmartWalletButtonProps) => {
    return (
        <button
            type="button"
            className="w-[346px] h-[105px] py-4 px-6 rounded border-white border-[0.4px] text-white text-lg bg-transparent hover:bg-walletBtnHoverBg"
            onClick={onClick}
        >
            <div className="flex items-center justify-center gap-2.5">
                {IconPicker(type)}
                Connect with Smart Wallet
            </div>
        </button>
    );
}

export default SmartWalletButton;
