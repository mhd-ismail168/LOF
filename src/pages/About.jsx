import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import infraImg from '../assets/infra.png';
import techImg from '../assets/tech.png';
import capitalImg from '../assets/capital.png';
import visionImg from '../assets/vision.jpg';
import missionImg from '../assets/mission.jpg';
import SEO from '../components/SEO';
import TextPressure from '../components/TextPressure';
import Folder from '../components/Folder';

// Import Ecosystem additional images
import file1_1 from '../assets/File1_1.jpg';
import file1_2 from '../assets/File1_2.jpg';
import file2_1 from '../assets/File2_1.jpg';
import file2_2 from '../assets/File2_2.jpg';
import file3_1 from '../assets/File3_1.jpg';
import file3_2 from '../assets/File3_2.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const About = () => {
    const [openFolderIndex, setOpenFolderIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <section id="about" className="min-h-screen text-brand-light relative overflow-hidden font-sans pb-12">
            <SEO
                title="About Us | LOF Enterprises"
                description="Discover the vision, mission, and strategic roadmap of LOF Enterprises. We are building the systems that power tomorrow's economy."
            />


            {/* 1. Hero Section - Renamed to "Mission Statement" style */}
            <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 border-b border-white/5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight mb-8 leading-tight header-pressure">
                        We build the <span className="text-zinc-500">systems</span> that<br />
                        power tomorrow's <span className="text-white">economy.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl font-mono leading-relaxed border-l-2 border-brand-accent pl-6">
                        LOF Enterprises is a multi-sector conglomerate designed to solve structural inefficiencies. We integrate capital, technology, and logistics to create scalable infrastructure for the digital age.
                    </p>
                </motion.div>
            </div>

            {/* Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={visionImg} alt="Our Vision" loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="bg-brand-black text-white p-12 lg:p-24 flex flex-col justify-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 header-pressure">Our Vision</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                            To be a global leader that shapes industries, empowers businesses, and transforms possibilities into progress. We believe in creating sustainable growth — not just for our organization, but for our partners, clients, and communities around the world.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-brand-light text-brand-dark p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 header-pressure">Our Mission</h2>
                        <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                            To innovate, expand, and lead with integrity — building reliable connections, delivering superior value, and setting new standards of excellence in every market we serve.
                        </p>
                        <p className="font-mono text-sm text-brand-accent mt-4">-Samuel D</p>
                    </motion.div>
                </div>
                <div className="h-64 lg:h-auto relative overflow-hidden group order-1 lg:order-2">
                    <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10" />
                    <img src={missionImg} alt="Our Mission" loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
            </div>

            {/* 2. Philosophy (Technical Grid Layout) */}
            <div className="py-16 px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="lg:col-span-4"
                    >

                        <h2 className="text-4xl font-heading font-bold mb-6 header-pressure">RATIONAL<br />ALLOCATION.</h2>
                        <div className="w-12 h-1 bg-brand-accent mb-6" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        <motion.div variants={fadeInUp}>
                            <h3 className="font-mono text-white text-lg mb-4 before:content-['>_'] before:text-brand-accent before:mr-2">First Principles</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                We strip away market noise to understand the fundamental mechanics of value. If a system is inefficient, we rebuild it. If an industry is stagnant, we disrupt it.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <h3 className="font-mono text-white text-lg mb-4 before:content-['>_'] before:text-brand-accent before:mr-2">Long-Term Capital</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                We are not driven by quarterly results. We deploy patient capital into high-conviction assets—real estate, digital infrastructure, and supply chains—that compound over decades.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* 3. The Ecosystem (Horizontal Flow with Sector Colors) */}
            <div className="py-16 bg-white/5 border-y border-white/5">
                <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
                    >
                        <div>

                            <h2 className="text-4xl md:text-5xl font-heading font-bold header-pressure">THE ECOSYSTEM</h2>
                        </div>
                        <p className="text-zinc-400 font-mono text-sm max-w-md mt-6 md:mt-0 text-left md:text-right">
                            Interconnected ventures reinforcing a central vision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8" // Increased gap for folder space
                    >
                        {[
                            {
                                title: 'Corporate Solutions',
                                desc: 'Comprehensive infrastructure and operational frameworks for modern enterprises.',
                                image: infraImg,
                                colorHex: '#f97316', // Orange-500
                                borderColor: 'border-orange-500'
                            },
                            {
                                title: 'Internet And Tech',
                                desc: 'Driven by our sub-brand LOF Industries—delivering advanced digital solutions.',
                                image: techImg,
                                colorHex: '#6366f1', // Indigo-500
                                borderColor: 'border-indigo-500'
                            },
                            {
                                title: 'Business Consultancy',
                                desc: 'Strategic guidance and asset management for sustainable growth.',
                                image: capitalImg,
                                colorHex: '#10b981', // Emerald-500
                                borderColor: 'border-emerald-500'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-brand-dark border border-white/10 group hover:border-white/30 transition-all duration-300 rounded-xl overflow-visible hover:z-50 relative flex flex-col"
                            >
                                <motion.div
                                    animate={{ height: openFolderIndex === index ? (isMobile ? 360 : 450) : 256 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="relative border-b border-white/5 bg-brand-black/50 flex items-center justify-center overflow-visible group-hover:bg-brand-accent/5 transition-colors duration-500"
                                >
                                    {/* Folder Animation */}
                                    <div className="transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                                        <Folder
                                            isOpen={openFolderIndex === index}
                                            onToggle={() => setOpenFolderIndex(openFolderIndex === index ? null : index)}
                                            size={isMobile ? 1.8 : 2.2}
                                            color={item.colorHex}
                                            items={[
                                                <div className="w-full h-full overflow-hidden relative">
                                                    <img
                                                        src={index === 0 ? file1_1 : index === 1 ? file2_1 : file3_1}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>,
                                                <div className="w-full h-full overflow-hidden relative">
                                                    <img
                                                        src={index === 0 ? file1_2 : index === 1 ? file2_2 : file3_2}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>,
                                                <div className="w-full h-full overflow-hidden relative">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                </div>
                                            ]}
                                        />
                                    </div>
                                </motion.div>

                                <div className="p-8 relative flex-1 flex flex-col">
                                    {/* Sector Indicator Line */}
                                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-[${item.colorHex}]`} style={{ backgroundColor: item.colorHex }} />

                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 4. Decade Outlook (Strategic Architecture) */}
            <div className="py-24 px-6 md:px-12 lg:px-24 bg-brand-black relative z-10 transition-colors duration-500">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 md:mb-24 text-center md:text-left"
                    >
                        <span className="text-brand-accent font-mono text-sm tracking-widest uppercase block mb-3">Strategic Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white header-pressure">
                            Decade <span className="text-zinc-500">Outlook</span>
                        </h2>
                    </motion.div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent z-0 opacity-30" />

                        {[
                            {
                                title: "Infrastructure Architecture",
                                items: [
                                    "AI-driven digital backbone.",
                                    "Enterprise-grade ERP ecosystems.",
                                    "Cloud-native infrastructure.",
                                    "Cybersecurity governance.",
                                    "Vertically integrated supply chains."
                                ]
                            },
                            {
                                title: "Strategic Scale Integration",
                                items: [
                                    "Predictive logistics engines.",
                                    "Automation-first operations.",
                                    "Smart industrial assets.",
                                    "Data center expansion.",
                                    "Cross-sector capital deployment."
                                ]
                            },
                            {
                                title: "Intelligent Enterprise Sovereignty",
                                items: [
                                    "AI-augmented enterprise systems.",
                                    "Proprietary technology stacks.",
                                    "Decentralized financial architecture.",
                                    "Autonomous operational frameworks.",
                                    "Institutional-grade resilience."
                                ]
                            }
                        ].map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 md:p-10 border border-white/10 bg-brand-dark/50 hover:bg-brand-dark transition-colors duration-500 rounded-sm z-10"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent" />
                                </div>

                                {/* Header */}
                                <div className="relative z-10 mb-8 border-b border-white/10 pb-6 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="w-12 h-12 mb-6 bg-brand-dark border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent shadow-[0_0_15px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] transition-shadow duration-500 relative z-20">
                                        <div className="w-3 h-3 bg-brand-accent rounded-full" />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white leading-tight group-hover:text-brand-accent transition-colors duration-300">
                                        {pillar.title}
                                    </h3>
                                </div>

                                {/* List */}
                                <ul className="relative z-10 space-y-4 text-left">
                                    {pillar.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-zinc-400 text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-300">
                                            <span className="text-brand-accent mr-3 mt-1.5 text-xs">◆</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
