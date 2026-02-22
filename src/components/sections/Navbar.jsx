// src/components/sections/Navbar.jsx
import { useState, useEffect } from 'react';
import { navLinks } from '../../data/navigation';
import Button from '../ui/Button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });

        // Intersection Observer for active section
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Center of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Sections to observe
        const sectionIds = navLinks.map(link => link.href.replace('#', ''));
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, []);

    const handleScroll = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            if (href === '#top' || href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-surface/80 backdrop-blur-xl border-b border-white/[0.06]'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => handleScroll(e, '#top')}
                        className="flex items-center gap-2.5 group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                                <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">
                            FlowForge<span className="gradient-text"> AI</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`relative px-4 py-2 text-sm transition-all duration-300 rounded-lg hover:bg-white/5 ${isActive ? 'text-white font-medium' : 'text-gray-400'
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent rounded-full animate-fade-in" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <Button href="#cta" size="sm">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80 border-b border-white/[0.06]' : 'max-h-0'
                    }`}
            >
                <div className="px-6 pb-6 pt-2 bg-surface/95 backdrop-blur-xl space-y-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    setMobileOpen(false);
                                    handleScroll(e, link.href);
                                }}
                                className={`block px-4 py-3 text-sm rounded-lg transition-all ${isActive
                                    ? 'text-white bg-white/5 font-medium border-l-2 border-accent'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    <div className="pt-3">
                        <Button href="#cta" size="sm" className="w-full">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
