import { useState } from "react";
import Layout from "../components/Layout";
import useMediaQuery from "../hooks/useMediaQuery";
import BridgeRow from "../components/BridgeRow";
import BridgeContent from "../components/BridgeContent";
import { mockBridgeData } from "../utils/mockData";
import SquidWidget from "../components/SquidWidget";

const getActiveBridgeContent = (activeBridge: string) => {
    const bridge = mockBridgeData.find((bridge) => bridge.id === activeBridge);
    if (!bridge) return null;

    return (
        <BridgeContent
            description={bridge.description}
            steps={bridge.steps}
            bridgeName={bridge.name}
        />
    );
}

const BridgeView = () => {
    const isSmallScreen = useMediaQuery('(max-width: 960px)');

    const [activeTab, setActiveTab] = useState<'swap' | 'bridges'>('swap');
    const [activeBridge, setActiveBridge] = useState<string>('');

    const activeTabAlignment = activeTab === 'swap' ? 'xl:flex-row' : 'lg:flex-row';

    return (
        <Layout noFooter>
            <div className={`h-full flex flex-col ${activeTabAlignment} items-center lg:justify-between mt-8 md:mt-10 lg:mt-14 lg:mx-[40px] xl:mx-[80px] lg:gap-10`}>
                <div className={`w-full flex flex-col justify-center lg:items-start lg:self-start`}>
                    <div className={`flex justify-center gap-6`}>
                        <button
                            className={`!px-[18px] py-2.5 !text-2xl/9 font-bold tracking-[-0.02em] capitalize rounded-lg ${activeTab === 'swap' ? 'text-g0 !bg-white/10' : 'text-g400 !bg-transparent hover:!bg-white/10'}`}
                            onClick={() => setActiveTab('swap')}
                        >
                            Swap
                        </button>
                        <button
                            className={`!px-[18px] py-2.5 !text-2xl/9 font-bold tracking-[-0.02em] capitalize rounded-lg ${activeTab === 'bridges' ? 'text-g0 !bg-white/10' : 'text-g400 !bg-transparent hover:!bg-white/10'}`}
                            onClick={() => setActiveTab('bridges')}
                        >
                            Bridges
                        </button>
                    </div>
                    {activeTab === 'swap' ? (
                        <>
                            <h1
                                className="w-full mt-12 xl:mt-[120px] text-[48px]/[48px] lg:text-[120px]/[96px] font-black text-g0 text-center xl:text-start uppercase tracking-[-0.05em]"
                            >
                                Onboard $XION
                            </h1>
                            <p className="w-full mt-4 xl:mt-8 text-lg text-g500 text-center xl:text-start">
                                Copy description lorem ipsum dolor sit amet, consectetur
                            </p>
                        </>
                    ) : (
                        <div className="w-full flex flex-col items-center lg:items-start gap-3 mt-12">
                            {mockBridgeData.map((bridge) => (
                                <>
                                    <BridgeRow
                                        key={bridge.id}
                                        name={bridge.name}
                                        chain={bridge.chain}
                                        isActive={activeBridge === bridge.id}
                                        onClick={() => setActiveBridge(activeBridge === bridge.id ? '' : bridge.id)}
                                    />
                                    {activeBridge === bridge.id && isSmallScreen && (
                                        <BridgeContent description={bridge.description} steps={bridge.steps} />
                                    )}
                                </>
                            ))}
                        </div>
                    )}
                </div>
                    {activeTab === 'swap' ? (
                        <SquidWidget />
                    ) : !isSmallScreen && activeBridge && (
                        <>
                            {getActiveBridgeContent(activeBridge)}
                        </>
                    )}
            </div>
        </Layout>
    )
};

export default BridgeView;
