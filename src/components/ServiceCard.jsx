import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, desc, icon: Icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
            {/* Decorative Gradient Blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-soft-blue rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"></div>

            <div className="w-14 h-14 bg-brand-soft-blue rounded-xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 relative z-10">
                <Icon size={28} />
            </div>

            <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors relative z-10">
                {title}
            </h3>

            <p className="text-brand-gray text-sm leading-relaxed mb-6 relative z-10">
                {desc}
            </p>

            <Link to="/services" className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm tracking-wide group/link relative z-10">
                <span className="border-b-2 border-transparent group-hover/link:border-brand-orange transition-colors">LEARN MORE</span>
                <FiArrowRight className="transform group-hover/link:translate-x-1 transition-transform text-brand-orange" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
