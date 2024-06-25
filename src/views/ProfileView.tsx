import Layout from "../components/Layout";
import { missions } from "../types/Mission";
import MintCard from "../components/MintCard";

const MISSION_VIEW_COUNT = 3;

const ProfileView = () => {
    const overflowCount = missions.length - MISSION_VIEW_COUNT;

    return (
        <Layout noFooter>
            <div className="self-center flex flex-col mt-[72px] lg:mt-[80px] mb-[64px] lg:mb-[120px]">
                <div className="flex flex-col justify-evenly items-center mb-[64px]">
                    <h1 className="mb-4 lg:mb-8 text-[48px]/[48px] lg:text-[120px]/[96px] text-white font-black uppercase text-center tracking-[-0.05em]">
                        Profile
                    </h1>
                    <p className="text-lg text-center text-g500 tracking-[-0.01em]">
                        Home for you
                    </p>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-stretch p-6 lg:px-[120px] lg:py-10 bg-black/10 backdrop-blur-xl">
                    <div className="w-full flex justify-between border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 md:pr-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Bridged (XION)</span>
                            <span className="text-[40px]/[36px] text-white font-bold tracking-[-0.03em]">1,827</span>
                            <span className="text-base text-white/70 tracking-[-0.01em]">$18,276</span>
                        </div>
                        <button
                            className="bg-g900 text-white capitalize !rounded-2xl !px-5 !py-1.5 w-auto h-auto self-end"
                            onClick={() => {}}
                        >
                            Stake
                        </button>
                    </div>
                    <div className="w-full flex flex-col gap-3 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 md:px-6">
                        <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Staged (XION)</span>
                        <span className="text-[40px]/[36px] text-white font-bold tracking-[-0.03em]">1,827</span>
                        <span className="text-base text-white/70 tracking-[-0.01em]">$18,276</span>
                    </div>
                    <div className="w-full flex flex-col gap-3 border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 md:px-6">
                        <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Multiplier</span>
                        <span className="text-[40px]/[36px] text-white font-bold tracking-[-0.03em]">8x</span>
                    </div>
                    <div className="w-full flex flex-col gap-3 md:pl-6">
                        <span className="text-sm/4 text-white/50 font-bold tracking-[-0.01em]">Points</span>
                        <span className="text-[40px]/[36px] text-electric-lime tracking-[-0.03em]">34,986</span>
                        <span className="text-base text-electric-lime/70 tracking-[-0.01em]">#172645</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-around gap-6 md:gap-4 mt-[64px]">
                    <p className="w-full text-white text-2xl/7 font-bold">Your achivements</p>
                    {missions.map((mission, index) => {
                        if (index > MISSION_VIEW_COUNT) {
                            return null;
                        }

                        return (
                            <MintCard
                                key={mission.id}
                                upcoming={index === 2}
                                completed={index === 1}
                                onClick={() => { } }
                                overflowCount={index === MISSION_VIEW_COUNT ? overflowCount : undefined}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default ProfileView;
