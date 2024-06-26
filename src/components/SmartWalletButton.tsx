import Coinbase from '../assets/svg/coinbase.svg';
import Search from '../assets/svg/search.svg';
import Unicorn from '../assets/svg/unicorn.svg';
import { useWalletContext, useEVMAddress } from "@coinbase/waas-sdk-web-react";
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { ConnectButton, AutoConnect } from "thirdweb/react";

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

const SmartWalletLoginButton = ({ type = 'coinbase', onClick }: SmartWalletButtonProps) => {
    return (
        <ConnectButton
          client={createThirdwebClient({
            clientId: import.meta.env.VITE_THIRDWEB_API_CLIENT_ID || "",
          })}
          wallets={[createWallet('com.coinbase.wallet')]}
        />
        // <button
        //     disabled={!waas || !!user}
        //     type="button"
        //     className="w-[346px] h-[105px] py-4 px-6 rounded border-white border-[0.4px] text-white text-lg bg-transparent hover:bg-walletBtnHoverBg"
        //     onClick={async () => {
        //         try {
        //             await waas!.login();
        //         } catch (error) {
        //             onClick();
        //         }
        //     }}
        // >
        //     <div className="flex items-center justify-center gap-2.5">
        //         {IconPicker(type)}
        //         Connect with Smart Wallet
        //     </div>
        // </button>
    );
}

const CreateOrResumeWalletButton = () => {
    const { waas, user, wallet, isCreatingWallet } = useWalletContext();
  
    return (
      <button
        disabled={!waas || !user || isCreatingWallet || !!wallet}
        onClick={async () => {
          // check if your user has a wallet, and restore it if they do!
          if (user!.hasWallet) {
            // restores the user's existing wallet.
            user!.restoreFromHostedBackup!();
          } else {
            // creates a new wallet.
            user!.create();
          }
        }}
      >
        {isCreatingWallet ? "Creating wallet..." : "Create/Resume Wallet"}
      </button>
    );
  };
  
  // a <p> to see your user's address.
  const ViewMyAddressLabel = () => {
    const { wallet } = useWalletContext();
    const address = useEVMAddress(wallet);
    return (
      <div>
        {address && <p>Your address is: {address.address}</p>}
        {!address && <p>No wallet.</p>}
      </div>
    );
  };
  
  // a button to logout your user.
  const LogoutButton = () => {
    const { waas, user } = useWalletContext();
    return (
      <button
        onClick={async () => {
          await waas?.logout();
        }}
        disabled={!user}
      >
        Logout
      </button>
    );
  };
  

export { SmartWalletLoginButton, CreateOrResumeWalletButton, ViewMyAddressLabel, LogoutButton};
