// src/components/sections/Metrics.jsx
import useFadeIn from '../../hooks/useFadeIn';
import SectionHeading from '../ui/SectionHeading';
import { metrics, clientLogos } from '../../data/metrics';

export default function Metrics() {
    const ref = useFadeIn();

    return (
        <section id="metrics" className="relative py-24 lg:py-32 bg-surface-50/50" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="fade-section">
                    <SectionHeading
                        eyebrow="By the Numbers"
                        title="Trusted by teams who refuse to settle."
                    />
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.id}
                            className={`fade-section stagger-${index + 1} text-center p-8 glass-card-hover`}
                        >
                            <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">
                                {metric.value}
                                <span className="text-2xl">{metric.suffix}</span>
                            </div>
                            <p className="text-sm text-gray-400">{metric.label}</p>
                        </div>
                    ))}
                </div>

                {/* Client logos */}
                <div className="fade-section">
                    <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">
                        Companies we've worked with
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                        {clientLogos.map((logo) => (
                            <span
                                key={logo}
                                className="text-lg font-semibold text-gray-600 hover:text-gray-400 transition-colors duration-300 cursor-default"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
