export type ButtonVariant = 'blue' | 'black' | 'white';

export type ButtonProps = {
    variant?: ButtonVariant;
    isLarge?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    variant = 'blue',
    isLarge = false,
    onClick,
    children,
    ...rest
}: ButtonProps) => {
    const variantStyles = (variant: ButtonVariant) => {
        switch (variant) {
            case 'blue':
                return 'bg-buttonBlue hover:bg-blue';
            case 'black':
                return 'bg-transparent hover:bg-walletBtnHoverBg';
            case 'white':
                return 'bg-transparent text-error !border-error hover:bg-error hover:text-white';
        }
    }

    const sizeStyles = isLarge ? 'text-[18px]/[28px] py-2.5 w-[144px] h-[47px]' : 'text-sm py-1.5 w-[123px] h-8';

    return (
        <button
            className={`rounded-lg border-[0.4px] border-white text-white ${sizeStyles} ${variantStyles(variant)}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
