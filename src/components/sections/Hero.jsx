// src/components/sections/Hero.jsx
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="glow-orb w-[600px] h-[600px] bg-accent top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="glow-orb w-[400px] h-[400px] bg-violet top-2/3 left-1/4" />
                <div className="absolute inset-0 bg-surface/60" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-gray-300">Engineering Intelligent Systems for Growing Organizations</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
                    Your Business Should Run
                    <br />
                    on <span className="gradient-text">Systems</span> — Not Manual Work.
                </h1>

                {/* Subtext */}
                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    FlowForge AI designs and deploys intelligent automation architectures that eliminate repetitive operations, synchronize data across platforms, and give leadership real-time visibility.
                </p>

                <p className="text-base sm:text-lg text-gray-300 font-medium max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    We don&apos;t patch workflows. <span className="gradient-text">We engineer systems.</span>
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" href="#contact">
                        Book Automation Audit
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Button>
                    <Button variant="secondary" size="lg" href="#services">
                        Explore Services
                    </Button>
                </div>

                {/* Trust line */}
                <p className="mt-16 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    Trusted by growing organizations across{' '}
                    <span className="text-gray-400">Education</span>,{' '}
                    <span className="text-gray-400">Healthcare</span>, and{' '}
                    <span className="text-gray-400">Finance</span>
                </p>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent" />
        </section>
    );
}
