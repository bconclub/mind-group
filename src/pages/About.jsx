import { content } from '../data/content';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import Timeline from '../components/Timeline';

const About = () => {
    const { intro, visionMission, timeline } = content.about;

    return (
        <div className="bg-white min-h-screen">

            {/* 1. HERO - Small variant */}
            <div className="h-[50vh] bg-brand-navy relative flex items-center justify-center overflow-hidden pt-28 text-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="container mx-auto px-5 md:px-11 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3.5">About Mind Group Advisors</h1>
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
                        {/* Main Heading */}
                        <h2 
                            className="font-bold text-center"
                            style={{
                                color: '#0A1128',
                                fontSize: 'clamp(32px, 5vw, 42px)',
                                lineHeight: '1.3',
                                marginBottom: '20px'
                            }}
                        >
                            Integrated business solutions across Human Capital, Engineering, Technology, and Operations
                        </h2>
                        
                        {/* Orange Bottom Border */}
                        <div className="flex justify-center mb-5">
                            <div 
                                className="h-[3px] bg-brand-orange"
                                style={{ width: '80px' }}
                            ></div>
                        </div>

                        {/* Tagline */}
                        <p 
                            className="font-semibold text-center"
                            style={{
                                color: '#FF6B35',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                letterSpacing: '0.5px',
                                marginBottom: '48px'
                            }}
                        >
                            Empowering global growth through strategic innovation.
                        </p>

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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-11 text-center">
                    <h2 className="text-2xl font-bold text-brand-navy mb-14">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-16">
                        {['Excellence', 'Innovation', 'Integrity', 'Partnership'].map((val, idx) => (
                            <div key={idx} className="bg-white p-7 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-shadow border border-gray-50">
                                <h3 className="font-bold text-brand-navy text-lg mb-3.5">{val}</h3>
                                <div className="h-0.5 w-11 bg-brand-orange/30 mx-auto mb-3.5"></div>
                                <p className="text-xs text-gray-500 leading-relaxed">Driving our commitment to long-term success.</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto p-9 bg-brand-light-gray/50 rounded-2xl border border-gray-100 relative">
                        <div className="text-brand-gray text-base text-center leading-relaxed font-medium">
                            "{visionMission.values}"
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;
