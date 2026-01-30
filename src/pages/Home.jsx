import { content } from '../data/content';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import VerticalsSection from '../components/VerticalsSection';
import TestimonialCarousel from '../components/TestimonialCarousel'; // Using general one if needed, or simplified
import { FiSettings, FiCpu, FiGlobe, FiServer, FiUsers, FiArrowRight, FiCheckCircle, FiShield, FiLayers, FiExternalLink, FiLinkedin } from 'react-icons/fi'; // Icons
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Animated Counter Component - counts up when section is in view
const AnimatedCounter = ({ value, suffix = '', duration = 2, zeroPad = false }) => {
    const [count, setCount] = useState(typeof value === 'number' ? 0 : value);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    if (typeof value === 'number') {
                        setHasAnimated(true);
                        const startTime = Date.now();
                        const endValue = value;
                        const startValue = 0;

                        const animate = () => {
                            const now = Date.now();
                            const elapsed = (now - startTime) / 1000;
                            const progress = Math.min(elapsed / duration, 1);
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
                            setCount(current);
                            if (progress < 1) requestAnimationFrame(animate);
                            else setCount(endValue);
                        };
                        requestAnimationFrame(animate);
                    } else {
                        setCount(value);
                        setHasAnimated(true);
                    }
                }
            },
            { threshold: 0.1, rootMargin: '-100px' }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current && observer) observer.unobserve(ref.current); };
    }, [value, duration, hasAnimated]);

    const display = zeroPad && count < 10 ? '0' + count : count;
    return (
        <span ref={ref} className="relative">
            {display}
            {suffix && typeof value === 'number' && <span>{suffix}</span>}
        </span>
    );
};

