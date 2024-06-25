import { useState } from "react";
import Layout from "../components/Layout";

const InfoView = () => {
    const [activeTab, setActiveTab] = useState<'basics' | 'bridgeGuides' | 'earnPoints'>('basics');

    return (
        <Layout noFooter>
            <div className="flex flex-col gap-[48px] mt-[72px] lg:mt-[80px] mb-[64px] lg:mb-[120px]">
                <div className="flex flex-col justify-evenly items-center">
                    <h1 className="mb-4 lg:mb-8 text-[48px]/[48px] lg:text-[120px]/[96px] text-white font-black uppercase text-center tracking-[-0.05em]">
                        Info
                    </h1>
                    <p className="text-lg text-center text-g500 tracking-[-0.01em]">
                        Everything you need to know
                    </p>
                </div>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    <button
                        className={`!px-[18px] py-2.5 !text-2xl/9 font-bold tracking-[-0.02em] capitalize rounded-lg ${activeTab === 'basics' ? 'bg-white/10 text-white' : 'text-g400 bg-transparent hover:!bg-white/10'}`}
                        onClick={() => setActiveTab('basics')}
                    >
                        The Basics
                    </button>
                    <button
                        className={`!px-[18px] py-2.5 !text-2xl/9 font-bold tracking-[-0.02em] capitalize rounded-lg ${activeTab === 'bridgeGuides' ? 'bg-white/10 text-white' : 'text-g400 bg-transparent hover:!bg-white/10'}`}
                        onClick={() => setActiveTab('bridgeGuides')}
                    >
                        Bridge Guides
                    </button>
                    <button
                        className={`!px-[18px] py-2.5 !text-2xl/9 font-bold tracking-[-0.02em] capitalize rounded-lg ${activeTab === 'earnPoints' ? 'bg-white/10 text-white' : 'text-g400 bg-transparent hover:!bg-white/10'}`}
                        onClick={() => setActiveTab('earnPoints')}
                    >
                        Earn Points
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-white text-2xl/7 font-bold mb-4 text-center">
                        Title lorem ipsum
                    </h3>
                    <p className="max-w-[670px] text-g500 text-lg tracking-negative1 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </Layout>
    )
};

export default InfoView;
