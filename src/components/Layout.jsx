import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ClickSpark from './ClickSpark';
import globalNetworkMap from '../assets/global_network_map.png';
import DotGrid from './DotGrid';

const NextPageNavigator = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        { path: '/', name: 'Home', next: '/about', nextName: 'Company Vision' },
        { path: '/about', name: 'About', next: '/company', nextName: 'Our Principles' },
        { path: '/company', name: 'Company', next: '/contact', nextName: 'Get in Touch' },
        { path: '/contact', name: 'Contact', next: '/', nextName: 'Back to Home' },
    ];

    const currentRoute = routes.find(r => r.path === location.pathname);

    if (!currentRoute) return null;

    return (
        <div className="w-full flex justify-end px-6 md:px-12 lg:px-24 pb-12 pt-0 z-20 relative">
            <motion.button
                whileHover={{ x: 10 }}
                onClick={() => navigate(currentRoute.next)}
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300"
            >
                <div className="text-right">
                    <span className="block text-xs font-mono uppercase tracking-widest text-brand-accent mb-1">Next</span>
                    <span className="block text-xl md:text-2xl font-heading font-bold">{currentRoute.nextName}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:text-brand-black transition-colors" />
                </div>
            </motion.button>
        </div>
    );
};

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-brand-dark text-slate-300 relative selection:bg-brand-accent selection:text-brand-dark">
            {/* Global Grid Background */}
            {/* Global Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-brand-black">
                    <DotGrid
                        dotSize={5}
                        gap={15}
                        baseColor="#271E37"
                        activeColor="#5227FF"
                        proximity={100}
                        shockRadius={200}
                        shockStrength={2}
                        resistance={1200}
                        returnDuration={1.5}
                        className="w-full h-full"
                    />
                </div>
            </div>

            <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={20}
                sparkCount={8}
                duration={0.4}
            />
            {location.pathname !== '/privacy-policy' && <Navbar />}
            <main className="w-full relative z-10">
                {children}

                {/* Next Page Button */}
                <NextPageNavigator />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
