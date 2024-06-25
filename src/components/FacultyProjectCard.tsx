import { FC } from 'react';
import TwitterX from "../assets/socials/twitter_X.svg";
import Discord from "../assets/socials/discord.svg";
import Telegram from "../assets/socials/telegram.svg";

import IMGKasu from "../assets/home/kasu.png";
import IMGAuki from "../assets/home/auki.png";
import IMGTagSpace from "../assets/home/tagspace.png";
import IMGYield from "../assets/home/yield.png";
import IMGPlaceholder from "../assets/home/Project_placeholder.png";
import {useNavigate} from "react-router-dom";

interface FacultyProjectCardProps {
    image: string;
    name: string;
    tags: string[];
    description: string;
    website: string;
    links: {
        twitter: string;
        telegram: string;
        discord: string;
    }
}

const FacultyProjectCard: FC<FacultyProjectCardProps> = (
    {
        image,
        name,
        tags,
        description,
        website,
        links,

    }) => {

    const navigate = useNavigate();

    const getProjectImage = (image: string) => {
        if (image === 'Kasu') {
            return IMGKasu;
        } else if (image === 'Auki') {
            return IMGAuki;
        } else if (image === 'TagSpace') {
            return IMGTagSpace;
        }
        else if (image === 'Yield') {
            return IMGYield;
        }
        else {
            return IMGPlaceholder;
        }
    }

    const navigateHandler = () => {
        if (name === 'Kasu') {
            return () => navigate('/projects/kasu');
        }
    }

    const blurClass =
        name === 'Coming soon' ||
        name === 'Auki' ||
            name === 'Tag Space' ||
            name === 'YieldNest'
            ? 'blur-sm' : '';


    return (
        <div
            className="bg-black rounded-lg text-white p-6 relative flex flex-col items-center h-[420px] w-[369px] mt-24">
            <img src={getProjectImage(image)} alt="Project" className="relative w-40 h-40 rounded-full -top-28"/>

            <div className="flex w-full mt-4 relative -top-24">
                <div className="flex flex-col ml-2">
                    <h3 className="text-xl font-bold">{name}</h3>
                </div>

                <div className="ml-auto">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`bg-tag-bg-color rounded-full px-3 py-1 text-white text-xs ml-2 mt-2 ${blurClass}`}>
                            {tag.toUpperCase()}
                        </span>
                    ))}
                </div>

            </div>

            <div className={`items-start w-full relative -top-24 ${blurClass}`}>
                <p className="mt-4 text-xs">{description}</p>
            </div>

            <div className="items-start w-full relative -top-24 mt-4">
                <div className="text-orange-500">Website</div>
                <a href={website} target="_blank" rel="noreferrer" className={`${blurClass}`}>
                    {website}
                </a>
            </div>

            <div className="items-start w-full relative -top-24 mt-4">
                <div>Links</div>
                <div className={`flex gap-2 mt-1 ${blurClass}`}>
                    <a href={links.twitter} target="_blank" rel="noreferrer">
                        <TwitterX className="h-6 w-6 text-orange-500"/>
                    </a>

                    <a href={links.telegram} target="_blank" rel="noreferrer">
                        <Telegram className="h-6 w-6 text-orange-500"/>
                    </a>

                    <a href={links.discord} target="_blank" rel="noreferrer">
                        <Discord className="h-6 w-6 text-orange-500"/>
                    </a>
                </div>
            </div>

            <div className="w-11/12 absolute bottom-6 mt-4">
                <button
                    className="text-orange-500 border border-orange-500 rounded px-2 w-full disabled:opacity-50"
                    onClick={navigateHandler()}
                    disabled={image !== 'Kasu'}
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default FacultyProjectCard;
