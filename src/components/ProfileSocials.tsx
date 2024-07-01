import { CSSProperties, FC, useState } from 'react';
import TwitterX from "../assets/socials/twitter_X.svg";
import Discord from "../assets/socials/discord.svg";
import Telegram from "../assets/socials/telegram.svg";
import Reddit from '../assets/socials/reddit.svg';
import { useAxios } from "../hooks/useAxios.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { CircleLoader } from "react-spinners";
import ProfileSocialButton from './ProfileSocialButton.tsx';

const override: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    margin: '0 auto',
    zIndex: 1000,
};

export type SocialNetwork = 'twitter' | 'telegram' | 'discord' | 'reddit';

export interface ProfileSocialsProps {
    socials: Array<SocialNetwork>;
}

const ProfileSocials:FC<ProfileSocialsProps> = (props) => {
    const { socials } = props;

    const { fetchData } = useAxios();
    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');
    const metadata = useSelector((state: RootState) => state.login.user?.account.metadata || {});

    const [loading, setLoading] = useState(false);
    const color = "#FFFFFF"

    const getTwitterUsername = () => {
        return metadata.TWITTER_USERNAME || '';
    }

    const getDiscordUsername = () => {
        return metadata.DISCORD_USERNAME || '';
    }

    const linkSocial = async (linkAction: SocialNetwork) => {
        if (linkAction === "twitter") {
            if (getTwitterUsername() !== '') {
                return;
            }
        }

        setLoading(true);

        if (linkAction === "telegram") {
            // @ts-ignore
            window.Telegram.Login.auth(
                { bot_id: "6470731622", request_access: false },
                (data: any) => {
                  if (!data) {
                    // authorization failed
                    alert("failed to connect Telegram");
                    setLoading(false);
                    return;
                  }
                  verifyAndUpdateTelegramData(data);
                }
              );


              return;
        } else {
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
                    window.location.href = response.payload;
                }
            } catch (err) {
                console.error('Error linking social account:', err);
            } finally {
                setLoading(false);
            }
        }
    };

    const unlinkSocial  = async (linkAction: string) => {
        setLoading(true);
        if (linkAction === "telegram") {

        } else {
            try {
                const response = await fetchData({
                    url: `${import.meta.env.VITE_BACKEND_URL}/auth/social-unlink`,
                    method: 'POST',
                    data: {
                        social: linkAction.toLowerCase(),
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": token,
                    },
                });
                if (response.success) {
                    setLoading(false);
                    window.location.reload();
                    // TODO: store update delete metadata
                    // dispatch(setMetadata({ [`${linkAction.toUpperCase()}_USERNAME`]: null }));
                }
            } catch (err) {
                setLoading(false);
                console.error('Error unlinking social account:', err);
            }
        }
    }

    async function verifyAndUpdateTelegramData(data: Object) {
        const response = await fetchData({
            url: `${import.meta.env.VITE_BACKEND_URL}/telegram/verify`,
            method: "POST",
            data,
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": token || "",
            },
        }

        );
        if (response.success) {
            setLoading(false);
        //   removedSocials.value.set("telegram", false);
        //   await store.dispatch("UserModule/getStatus");
        } else {
            setLoading(false);
        //   Toast.make(
        //     "Failed to link Telegram",
        //     "Something went wrong: " + responseData.errors[0],
        //     "error",
        //     true,
        //     3000
        //   );
        }
      }

    return (
        <div className="w-full flex flex-col gap-2">
            <CircleLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={45}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            {socials.includes("twitter") && (
                <ProfileSocialButton
                    social='Twitter'
                    username={metadata.TWITTER_USERNAME}
                    logo={TwitterX}
                    onClick={()=>linkSocial('twitter')}
                    onUnlink={()=>unlinkSocial('twitter')}
                    disabled={loading}
                />
            )}

            {socials.includes("telegram") && (
                <ProfileSocialButton
                    social='Telegram'
                    username={metadata.TELEGRAM_USERNAME}
                    logo={Telegram}
                    onClick={()=>linkSocial('telegram')}
                    onUnlink={()=>unlinkSocial('telegram')}
                    disabled={loading}
                />
            )}

            {socials.includes("discord") && (
                <ProfileSocialButton
                    social='Discord'
                    username={metadata.DISCORD_USERNAME}
                    logo={Discord}
                    onClick={()=>linkSocial('discord')}
                    onUnlink={()=>unlinkSocial('discord')}
                    disabled={loading}
                />
            )}

            {socials.includes("reddit") && (
                <ProfileSocialButton
                    social='Reddit'
                    username={metadata.REDDIT_USERNAME}
                    logo={Reddit}
                    onClick={()=>linkSocial('reddit')}
                    onUnlink={()=>unlinkSocial('reddit')}
                    disabled={loading}
                />
            )}

        </div>
    )
}

export default ProfileSocials;
