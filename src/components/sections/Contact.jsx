// src/components/sections/Contact.jsx
import { useForm, ValidationError } from '@formspree/react';
import useFadeIn from '../../hooks/useFadeIn';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Contact() {
    const [state, handleSubmit] = useForm("mwvnweza");
    const ref = useFadeIn();

    return (
        <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <SectionHeading
                    eyebrow="Contact"
                    title="Ready to Redesign Your Systems?"
                    description="Tell us about your operational bottlenecks and we'll show you how automation can solve them."
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start fade-section">
                    {/* Motivational Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">What happens next?</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Don&apos;t let manual work be the ceiling for your growth. When you book an audit, we deep-dive into your actual workflows.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                {
                                    title: '30-Minute Deep Dive',
                                    desc: 'A focused session to map your current technical architecture.',
                                    icon: (
                                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'Identify 3 Quick Wins',
                                    desc: 'We pinpoint high-impact tasks that can be automated immediately.',
                                    icon: (
                                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'Custom ROI Blueprint',
                                    desc: 'A breakdown of potential hours saved and system reliability gains.',
                                    icon: (
                                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    ),
                                },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="p-6 rounded-2xl bg-gradient-accent/5 border border-accent/10">
                            <p className="text-sm text-accent-light font-medium italic">
                                &ldquo;The best time to automate was last year. The second best time is today.&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Form Component */}
                    <div>
                        {state.succeeded ? (
                            <div className="glass-card p-12 text-center border-accent/20 h-full flex flex-col justify-center">
                                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                                <Button className="mt-8" variant="secondary" onClick={() => window.location.reload()}>
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 space-y-6 relative overflow-hidden">
                                {/* Form content */}
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="you@company.com"
                                            className="w-full bg-surface-50 border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm"
                                            required
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm text-red-400" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                            What processes are slowing you down?
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="E.g. We spend 10 hours a week manually syncing data..."
                                            className="w-full bg-surface-50 border border-white/[0.08] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none text-sm"
                                            required
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm text-red-400" />
                                    </div>
                                </div>

                                <Button type="submit" disabled={state.submitting} className="w-full py-4 text-lg">
                                    {state.submitting ? 'Sending...' : 'Start My Free Audit'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-accent-light/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
