import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-brand-black border-t border-white/10 text-slate-300 py-10 px-6 md:px-12 lg:px-24 relative z-20">
            {/* Top Section: Contacts & Links */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-10">

                {/* Left: Email */}
                <div className="lg:w-1/3">
                    <a href="mailto:samuel@lofindustries.com" className="text-xl md:text-2xl font-heading hover:text-brand-accent transition-colors">
                        samuel@lofindustries.com
                    </a>
                </div>

                {/* Right: Columns */}
                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {/* Column 1: Menu */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-heading text-white">Menu</h4>
                        <ul className="space-y-2 font-mono text-xs">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Company', path: '/company' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-brand-accent transition-colors uppercase tracking-wider block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-heading text-white">Socials</h4>
                        <ul className="space-y-2 font-mono text-xs">
                            {[
                                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/samuel-dsouza-112213351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
                                { name: 'Twitter / X', href: 'https://x.com/lofindustries?s=20' },
                                { name: 'Instagram', href: 'https://www.instagram.com/samxdsouza?igsh=MXZ0cDdvcmVzd20wbg==' },
                                { name: 'WhatsApp', href: 'https://wa.me/919995109484' }
                            ].map((item) => (
                                <li key={item.name}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-brand-accent transition-colors uppercase tracking-wider block"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <span className="text-slate-600 cursor-default uppercase tracking-wider block" title="Coming Soon">
                                            {item.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal/Other (Optional) */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-heading text-white">Legal</h4>
                        <ul className="space-y-2 font-mono text-xs">
                            <li>
                                <Link to="/privacy-policy" className="hover:text-brand-accent transition-colors uppercase tracking-wider">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <span className="text-slate-600 uppercase tracking-wider cursor-not-allowed">
                                    Terms of Service
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Middle Section: CTA */}
            <div className="mb-10">
                <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=samuel@lofindustries.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-6 flex items-center justify-between group transition-all duration-300 rounded-lg cursor-pointer"
                >
                    <span className="text-2xl md:text-4xl font-heading font-bold text-white group-hover:text-brand-accent transition-colors">
                        INITIATE DIALOGUE
                    </span>
                    <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-brand-accent transition-colors duration-300 transform group-hover:rotate-45" />
                </motion.a>
            </div>

            {/* Bottom Section: Branding & Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-6 gap-4">
                <div className="w-full md:w-auto">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white/10 leading-none select-none">
                        LOF
                    </h2>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    <p>© LOF ENTERPRISES {currentYear}</p>
                    <p>ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
