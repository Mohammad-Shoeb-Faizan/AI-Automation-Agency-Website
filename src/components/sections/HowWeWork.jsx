// src/components/sections/HowWeWork.jsx
import useFadeIn from '../../hooks/useFadeIn';
import SectionHeading from '../ui/SectionHeading';
import { processSteps } from '../../data/process';

export default function HowWeWork() {
    const ref = useFadeIn();

    return (
        <section id="process" className="relative py-24 lg:py-32" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="fade-section">
                    <SectionHeading
                        eyebrow="Our Process"
                        title="Architecture-first. Always."
                        description="We don't start with code — we start with your systems, your data, and your goals."
                    />
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

                    <div className="space-y-12 lg:space-y-0">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={step.id}
                                    className={`fade-section stagger-${index + 1} relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-12`}
                                >
                                    {/* Connector dot */}
                                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="w-4 h-4 rounded-full bg-accent border-4 border-surface shadow-glow" />
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`glass-card-hover p-8 lg:p-10 ${isEven ? 'lg:col-start-1' : 'lg:col-start-2'
                                            }`}
                                    >
                                        <span className="text-5xl font-black text-accent/10 leading-none block mb-4">
                                            {step.step}
                                        </span>
                                        <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
