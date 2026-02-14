import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-brand-black text-slate-300">
            <SEO
                title="Privacy Policy & Terms | LOF Industries"
                description="Privacy Policy and Terms of Use for LOF Industries."
            />

            {/* Back Button */}
            <Link
                to="/"
                className="fixed top-8 left-6 md:left-12 z-50 p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 group"
            >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl backdrop-blur-sm"
            >
                <div className="border-b border-white/10 pb-8 mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">Privacy Policy & Terms</h1>
                    <p className="text-brand-accent font-mono text-sm uppercase tracking-widest">Effective Date: 30/11/2025</p>
                </div>

                <div className="space-y-12 text-sm md:text-base leading-relaxed font-light text-slate-300">
                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">1. Legal Ownership</h2>
                        <div className="space-y-4">
                            <p>LOFIndustries.com is owned and operated by LOF Enterprises, a registered company.</p>
                            <p>LOF Enterprises is the legal owner of all rights, intellectual property, branding, materials, and digital assets associated with this website.</p>
                            <p>LOF Industries is a recognized business name and operating division under LOF Enterprises.</p>
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-sm text-red-200 text-sm">
                                <strong className="block text-red-400 mb-1 uppercase text-xs tracking-wider">Warning</strong>
                                Unauthorized use of the names “LOF Enterprises” or “LOF Industries” for any business, commercial, promotional, or misleading purposes is strictly prohibited and may result in legal action.
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">2. Intellectual Property Rights</h2>
                        <p className="mb-4">All content displayed on this website, including but not limited to:</p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 font-mono text-xs text-brand-accent uppercase tracking-wide">
                            {['Logos', 'Brand names', 'Text content', 'Product listings', 'Business materials', 'Images', 'Videos', 'Designs', 'Layout structure', 'Documents', 'Digital assets'].map(item => (
                                <li key={item} className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-white/50 rounded-full"></span> {item}
                                </li>
                            ))}
                        </ul>
                        <p>are the exclusive property of LOF Enterprises and are protected under applicable intellectual property and trademark laws.</p>
                        <p className="mt-4 p-4 bg-white/5 rounded-sm border-l-2 border-white/20 italic text-slate-400">
                            No content from this website may be copied, reproduced, republished, distributed, modified, used commercially, stored in any database, used for training AI models, or used for competitive purposes without prior written permission from LOF Enterprises.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">3. Brand Protection</h2>
                        <p>The names <strong className="text-white">LOF Enterprises</strong> and <strong className="text-white">LOF Industries</strong> are protected business identities.</p>
                        <p className="mt-2">Any unauthorized usage, imitation, replication, or misrepresentation of these names in domain names, business registrations, advertisements, social media, or marketing materials is strictly forbidden.</p>
                        <p className="mt-2 text-red-400 font-medium">Legal action may be taken against misuse.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">4. Information Accuracy Disclaimer</h2>
                        <p>All information provided on LOFIndustries.com is for informational and business reference purposes only.</p>
                        <p className="mt-2">While we strive to maintain accuracy, LOF Enterprises does not guarantee completeness, absolute accuracy, continuous availability, or error-free content.</p>
                        <p className="mt-2">We reserve the right to update, modify, or remove content at any time without prior notice.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">5. User Conduct</h2>
                        <p className="mb-4">By accessing this website, you agree:</p>
                        <ul className="grid gap-2 pl-4 border-l border-white/10">
                            {[
                                'Not to misuse website data',
                                'Not to attempt unauthorized access',
                                'Not to scrape or extract data',
                                'Not to replicate business models',
                                'Not to impersonate LOF Enterprises or LOF Industries',
                                'Not to engage in any activity that harms the brand or operations'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <span className="text-red-400">✕</span> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-red-400 font-medium">Violation may result in legal action.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">6. Data Collection & Privacy</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Data We Collect</h3>
                                <p>Limited personal information such as Name, Email address, Phone number, and Business inquiries.</p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Usage</h3>
                                <p>Strictly for Communication, Customer support, Business transactions, and Service improvement.</p>
                            </div>
                        </div>
                        <p className="mt-6 text-brand-accent font-medium p-4 bg-brand-accent/10 rounded-sm border border-brand-accent/20">
                            We do not sell, rent, or trade personal data to third parties.
                        </p>
                        <p className="mt-4 text-xs text-slate-500">All reasonable technical measures are taken to secure stored data. However, no online system can be guaranteed 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">7. External Links & Liability</h2>
                        <p className="mb-4">LOFIndustries.com may contain links to third-party websites. We are not responsible for their content, privacy practices, or policies. Users access third-party sites at their own risk.</p>
                        <p>LOF Enterprises shall not be liable for direct or indirect damages, business losses, data loss, website downtime, or any misuse of information. Use of this website is at your own risk.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-heading font-bold text-white mb-4 border-l-2 border-brand-accent pl-4">8. Governing Law</h2>
                        <p>This Privacy Policy and Terms shall be governed by and interpreted under the laws of <strong className="text-white">India</strong>.</p>
                        <p>Any disputes shall fall under the jurisdiction of the competent courts of India.</p>
                    </section>

                    <div className="border-t border-white/10 pt-8 mt-12 text-center">
                        <p className="text-slate-500 text-sm">LOF Enterprises reserves the right to update or modify this policy at any time without prior notice. Continued use of this website constitutes acceptance of any revised terms.</p>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
