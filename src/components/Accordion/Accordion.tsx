import * as RadixAccordion from '@radix-ui/react-accordion';
import CashIcon from '../../assets/svg/cash.svg';
import Triangle from '../../assets/svg/triangle.svg';

import './Accordion.css';
import QuestCard from '../QuestCard';

const accordionItems = ['DeFi', 'Memes', 'RWA', 'NFT', 'Gaming'];

const Accordion = () => {
    return (
        <RadixAccordion.Root className="w-full flex flex-col gap-7" type="single" collapsible>
            {accordionItems.map((item) => (
                <RadixAccordion.Item className="accordion-item shadow" value={item} key={item}>
                    <RadixAccordion.Trigger
                        className="accordion-trigger"
                    >
                        <div className="flex items-center gap-[58px]">
                            <CashIcon className="accordion-trigger-icon w-10 h-auto" />
                            <span className="text-white text-[25px]/[30px]">{item}</span>
                        </div>
                        <div className="accordion-trigger-contain flex items-center gap-2.5">
                            <span className="text-white text-[30px]/[48px]">0/25</span>
                            <Triangle className="triangle w-4 h-4" />
                        </div>
                    </RadixAccordion.Trigger>
                    <RadixAccordion.Content className="AccordionChevron accordion-content">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <QuestCard key={i} />
                        ))}
                    </RadixAccordion.Content>
                </RadixAccordion.Item>
            ))}
        </RadixAccordion.Root>
    )
};

export default Accordion;
