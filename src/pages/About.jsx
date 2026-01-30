import { content } from '../data/content';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import Timeline from '../components/Timeline';
import { FiAward, FiZap, FiShield, FiUsers } from 'react-icons/fi';
import { useEffect } from 'react';

const About = () => {
    const { intro, visionMission, timeline } = content.about;

    // Set page title and meta description
    useEffect(() => {
        document.title = 'About Us | Mind Group Global';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Mind Group Global - a diversified holding company founded in 1992, providing integrated business solutions across Human Capital, Engineering, Technology, and Operations.');
        }
    }, []);

    return (
        <div className="bg-white min-h-screen">

            {/* 1. HERO - Small variant */}
            <div className="h-[50vh] bg-brand-navy relative flex items-center justify-center overflow-hidden pt-28 text-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="container mx-auto px-5 md:px-11 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3.5">About Mind Group Global</h1>
                    <div className="text-gray-400 text-xs font-medium tracking-wide">
                        <span className="text-brand-orange">HOME</span> / ABOUT US
                    </div>
                </div>
            </div>

            {/* 2. OVERVIEW */}
            <section className="py-[60px] md:py-[100px] bg-white">
                <div className="max-w-[1000px] mx-auto px-6">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Main Heading - one line */}
                        <h2 
                            className="font-bold text-center"
                            style={{
                                color: '#0A1128',
                                fontSize: 'clamp(32px, 5vw, 42px)',
                                lineHeight: '1.3',
                                marginBottom: '20px'
                            }}
                        >
                            Integrated Business Solutions across Human Capital, Engineering, Technology, and Operations.
                        </h2>
                        
                        {/* Orange Bottom Border */}
                        <div className="flex justify-center mb-12">
                            <div 
                                className="h-[3px] bg-brand-orange"
                                style={{ width: '80px' }}
                            ></div>
                        </div>

                        {/* Body Text */}
                        <div className="max-w-[800px] mx-auto">
                            <p 
                                className="text-center leading-relaxed"
                                style={{
                                    color: '#6C757D',
                                    fontSize: 'clamp(16px, 2vw, 18px)',
                                    lineHeight: '1.8'
                                }}
                            >
                                Since our inception, Mind Group has been at the forefront of business evolution. Founded in 1992 from visionary foresight, we identified the need for a structured, strategic approach to talent and business infrastructure in an emerging global market. Rebranded in 2005 as Mind Group, we have evolved into a diversified holding company dedicated to providing the backbone of sustainable business development.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <Timeline />

            {/* 3. VISION & MISSION */}
            <section className="py-20" style={{ background: '#F8F9FA' }}>
                <div className="container mx-auto px-5 md:px-11">
                    {/* Section Heading */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3" style={{ fontSize: '36px' }}>
                            Vision & Mission
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <motion.div
                            className="relative rounded-xl p-10 transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #FFF5F0 0%, #FFE5D9 100%)',
                                borderLeft: '4px solid #FF6B35',
                                boxShadow: '0 4px 20px rgba(255,107,53,0.15)',
                                borderRadius: '12px'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ 
                                y: -4,
                                boxShadow: '0 8px 32px rgba(255,107,53,0.25)',
                                transition: { duration: 0.3, ease: "ease" }
                            }}
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1128' }}>
                                    Our Vision
                                </h3>
                                <p className="leading-relaxed" style={{ color: '#4A4A4A' }}>
                                    To be the global benchmark for integrated business solutions, where human talent meets technical innovation to create resilient, future-ready enterprises.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            className="relative rounded-xl p-10 transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                boxShadow: '0 4px 20px rgba(255,107,53,0.3)',
                                borderRadius: '12px'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ 
                                y: -4,
                                boxShadow: '0 8px 32px rgba(255,107,53,0.4)',
                                transition: { duration: 0.3, ease: "ease" }
                            }}
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    Our Mission
                                </h3>
                                <p className="leading-relaxed" style={{ color: '#F8F9FA' }}>
                                    To empower organizations through a seamless blend of Engineering, Business Enablement, and Human Capital Management. We are committed to transforming industries—from Data Centres to Recruitment—by providing the strategic infrastructure and expert counseling necessary for sustainable growth in a fluctuating global economy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-5 md:px-11">
                    {/* Section Heading */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">Core Values</h2>
                        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
                    </motion.div>

                    {/* Core Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                        {[
                            {
                                name: 'Excellence',
                                icon: FiAward,
                                description: 'Unwavering commitment to delivering superior quality in every engagement, setting industry benchmarks.',
                                color: '#FF6B35'
                            },
                            {
                                name: 'Innovation',
                                icon: FiZap,
                                description: 'Continuously evolving our solutions to stay ahead of market dynamics and technological advancement.',
                                color: '#3B82F6'
                            },
                            {
                                name: 'Integrity',
                                icon: FiShield,
                                description: 'Building trust through transparent operations, ethical practices, and honest partnerships.',
                                color: '#10B981'
                            },
                            {
                                name: 'Partnership',
                                icon: FiUsers,
                                description: 'Fostering collaborative relationships that drive mutual growth and long-term success.',
                                color: '#8B5CF6'
                            }
                        ].map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                >
                                    {/* Big Icon */}
                                    <div 
                                        className="mb-8"
                                        style={{ color: value.color }}
                                    >
                                        <Icon size={120} strokeWidth={1.5} />
                                    </div>
                                    
                                    {/* Value Name */}
                                    <h3 className="text-2xl font-bold text-brand-navy mb-6">
                                        {value.name}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Quote Section */}
                    <motion.div
                        className="max-w-[900px] mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div 
                            className="p-10 rounded-lg"
                            style={{
                                background: '#FFF5F0',
                                borderLeft: '4px solid #FF6B35'
                            }}
                        >
                            <p 
                                className="text-brand-navy text-center leading-relaxed font-medium italic"
                                style={{ fontSize: '20px' }}
                            >
                                "{visionMission.values}"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;
