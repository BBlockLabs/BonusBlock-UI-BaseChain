import Staker from '../assets/svg/badges/staker.svg';
import LiquidityProvider from '../assets/svg/badges/liquidityProvider.svg';
import Hodler from '../assets/svg/badges/hodler.svg';
import YieldFarmer from '../assets/svg/badges/yieldFarmer.svg';
import SmolTrader from '../assets/svg/badges/smolTrader.svg';
import RealTrader from '../assets/svg/badges/realTrader.svg';
import BasedTrader from '../assets/svg/badges/basedTrader.svg';

interface GemBadgeProps {
    gemNumber: number; // Number from 1 to 7
    xpNumber: number;
    gemColor?: string;
    gemBgColor?: string;
    disabled?: boolean;
}

const GemBadge = ({ gemNumber, xpNumber, gemColor, gemBgColor, disabled }: GemBadgeProps) => {
    const Gems = [Staker, LiquidityProvider, Hodler, YieldFarmer, SmolTrader, RealTrader, BasedTrader];

    const SelectedGem = Gems[gemNumber - 1] || Gems[0];
    const svgColor = gemColor || 'text-white';
    const disabledStyle = disabled ? 'opacity-20' : '';
    const bgColor = gemBgColor || 'bg-cardBg';

    return (
        <div
            className={`flex flex-col items-center justify-center rounded-full min-w-44 h-44 ${bgColor} ${disabledStyle}`}
        >
            <SelectedGem className={`w-[92px] h-[92px] text-yellow-100 ${svgColor}`} />
            <div className="text-white text-center mt-1">
                <span className="text-base/[18px] font-black tracking-[-0.01em]">{xpNumber.toLocaleString()}</span>
                <br />
                <span className="text-[9px]/[10px] font-medium tracking-[-0.01em]">COMMUNITY XP</span>
            </div>
        </div>
    );
}

export default GemBadge;
