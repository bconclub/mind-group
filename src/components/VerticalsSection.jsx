import { motion } from 'framer-motion';
import { FiUsers, FiCpu, FiSettings, FiServer, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const VerticalsSection = () => {
    // sectionSlug: hash on Services page (service-human-capital, service-engineering, service-operations, service-technology)
    const verticals = [
        {
            id: 1,
            title: 'Human Capital',
            sectionSlug: 'human-capital',
            description: 'Connecting organizations with top-tier talent and strategic workforce solutions',
            icon: FiUsers,
            companies: [
                { name: 'Mind Search Consultants', logo: '/brand logos/Mind Search.webp', url: 'https://mindgroupsolutions.com/' },
                { name: 'Mind Select Consultants', logo: '/brand logos/Mind Select.webp', url: 'https://mindgroupsolutions.com/' },
                { name: 'Open Mind Consultants', logo: '/brand logos/Open Mind.png', url: 'https://mindgroupsolutions.com/' }
            ],
            image: '/assets/Human Capital.webp',
            bgColor: 'bg-white',
            layout: 'image-left' // Image LEFT, Content RIGHT
        },
        {
            id: 2,
            title: 'Technology',
            sectionSlug: 'operations', // MSC / PBOMT on Services page
            description: 'Global Competency Centers and cutting-edge technology solutions',
            icon: FiCpu,
            companies: [
                { name: 'MSC - GCC Global Competency Centers', logo: '/brand logos/msc logo v1.png', url: 'https://mscdubai.ae/' }
            ],
            image: '/assets/Technology.webp',
            bgColor: 'bg-brand-light-gray',
            layout: 'image-right' // Content LEFT, Image RIGHT
        },
        {
            id: 3,
            title: 'Engineering',
            sectionSlug: 'engineering',
            description: 'Technical excellence and innovative solutions for complex projects',
            icon: FiSettings,
            companies: [
                { name: 'Digileum - GCC Global Competency Centers', logo: '/brand logos/digilium.png', url: 'https://digileum.in/' }
            ],
            image: '/assets/PCOT.webp',
            bgColor: 'bg-white',
            layout: 'image-left' // Image LEFT, Content RIGHT
        },
        {
            id: 4,
            title: 'Data Center',
            sectionSlug: 'technology', // Data Centre Transformation on Services page
            description: 'Data Centres and Digital Ecosystems for the AI Era',
            icon: FiServer,
            companies: [
                { name: 'Blue Peak - Data Centres and Digital Ecosystems', logo: '/brand logos/Blue PEak.png', url: 'https://blue-peak.us/' }
            ],
            image: '/assets/Data center.webp',
            bgColor: 'bg-brand-light-gray',
            layout: 'image-right' // Content LEFT, Image RIGHT
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
        >
            {verticals.map((vertical) => {
                const Icon = vertical.icon;
                const isImageLeft = vertical.layout === 'image-left';

                return (
                    <motion.div
                        key={vertical.id}
                        variants={itemVariants}
                        className={`${vertical.bgColor} py-20`}
                    >
                        <div className="max-w-[1200px] mx-auto px-5 md:px-11">
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center`}>
                                {/* Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`order-1 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}
                                >
                                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                                        <img
                                            src={vertical.image}
                                            alt={vertical.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                console.error(`Failed to load image: ${vertical.image}`, e);
                                                // Fallback to .jpg if .webp fails
                                                if (vertical.image.endsWith('.webp')) {
                                                    e.target.src = vertical.image.replace('.webp', '.jpg');
                                                }
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}
                                >
                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-brand-soft-blue rounded-full flex items-center justify-center mb-6">
                                        <Icon className="text-brand-navy" size={40} />
                                    </div>

                                    {/* Heading */}
                                    <h2 className="text-[36px] font-bold text-brand-navy mb-4 leading-tight">
                                        {vertical.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-[18px] text-brand-gray leading-[1.7] mb-8">
                                        {vertical.description}
                                    </p>

                                    {/* Subheading */}
                                    <h3 className="text-[18px] font-semibold text-brand-orange mb-4 mt-8">
                                        Our Companies
                                    </h3>

                                    {/* Company List */}
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-6">
                                        {vertical.companies
                                            .filter(company => {
                                                const companyLogo = typeof company === 'object' ? company.logo : null;
                                                return companyLogo;
                                            })
                                            .map((company, idx) => {
                                                const companyName = typeof company === 'string' ? company : company.name;
                                                const companyLogo = typeof company === 'object' ? company.logo : null;
                                                const companyUrl = typeof company === 'object' ? company.url : null;
                                                const imgEl = (
                                                    <img 
                                                        src={companyLogo} 
                                                        alt={companyName}
                                                        className="h-10 md:h-12 w-auto object-contain"
                                                    />
                                                );
                                                const wrapperClass = "flex items-center py-1";
                                                return companyUrl ? (
                                                    <a
                                                        key={idx}
                                                        href={companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="Opens in new tab"
                                                        className={`${wrapperClass} relative inline-flex items-center gap-1.5 rounded-md transition-all duration-200 hover:opacity-90 hover:scale-105 hover:ring-2 hover:ring-brand-orange/40 hover:ring-offset-2 group`}
                                                    >
                                                        {imgEl}
                                                        <FiExternalLink className="h-3.5 w-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden />
                                                    </a>
                                                ) : (
                                                    <span key={idx} className={wrapperClass}>{imgEl}</span>
                                                );
                                            })}
                                    </div>

                                    {/* Explore More: go to Services page and scroll to this vertical's section */}
                                    <Link
                                        to={`/services#service-${vertical.sectionSlug}`}
                                        className="inline-flex items-center gap-2 text-brand-orange font-semibold text-[16px] hover:underline group"
                                    >
                                        Explore More
                                        <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.section>
    );
};

export default VerticalsSection;