// Why Partner Section Component
const WhyPartnerSection = ({ about }) => {
    // Early return if data is invalid
    if (!about || !about.partners || !about.partners.reasons || about.partners.reasons.length < 3) {
        return (
            <section className="py-20 bg-brand-navy text-white">
                <div className="container mx-auto px-5 md:px-11 text-center">
                    <h2 className="text-3xl font-bold mb-3">Why Partner With Us?</h2>
                    <p className="text-red-300">Data structure error</p>
                </div>
            </section>
        );
    }
    
    const cards = [
        { icon: FiShield, title: "Decades of Resilience", description: about.partners.reasons[0].desc },
        { icon: FiLayers, title: "Strategic Partnerships", description: about.partners.reasons[1].desc },
        { icon: FiGlobe, title: "Commitment to Excellence", description: about.partners.reasons[2].desc }
    ];

    return (
        <section 
            className="py-[100px] relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0A1128 0%, #1E1B4B 50%, #312E81 100%)'
            }}
        >
            <div className="container mx-auto px-5 md:px-11 relative z-10">
                {/* Heading */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[48px] font-bold text-white mb-0">Why Partner With Us?</h2>
                    <div className="w-[80px] h-1 bg-brand-orange mx-auto mt-4"></div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                            >
                                <div 
                                    className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-10 w-full hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:-translate-y-2"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.4s ease'
                                    }}
                                >
                                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 text-white text-2xl mx-auto">
                                        <Icon />
                                    </div>
                                    <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
                                    <p className="text-[#D1D5DB] text-base leading-[1.7]">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    const { about, groupCompanies, leadership } = content;

    // Set page title and meta description
    useEffect(() => {
        document.title = 'Mind Group Global | People to Power. Systems to Scale. Operations to Last';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Diversified holding company providing integrated business solutions across Engineering, Technology, and Human Capital. 30+ years of excellence, 6 group companies, global presence.');
        }
    }, []);

    return (
        <div className="bg-brand-light-gray min-h-screen">
            <Hero />

            {/* 2. WHO WE ARE */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-11">
                    <div className="flex flex-col lg:flex-row items-center gap-14">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-3 -left-3 w-[88px] h-[88px] bg-brand-orange/10 rounded-full -z-10"></div>
                            <div className="absolute -bottom-3 -right-3 w-[115px] h-[115px] bg-brand-navy/10 rounded-full -z-10"></div>
                            <video
                                src="/assets/Sky Mind Group.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl shadow-2xl w-full object-cover h-[450px]"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-5">
                            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs">Who We Are</h4>
                            <h2 className="text-3xl font-bold text-brand-navy leading-tight">The Mind Group Story</h2>
                            <p className="text-brand-gray text-base leading-relaxed">
                                {content.landing.story.text1.substring(0, 200)}...
                            </p>
                            <p className="text-brand-gray text-base leading-relaxed">
                                {content.landing.story.text3}
                            </p>

                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                                Read Full Story <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2.5. MIND GROUP ECOSYSTEM */}
            <section className="py-20 bg-brand-soft-blue">
                <div className="container mx-auto px-5 md:px-11">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl font-bold text-brand-navy mb-3">Mind Group Ecosystem</h2>
                        <p className="text-gray-500 text-sm">A diversified ecosystem operating across multiple high-growth sectors.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {groupCompanies.map((company, idx) => {
                            const Wrapper = company.url ? 'a' : 'div';
                            const wrapperProps = company.url
                                ? { href: company.url, target: '_blank', rel: 'noopener noreferrer', title: 'Opens in new tab', className: 'bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:ring-2 hover:ring-brand-orange/40 hover:ring-offset-2 transition-all duration-200 flex items-center justify-center text-center h-[115px] border border-gray-100 relative group cursor-pointer' }
                                : { className: 'bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center h-[115px] border border-gray-100 group cursor-pointer' };
                            return (
                                <Wrapper key={idx} {...wrapperProps}>
                                    {company.logo ? (
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    ) : (
                                        <span className="font-bold text-sm text-brand-gray group-hover:text-brand-orange transition-colors">{company.name}</span>
                                    )}
                                    {company.url && (
                                        <FiExternalLink className="absolute top-2 right-2 h-4 w-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                                    )}
                                </Wrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. OUR VERTICALS */}
            <VerticalsSection />

            {/* 3. STATS BAR - Simple tint cards, no heavy shadow or orange stripe */}
            <section className="relative z-20 w-full py-14 bg-white" id="stats">
                <div className="container mx-auto px-5 md:px-11">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-brand-navy/[0.04] rounded-lg border border-brand-navy/[0.06] p-6 flex flex-col items-center text-center min-h-[140px] justify-between"
                        >
                            <span className="px-2.5 py-1 rounded-full bg-brand-orange/[0.08] text-[10px] font-semibold uppercase tracking-wider text-brand-navy">Since 1992</span>
                            <p className="text-3xl md:text-4xl font-bold font-display mt-2 text-brand-navy">
                                <AnimatedCounter value={30} suffix="+" duration={2} />
                            </p>
                            <p className="text-sm font-medium text-brand-gray mt-1">Years of Excellence</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-brand-navy/[0.04] rounded-lg border border-brand-navy/[0.06] p-6 flex flex-col items-center text-center min-h-[140px] justify-between"
                        >
                            <span className="px-2.5 py-1 rounded-full bg-brand-orange/[0.08] text-[10px] font-semibold uppercase tracking-wider text-brand-navy">Entities</span>
                            <p className="text-3xl md:text-4xl font-bold font-display mt-2 text-brand-navy">
                                <AnimatedCounter value={6} duration={2} zeroPad />
                            </p>
                            <p className="text-sm font-medium text-brand-gray mt-1">Group Companies</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-brand-navy/[0.04] rounded-lg border border-brand-navy/[0.06] p-6 flex flex-col items-center text-center min-h-[140px] justify-between"
                        >
                            <span className="px-2.5 py-1 rounded-full bg-brand-orange/[0.08] text-[10px] font-semibold uppercase tracking-wider text-brand-navy">Global Reach</span>
                            <p className="text-3xl md:text-4xl font-bold font-display mt-2 text-brand-navy">
                                <AnimatedCounter value={5} duration={2} zeroPad />
                            </p>
                            <p className="text-sm font-medium text-brand-gray mt-1">Continents Presence</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-brand-navy/[0.04] rounded-lg border border-brand-navy/[0.06] p-6 flex flex-col items-center text-center min-h-[140px] justify-between"
                        >
                            <span className="px-2.5 py-1 rounded-full bg-brand-orange/[0.08] text-[10px] font-semibold uppercase tracking-wider text-brand-navy">Trusted</span>
                            <p className="text-3xl md:text-4xl font-bold font-display mt-2 text-brand-navy">
                                <AnimatedCounter value={500} suffix="+" duration={2} />
                            </p>
                            <p className="text-sm font-medium text-brand-gray mt-1">Clients Served</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. WHY PARTNER WITH US */}
            <WhyPartnerSection about={about} />

            {/* LEADERSHIP PREVIEW (Name cards only) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-11 text-center">
                    <h2 className="text-2xl font-bold text-brand-navy mb-10">Led by Industry Veterans</h2>
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {leadership.foundingTeam.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-4 min-w-[160px]">
                                <h4 className="font-bold text-brand-navy text-base">{member.name}</h4>
                                {member.role && member.role !== "Founding Team" && (
                                    <p className="text-brand-orange text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                                )}
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center mt-2 text-[#0077B5] hover:text-[#005885] transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <FiLinkedin size={18} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                    <Link to="/leadership" className="inline-block px-7 py-2.5 border border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                        Our Team
                    </Link>
                </div>
            </section>

            {/* 8. CTA */}
            <CTASection />
        </div>
    );
};

export default Home;
