import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center">
            {/* Background Image with Parallax Effect could go here if we had logic, but simple clean bg for now */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{ backgroundImage: "url('/Mindgroup hero New.webp')" }}
            >
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent"></div>

            <div className="container mx-auto px-5 md:px-11 relative z-10 pt-16 flex flex-col items-start md:items-center justify-center text-left md:text-center h-full">
                <div className="max-w-4xl md:mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-2 rounded bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-bold text-[11px] tracking-widest uppercase mb-5 backdrop-blur-sm">
                            Established 1992
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 24, color: '#FF6B35' }}
                                animate={{ opacity: 1, y: 0, color: ['#FF6B35', '#FF6B35', '#FFFFFF'] }}
                                transition={{ duration: 1.4, times: [0, 0.5, 1], ease: 'easeOut' }}
                            >
                                People to Power.
                            </motion.span>
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 24, color: '#FF6B35' }}
                                animate={{ opacity: 1, y: 0, color: ['#FF6B35', '#FF6B35', '#FFFFFF'] }}
                                transition={{ duration: 1.4, delay: 0.2, times: [0, 0.5, 1], ease: 'easeOut' }}
                            >
                                Systems to Scale.
                            </motion.span>
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 24, color: '#FF6B35' }}
                                animate={{ opacity: 1, y: 0, color: ['#FF6B35', '#FF6B35', '#FFFFFF'] }}
                                transition={{ duration: 1.4, delay: 0.4, times: [0, 0.5, 1], ease: 'easeOut' }}
                            >
                                Operations to Last
                            </motion.span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-8 max-w-2xl md:mx-auto leading-relaxed font-light">
                            Integrated business solutions across Human Capital, Engineering, Technology, and Operations. Empowering global growth through strategic innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
                            <Link
                                to="/services"
                                className="px-7 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg text-center"
                            >
                                Explore Services
                            </Link>
                            <Link
                                to="/about"
                                className="px-7 py-3 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-navy transition-all text-center flex items-center justify-center gap-2 group"
                            >
                                Our Story <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-9 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-5 h-9 border-2 border-current rounded-full flex justify-center pt-1">
                    <div className="w-1 h-2 bg-current rounded-full"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
