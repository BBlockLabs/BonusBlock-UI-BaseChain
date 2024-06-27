import { NavLink } from 'react-router-dom';
import { FC } from "react";
import { MetamaskNotifiContextWrapper } from "../components/Notifi/MetamaskNotifiContextWrapper.tsx";
import { MetamaskCard } from "../components/Notifi/MetamaskCard.tsx";
import useMediaQuery from '../hooks/useMediaQuery.tsx';
import BaseChainLogo from '../assets/logo/BaseChain.svg';
import MenuIcon from '../assets/svg/menu.svg';
import ProfileImage from '../assets/images/profile.jpg';

export interface PageHeaderProps {
    onClick: () => void;
}

const PageHeader:FC<PageHeaderProps> = ({ onClick }) => {
    const isSmallScreen = useMediaQuery('(max-width: 960px)');

    // @ts-expect-error isActive = any
    const getNavLinkClass = ({ isActive }) => `px-4 py-6 ${isActive && 'text-gold'}`;

    return (
        <header className="flex justify-between items-center text-white px-[60px] py-2">
            <BaseChainLogo className="h-8 w-auto"/>
            {isSmallScreen ? (
                <div className="flex gap-6 items-center">
                    <MetamaskNotifiContextWrapper>
                        <MetamaskCard/>
                    </MetamaskNotifiContextWrapper>
                    <MenuIcon className="h-6 w-6" onClick={onClick} />
                </div>
            ) : (
                <>
                    <nav
                        className="nav-flex gap-[53px] items-center space-bg-black rounded-full text-white text-[20px]/[30px] tracking-widest capitalized"
                    >
                        <NavLink to="/quests" className={getNavLinkClass}>Quests</NavLink>
                        <NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink>
                        <NavLink to="/rewards" className={getNavLinkClass}>Rewards</NavLink>
                        <NavLink to="/staking" className={getNavLinkClass}>Staking</NavLink>
                        <NavLink to="/leaderboard" className={getNavLinkClass}>Leaderboard</NavLink>
                        {/* <NavLink to="/bridge" className={getNavLinkClass}>Bridge</NavLink>
                        <NavLink to="/stake" className={getNavLinkClass}>Stake</NavLink>
                        <NavLink to="/leaderboard" className={getNavLinkClass}>Leaderboard</NavLink>
                        <NavLink to="/info" className={getNavLinkClass}>Info</NavLink> */}
                    </nav>
                    <div className="flex gap-[10px] items-center">
                        <MetamaskNotifiContextWrapper>
                            <MetamaskCard/>
                        </MetamaskNotifiContextWrapper>
                        <div
                            className="flex gap-[9px] items-center py-1.5 px-4 border border-gold rounded-sm cursor-pointer"
                            onClick={onClick}
                        >
                            <span className="text-xs text-white">0x1234567890</span>
                            <img src={ProfileImage} alt="Profile" className="rounded-full h-6 w-6"/>
                        </div>
                    </div>
                </>
            )}
        </header>
    )
}

export default PageHeader;
