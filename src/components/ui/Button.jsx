// src/components/ui/Button.jsx
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    ...props
}) {
    const base =
        'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none';

    const variants = {
        primary:
            'bg-gradient-accent text-white hover:shadow-glow hover:brightness-110 active:scale-[0.98]',
        secondary:
            'bg-surface-200 text-white border border-white/10 hover:border-accent/30 hover:bg-surface-300 active:scale-[0.98]',
        ghost:
            'text-gray-400 hover:text-white hover:bg-white/5 active:scale-[0.98]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm gap-2',
        md: 'px-6 py-3 text-sm gap-2',
        lg: 'px-8 py-4 text-base gap-3',
    };

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (props.onClick) props.onClick(e);
    };

    if (href) {
        return (
            <a href={href} onClick={handleClick} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
