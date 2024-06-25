import {FC} from "react";
import MissionImage from "../assets/StrawberryButtercream.png";

// TODO add props

const ProjectMissionCard:FC = () => {
    return (
        <div className="flex-none bg-black rounded-lg shadow-lg m-2 w-48 min-w-[24rem]">
            <img src={MissionImage} alt="Mission Icon" className="w-full rounded-lg"/>
            <div className="p-6">
                <h3 className="font-semibold mb-2 text-white">Mission Name
                <button className="relative bg-olive-green-button-color text-white py-2 px-2 rounded-lg h-8 w-12 p-4 ml-40 text-sm">DEFI</button>
                </h3>
                <p className="text-xs mb-4 text-white">pread the word about KASU and refer your friends to join the campaign and also earn rewards. Referrals must follow KASU Socials (Twitter, Telegram, Discord, Linkedin and Medium). Referrals need to perform the Social quest to earn a reward.</p>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold text-orange-500">Website</p>
                        <p className="text-sm text-white mb-10">Links</p>
                        <button className="box-border h-15 w-60 p-4 border text-orange-500 font-bold py-2 px-4 rounded">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectMissionCard;