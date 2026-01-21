import { motion } from 'framer-motion';

const StatCard = ({ number, label, suffix = "+" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
        >
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2 font-display">
                {number}{suffix}
            </div>
            <div className="text-sm md:text-base font-semibold text-brand-navy uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );
};

export default StatCard;
