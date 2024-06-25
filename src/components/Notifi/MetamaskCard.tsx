import {NotifiSubscriptionCard, useNotifiClientContext,} from '@notifi-network/notifi-react-card';
import {useState} from 'react';
import '@notifi-network/notifi-react-card/dist/index.css';
import {BellButton} from './BellButton';
import './NotifiCard.css';
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";


export const MetamaskCard = () => {
    const evmSubscriptionCardId = '69d81f9b9d544716b598fa5ba62d5b44'
    const [isCardOpen, setIsCardOpen] = useState(false);
    // const { alerts} = useNotifiSubscriptionContext();
    const { isUsingFrontendClient } = useNotifiClientContext();
    const walletAddress = useSelector((state: RootState) => state.login.user?.account.wallets[0].address || 'invalid');

    return (
        <>
            {walletAddress && (
                <div className="relative">
                    <BellButton setIsCardOpen={setIsCardOpen} />

                    <div className="absolute top-14 right-0 z-50">
                        {isCardOpen || !isUsingFrontendClient ? (
                            <NotifiSubscriptionCard
                                darkMode={true}
                                inputs={{ userWallet: walletAddress }}
                                cardId={evmSubscriptionCardId}
                                onClose={() => setIsCardOpen(false)}
                            />) : null}
                    </div>
                </div>
            )}
        </>
    );
};
