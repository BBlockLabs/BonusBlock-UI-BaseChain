import Layout from "../components/Layout.tsx";
import { useGetStatus } from "../hooks/useGetStatus.ts";
import ProjectCard from "../assets/images/project_card.png";
import TwitterIcon from "../assets/socials/twitter_X.svg";
import DiscordIcon from "../assets/socials/discord.svg";
import TelegramIcon from "../assets/socials/telegram.svg";

const ProjectsView = () => {
    useGetStatus();

    return (
        <Layout isFullWidth>
            <div className="flex flex-col mt-[69px] mb-12">
                <div className="flex flex-col justify-evenly items-center">
                    <h1 className="mb-6 text-[76px]/[91px] text-white uppercase">
                        <span className="text-gold">base</span> chain
                    </h1>
                    <p className="text-2xl/[34px] text-white">
                        The scalable, secure, and user-friendly layer-2 on Ethereum.
                    </p>
                    <p className="text-2xl/[34px] text-white">
                        Experience the future of finance with Base, where you can seamlessly explore and earn.
                    </p>
                    <div className="flex mt-9">
                        <div className="flex flex-col items-start gap-6 bg-cardBg px-8 py-12">
                            <img src={ProjectCard} alt="Project Card" />
                            <h2 className="text-white text-2xl font-medium">Base Chain</h2>
                            <div className="w-full border-b border-white/20" />
                            <p className="text-accentText">
                                In eu semper mi. Vivamus pulvinar elementum justo, ut sodales arcu vulputate tristique.emper mi. Vivamus pulvinar elementum justo, ut sodales arcu vulputate tristique.emper mi. Vivamus pulvinar elementum justo, ut sodales arcu vulputate tristique.
                            </p>
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white font-medium">Tags</p>
                                    <div className="flex gap-2">
                                        <span
                                            className="py-2 px-3 rounded-full text-black font-medium bg-gold"
                                        >
                                            L2
                                        </span>
                                        <span
                                            className="py-2 px-3 rounded-full text-black font-medium bg-gold"
                                        >
                                            Finance
                                        </span>
                                        <span
                                            className="py-2 px-3 rounded-full text-black font-medium bg-gold"
                                        >
                                            DApps
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-base/[22px] font-medium">Website</p>
                                    <a
                                        href="https://basechain.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-softBlue underline"
                                    >
                                        base.org
                                    </a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-base/[22px] font-medium">Links</p>
                                    <div className="flex gap-3">
                                        <TwitterIcon className="link-icon w-6 h-auto" />
                                        <TelegramIcon className="link-icon w-6 h-auto" />
                                        <DiscordIcon className="link-icon w-6 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 mx-auto bg-projectsBg"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectsView;
