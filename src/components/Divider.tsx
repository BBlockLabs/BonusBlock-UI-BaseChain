export type DividerProps = {
  variant: 'dark' | 'light' | 'electric-lime';
} & React.HTMLProps<HTMLHRElement>;

const getBorderColor = (variant: DividerProps['variant']) => {
  switch (variant) {
    case 'dark':
      return 'border-white/20';
    case 'light':
      return 'border-white/10';
    case 'electric-lime':
      return 'border-electric-lime';
  }
};

const Divider = ({ variant, className, ...rest }: DividerProps) => (
  <hr className={`border-t ${getBorderColor(variant)} ${className}`} {...rest} />
);

export default Divider;
