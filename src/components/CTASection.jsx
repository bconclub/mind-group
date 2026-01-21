import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-brand-orange to-orange-600 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-navy rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
                        Let's discuss how Mind Group Advisors can support your growth through our integrated solutions.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-navy hover:text-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Get In Touch <FiArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
