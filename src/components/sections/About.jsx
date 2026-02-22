// src/components/sections/About.jsx
import useFadeIn from '../../hooks/useFadeIn';
import SectionHeading from '../ui/SectionHeading';

const expertise = [
    'LMS automation pipelines',
    'CRM synchronization systems',
    'Real-time dashboards',
    'Payment integrations',
    'Data intelligence platforms',
];

export default function About() {
    const ref = useFadeIn();

    return (
        <section id="about" className="relative py-24 lg:py-32" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="fade-section">
                    <SectionHeading
                        eyebrow="About FlowForge AI"
                        title="Founder-led. Architecture-driven."
                    />
                </div>

                <div className="fade-section max-w-3xl mx-auto">
                    <div className="glass-card p-10 lg:p-14">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            FlowForge AI is a founder-led automation consultancy focused on engineering scalable operational systems.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-8">
                            Led by a full-stack developer and automation engineer with hands-on experience building:
                        </p>

                        <ul className="space-y-3 mb-8">
                            {expertise.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8 border-t border-white/[0.06] space-y-4">
                            <p className="text-gray-400 leading-relaxed">
                                Every solution is designed with long-term reliability, clarity, and business scalability in mind.
                            </p>
                            <p className="text-white font-medium text-lg">
                                We approach automation as <span className="gradient-text">system architecture</span> — not isolated scripts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
