// src/components/sections/CTA.jsx
import useFadeIn from '../../hooks/useFadeIn';
import Button from '../ui/Button';

export default function CTA() {
    const ref = useFadeIn();

    return (
        <section id="cta" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="glow-orb w-[600px] h-[600px] bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <div className="fade-section glass-card p-12 lg:p-20">
                    <span className="inline-block text-accent-light text-sm font-semibold tracking-widest uppercase mb-4">
                        Let&apos;s Build Together
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                        If your business depends on
                        <br />
                        manual processes,{' '}
                        <span className="gradient-text">it&apos;s time to redesign the system.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Book an Automation Audit and discover where operational friction is costing you time and revenue.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg">
                            Book Automation Audit
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Button>
                        <Button variant="ghost" size="lg" href="mailto:shoebfaizan71@gmail.com">
                            shoebfaizan71@gmail.com
                        </Button>
                    </div>

                    <p className="mt-8 text-xs text-gray-500">
                        No commitment · Free automation audit · Response within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
}
