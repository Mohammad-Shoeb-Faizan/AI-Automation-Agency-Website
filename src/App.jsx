// src/App.jsx
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Services from './components/sections/Services';
import CaseStudies from './components/sections/CaseStudies';
import HowWeWork from './components/sections/HowWeWork';
import Metrics from './components/sections/Metrics';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-surface text-white">
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Services />
                <CaseStudies />
                <HowWeWork />
                <Metrics />
                <About />
                <Contact />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
