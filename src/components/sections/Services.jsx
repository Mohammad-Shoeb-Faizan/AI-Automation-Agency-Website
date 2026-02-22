// src/components/sections/Services.jsx
import useFadeIn from '../../hooks/useFadeIn';
import SectionHeading from '../ui/SectionHeading';
import ServiceIcon from '../ui/ServiceIcon';
import { services } from '../../data/services';

export default function Services() {
    const ref = useFadeIn();

    return (
        <section id="services" className="relative py-24 lg:py-32" ref={ref}>
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="fade-section">
                    <SectionHeading
                        eyebrow="What We Build"
                        title="End-to-end AI automation, architected for scale."
                        description="We don't just wire up APIs. We design resilient systems that grow with your business."
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`fade-section stagger-${index + 1} glass-card-hover p-8 lg:p-10 group`}
                        >
                            <div className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-subtle flex items-center justify-center text-accent-light group-hover:bg-accent/20 transition-colors duration-300">
                                    <ServiceIcon icon={service.icon} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm mb-5">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="inline-flex items-center px-3 py-1 rounded-lg bg-surface-200/80 text-xs text-gray-400 border border-white/[0.04]"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
