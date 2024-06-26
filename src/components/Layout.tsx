import {FC, ReactNode, useState} from "react";
import PageFooter from "./PageFooter.tsx";
import PageHeader from "./PageHeader.tsx";
import { Drawer } from "./Drawer/index.tsx";
import Profile from "./Profile.tsx";
import CancelSVG from '../assets/svg/cancel.svg';
import useMediaQuery from "../hooks/useMediaQuery.tsx";

export interface LayoutProps {
    overflowHidden?: boolean;
    noFooter?: boolean;
    isFullWidth?: boolean;
    children: ReactNode;
}

const Layout:FC<LayoutProps> = ({
    overflowHidden,
    noFooter,
    isFullWidth,
    children
}) => {
    const isMobile = useMediaQuery('(max-width: 640px)');

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const drawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const overflow = overflowHidden ? 'overflow-y-hidden' : '';

    return (
        <>
            <Drawer.Root open={isDrawerOpen} onOpenChange={drawerOpen}>
                <Drawer.Content
                    className="content bg-black/70 overflow-y-hidden"
                    origin="right"
                    radius={0}
                    size={isMobile ? '100%' : 378}
                    visible={isDrawerOpen}
                >
                    <div
                        className="flex justify-between items-center px-6 pt-5 bg-black"
                    >
                        <h2 className="text-white text-xl/[30px] font-medium">Your Account</h2>
                        <Drawer.Close className="outline-none">
                            <CancelSVG className="drawer-close h-6 w-auto" />
                        </Drawer.Close>
                    </div>
                    <Profile />
                </Drawer.Content>
            </Drawer.Root>

            <div
                className={`mx-auto h-screen flex flex-col bg-quests bg-cover bg-no-repeat ${overflow}`}
            >
                <PageHeader onClick={drawerOpen} />
                <div className={`w-full ${!isFullWidth && 'max-w-[1365px]'} flex-1 self-center`}>
                    {children}
                </div>
                {!noFooter && <PageFooter />}
            </div>
        </>
    );
}

export default Layout;