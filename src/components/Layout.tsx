import {FC, ReactNode, useState} from "react";
import PageFooter from "./PageFooter.tsx";
import PageHeader from "./PageHeader.tsx";
import { Drawer } from "./Drawer/index.tsx";
import Profile from "./Profile.tsx";
import CancelSVG from '../assets/svg/cancel.svg';
import XionLogo from '../assets/logo/xion.svg';
import useMediaQuery from "../hooks/useMediaQuery.tsx";

export interface LayoutProps {
    overflowHidden?: boolean;
    noFooter?: boolean;
    children: ReactNode;
}

const Layout:FC<LayoutProps> = ({
    overflowHidden,
    noFooter,
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
                    className="content bg-black md:bg-black/70 md:backdrop-blur-xl overflow-y-hidden md:border-l md:border-white/40"
                    origin="right"
                    radius={0}
                    size={isMobile ? '100%' : 480}
                    visible={isDrawerOpen}
                >
                    <div
                        className={`flex justify-between ${!isMobile && '!justify-end'} items-center px-4 pt-5 pb-7 md:pb-4 bg-black md:bg-inherit border-b border-white/10 md:border-none`}
                    >
                        {isMobile && <XionLogo className="h-8 w-auto" />}
                        <Drawer.Close className="outline-none">
                            <CancelSVG className="drawer-close h-8 w-8" />
                        </Drawer.Close>
                    </div>
                    <Profile />
                </Drawer.Content>
            </Drawer.Root>

            <div
                className={`mx-auto h-screen flex flex-col px-4 md:px-10 pt-5 bg-landing bg-cover bg-center bg-no-repeat ${overflow}`}
            >
                <PageHeader onClick={drawerOpen} />
                <div className="w-full max-w-[1365px] flex-1 self-center">
                    {children}
                </div>
                {!noFooter && <PageFooter />}
            </div>
        </>
    );
}

export default Layout;