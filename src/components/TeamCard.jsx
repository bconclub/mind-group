import { motion } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';

// Helper function to get initials from name
const getInitials = (name) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
};

// Get color for founding team members (using only brand colors: navy and orange)
const getFoundingTeamColor = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('sheaker')) return 'bg-brand-navy';
    if (nameLower.includes('deepa')) return 'bg-brand-orange';
    if (nameLower.includes('raja')) return 'bg-brand-navy';
    if (nameLower.includes('venkat')) return 'bg-brand-orange';
    return 'bg-brand-navy'; // default
};

// Get brand color for Panel of Experts (cycling through only brand colors: navy and orange)
const getExpertColor = (name, index) => {
    const brandColors = ['bg-brand-navy', 'bg-brand-orange'];
    return brandColors[index % brandColors.length];
};

// Get text color matching the circle color (using only brand colors)
const getExpertTextColor = (colorClass) => {
    if (colorClass.includes('navy')) return 'text-brand-navy';
    if (colorClass.includes('orange')) return 'text-brand-orange';
    return 'text-brand-navy';
};

const TeamCard = ({ member, simple = false, foundingTeam = false, index = 0 }) => {
    // Founding Team Design - text-only cards, no images
    if (foundingTeam) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center h-full flex flex-col min-h-[280px] w-full"
            >
                {/* Name */}
                <h4 className="font-bold text-brand-navy text-[1.2rem] mb-2">{member.name}</h4>
                
                {/* Role */}
                {member.role && member.role !== "Founding Team" && (
                    <p className="text-brand-orange text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                )}
                
                {/* Bio */}
                {member.bio && (
                    <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">{member.bio}</p>
                )}
                
                {/* Social Links - Below Bio (LinkedIn only) */}
                <div className="flex items-center justify-center mt-auto pt-2">
                    {member.linkedin ? (
                        <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#0077B5] hover:text-[#005885] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={20} />
                        </a>
                    ) : (
                        <span className="text-gray-300 cursor-not-allowed">
                            <FiLinkedin size={20} />
                        </span>
                    )}
                </div>
            </motion.div>
        );
    }

    // Regular Team Card Design (Panel of Experts)
    const initials = getInitials(member.name);
    const circleColor = getExpertColor(member.name, index);
    const textColor = getExpertTextColor(circleColor);
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 p-6 max-w-[400px] w-full"
        >
            {/* Initials Circle - Left Side */}
            <div className="flex-shrink-0">
                <div className={`w-14 h-14 ${circleColor} rounded-full flex items-center justify-center border-[3px] border-white shadow-sm`}>
                    <span className="text-white text-xl font-bold">{initials}</span>
                </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-grow min-w-0">
                <h3 className="text-lg font-bold text-brand-navy mb-1 truncate">{member.name}</h3>
                
                {/* Social Links - Below Name (LinkedIn only) */}
                <div className="flex items-center gap-3 mb-2">
                    {member.linkedin && (
                        <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#0077B5] hover:text-[#005885] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={18} />
                        </a>
                    )}
                </div>
                
                <p className={`${textColor} text-xs font-semibold uppercase tracking-wider mb-2 truncate`}>{member.role}</p>
                {!simple && member.bio && (
                    <p className="text-gray-500 text-sm line-clamp-2 mb-2">{member.bio}</p>
                )}
            </div>
        </motion.div>
    );
};

export default TeamCard;
