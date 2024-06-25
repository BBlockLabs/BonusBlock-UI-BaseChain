import {FC} from 'react';
import SVGQuest1 from '../assets/quests/quest_1.svg';
import SVGQuest2 from '../assets/quests/quest_2.svg';
import SVGQuest3 from '../assets/quests/quest_3.svg';
import SVGQuest4 from '../assets/quests/quest_4.svg';
import SVGQuestRef from '../assets/quests/quest_ref.svg';
import SVGCheck from '../assets/svg/check.svg';

import ImgQuestX from '../assets/quests/img/quest_x_img.png';
import ImgQuestDiscord from '../assets/quests/img/quest_discord.png';
import ImgQuestPlaceholder from '../assets/quests/img/quest_placeholder.png';
import ImgQuestPoker from '../assets/quests/img/quest_poker.png';
import ImgQuestRef from '../assets/quests/img/quest_ref.png';
import ImgQuestDrip from '../assets/quests/img/quest_drip.png';

import ImgLinkedin from '../assets/project/linkedin.png';
import ImgMedium from '../assets/project/medium.png';
import ImgTelegram from '../assets/project/telegram.png';
import ImgNft from '../assets/project/nft.png';

import ImgQuestXKasu from '../assets/project/kasu/kasu_x.png';
import ImgQuestDiscordKasu from '../assets/project/kasu/kasu_discord.png';
import ImgQuestPokerKasu from '../assets/project/kasu/kasu_poker.png';
import ImgQuestRefKasu from '../assets/project/kasu/kasu_ref.png';
import ImgQuestDripKasu from '../assets/project/kasu/kasu_drip.png';

import ImgQuestMediumKasu from '../assets/project/kasu/medium_kasu.png';
import ImgQuestTelegramKasu from '../assets/project/kasu/telegram_kasu.png';
import ImgQuestNftKasu from '../assets/project/kasu/nft_kasu.png';
import ImgQuestLinkedinKasu from '../assets/project/kasu/linkedin_kasu.png';

import {Mission} from "../types/Mission.ts";
import {useAxios} from "../hooks/useAxios.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {callMintFunction} from "../smart_contracts/KasuNftMinter.ts";
import NoAccountsError from "../common/errors/NoAccountsError.ts";
import MintingError from "../common/errors/MintingError.ts";
import {ethers} from "ethers";
import CustomMintRequest from "../common/bonusblock_api/CustomMintRequest.ts";
import {useMintCustomInit} from "../hooks/useMintCustomInit.ts";
import {Bounce, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMintCustomOk} from "../hooks/useMintCustomOk.ts";
import {useTwitterShare} from "../hooks/useTwitterShare.ts";
import CustomMintNoAuthError from "../common/errors/CustomMintNoAuthError.ts";

interface QuestMissionCardProps {
    mission: Mission;
    isKasu?: boolean;
    setLoading?: (loading: boolean) => void;
}

