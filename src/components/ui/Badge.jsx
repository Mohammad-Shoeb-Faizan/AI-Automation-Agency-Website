// src/components/ui/Badge.jsx
export default function Badge({ children, className = '' }) {
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-accent/20 ${className}`}
        >
            {children}
        </span>
    );
}
