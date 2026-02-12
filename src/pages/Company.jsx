import { motion } from 'framer-motion';
import globalMapImg from '../assets/global_network_map.png';
import techImg from '../assets/tech.png';
import SEO from '../components/SEO';
import TextPressure from '../components/TextPressure';

const sections = [
    {
        id: '01',
        title: 'First-Principles Thinking',
        subtitle: 'How We Decide',
        content: 'We evaluate opportunities by breaking problems down to their fundamentals. Decisions are guided by logic, data, and long-term relevance rather than market noise or short-term trends. We prioritize clarity, durability, and asymmetric outcomes, ensuring every move aligns with our broader vision and risk framework.',
        color: 'border-sector-infra text-sector-infra',
        bg: 'hover:bg-sector-infra/5'
    },
    {
        id: '02',
        title: 'Systems Over Speed',
        subtitle: 'How We Execute',
        content: 'Execution at LOF is driven by systems, not urgency. We design repeatable processes, leverage automation, and eliminate friction before scaling. By building strong operational foundations first, we ensure consistency, efficiency, and resilience as the organization grows.',
        color: 'border-sector-tech text-sector-tech',
        bg: 'hover:bg-sector-tech/5'
    },
    {
        id: '03',
        title: 'Capital With Intent',
        subtitle: 'How We Allocate',
        content: 'Capital is deployed deliberately and with patience. We focus on downside protection, liquidity, and long-term compounding rather than aggressive expansion. Every allocation is measured against risk, sustainability, and its ability to strengthen the overall ecosystem.',
        color: 'border-sector-capital text-sector-capital',
        bg: 'hover:bg-sector-capital/5'
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Company = () => {
    return (
        <div id="company" className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden text-white">
            <SEO
                title="Operating Principles & Services | LOF Enterprises"
                description="Explore our operating principles, global logistics solutions, and IT & Data services. We prioritize systems over speed and capital with intent."
            />
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 min-h-[120px] md:min-h-[300px]"
                >
                    <TextPressure
                        text="OPERATING PRINCIPLES"
                        flex={false}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={false}
                        textColor="#ffffff"
                        wordColors={['#ffffff', '#14b8a6']}
                        strokeColor="#14b8a6"
                        minFontSize={48} // Increased from 36
                        className="font-heading"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: index * 0.2, duration: 0.8, ease: "easeOut" }
                                }
                            }}
                            className={`bg-brand-dark border border-white/10 p-10 relative group transition-all duration-500 ${section.bg}`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 ${section.color.split(' ')[0].replace('border-', 'bg-')}`} />



                            <h2 className="text-xl font-mono font-bold text-white mb-2 relative z-10 uppercase tracking-widest">
                                {section.title}
                            </h2>
                            <p className={`text-xs font-bold mb-6 ${section.color.split(' ')[1]}`}>{section.subtitle}</p>

                            <p className="text-zinc-400 leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Services Section */}
                <div className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 min-h-[100px] md:min-h-[200px]"
                    >
                        <TextPressure
                            text="OUR SERVICES"
                            flex={false}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={false}
                            textColor="#ffffff"
                            wordColors={['#ffffff', '#14b8a6']}
                            strokeColor="#14b8a6"
                            minFontSize={48} // Increased from 32
                            className="font-heading"
                        />
                    </motion.div>

                    <div className="space-y-24">
                        {/* Global Export Solutions */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                <img src={globalMapImg} alt="Global Export Network" loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="space-y-6">
                                <span className="text-sector-infra font-mono text-sm tracking-widest uppercase font-bold">Global Logistics</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">Global Export Solutions</h3>
                                <h4 className="text-xl text-zinc-400 font-medium">Whatever You Need, Wherever You Need It</h4>
                                <p className="text-zinc-300 leading-relaxed font-medium">
                                    At LOF Industries, we specialize in exporting a wide range of products tailored to your business needs, delivering to any corner of the globe. No matter what you require, our extensive logistics network and expertise ensure your orders reach you efficiently and reliably.
                                </p>
                            </div>
                        </motion.div>

                        {/* IT & Data Services */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse"
                        >
                            <div className="lg:order-2 relative group overflow-hidden rounded-2xl border border-white/10">
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                <img src={techImg} alt="IT & Data Services" loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="lg:order-1 space-y-6">
                                <div className="flex gap-4">
                                    <span className="text-sector-tech font-mono text-sm tracking-widest uppercase font-bold">Consultancy</span>
                                    <span className="text-sector-tech font-mono text-sm tracking-widest uppercase opacity-50">/</span>
                                    <span className="text-sector-tech font-mono text-sm tracking-widest uppercase font-bold">Data Security</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">IT & Data Services</h3>
                                <p className="text-zinc-300 leading-relaxed font-medium">
                                    In today’s fast-evolving digital landscape, having a robust and secure IT infrastructure is essential for success. At LOF IT & Data Services, a vital division of LOF Enterprises, we provide comprehensive technology and data centre solutions designed to keep your business connected, efficient, and protected.
                                </p>
                                <p className="text-zinc-300 leading-relaxed font-medium">
                                    Our expert team offers end-to-end management of IT systems, cloud services, data storage, cybersecurity, and 24/7 technical support. Whether you’re scaling up or optimizing existing infrastructure, we deliver reliable, scalable solutions that empower your business to innovate and thrive.
                                </p>
                                <div className="p-4 bg-brand-light rounded-lg border-l-4 border-sector-tech">
                                    <p className="text-brand-dark font-medium italic">
                                        With LOF IT & Data Services, you don’t just get a provider — you get a dedicated partner invested in your digital transformation and long-term success.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
