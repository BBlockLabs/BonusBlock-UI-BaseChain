import Layout from "../components/Layout.tsx";
import { useNavigate } from "react-router-dom";
import RainbowButton from "../components/RainbowButton/index.tsx";
import CoinbaseLogo from "../assets/svg/coinbase-symbol.svg";
import MetaMaskButton from "../assets/svg/metamask-button.svg";
import { useWalletContext, useEVMAddress  } from '@coinbase/waas-sdk-web-react';
import StarBG from "../assets/star-background.png";
import StarBGR from "../assets/star-background-right.png";
import { useSDK } from "@metamask/sdk-react";
import { useAxios } from "@/hooks/useAxios.ts";
import { EthLoginRequest } from "@/common/bonusblock_api/EthLoginRequest.ts";
import { LoginResponse } from "@/common/bonusblock_api/dto/LoginResponseDto.ts";
import { useDispatch, useSelector } from "react-redux";
import { ApiResponseDto } from "@/common/bonusblock_api/dto/ApiResponseDto.ts";
import { setLoginFailure, setLoginSuccess } from "@/store/loginSlice.ts";
import { RootState } from "@/store/store.ts";
import { useEffect } from "react";
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk'
import Web3 from "web3";
 
const coinbaseSdk = new CoinbaseWalletSDK({
    appName: "BaseChain x BonusBlock",
    appChainIds: [8453]
});

const ConnectWalletView = () => {

    const navigate = useNavigate();
    const { fetchData } = useAxios();
    const dispatch = useDispatch();

    const { sdk, connected, connecting, provider, chainId } = useSDK();  

    const userId = useSelector((state: RootState) => state.login.user?.account.userId);

    useEffect(()=>{
        if (userId) navigate('/quests');
    }, [userId])

    const handleCoinbaseLogin = async () => {
        try {
            const nonce = 'TODO';
            const authTicketResponse = await getAuthTicket(nonce);
            if (!authTicketResponse.success) {
                throw "Failed to get auth ticket";
            }

            const provider = coinbaseSdk.makeWeb3Provider({options: 'smartWalletOnly'});
            const addresses: string[] = await provider.request({method: 'eth_requestAccounts'});
            const web3 = new Web3(provider);
            const signedMessage = await web3.eth.personal.sign(authTicketResponse.payload, addresses[0], 'idk_what_this_param_is_for')
        
            //* TODO backend needs support added for smart-contract accounts' signatures. *//
            // const loginResponse = await finishLogin({
            //     nonce,
            //     signedMessage,
            //     blockchainName: 'Base'
            // });
            // if (loginResponse.success) {
            //     dispatch(setLoginSuccess(loginResponse.payload));
            // } else {
            //     throw "Failed to authenticate";
            // }

            const demoLoginResponse: Partial<LoginResponse> = {
                account: {
                    userId: 'Smart Wallet User',
                    wallets: [{
                        network: 'Base',
                        address: addresses[0],
                        createdOn: new Date().toISOString(),
                        modifiedOn: new Date().toISOString(),
                    }]
                } as any,
                session: {
                    token: 'NO TOKEN YET',
                    expiresOn: new Date(new Date().valueOf() + 60 * 60 * 24 * 1000).toISOString()
                }
            }
            dispatch(setLoginSuccess(demoLoginResponse as any));

            navigate('/quests');
        } catch (error: any) {
            console.error('Failed to connect wallet:', error);
            dispatch(setLoginFailure(error.toString()));
        }
        return null
    };

    const handleMetamaskLogin = async () => {
        try {
            if (!sdk) throw 'Metamask SDK is undefined'

            const nonce = 'TODO';
            const authTicketResponse = await getAuthTicket(nonce);
            if (!authTicketResponse.success) {
                throw "Failed to get auth ticket";
            }

            const signedMessage = await sdk.connectAndSign({
                msg: authTicketResponse.payload,
            });

            const loginResponse = await finishLogin({
                nonce,
                signedMessage,
                blockchainName: 'Base'
            });
            console.log('loginResponse', loginResponse)

            if (loginResponse.success) {
                dispatch(setLoginSuccess(loginResponse.payload));
            } else {
                throw "Failed to authenticate";
            }
        
            navigate('/quests');
        } catch (error: any) {
            console.error('Failed to connect wallet:', error);
            dispatch(setLoginFailure(error.toString()));
        }
    }

    const getAuthTicket = async (nonce: string): Promise<ApiResponseDto<string>> => {
        // TODO use the Base endpoint when it's available
        const response: ApiResponseDto<string> = await fetchData({
            url: `auth/get-auth-ticket`,
            method: 'POST',
            data: {
                nonce,
            },
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }

    const finishLogin = async (request: EthLoginRequest): Promise<ApiResponseDto<LoginResponse>> => {
        // TODO use the Base endpoint when it's available
        const response: ApiResponseDto<LoginResponse> = await fetchData({
            url: `auth/eth`,
            method: 'POST',
            data: request,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }

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
                        <RainbowButton text="Create Smart Wallet" onClick={handleCoinbaseLogin} />
                        <RainbowButton text="I already have a wallet" onClick={handleCoinbaseLogin} />

                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                        By using Coinbase Wallet, you agree to the <a href="#" className="underline">terms</a> and <a href="#" className="underline">privacy policy</a>.
                    </p>
                    {/* <ConnectMetaMask onClick={handleMetaMaskClick} /> */}
                </div>
                    <div className="flex align-middle">
                        <button onClick={handleMetamaskLogin} className="max-w-13 mx-auto mt-2 align-middle">
                            <MetaMaskButton />
                        </button>
                    </div>
            </div>
        </Layout>
    );
}

export default ConnectWalletView;
