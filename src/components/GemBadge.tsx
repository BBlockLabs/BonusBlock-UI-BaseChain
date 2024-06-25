import Gem1 from '../assets/gems/gem_1.svg';
import Gem2 from '../assets/gems/gem_2.svg';
import Gem3 from '../assets/gems/gem_3.svg';
import Gem4 from '../assets/gems/gem_4.svg';
import Gem5 from '../assets/gems/gem_5.svg';
import Gem6 from '../assets/gems/gem_6.svg';
import Gem7 from '../assets/gems/gem_7.svg';

interface GemBadgeProps {
    gemNumber: number; // Number from 1 to 7
    xpNumber: number;
}

const GemBadge: React.FC<GemBadgeProps> = ({ gemNumber, xpNumber }) => {
    const Gems = [Gem1, Gem2, Gem3, Gem4, Gem5, Gem6, Gem7];

    const SelectedGem = Gems[gemNumber - 1] || Gems[0];

    return (
        <div className="flex flex-col items-center justify-center bg-black rounded-full min-w-48 h-48">
            <SelectedGem className="w-24 h-24 text-yellow-100" />
            <div className="text-white text-center mt-1">
                <span className="text-base font-bold">{xpNumber.toLocaleString()}</span>
                <br />
                <span className="text-xs">COMMUNITY XP</span>
            </div>
        </div>
    );
}

export default GemBadge;
