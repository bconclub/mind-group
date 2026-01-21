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

            <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20 flex flex-col items-start md:items-center justify-center text-left md:text-center h-full">
                <div className="max-w-4xl md:mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
                            Established 1992
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Building Resilient, <br />
                            <span className="text-brand-orange">Future-Ready</span> Enterprises
                        </h1>
                        <p className="text-xl text-gray-200 mb-10 max-w-2xl md:mx-auto leading-relaxed font-light">
                            Integrated business solutions across Engineering, Technology, and Human Capital. Empowering global growth through strategic innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-start md:justify-center">
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg text-center"
                            >
                                Explore Services
                            </Link>
                            <Link
                                to="/about"
                                className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-navy transition-all text-center flex items-center justify-center gap-2 group"
                            >
                                Our Story <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-current rounded-full"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
