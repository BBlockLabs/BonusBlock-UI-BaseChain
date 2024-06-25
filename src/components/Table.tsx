import { User } from "../utils/mockData";

export type TableProps = {
    data: User[];
};

const Table = ({ data }: TableProps) => {
    return (
        <div className="bg-transparent overflow-x-auto">
            <table className="table-auto w-full border-none">
                <thead className="text-variant text-xs/[14px] tracking-wider uppercase">
                    <tr>
                        <th className="pl-4 pb-4 text-center">Rank</th>
                        <th className="pb-4 text-start">Name</th>
                        <th className="pb-4 text-right">Invited by</th>
                        <th className="pr-4 pb-4 text-right">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        const isCurrentUser = index === 0;
                        const rowBackground = isCurrentUser ? 'bg-electric-lime' : 'bg-transparent';
                        const textColor = isCurrentUser ? 'text-black' : 'text-white';

                        return (
                            <tr key={index} className={`text-lg/6 ${textColor} font-bold tracking-negative2 text-center border-b border-white/10 ${rowBackground}`}>
                                <td className="pl-4 py-5">{row.rank}</td>
                                <td className="py-5 text-start">
                                    <div className="flex items-center gap-4">
                                        <img src={row.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                                        {row.name}
                                    </div>
                                </td>
                                <td className="py-5 text-sm font-normal tracking-negative1 text-right">{row.invitedBy}</td>
                                <td className="pr-4 py-5 text-sm font-normal tracking-negative1 text-right">{row.points}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
