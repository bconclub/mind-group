import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const TeamMember = ({ member }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow text-center group h-full"
        >
            <div className="h-48 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors overflow-hidden relative">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                    <User size={64} className="text-gray-400" />
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                {member.bio && <p className="text-gray-500 text-xs mt-3">{member.bio}</p>}
            </div>
        </motion.div>
    );
};

export default TeamMember;
