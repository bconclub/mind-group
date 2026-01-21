import { motion } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';

const TeamCard = ({ member, simple = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
        >
            {/* Image Container */}
            <div className={`overflow-hidden bg-gray-200 ${simple ? 'h-64' : 'h-80'}`}>
                <img
                    src={member.image || `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random`}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <a href="#" className="text-white hover:text-brand-orange transition-colors">
                        <FiLinkedin size={24} />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                {!simple && member.bio && (
                    <p className="text-gray-500 text-sm line-clamp-3">{member.bio}</p>
                )}
            </div>
        </motion.div>
    );
};

export default TeamCard;
