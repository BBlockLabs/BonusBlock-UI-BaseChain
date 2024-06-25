export type InputProps = {
    label?: string;
    className?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, value, onChange, ...rest }: InputProps) => {
    return (
        <div className="flex flex-col w-full">
            {label && <label
                className="mb-1 text-g500 text-xs/5 tracking-[-0.01em]"
            >
                {label}
            </label>}
            <input
                className="pb-3 text-sm text-g0 border-b border-g500 bg-transparent placeholder:text-g900 appearance-none focus:outline-none"
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    )
}
