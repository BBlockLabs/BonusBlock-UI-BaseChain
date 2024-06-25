export type ButtonVariant = 'primary' | 'outlined' | 'error';

export type ButtonProps = {
    variant?: ButtonVariant;
    bgColor?: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = 'primary', className, onClick, disabled, children, ...rest }: ButtonProps) => {
    const variantStyles = (variant: ButtonVariant) => {
        switch (variant) {
            case 'primary':
                return 'bg-white border-white text-black hover:bg-transparent hover:border-white hover:text-white';
            case 'outlined':
                return 'bg-transparent border-white/10 text-white hover:border-white';
            case 'error':
                return 'bg-transparent text-error !border-error hover:bg-error hover:text-white';
        }
    }

    const disabledStyles = disabled && '!text-g800 !bg-g500 !border-g500 cursor-not-allowed';

    return (
        <button
            className={`px-[60px] py-3 rounded-lg uppercase text-[14px]/[16px] tracking-[0.02em] border ${variantStyles(variant)} ${className} ${disabledStyles}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
