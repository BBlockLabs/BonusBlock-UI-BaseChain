import { RecentJoin } from "../utils/mockData";

export type RecentJoinsTableProps = {
    data: RecentJoin[];
};

const RecentJoinsTable = ({ data }: RecentJoinsTableProps) => {
    return (
        <div className="flex flex-col gap-7 px-7 py-8">
            {data.map((recent) => (
                <div className="flex justify-between items-center gap-[60px]">
                    <div className="flex items-center gap-3">
                        <img
                            src={recent.avatar}
                            alt="recent"
                            className="h-10 w-auto rounded-full"
                        />
                        <div className="flex flex-col justify-between">
                            <span className="text-white text-xs/5 tracking-negative1">
                                {recent.name}
                            </span>
                            <span className="text-g500 text-xs/5 tracking-negative1">
                                Invited by {recent.invitedBy}
                            </span>
                        </div>
                    </div>
                    <span className="self-start text-g800 text-xs/5 tracking-negative1 text-right">
                        {recent.time}
                    </span>
                </div>
            ))}
        </div>
    )
};

export default RecentJoinsTable;
