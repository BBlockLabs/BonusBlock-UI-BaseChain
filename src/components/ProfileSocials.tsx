import { CSSProperties, FC, useState } from 'react';
import TwitterX from "../assets/socials/twitter_X.svg";
import Discord from "../assets/socials/discord.svg";
// import Telegram from "../assets/socials/telegram.svg";
import { useAxios } from "../hooks/useAxios.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { LinkBreak1Icon } from '@radix-ui/react-icons';
import { CircleLoader } from "react-spinners";

const override: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    margin: '0 auto',
    zIndex: 1000,
};

export interface ProfileSocialsProps {
    socials: Array<string>;
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

    const linkSocial = async (linkAction: string) => {
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
                    setLoading(false);
                    window.location.href = response.payload;
                }
            } catch (err) {
                setLoading(false);
                console.error('Error linking social account:', err);
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
        <div className="w-full">
            <CircleLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={45}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            {socials.includes("twitter") && (

                <div
                    className="relative bg-orange-500 text-white rounded-lg p-2 w-full my-2 hover:cursor-pointer"
                    onClick={() => linkSocial("twitter")}
                >
                    {getTwitterUsername() ?
                        (
                            <div className="flex items-center">
                                <LinkBreak1Icon width="24" height="24" onClick={ () => unlinkSocial("twitter")}/>
                                <span className="text-base font-medium p-1 ml-2">{getTwitterUsername()}</span>
                            </div>
                        ) :
                            <span className="text-base font-medium p-1 flex items-center">
                                Connect Twitter
                            </span>
                    }
                    <div className="absolute top-3 right-3">
                    <TwitterX width="20" height="20"/>
                    </div>
                </div>
            )}

            {/*{socials.includes("telegram") && ( TODO:later */ }

            {/*    <div*/}
            {/*        className="relative bg-orange-500 text-white rounded-lg p-2 w-full my-2">*/}
            {/*        <span className="text-base	font-medium p-1">Connect Telegram</span>*/}
            {/*        <div className="absolute top-3 right-3">*/}
            {/*            <Telegram width="20" height="20"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}

            {socials.includes("discord") && (

                <div
                    className="relative bg-orange-500 text-white rounded-lg p-2 w-full my-2"
                    onClick={() => linkSocial("discord")}
                >
                    {getDiscordUsername() ?
                        (
                            <div className="flex items-center">
                                <LinkBreak1Icon width="24" height="24" onClick={ () => unlinkSocial("discord")}/>
                                <span className="text-base font-medium p-1 ml-2">{getDiscordUsername()}</span>
                            </div>
                        ) :
                            <span className="text-base font-medium p-1 flex items-center">
                                Connect Discord
                            </span>
                    }
                    <div className="absolute top-3 right-3">
                        <Discord width="20" height="20"/>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ProfileSocials;
