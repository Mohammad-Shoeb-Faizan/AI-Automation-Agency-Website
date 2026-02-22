// src/components/sections/CaseStudies.jsx
import useFadeIn from '../../hooks/useFadeIn';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudies() {
    const ref = useFadeIn();

    return (
        <section id="case-studies" className="relative py-24 lg:py-32 bg-surface-50/50" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="fade-section">
                    <SectionHeading
                        eyebrow="Case Studies"
                        title="Real systems. Measurable outcomes."
                        description="Here's what happens when automation is treated as architecture — not a quick fix."
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            className={`fade-section stagger-${index + 1} glass-card-hover p-8 lg:p-10 flex flex-col`}
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-1">{study.company}</h3>
                                <p className="text-sm text-gray-500">{study.industry}</p>
                            </div>

                            {/* Results list */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {study.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                        <svg
                                            className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                                {study.tags.map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
