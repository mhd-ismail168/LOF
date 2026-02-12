import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Instagram, Copy, Check, ArrowUpRight, Smartphone } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import TextPressure from '../components/TextPressure';

const ContactCard = ({ icon: Icon, label, value, href, isCopyable = true, delay }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (isCopyable) {
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-brand-accent/5 rounded-xl blur-xl group-hover:bg-brand-accent/10 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white/5 border border-white/10 hover:border-brand-accent/50 rounded-xl p-6 transition-all duration-300 h-full backdrop-blur-sm group-hover:transform group-hover:-translate-y-1 overflow-hidden">

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                </div>

                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-300">
                        <Icon size={24} />
                    </div>
                    {isCopyable ? (
                        <button
                            onClick={handleCopy}
                            className="text-zinc-500 hover:text-white transition-colors p-2"
                            title="Copy to clipboard"
                        >
                            {copied ? <Check size={18} className="text-brand-accent" /> : <Copy size={18} />}
                        </button>
                    ) : (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2">
                            <ArrowUpRight size={18} />
                        </a>
                    )}
                </div>

                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 group-hover:text-zinc-300 transition-colors">{label}</h3>

                {isCopyable ? (
                    <p
                        className="text-white font-medium text-lg md:text-xl break-all group-hover:text-brand-accent transition-colors cursor-pointer"
                        onClick={handleCopy}
                    >
                        {value}
                    </p>
                ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white font-medium text-lg md:text-xl break-all group-hover:text-brand-accent transition-colors block">
                        {value}
                    </a>
                )}

                {/* Copied Feedback */}
                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute bottom-4 right-4 flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-brand-accent font-bold">COPIED</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-32 px-6 md:px-12 lg:px-24">
            <SEO
                title="Contact Us | LOF Enterprises"
                description="Get in touch with LOF Enterprises. Direct channels to our strategic divisions, administration, and global sales."
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                {/* Header */}
                <div className="mb-24 text-center">
                    <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block"></span>
                    <div className="mb-8 min-h-[120px] md:min-h-[250px]">
                        <TextPressure
                            text="INITIATE DIALOGUE"
                            flex={false}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={false}
                            textColor="#ffffff"
                            wordColors={['#ffffff', '#14b8a6']}
                            strokeColor="#14b8a6"
                            minFontSize={48}
                            className="font-heading"
                        />
                    </div>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Secure channels open. Direct access to our strategic divisions.
                    </p>
                </div>

                {/* Email Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <ContactCard
                        icon={Mail}
                        label="Primary Frequency"
                        value="samuel@lofindustries.com"
                        delay={0}
                    />
                    <ContactCard
                        icon={Mail}
                        label="Administration"
                        value="admin@lofindustries.com"
                        delay={0.1}
                    />
                    <ContactCard
                        icon={Mail}
                        label="Support Systems"
                        value="support@lofindustries.com"
                        delay={0.2}
                    />
                    <ContactCard
                        icon={Mail}
                        label="Global Sales"
                        value="sales@lofindustries.com"
                        delay={0.3}
                    />
                </div>

                {/* Direct & Social */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ContactCard
                        icon={Smartphone}
                        label="Voice / WhatsApp"
                        value="+91 9995109484"
                        href="https://wa.me/919995109484"
                        isCopyable={false}
                        delay={0.4}
                    />
                    <ContactCard
                        icon={Instagram}
                        label="Visual Feed"
                        value="@samxdsouza"
                        href="https://www.instagram.com/samxdsouza?igsh=MXZ0cDdvcmVzd20wbg=="
                        isCopyable={false}
                        delay={0.5}
                    />
                </div>

            </motion.div>
        </section>
    );
};

export default Contact;
