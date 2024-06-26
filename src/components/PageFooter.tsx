import { FC } from "react";
import FooterSocials from "./FooterSocials.tsx";

interface PageFooterProps {
    backgroundColor?: string;
    textColor?: string;
    iconColor?: string;
}

const PageFooter: FC<PageFooterProps> = ({ backgroundColor = 'bg-transparent', textColor = 'text-gray-400', iconColor = 'text-icon' }) => {
    return (
        <footer className={`pb-[26px] px-[100px] ${backgroundColor}`}>
            <div className="flex justify-between items-center ">
                <div className={`${iconColor}`}>
                    <FooterSocials
                        socials={["twitter", "discord"]}
                        links={['https://twitter.com/KasuFinance', 'https://discord.com/invite/jm2V7vUg99']}
                    />
                </div>
                <div className={`text-xs/[18px] text-gray-400 font-bold flex bonusBlockLogoFooterWrapper`}>
                    Provided by BonusBlock
                </div>
            </div>
            <div className={`text-xs/[18px] mt-4 ${textColor}`}>
                The information on this website is intended solely for general informational purposes and should not be regarded as a formal offer to buy or sell any securities in any jurisdiction, legal or investment advice, or tax advice. If you require legal, investment, or tax advice, please seek the guidance of a professional advisor. The BonusBlock is presently under development and may be subject to modification. As a result, the protocol documentation and website content may not accurately reflect the current state of the network at any given time. The network documentation and website content are not final and are subject to change.
            </div>
        </footer>
    );
};

export default PageFooter;
