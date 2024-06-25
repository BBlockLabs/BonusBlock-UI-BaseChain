import { Button } from "./Button";
import { Mission } from "@/types/Mission";
import MissionImg from "../assets/images/mission.png";

export type NftDrawerProps = {
    nft?: Mission;
    onComplete?: () => void;
};

const NftDrawer = ({ nft, onComplete }: NftDrawerProps) => {
    const { title = '', description = '' } = nft as Mission;

    const handleComplate = () => {
        onComplete && onComplete();
        console.log('Mission completed');
    }

    return (
        <div className="flex flex-col justify-between px-10 md:px-[64px] pb-[64px]">
            <img
                className="h-[295px] md:h-[332px] w-auto rounded-2xl bg-black"
                src={MissionImg}
                alt="NFT image"
            />
            <p
                className="mt-7 text-[32px]/[38px] text-white text-center uppercase font-light tracking-negative2"
            >
                {title}
            </p>
            <div className="relative mt-5 h-[290px]">
                <div className="absolute inset-0 overflow-y-auto text-base text-g500/50 text-center tracking-negative1">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black to-transparent" />
            </div>
            <Button
                variant="primary"
                className="text-sm/4 text-center tracking-negative2 !px-0 !flex-1"
                onClick={handleComplate}
            >
                Collect now
            </Button>
        </div>
    )
}

export default NftDrawer;
