import { Button } from "./Button";
import Divider from "./Divider";

export type BridgeContentProps = {
    description: string;
    steps: string[];
    bridgeName?: string;
};

const BridgeContent = ({ description, steps, bridgeName }: BridgeContentProps) => {
    return (
        <div className="w-full flex flex-col my-7 md:px-12 lg:px-0 lg:mt-[-130px]">
            <div className="flex flex-col gap-7 justify-center text-center lg:text-start">
                {bridgeName && (
                    <p className="text-2xl/9 text-white font-bold tracking-negative2">
                        {bridgeName}
                    </p>
                )}
                <p className="text-lg text-g500 tracking-negative1">
                    {description}
                </p>
                <Divider variant="dark" />
                <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-7">
                    {steps.map((step, index) => (
                        <p key={index} className="text-base/6 text-white tracking-negative1">
                            {step}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex gap-4 justify-between mt-6 lg:mt-12 md:h-auto ">
                <Button
                    variant="outlined"
                    className="text-center !px-0 !flex-1 py-6"
                    onClick={() => {}}
                >
                    See full turorial
                </Button>
                <Button
                    variant="primary"
                    className="text-center !px-0 !flex-1 py-6"
                    onClick={() => {}}
                >
                    Launch Bridge
                </Button>
            </div>
        </div>
    )
};

export default BridgeContent;
