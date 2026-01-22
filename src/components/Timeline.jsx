import { motion } from 'framer-motion';

const Timeline = () => {
    const milestones = [
        { year: "1992", title: "Talent Services", desc: "Founded with focus on human capital solutions and structured recruitment approach." },
        { year: "1998", title: "India's Trusted Business Setup Partner", desc: "Became the go-to partner for businesses establishing operations in India." },
        { year: "2005", title: "Executive Search & International Operations", desc: "Launched full-fledged Executive Search Advisory Services and commenced International Operations." },
        { year: "2010", title: "Industry Diversification", desc: "Strategic portfolio expansion across multiple industry verticals." },
        { year: "2016", title: "GCC & Emerging Technologies", desc: "Full-service partner for India's GCC initiatives in emerging technologies." },
        { year: "2021", title: "Product Engineering Services", desc: "Forayed into Product Engineering Services and Solutions for High-tech sectors." },
        { year: "2023", title: "Data Center Consulting", desc: "Launched Data Center Consulting Services and infrastructure transformation." }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 md:px-11">
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                        Three Decades of Evolution
                    </h2>
                    <p className="text-brand-gray text-sm max-w-2xl mx-auto">
                        Our journey from a talent services startup to a comprehensive business solutions provider
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Timeline Line - Desktop (Center) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-brand-orange"></div>

                    {/* Vertical Timeline Line - Mobile (Left) */}
                    <div className="md:hidden absolute left-[30px] top-0 bottom-0 w-0.5 bg-brand-orange"></div>

                    {/* Timeline Items */}
                    <div className="relative space-y-12 md:space-y-16">
                        {milestones.map((milestone, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={milestone.year}
                                    className="relative flex items-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    {/* Year Circle - Desktop (Center) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                                        <div className="w-[60px] h-[60px] rounded-full bg-white border-[3px] border-brand-orange flex items-center justify-center shadow-sm">
                                            <span className="text-brand-navy font-bold text-sm">{milestone.year}</span>
                                        </div>
                                    </div>

                                    {/* Year Circle - Mobile (Left) */}
                                    <div className="md:hidden absolute left-0 z-10">
                                        <div className="w-[60px] h-[60px] rounded-full bg-white border-[3px] border-brand-orange flex items-center justify-center shadow-sm">
                                            <span className="text-brand-navy font-bold text-sm">{milestone.year}</span>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        className={`w-full md:w-[45%] ml-[80px] md:ml-0 ${
                                            isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                        } bg-white rounded-xl shadow-sm border border-gray-100 p-6`}
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    >
                                        <div className="space-y-3">
                                            <h3 className="text-xs font-semibold text-brand-orange uppercase tracking-wide">
                                                {milestone.year}
                                            </h3>
                                            <h4 className="text-lg md:text-xl font-bold text-brand-navy">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
                                                {milestone.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
