import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import techImg from '../assets/tech_1.jpg';
import logiImg from '../assets/logi_1.jpg';
import realEstateImg from '../assets/LOF_1.jpeg';
import capitalImg from '../assets/capital.png';
import founderImg from '../assets/Founder_1.PNG';
import founderHeroImg from '../assets/Founder_2.PNG';
import founderVisionImg from '../assets/Founder_2.PNG';
import globalImg from '../assets/Global_supp.jpg';

// Import scroll images
import tech2 from '../assets/tech_2.jpg';
import logi2 from '../assets/logi_2.jpg';
import lof2 from '../assets/LOF_2.jpeg';
import SEO from '../components/SEO';
import TextPressure from '../components/TextPressure';
import RotatingText from '../components/RotatingText';
import LightRays from '../components/LightRays';
import PixelTransition from '../components/PixelTransition';

const verticals = [
    {
        id: 'tech',
        title: 'Technology Division',
        desc: 'Advanced Digital Infrastructure & AI Solutions',
        img: techImg,
        color: 'from-blue-600/20 to-indigo-900/40' // Custom overlay tint
    },
    {
        id: 'logi',
        title: 'Logistics & Transportation',
        desc: 'Global Supply Chain & Freight Networks',
        img: logiImg,
        color: 'from-amber-600/20 to-orange-900/40'
    },
    {
        id: 're',
        title: 'Real Estate & Infrastructure',
        desc: 'Premium Commercial & Residential Assets',
        img: realEstateImg,
        color: 'from-emerald-600/20 to-green-900/40'
    },
    {
        id: 'cap',
        title: 'Strategic Investments',
        desc: 'Venture Capital & Private Equity',
        img: capitalImg,
        color: 'from-slate-600/20 to-slate-900/40'
    }
];

const galleryImages = [
    { src: founderVisionImg, label: 'Vision' },
    { src: globalImg, label: 'Global Reach' },
    { src: tech2, label: 'Innovation' },
    { src: logi2, label: 'Systems' },
    { src: lof2, label: 'Assets' }
];

