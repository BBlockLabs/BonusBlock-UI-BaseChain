import { User } from "../utils/mockData";

export type MobileLeaderboardProps = {
    data: User[];
};

const MobileLeaderboard = ({ data }: MobileLeaderboardProps) => {
    return (
        <div className="mobile-leaderboard overflow-y-auto backdrop-blur-xl">
            {data.map((user, index) => {
                const isCurrentUser = index === 0;
                const rowBackground = isCurrentUser ? 'bg-electric-lime' : 'bg-transparent';
                const textColor = isCurrentUser ? 'text-black' : 'text-white';

                return (
                    <div
                        key={user.rank}
                        className={`flex flex-col justify-between gap-3 px-4 pt-6 ${rowBackground} rounded-2xl`}
                    >
                        <div className="flex justify-between">
                            <span className={`${textColor} text-lg/6 font-bold tracking-negative2`}>
                                {user.rank}
                            </span>
                            <div className="flex items-center gap-4">
                                <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                                <span className={`${textColor} text-lg/6 font-bold tracking-negative2`}>
                                    {user.name}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-g800 text-sm tracking-negative1">Invited By</span>
                            <span className={`${textColor} text-sm tracking-negative1`}>{user.invitedBy}</span>
                        </div>
                        <div className="flex justify-between pb-6 border-b border-white/10">
                            <span className="text-g800 text-sm tracking-negative1">Points</span>
                            <span className={`${textColor} text-sm tracking-negative1`}>{user.points}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MobileLeaderboard;
