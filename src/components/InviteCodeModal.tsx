import {
  Root,
  DialogProps,
  Portal,
  Overlay,
  Content,
  Title,
  Close
} from '@radix-ui/react-dialog';
import CloseIcon from '../assets/svg/cancel.svg';
import Rings from '../assets/svg/inviteModalBg.svg';
import { useState } from 'react';

const InviteCodeModal = ({ ...rest }: DialogProps) => {
    const [referralCode, setReferralCode] = useState('');

    const hasReferralCode = false;

    const clearInput = () => {
        setReferralCode('');
    };

    return (
        <Root {...rest}>
            <Portal>
                <Overlay className="fixed inset-0 overflow-y-auto z-50 bg-black/30 backdrop-blur-lg" />
                <Content className="fixed inset-0 flex items-center justify-center z-[100]">
                    <div
                        className="relative w-[1014px] h-[551px] flex flex-col gap-[87px] justify-center items-center m-auto bg-modalBg/30  border border-white/30 rounded-3xl pt-8 pb-[64px] px-[334px] z-10"
                    >
                        <Close className="absolute top-8 sm:top-6 right-8 sm:right-6 z-10">
                            <CloseIcon className="modal-close h-6 w-auto" />
                        </Close>
                        {hasReferralCode ? (
                            <>
                                <Title
                                    className="mb-3 text-white text-[32px]/[34px] font-medium"
                                >
                                    Type your referral code
                                </Title>
                                <div
                                    className="w-full flex justify-between items-center gap-2.5 rounded-lg border border-gray-300 bg-white py-2 px-4 z-10"
                                >
                                    <input
                                        id="referral-code"
                                        type="text"
                                        className="w-full bg-transparent text-gray-500 text-sm/[21px] appearance-none focus:outline-none"
                                        value={referralCode}
                                        onChange={(e) => setReferralCode(e.target.value)}
                                    />
                                    <CloseIcon onClick={clearInput} className="h-5 w-auto text-gray-500 cursor-pointer" />
                                </div>
                                <button
                                    type="button"
                                    className="w-[346px] h-[105px] py-4 px-6 rounded border-white border-[0.4px] text-white text-lg bg-transparent hover:bg-walletBtnHoverBg/70 z-10"
                                    onClick={() => {}}
                                >
                                    <div className="flex items-center justify-center gap-2.5">
                                        Let's go!
                                    </div>
                                </button>
                            </>
                        ) : (
                            <>
                                <Title
                                    className="mb-3 text-white text-[32px]/[34px] text-center"
                                >
                                    <p className="font-medium">Have an invite</p> or referral code?
                                </Title>
                                <button
                                    type="button"
                                    className="w-[346px] h-[105px] py-4 px-6 rounded border-white border-[0.4px] text-white text-lg bg-transparent hover:bg-walletBtnHoverBg"
                                    onClick={() => {}}
                                >
                                    <div className="flex items-center justify-center gap-2.5">
                                        Connect inside
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    className="w-[346px] h-[105px] py-4 px-6 rounded border-white border-[0.4px] text-white text-lg bg-transparent hover:bg-walletBtnHoverBg mb-[64px]"
                                    onClick={() => {}}
                                >
                                    <div className="flex items-center justify-center gap-2.5">
                                        Find one in discord
                                    </div>
                                </button>
                            </>
                        )}
                        <Rings className="absolute w-full h-full top-0 left-0 z-0 rounded-3xl" />
                    </div>
                </Content>
            </Portal>
        </Root>
    );
};

export default InviteCodeModal;