const Home = ({ section }) => {
    const headerRef = useRef(null);
    const [isArticleOpen, setIsArticleOpen] = useState(false);

    // Scroll to section based on prop
    useEffect(() => {
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure render
            }
        }
    }, [section]);

    // Dynamic SEO Data
    const getSEOData = () => {
        switch (section) {
            case 'tech':
                return { title: 'Technology Division | LOF Enterprises', description: 'Advanced digital infrastructure, AI solutions, and enterprise-grade software ecosystems.' };
            case 'logi':
                return { title: 'Logistics & Transportation | LOF Enterprises', description: 'Global supply chain optimization, freight networks, and predictive logistics engines.' };
            case 're':
                return { title: 'Real Estate & Infrastructure | LOF Enterprises', description: 'Premium commercial and residential assets integrated with smart city technologies.' };
            case 'cap':
                return { title: 'Strategic Investments | LOF Enterprises', description: 'Venture capital and private equity deploying patient capital into high-growth sectors.' };
            default:
                return {
                    title: 'LOF Enterprises | Multi-Sector Technology, Logistics & Infrastructure Group',
                    description: 'LOF Enterprises is a multi-sector conglomerate integrating technology, logistics, and real estate to build scalable infrastructure for the digital age.'
                };
        }
    };

    const seo = getSEOData();

    // Organization Schema
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "LOF Enterprises",
        "url": "https://lofenterprises.com", // Replace with actual URL
        "logo": "https://lofenterprises.com/logo_1.png",
        "founder": {
            "@type": "Person",
            "name": "Samuel Anthony Dsouza"
        },
        "description": "Multi-sector conglomerate specializing in Technology, Logistics, and Real Estate."
    };

    // Toggle bio-open class on body for CSS-based navbar hiding
    useEffect(() => {
        if (isArticleOpen) {
            document.body.classList.add('bio-open');
        } else {
            document.body.classList.remove('bio-open');
        }
        return () => document.body.classList.remove('bio-open');
    }, [isArticleOpen]);

    // Auto-scroll Gallery Logic - Logic removed for CSS animation

    return (
        <div id="home" className="min-h-screen text-white selection:bg-brand-accent selection:text-white overflow-x-hidden relative">
            <SEO
                title={seo.title}
                description={seo.description}
            >
                <script type="application/ld+json">
                    {JSON.stringify(orgSchema)}
                </script>
            </SEO>

            {/* ---------------------------------------------------------------------------
                1. HERO SECTION
            --------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------
                1. HERO SECTION (Redesigned Split Layout)
            --------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------
                1. HERO SECTION (Redesigned Split Layout)
            --------------------------------------------------------------------------- */}
            <section className="relative min-h-screen bg-brand-black flex items-center justify-center overflow-hidden pt-0 pb-12 md:pt-0 md:pb-0">
                {/* Background Texture over Brand Black */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-dark via-brand-black to-black opacity-80 z-0" />

                <div className="absolute inset-0 z-0">
                    <LightRays
                        raysOrigin="left"
                        raysColor="#ffffff"
                        raysSpeed={3.0}
                        lightSpread={0.5}
                        rayLength={5}
                        followMouse={true}
                        mouseInfluence={0.4}
                        noiseAmount={0}
                        distortion={0}
                        className="custom-rays opacity-80"
                        pulsating={false}
                        fadeDistance={1}
                        saturation={1}
                    />
                </div>

                <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">

                    {/* Left Column: Typography */}
                    <div className="order-2 lg:order-1 flex flex-col items-start text-left z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-4 md:mb-8 -mt-12 md:mt-0 relative z-30"
                        >
                            <span className="text-brand-accent font-mono text-base tracking-[0.25em] uppercase font-semibold bg-brand-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                                Visionary • Entrepreneur
                            </span>
                        </motion.div>


                        <h1 className="font-heading font-bold tracking-tighter leading-[0.85] mb-10 text-white">
                            <motion.span
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="block text-[5rem] md:text-[7rem] lg:text-[11rem]"
                            >
                                LOF
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="block text-slate-500 text-[3.5rem] md:text-[5rem] lg:text-[7rem]"
                            >
                                ENTERPRISES
                            </motion.span>
                        </h1>


                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-slate-400 text-lg md:text-2xl font-light max-w-xl leading-relaxed border-l-2 border-white/10 pl-8"
                        >
                            Reshaping the future of <RotatingText texts={['Technology', 'Logistics', 'Real Estate', 'Capital']} mainClassName="px-2 text-brand-accent overflow-hidden py-0.5 justify-center rounded-lg bg-brand-accent/10 min-w-[140px] md:min-w-[180px] text-center" staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} /> through speed and strategic foresight.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-10 inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-brand-accent/50 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] hover:border-brand-accent transition-all duration-500 group cursor-default"
                        >
                            <div className="p-2 bg-brand-accent/20 rounded-full text-brand-accent group-hover:scale-110 transition-transform duration-500">
                                <TrendingUp size={24} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-white font-heading font-bold text-2xl md:text-3xl tracking-tight leading-none mb-1">
                                    Rs. 3 Crore<span className="text-brand-accent">+</span>
                                </span>
                                <span className="text-slate-400 font-mono text-xs tracking-wider uppercase">Turnover FY 25-26</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image Composition */}
                    <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[95vh] w-full flex items-center justify-center lg:justify-end translate-x-0 lg:translate-x-12 -mt-24 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative h-full w-auto max-w-full overflow-hidden mx-auto"
                            style={{
                                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent), linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                                maskComposite: 'intersect',
                                WebkitMaskComposite: 'source-in'
                            }}
                        >
                            {/* Image */}
                            <img
                                src={founderHeroImg}
                                alt="Founder"
                                className="h-full w-auto object-contain object-center opacity-90"
                            />
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* ---------------------------------------------------------------------------
                2. BUSINESS VERTICALS (Unified Grid)
            --------------------------------------------------------------------------- */}
            <section className="py-24 md:py-32 px-4 md:px-12 lg:px-24 relative z-10 w-full">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24 text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 header-pressure">
                            Our Business <span className="text-brand-accent">Verticals</span>
                        </h2>
                        <div className="w-24 h-1 bg-brand-accent mt-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Pair 1: Tech -> Logistics */}
                        <div className="h-[300px] md:h-[400px]">
                            <PixelTransition
                                firstContent={
                                    <div className="relative w-full h-full group overflow-hidden rounded-sm border border-white/5 bg-brand-dark/50">
                                        <div className="absolute inset-0">
                                            <img
                                                src={verticals[0].img}
                                                alt={verticals[0].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80`} />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-8">
                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                                {verticals[0].title}
                                            </h3>
                                            <p className="text-slate-300 font-light text-sm md:text-base">
                                                {verticals[0].desc}
                                            </p>
                                        </div>
                                    </div>
                                }
                                secondContent={
                                    <div className="relative w-full h-full group overflow-hidden rounded-sm border border-white/5 bg-brand-dark/50">
                                        <div className="absolute inset-0">
                                            <img
                                                src={verticals[1].img}
                                                alt={verticals[1].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80`} />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-8">
                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                                {verticals[1].title}
                                            </h3>
                                            <p className="text-slate-300 font-light text-sm md:text-base">
                                                {verticals[1].desc}
                                            </p>
                                        </div>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor="#ffffff"
                                animationStepDuration={0.4}
                                className="w-full h-full rounded-sm border-white/5"
                            />
                        </div>

                        {/* Pair 2: Real Estate -> Capital */}
                        <div className="h-[300px] md:h-[400px]">
                            <PixelTransition
                                firstContent={
                                    <div className="relative w-full h-full group overflow-hidden rounded-sm border border-white/5 bg-brand-dark/50">
                                        <div className="absolute inset-0">
                                            <img
                                                src={verticals[2].img}
                                                alt={verticals[2].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80`} />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-8">
                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                                {verticals[2].title}
                                            </h3>
                                            <p className="text-slate-300 font-light text-sm md:text-base">
                                                {verticals[2].desc}
                                            </p>
                                        </div>
                                    </div>
                                }
                                secondContent={
                                    <div className="relative w-full h-full group overflow-hidden rounded-sm border border-white/5 bg-brand-dark/50">
                                        <div className="absolute inset-0">
                                            <img
                                                src={verticals[3].img}
                                                alt={verticals[3].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80`} />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-8">
                                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                                {verticals[3].title}
                                            </h3>
                                            <p className="text-slate-300 font-light text-sm md:text-base">
                                                {verticals[3].desc}
                                            </p>
                                        </div>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor="#ffffff"
                                animationStepDuration={0.4}
                                className="w-full h-full rounded-sm border-white/5"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------------------------------
                3. FOUNDER & LEADERSHIP (Premium Horizontal Scroll)
            --------------------------------------------------------------------------- */}
            <section className="py-24 md:py-32 bg-zinc-900/30 border-y border-white/5 overflow-hidden w-full relative z-20">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase block mb-2">Leadership</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white header-pressure">Founder & Vision</h2>
                        </div>
                        <p className="text-slate-400 max-w-md text-sm md:text-base font-light text-left">
                            Driving the group's strategy with a focus on long-term value creation.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                        {/* Portrait Section (Sticky on desktop) */}
                        <div className="lg:w-[35%] relative z-10 shrink-0">
                            <div className="relative h-[500px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-white/10 group">
                                <img
                                    src={founderImg}
                                    alt="Samuel Anthony Dsouza"
                                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-8 left-8 right-8 z-20">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-1">Samuel Dsouza</h3>
                                    <p className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6">Founder & Chairman</p>

                                    {/* View Article Button */}
                                    <button
                                        onClick={() => setIsArticleOpen(true)}
                                        className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 hover:bg-brand-accent backdrop-blur-md border border-white/20 text-white rounded-sm transition-all duration-300 group/btn w-fit"
                                    >
                                        <span className="font-mono text-xs uppercase tracking-widest font-bold">View Bio</span>
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Continuous Horizontal Scroll Gallery */}
                        <div className="lg:w-[65%] relative group/gallery overflow-hidden mask-linear-fade">
                            <motion.div
                                className="flex gap-4 items-center"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 15
                                }}
                            >
                                {[...galleryImages, ...galleryImages].map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="relative flex-none w-[85vw] md:w-[400px] h-[300px] md:h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-white/10 group bg-brand-dark"
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.label}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                            <span className="text-white/80 font-mono text-xs uppercase tracking-widest border-l-2 border-brand-accent pl-3">
                                                {img.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Gradient Masks for Fade Edge */}
                            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Modal / Side Panel */}
            <AnimatePresence>
                {isArticleOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsArticleOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[600px] z-[100] shadow-2xl"
                        >
                            {/* Visual & Interactive Container */}
                            <div className="relative h-full w-full bg-brand-dark/95 backdrop-blur-xl border-l border-white/10 flex flex-col">

                                {/* Close Button (Chevron) */}
                                <button
                                    onClick={() => setIsArticleOpen(false)}
                                    className="inline-flex items-center justify-center absolute z-[110] top-6 right-6 md:top-1/2 md:right-8 md:-translate-y-1/2 w-10 h-10 rounded-full bg-brand-accent text-white shadow-xl backdrop-blur-sm hover:scale-110 hover:bg-white hover:text-brand-black transition-all duration-300 border border-white/10"
                                    aria-label="Close Article"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
                                    </svg>
                                </button>



                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12">
                                    <div className="mt-16 md:mt-0">
                                        <div>
                                            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase block mb-3">The Founder</span>
                                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight header-pressure">
                                                Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Legacy.</span>
                                            </h2>
                                        </div>

                                        <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                                            <p>
                                                <strong className="text-white font-bold">Samuel Anthony Dsouza</strong> is a young entrepreneur who began his journey at the age of 16, guided by early exposure to business and the support of his father. With a naturally studious, analytical, and intellectually driven mindset, he gravitated toward business strategy, technology, and emerging industries from a very young age.
                                            </p>
                                            <p>
                                                Largely self-taught, Samuel developed hands-on expertise across IT infrastructure, hardware trading, networking, and modern technology ecosystems, including AI-driven solutions. This curiosity and discipline led him to build and operate multiple ventures within the IT industry, scaling operations with a sharp focus on efficiency, market timing, and value creation.
                                            </p>
                                            <div className="p-6 bg-white/5 border-l-2 border-brand-accent rounded-r-lg my-8">
                                                <p className="text-white italic">
                                                    "A conglomerate built on innovation, speed, and strategic foresight."
                                                </p>
                                            </div>
                                            <p>
                                                He is the founder of <strong className="text-white font-bold">LOF Enterprises</strong>, the parent organization overseeing a growing portfolio of ventures including LOF Industries, LOF Media, and LOF Real Estate, with future expansions planned in FinTech, data center, logistics, and investment-led businesses. Together, these ventures have contributed to a measurable global footprint in the IT procurement and resale market.
                                            </p>
                                            <p>
                                                Beyond operations, Samuel actively explores strategic investments across real estate, logistics, and emerging business models, positioning himself as an early-stage investor with a long-term vision. At just 21 years of age, he represents a new generation of founders—combining self-learning, execution, and foresight—driven to shape future financial markets and build enduring enterprises with global relevance.
                                            </p>
                                        </div>

                                        <div className="pt-12 mt-12 border-t border-white/10">
                                            <img src={founderHeroImg} alt="Signature" className="h-24 opacity-50 mb-4 object-contain object-left" />
                                            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">Founder & Chairman, LOF Enterprises</p>
                                        </div>

                                        {/* Mobile Bottom Back Button */}
                                        <button
                                            onClick={() => setIsArticleOpen(false)}
                                            className="md:hidden w-auto px-12 mx-auto block mt-12 py-4 bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-brand-accent transition-colors"
                                        >
                                            Go Back
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
