import { content } from '../data/content';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

const About = () => {
    const { intro, visionMission, timeline } = content.about;

    return (
        <div className="bg-white min-h-screen">

            {/* 1. HERO - Small variant */}
            <div className="h-[50vh] bg-brand-navy relative flex items-center justify-center overflow-hidden pt-32 text-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Mind Group Advisors</h1>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                        <span className="text-brand-orange">HOME</span> / ABOUT US
                    </div>
                </div>
            </div>

            {/* 2. OVERVIEW */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl font-bold text-brand-navy mb-8 leading-relaxed">
                            "{intro.title}"
                        </h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-12">
                            {intro.text1}
                        </p>

                        {/* Timeline */}
                        <div className="relative border-t border-gray-200 pt-16">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-300">Start</div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {timeline.map((item, idx) => (
                                    <div key={idx} className="relative pt-8 md:pt-0">
                                        {/* Dot */}
                                        <div className="hidden md:block absolute top-[-69px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow"></div>

                                        <div className="text-5xl font-bold text-brand-light-gray mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VISION & MISSION */}
            <section className="py-24 bg-brand-light-gray">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-brand-orange"
                        >
                            <div className="text-brand-orange opacity-20 font-bold text-6xl mb-4">01</div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
                            <p className="text-brand-gray leading-relaxed text-lg">{visionMission.vision}</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-brand-navy p-10 rounded-2xl shadow-lg border-l-4 border-brand-teal text-white"
                        >
                            <div className="text-brand-teal opacity-20 font-bold text-6xl mb-4">02</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">{visionMission.mission}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-16">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {['Excellence', 'Innovation', 'Integrity', 'Partnership'].map((val, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-shadow border border-gray-50">
                                <h3 className="font-bold text-brand-navy text-xl mb-4">{val}</h3>
                                <div className="h-0.5 w-12 bg-brand-orange/30 mx-auto mb-4"></div>
                                <p className="text-sm text-gray-500 leading-relaxed">Driving our commitment to long-term success.</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto p-10 bg-brand-light-gray/50 rounded-2xl border border-gray-100 relative">
                        <div className="text-brand-gray text-lg text-center leading-relaxed font-medium">
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
