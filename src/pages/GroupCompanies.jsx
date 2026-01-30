import { content } from '../data/content';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GroupCompanies = () => {
    const { groupCompanies } = content;

    return (
        <div className="min-h-screen bg-off-white pb-20">
            <div className="bg-light-tan py-16 mb-16">
                <div className="container mx-auto px-4 md:px-12">
                    <h1 className="text-4xl font-bold text-charcoal mb-2">Group Companies</h1>
                    <p className="text-charcoal/80">The diversified entities powering our global vision.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupCompanies.map((company, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-charcoal hover:border-primary group"
                    >
                        <div className="h-16 mb-6 flex items-center">
                            {company.logo ? (
                                <img src={company.logo} alt={company.name} className="max-h-full w-auto object-contain" />
                            ) : (
                                <div className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors">
                                    {company.name}
                                </div>
                            )}
                        </div>
                        <p className="text-text-gray mb-6">{company.desc}</p>
                        {company.url ? (
                            <a href={company.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                Visit Website <ArrowRight size={16} />
                            </a>
                        ) : null}
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default GroupCompanies;
