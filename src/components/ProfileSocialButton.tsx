import { LinkBreak1Icon } from "@radix-ui/react-icons";
import { FC } from "react";

type Props = {
    social: string;
    username: string | undefined;
    logo: React.FC<React.SVGProps<SVGElement>>;
    onClick: ()=>any;
    onUnlink: ()=>any;
    disabled?: boolean;
}

const ProfileSocialButton: FC<Props> = ({ social, username, logo: Logo, onClick, onUnlink, disabled }) => {
    if (username) return (
        <div className='socials-shadow flex items-center justify-between py-2 px-3 border-[0.5px] border-white rounded-lg'>
            <LinkBreak1Icon width="24" height="24" onClick={onUnlink} className='cursor-pointer'/>
            <span className="text-white">{username}</span>
            <Logo className="h-5 w-5 text-white" />
        </div>
    )

    else return (
        <button
            className="socials-shadow flex items-center justify-between py-2 px-3 border-[0.5px] border-white rounded-lg"
            onClick={onClick}
            disabled={disabled}
        >
            <span className="text-white">Connect {social}</span>
            <Logo className="h-5 w-5 text-white" />
        </button>
    )
}

export default ProfileSocialButton;