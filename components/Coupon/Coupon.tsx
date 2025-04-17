
type CouponProps = {
    label: string,
    children?: React.ReactNode
    className?: string
    size?: 'large' | 'medium' | 'small'
    theme?: 'primary' | 'secondary'
};

export default function Coupon({label, className,children,size='small',theme='primary'}: CouponProps) {
    const themes = {
        primary:'border-gray-200 bg-black text-white',
        secondary:'border-gray-400 bg-white'

    }

    const Sizes = {
        large: 'text-2xl',
        medium: 'text-lg',
        small: 'text-sm',
    }
    return (
        <span className={`border-2  border-dashed p-1 font-bold ${Sizes[size]} ${themes[theme]}  font-mono rounded-sm ${className}`}>
            <span>{label}</span>
            {children}
        </span>
    );
}