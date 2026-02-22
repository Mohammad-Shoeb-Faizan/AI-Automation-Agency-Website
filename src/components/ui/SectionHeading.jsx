// src/components/ui/SectionHeading.jsx
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
    const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

    return (
        <div className={`max-w-3xl mb-16 ${alignment}`}>
            {eyebrow && (
                <span className="inline-block text-accent-light text-sm font-semibold tracking-widest uppercase mb-4">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                {title}
            </h2>
            {description && (
                <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
            )}
        </div>
    );
}
