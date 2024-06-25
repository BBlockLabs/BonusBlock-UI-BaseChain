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
    const getNavLinkClass = ({ isActive }) => `text-sm/4 uppercase tracking-[0.02em] ${isActive && 'underline'}`;

    return (
        <header className="flex justify-between items-center text-white">
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
                    <nav className="nav-flex gap-12 items-center space-bg-black rounded-full text-white pl-4 prx-4">
                    <NavLink to="/home" className={getNavLinkClass}>Quests</NavLink>
                    <NavLink to="/home" className={getNavLinkClass}>Projects</NavLink>
                    <NavLink to="/home" className={getNavLinkClass}>Rewards</NavLink>
                    <NavLink to="/beforestart" className={getNavLinkClass}>Leaderboard</NavLink>
                    {/* <NavLink to="/bridge" className={getNavLinkClass}>Bridge</NavLink>
                    <NavLink to="/stake" className={getNavLinkClass}>Stake</NavLink>
                    <NavLink to="/leaderboard" className={getNavLinkClass}>Leaderboard</NavLink>
                    <NavLink to="/info" className={getNavLinkClass}>Info</NavLink> */}
                    </nav>
                    <div className="flex gap-6 items-center">
                        <MetamaskNotifiContextWrapper>
                            <MetamaskCard/>
                        </MetamaskNotifiContextWrapper>
                        <span
                            className="text-sm/4 text-electric-lime font-bold uppercase tracking-[-0.01em]"
                        >
                            34,968 pts
                        </span>
                        <button onClick={onClick}>
                            <img src={ProfileImage} alt="Profile" className="rounded-full h-10 w-10"/>
                        </button>
                    </div>
                </>
            )}
        </header>
    )
}

export default PageHeader;
