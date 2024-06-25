import { FC, useState } from "react";
import Layout from "../components/Layout.tsx";
// import { useNavigate } from "react-router-dom";
// import useSession from "../hooks/useSession.ts";
import { useGetStatus } from "../hooks/useGetStatus.ts";
// import { useMissions } from "../hooks/useMissions.ts";
// import { PacmanLoader} from "react-spinners";
import { missions } from "../types/Mission.ts";
import MintCard from "../components/MintCard.tsx";
import DAppCard from "../components/DAppCard.tsx";
import { Drawer } from "../components/Drawer/index.tsx";
import NftDrawer from "../components/NftDrawer.tsx";
import useMediaQuery from "../hooks/useMediaQuery.tsx";
import CancelIcon from "../assets/svg/cancel.svg";
// import Loader  from "@/components/Loader/index.tsx";

/* const override: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    margin: '0 auto',
    zIndex: 1000,
}; */

const scrollMenuItems = ['All', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

const HomeView:FC = () => {
    // const session = useSession();
    // const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 640px)');
    useGetStatus();
    // const { missions } = useMissions();

    // const [loading, setLoading] = useState<boolean>(false);
    const [activeScrollMenuItem, setActiveScrollMenuItem] = useState<string>(scrollMenuItems[0]);
    const [activeMission, setActiveMission] = useState<string>('');

    /* if (!session) {
        return <div>Loading...</div>;
    } */

    // const color = "#CAF033";

    const getMission = (id: string) => {
        return missions.find((mission) => mission.id === id);
    };

    return (
        <Layout>
            <Drawer.Root open={!!activeMission} onOpenChange={() => setActiveMission('')}>
                <Drawer.Content
                    className="content bg-black/70 backdrop-blur-xl overflow-y-hidden md:border-l md:border-white/40"
                    origin="right"
                    radius={0}
                    size={isMobile ? '100%' : 480}
                    visible={!!activeMission}
                >
                    <div
                        className={`flex justify-end items-center px-4 pt-5 pb-7 md:pb-4`}
                    >
                        <Drawer.Close className="outline-none">
                            <CancelIcon className="drawer-close h-8 w-8" />
                        </Drawer.Close>
                    </div>
                    <NftDrawer nft={getMission(activeMission)} />
                </Drawer.Content>
            </Drawer.Root>
            {/* <Loader /> */}

            {/* <PacmanLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}

            <div className="flex flex-col mt-[72px] lg:mt-[80px] mb-[64px] lg:mb-[120px]">
                <div className="flex flex-col justify-evenly items-center mb-[64px]">
                    <h1 className="mb-4 lg:mb-8 text-[48px]/[48px] lg:text-[120px]/[96px] text-white font-black uppercase text-center tracking-[-0.05em] max-w-[900px]">
                        Tag line loremipsium
                    </h1>
                    <p className="text-lg text-center text-white-negative tracking-[-0.01em] max-w-[670px]">
                        Copy description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="mb-6 text-2xl/7 text-white">Active Mints</p>
                    <div className="flex flex-wrap justify-around gap-6 md:gap-4">
                        {missions.map((mission) => (
                            <MintCard key={mission.id} completed onClick={() => setActiveMission(mission.id)} />
                        ))}
                    </div>
                    <p className="mb-6 mt-[64px] text-2xl/7 text-white">Explore XION Ecosystem</p>
                    <div className="flex gap-6 mb-6 overflow-scroll">
                        {scrollMenuItems.map((item) => (
                            <div
                                key={item}
                                className={`py-2.5 px-[18px] rounded-lg bg-${activeScrollMenuItem === item ? 'white/10' : 'transparent'} text-2xl/9 text-${activeScrollMenuItem === item ? 'white' : 'g400'} font-bold tracking-negative2 whitespace-nowrap`}
                                onClick={() => setActiveScrollMenuItem(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-around gap-6 md:gap-4">
                        {missions.map((mission) => (
                            <DAppCard key={mission.id} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomeView;