const QuestMissionCard: FC<QuestMissionCardProps> = (
    {
        mission,
        isKasu,
        setLoading,
    }) => {

    const { fetchData } = useAxios();
    const { getSignature } = useMintCustomInit();
    const { customMintOk } = useMintCustomOk();
    const { share } = useTwitterShare();
    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');
    const doneMissions = useSelector((state: RootState) => state.login.user?.doneMissions || 'invalid');
    const walletAddress = useSelector((state: RootState) => state.login.user?.account.wallets[0].address || 'invalid');
    const userId = useSelector((state: RootState) => state.login.user?.account.userId || {});
    const metadata = useSelector((state: RootState) => state.login.user?.account.metadata || {});

    const referralUrl = `${window.location.origin}?r=${userId}`;

    // const alwaysShow = ['faculty-kasu-social-1'];

    const twitterMissions = ['faculty-kasu-social-1', 'faculty-kasu-social-2', 'faculty-kasu-social-3', 'faculty-kasu-social-4'];
    const discordMissions = ['faculty-kasu-social-6', 'faculty-discord-1'];

    // const shouldAlwaysShow = () => {
    //     return alwaysShow.includes(mission.id);
    // }

    const getBlured = () => {
        if (doneMissions.includes(mission.id)) {
            return '';
        }

        if (twitterMissions.includes(mission.id)) {
            if (!metadata.TWITTER_USERNAME) {
                return 'blur-sm';
            }
        }

        if (discordMissions.includes(mission.id)) {
            if (!metadata.DISCORD_USERNAME) {
                return 'blur-sm';
            }
        }

        return '';
    }

    const getLinkYourTwitter = () => {
        if (doneMissions.includes(mission.id)) {
            return false;
        }

        if (twitterMissions.includes(mission.id)) {
            if (!metadata.TWITTER_USERNAME) {
                return 'true';
            }
        }

        return false;
    }

    const getLinkYourDiscord = () => {
        if (doneMissions.includes(mission.id)) {
            return false;
        }

        if (discordMissions.includes(mission.id)) {
            if (!metadata.DISCORD_USERNAME) {
                return 'true';
            }
        }

        return false;
    }


    const checkMissionDone = () => {
        return (doneMissions.includes(mission.id));
    }

    const calculateMessageHash = (cmr: CustomMintRequest) => {
        const btyes = ethers.toUtf8Bytes(cmr.nonce);
        return ethers.keccak256(btyes);
    }

    const onMintNft = async (name: string) => {

        console.log('onMintNft:', name);

        setLoading && setLoading(true);

        // create nonce for the minting request
        const nonce = ethers.randomBytes(32).toString();

        // create the custom mint request
        const customMintRequest = new CustomMintRequest(
            name,
            nonce,
            walletAddress,
        );

        try {

            const signatureFromApi = await getSignature(customMintRequest);

            const hash = calculateMessageHash(customMintRequest);

            // const recoveredAddress = ethers.recoverAddress(hash, ethers.Signature.from(signatureFromApi));
            // console.log('recoveredAddress:', recoveredAddress);

            await callMintFunction(hash, signatureFromApi);
            await customMintOk(name);

            setLoading && setLoading(false);
            toast('NFT minted successfully!', {
                containerId: mission.id,
                transition: Bounce,
                autoClose: 5000,
                position: "top-center",
                type: 'success',
            })
        } catch (error) {
            if (error instanceof NoAccountsError || error instanceof MintingError) {
                console.error('Blockchain-related error:', error.message);
                toast('Error minting NFT', {
                    containerId: mission.id,
                    transition: Bounce,
                    autoClose: 5000,
                    position: "top-center",
                    type: 'error',
                })
            } if (error instanceof CustomMintNoAuthError) {
                console.error('Api error:', error.message);
                toast('You are not authorized to mint NFT. Please obtain Level 3 in Discord', {
                    containerId: mission.id,
                    transition: Bounce,
                    autoClose: 5000,
                    position: "top-center",
                    type: 'error',
                })
            } else {
                // api errors
                console.error('Error minting NFT:', error);
                toast('Error minting NFT', {
                    containerId: mission.id,
                    transition: Bounce,
                    autoClose: 5000,
                    position: "top-center",
                    type: 'error',
                })
            }
        } finally {
            setLoading && setLoading(false);
        }
    }

    const onMissionLinkClick = async  (link:string) => {

        if (link === 'faculty-referral-1' || link === 'faculty-referral-2' || link === 'faculty-referral-3') {
            const text = `I've embarked on the Kasu Quest! 🙌\n\nJoin me to earn fully unlocked KSU tokens, public sale whitelisting, and special prizes!\n\nSign up with this link: ${referralUrl}\n\nPowered by @bonus_block\n\n#RWA #DEFI`;
            share(text, '', '');
            return;
        }

        if (link === 'faculty-kasu-social-4') {
            const text = `I’m part of the @KasuFinance adventure! :raised_hands: Earn your way of having a white-list for the public sale and special prizes! Sign-up using my referral: ${referralUrl}\n\nPowered by @bonus_block\n\n#RWA #DEFI`;
            share(text, '', '');
            // do not return so mission completed
            // return;
        }

        // faculty-discord-1
        if (mission.socials && mission.socials[0].type === 'main-link-open') {
            window.open(mission.socials[0].link, '_blank');
            return;
        }

        const response = await fetchData({
            url: `${import.meta.env.VITE_BACKEND_URL}/forward-link/go/${link}`,
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": token,
            },
        });
        if (response.success) {
            const url = response.payload;
            window.open(url, '_blank');
        } else {
            console.log('Error:', response.error);
        }
    }

    const getSVGIcon = (icon: string) => {
        switch (icon) {
            case '1':
                return <SVGQuest1 className="w-14 h-14"/>;
            case '2':
                return <SVGQuest2 className="w-14 h-14"/>;
            case '3':
                return <SVGQuest3 className="w-14 h-14"/>;
            case '4':
                return <SVGQuest4 className="w-14 h-14"/>;
            case 'ref':
                return <SVGQuestRef className="w-14 h-14"/>;
            default:
                return <SVGQuest1 className="w-14 h-14"/>;
        }
    }

    const getProjectImage = (image: string) => {
        if (isKasu) {
            switch (image) {
                case 'x':
                    return ImgQuestXKasu;
                case 'discord':
                    return ImgQuestDiscordKasu;
                case 'mint':
                    return ImgQuestNftKasu;
                case 'poker':
                    return ImgQuestPokerKasu;
                case 'ref':
                    return ImgQuestRefKasu;
                case 'medium':
                    return ImgQuestMediumKasu;
                case 'telegram':
                    return ImgQuestTelegramKasu;
                case 'linkedin':
                    return ImgQuestLinkedinKasu;
                case 'drip':
                    return ImgQuestDripKasu;
                default:
                    return ImgQuestPlaceholder;
            }
        } else {
            switch (image) {
                case 'x':
                    return ImgQuestX;
                case 'discord':
                    return ImgQuestDiscord;
                case 'mint':
                    return ImgNft;
                case 'poker':
                    return ImgQuestPoker;
                case 'ref':
                    return ImgQuestRef;
                case 'medium':
                    return ImgMedium;
                case 'telegram':
                    return ImgTelegram;
                case 'linkedin':
                    return ImgLinkedin;
                case 'drip':
                    return ImgQuestDrip;
                default:
                    return ImgQuestPlaceholder;
            }
        }
    }

    const getButtonClass = () => {
        if (isKasu) {
            return 'border-kasu-color text-kasu-color'
        } else {
            return 'border-orange-500 text-orange-500'
        }
    }

    const getTextClass = () => {
        if (isKasu) {
            return 'text-kasu-color'
        } else {
            return 'text-orange-500'
        }
    }

    // TODO: get from backend later
    const getTag = () => {
        if (mission.id.includes('social')) {
            return 'social';
        }

        if (mission.id.includes('referral')) {
            return 'referrals';
        }

        if (mission.id.includes('poker')) {
            return 'games';
        }

        if (mission.id.includes('minting')) {
            return 'nft';
        }

        if (mission.id.includes('drip')) {
            return 'Staking';
        }
        return 'social'
    }

    // TODO: move it to hook later
    const linkSocial = async (linkAction: string) => {

        setLoading && setLoading(true);

            try {
                const response = await fetchData({
                    url: `${import.meta.env.VITE_BACKEND_URL}/auth/social-link`,
                    method: 'POST',
                    data: {
                        social: linkAction.toLowerCase(),
                        returnTo: window.location.href,
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": token,
                    },
                });
                if (response.success) {
                    setLoading && setLoading(false);
                    window.location.href = response.payload;
                }
            } catch (err) {
                setLoading && setLoading(false);
                console.error('Error linking social account:', err);
            }

    };


    return (
        <div className="bg-light-black rounded-lg text-white p-6 relative flex flex-col items-center h-[360px] w-[340px] mt-24">
            <ToastContainer containerId={mission.id}/>

            {/*<button className="absolute top-4 right-4 text-white" onClick={() => notify()}>mint</button>*/}
            <img src={getProjectImage(mission.imageUrl)} alt="Project" className="relative w-40 h-40 rounded-full -top-28"/>

            <div className="flex w-full mt-4 relative -top-24">
                <div className={getTextClass()}>
                    {getSVGIcon(mission.id)}
                </div>

                <div className="flex flex-col ml-2">
                    <h3 className="text-xl font-bold">{mission.title}</h3>
                    <div className={`text-xl font-bold ${getTextClass()}`}>
                        {mission.xpPoints} XP
                    </div>
                </div>

                <div className="ml-auto mt-6">
                    <span className="bg-tag-bg-color rounded-full px-3 py-1 text-white text-xs ml-2 mt-2">
                        {getTag().toUpperCase()}
                    </span>
                    {/*{mission.tags.map((tag, index) => (*/}
                    {/*    <span*/}
                    {/*        key={index}*/}
                    {/*        className="bg-tag-bg-color rounded-full px-3 py-1 text-white text-xs ml-2 mt-2">*/}
                    {/*        {tag.toUpperCase()}*/}
                    {/*    </span>*/}
                    {/*))}*/}
                </div>

            </div>

            <div className={`items-start w-full relative -top-24 ${getBlured()}`}>
                <p className="mt-4 text-xs" dangerouslySetInnerHTML={{__html: mission.description}}></p>

                {(mission.id === 'faculty-minting-1' || mission.id === 'faculty-minting-3') && (
                    <a href="https://docs.base.org/docs/tools/network-faucets/" target="_blank"
                       className="text-xs mt-2 underline">Faucet</a>
                )}
            </div>

            {getLinkYourTwitter() && (
                <div className="items-start w-full relative -top-24">
                    <button
                        className={` border ${getButtonClass()} rounded px-2 w-auto`}
                        onClick={() => linkSocial('twitter')}
                    >
                        Please, link your Twitter
                    </button>
                </div>
            )}

            {getLinkYourDiscord() && (
                <div className="items-start w-full relative -top-24">
                    <button
                        className={` border ${getButtonClass()} rounded px-2 w-auto`}
                        onClick={() => linkSocial('discord')}
                    >
                        Please, link your Discord
                    </button>
                </div>
            )}

            <div className={`cardFooterButtonWrap ${getBlured()}`}>
                {!checkMissionDone() && mission.socials && mission.socials[0].type === 'main-link' && mission.id !== 'faculty-minting-1'&& mission.id !== 'faculty-minting-3' && (
                    <div className="bottom-4 left-8 ">
                        <button
                            className={` border ${getButtonClass()} rounded px-2 w-auto`}
                            onClick={() => onMissionLinkClick(mission.id)}
                            disabled={getBlured() === 'blur-sm'}
                        >
                            {mission.socials[0].title}
                        </button>
                    </div>
                )}

                {!checkMissionDone() && mission.socials && mission.socials[0].type === 'main-link-open' && (
                    <div className="bottom-4 left-8 ">
                        <button
                            className={` border ${getButtonClass()} rounded px-2 w-auto`}
                            onClick={() => onMissionLinkClick(mission.id)}
                        >
                            {mission.socials[0].title}
                        </button>
                    </div>
                )}

                {!checkMissionDone() && mission.id === 'faculty-minting-1' && (
                    <div className="bottom-4 left-8">
                        <button
                            className={` border ${getButtonClass()} rounded px-2 w-auto`}
                            onClick={() => onMintNft('genesis')}
                        >
                            Mint Genesis NFT
                        </button>
                    </div>
                )}

                {!checkMissionDone() && mission.id === 'faculty-minting-3' && (
                    <div className="bottom-4 left-8">
                        <button
                            className={` border ${getButtonClass()} rounded px-2 w-auto`}
                            onClick={() => onMintNft('kasu')}
                        >
                            Mint Kasu NFT
                        </button>
                    </div>
                )}

                {doneMissions && checkMissionDone() && (
                    <div className="bottom-4 left-8">
                        <div className="flex text-center">
                            <div className="bg-tag-bg-color rounded-full"><SVGCheck/></div>
                            <span className="text-tag-bg-color ml-2">Completed</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestMissionCard;
