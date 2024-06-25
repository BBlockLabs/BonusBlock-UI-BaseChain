import { FC } from "react";

import TwitterX from "../assets/socials/twitter_X.svg";
import Discord from "../assets/socials/discord.svg";
import Telegram from "../assets/socials/telegram.svg";
// import Github from "../assets/socials/github.svg";

export interface FooterSocialsProps {
    socials: Array<string>;
    links?: Array<string>;
}

const FooterSocials:FC<FooterSocialsProps> = (props) => {

    // add links default value
    const { socials, links = [''] } = props;


    return (
        <div className="flex space-x-4">

            {/*TODO: fix links use map later*/}
            {socials.includes("twitter") && (
                <a href={links[0]} target="_blank" rel="noreferrer">
                    {/*<img src={TwitterX} alt="Twitter" className="h-6 w-6"/>*/}
                    <TwitterX className="h-6 w-6"/>
                </a>
            )}

            {socials.includes("discord") && (
                <a href={links[1]} target="_blank" rel="noreferrer">
                    <Discord className="h-6 w-6"/>
                </a>
            )}

            {socials.includes("telegram") && (
                <a href={links[2]} target="_blank" rel="noreferrer">
                    <Telegram className="h-6 w-6"/>
                </a>
            )}

            {/*{socials.includes("github") && (*/}
            {/*    <a href="" target="_blank" rel="noreferrer">*/}
            {/*        <Github className="h-6 w-6"/>*/}
            {/*    </a>*/}
            {/*)}*/}
        </div>
    )
}

export default FooterSocials;