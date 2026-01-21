import { content } from '../data/content';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import CTASection from '../components/CTASection';

const Services = () => {
    const { expertise } = content.about;

    return (
        <div className="bg-white min-h-screen">

            {/* Hero */}
            <div className="bg-brand-navy pt-48 pb-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Comprehensive solutions tailored for the modern enterprise.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-6 md:px-12 py-24 space-y-24">
                {expertise.map((service, idx) => (
                    <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Image Placeholder */}
                        <div className="lg:w-1/2 w-full">
                            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative group">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-1/2 w-full">
                            <div className="w-12 h-1 bg-brand-orange mb-6"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">{service.fullTitle || service.title}</h2>
                            <p className="text-brand-gray text-lg leading-relaxed mb-8">
                                {service.desc} We provide end-to-end support to ensure your strategic goals are met with precision and efficiency.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-brand-navy font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FiCheck size={14} /></div>
                                    <span>Strategic Planning & Execution</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-navy font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FiCheck size={14} /></div>
                                    <span>Global Compliance & Standards</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-navy font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FiCheck size={14} /></div>
                                    <span>Dedicated Support Team</span>
                                </div>
                            </div>

                            <button className="px-8 py-3 bg-brand-navy text-white font-bold rounded hover:bg-brand-orange transition-colors shadow-lg">
                                Discuss This Service
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <CTASection />
        </div>
    );
};

export default Services;
