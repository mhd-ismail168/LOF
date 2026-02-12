import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import GooeyNav from './GooeyNav';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Company', href: '/company' },
        { label: 'Contact', href: '/contact' },
    ];

    const getInitialIndex = () => {
        const path = location.pathname;
        const index = links.findIndex(link => link.href === path);
        return index !== -1 ? index : 0; // Default to Home if not found or on sub-routes
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold -> Hide
                setIsVisible(false);
            } else {
                // Scrolling up -> Show
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <div className="main-navbar fixed top-0 md:top-6 left-0 right-0 z-50 md:px-4 md:flex md:justify-center pointer-events-none md:pointer-events-auto">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: isVisible ? 0 : -100,
                        opacity: isVisible ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex items-center justify-between md:justify-center p-5 md:p-0 relative z-50 w-full md:w-auto"
                >
                    {/* Desktop Navigation (GooeyNav) */}
                    <div className="hidden md:block pointer-events-auto">
                        <GooeyNav
                            items={links}
                            initialActiveIndex={getInitialIndex()}
                            onNavigate={handleNavigation}
                        />
                    </div>

                    {/* Mobile Menu Toggle (Visible only on mobile) */}
                    <div className="md:hidden w-full flex justify-end pointer-events-auto">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-full bg-brand-dark/50 hover:bg-white/10 transition-colors text-white backdrop-blur-md border border-white/10"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-20 right-5 w-56 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl z-50 flex flex-col gap-1 pointer-events-auto md:hidden"
                            >
                                {links.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => handleNavigation(link.href)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors text-sm font-bold ${location.pathname === link.href
                                            ? 'bg-brand-accent text-white'
                                            : 'text-slate-300 hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>
        </>
    );
};

export default Navbar;
