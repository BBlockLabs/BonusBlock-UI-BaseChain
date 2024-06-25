import {
  Uint8SignMessageFunction,
} from '@notifi-network/notifi-frontend-client';
import { NotifiContext } from '@notifi-network/notifi-react-card';
import { PropsWithChildren } from 'react';
import {ethers, getBytes} from "ethers";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";

export const MetamaskNotifiContextWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {

  // const { user } = useUser();

  const tenantId = 'ooqw9synary5azza3s91'
  const env = 'Production'

  const walletAddress = useSelector((state: RootState) => state.login.user?.account.wallets[0].address || 'invalid');

  const signMessage: Uint8SignMessageFunction = async (message: Uint8Array) => {
    if (!walletAddress) throw 'Wallet not connected'

    // @ts-ignore
    const web3Provider = new ethers.BrowserProvider(window.ethereum);
    await web3Provider.send("eth_requestAccounts", []);
    const signer = await web3Provider.getSigner();

    const result = await signer.signMessage(message);
    return getBytes(result);
  };

  return (
    <div>
        <NotifiContext
          dappAddress={tenantId}
          env={env}
          signMessage={signMessage}
          walletPublicKey={walletAddress ?? ''}
          walletBlockchain={'BASE'}
        >
          {children}
        </NotifiContext>
    </div>
  );
};
