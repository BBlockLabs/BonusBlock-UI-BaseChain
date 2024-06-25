import {
    Root,
    DialogProps,
    Portal,
    Overlay,
    Content,
    Title,
    Description,
    Close
} from '@radix-ui/react-dialog';
import CloseIcon from '../assets/svg/cancel.svg';

export type ModalProps = {
    title: string;
    description: string;
} & DialogProps;

const Modal = ({ title, description, children, ...rest }: ModalProps) => {
    return (
        <Root {...rest}>
            <Portal>
                <Overlay className="fixed inset-0 overflow-y-auto z-50 bg-black/50 backdrop-blur-lg" />
                <Content className="fixed inset-0 flex items-center justify-center z-[100]">
                    <div className="relative w-full h-full flex flex-col justify-center items-center sm:w-[480px] sm:h-auto modal-shadow m-auto bg-black/70 sm:rounded-[48px] p-12">
                        <Title
                            className="mb-3 text-white text-[32px]/[38px] font-light tracking-negative2 text-center sm:uppercase"
                        >
                            {title}
                        </Title>
                        <Description
                            className="mb-12 text-variant/50 text-base tracking-negative1 text-center"
                        >
                            {description}
                        </Description>
                        <Close className="absolute top-8 sm:top-6 right-8 sm:right-6">
                            <CloseIcon className="modal-close h-6 w-auto" />
                        </Close>
                        {children}
                    </div>
                </Content>
            </Portal>
        </Root>
    );
};

export default Modal;
