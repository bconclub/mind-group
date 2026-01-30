import { content } from '../data/content';
import { FiCheck, FiExternalLink } from 'react-icons/fi';
import CTASection from '../components/CTASection';
import { useEffect, useRef } from 'react';
import { useLeadModal } from '../context/LeadModalContext';
import { useLocation } from 'react-router-dom';

// Slug for URL hash: HUMAN CAPITAL → human-capital, etc.
const categoryToSlug = (category) =>
    category ? category.toLowerCase().replace(/\s+/g, '-') : '';

const Services = () => {
    const { expertise } = content.about;
    const { openModal } = useLeadModal();
    const location = useLocation();
    const hasScrolled = useRef(false);

    // Set page title and meta description
    useEffect(() => {
        document.title = 'Our Services | Mind Group Global';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Comprehensive business solutions including Recruitment & Counselling, Engineering Services, PBOMT, and Data Centre Transformation. Expert consultation for sustainable growth.');
        }
    }, []);

    // Scroll to section when navigating with hash (e.g. /services#service-human-capital)
    useEffect(() => {
        const hash = location.hash?.replace('#', '');
        if (!hash || !hash.startsWith('service-')) return;
        hasScrolled.current = false;
        const scrollToSection = () => {
            const el = document.getElementById(hash);
            if (el && !hasScrolled.current) {
                hasScrolled.current = true;
                el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            }
        };
        scrollToSection();
        const t = setTimeout(scrollToSection, 300);
        return () => clearTimeout(t);
    }, [location.pathname, location.hash]);

    const getCategoryStyles = (category) => {
        const styles = {
            'HUMAN CAPITAL': { bg: '#DBEAFE', text: '#1E40AF' },
            'TECHNOLOGY': { bg: '#FED7AA', text: '#C2410C' },
            'ENGINEERING': { bg: '#D1FAE5', text: '#065F46' },
            'OPERATIONS': { bg: '#E9D5FF', text: '#6B21A8' }
        };
        return styles[category] || { bg: '#F3F4F6', text: '#374151' };
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Hero */}
            <div className="bg-brand-navy pt-[172px] pb-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-5 md:px-11 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5">Our Expertise</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
                        Comprehensive solutions tailored for the modern enterprise.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-5 md:px-11 py-20 space-y-20">
                {expertise.map((service, idx) => (
                    <div
                        key={idx}
                        id={service.category ? `service-${categoryToSlug(service.category)}` : undefined}
                        className={`flex flex-col lg:flex-row gap-14 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Image Placeholder */}
                        <div className="lg:w-1/2 w-full">
                            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative group">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect fill="#e5e7eb" width="400" height="225"/><text fill="#6b7280" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14">Image unavailable</text></svg>');
                                    }}
                                />
                                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-1/2 w-full">
                            <div className="w-11 h-1 bg-brand-orange mb-5"></div>
                            
                            {/* Category Tag */}
                            {service.category && (
                                <div className="mb-3">
                                    <span
                                        className="inline-block px-4 py-1.5 rounded-[20px] text-xs font-semibold uppercase tracking-[1px]"
                                        style={{
                                            backgroundColor: getCategoryStyles(service.category).bg,
                                            color: getCategoryStyles(service.category).text
                                        }}
                                    >
                                        {service.category}
                                    </span>
                                </div>
                            )}
                            
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-5">{service.fullTitle || service.title}</h2>
                            <p className="text-brand-gray text-base leading-relaxed mb-7">
                                {service.desc} We provide end-to-end support to ensure your strategic goals are met with precision and efficiency.
                            </p>

                            <div className="space-y-2 mb-7">
                                <div className="flex items-center gap-2 text-brand-navy font-medium text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FiCheck size={12} /></div>
                                    <span>Strategic Planning & Execution</span>
                                </div>
                                <div className="flex items-center gap-2 text-brand-navy font-medium text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FiCheck size={12} /></div>
                                    <span>Global Compliance & Standards</span>
                                </div>
                                <div className="flex items-center gap-2 text-brand-navy font-medium text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600"><FiCheck size={12} /></div>
                                    <span>Dedicated Support Team</span>
                                </div>
                            </div>

                            {/* Brand Section - clickable like Home */}
                            {service.brands && service.brands.length > 0 && (
                                <div className="mt-6 mb-6">
                                    <p className="text-gray-600 text-sm mb-3">Delivered by</p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {service.brands.map((brand, brandIdx) => {
                                            const Wrapper = brand.url ? 'a' : 'div';
                                            const wrapperProps = brand.url
                                                ? { href: brand.url, target: '_blank', rel: 'noopener noreferrer', title: 'Opens in new tab', className: 'flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md hover:ring-2 hover:ring-brand-orange/40 hover:ring-offset-2 transition-all duration-200 border border-gray-100 relative group cursor-pointer' }
                                                : { className: 'flex items-center' };
                                            return (
                                                <Wrapper key={brandIdx} {...wrapperProps}>
                                                    {brand.logo ? (
                                                        <img
                                                            src={brand.logo}
                                                            alt={brand.name}
                                                            className="h-8 object-contain"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                                                            <span className="text-sm text-brand-navy font-medium">{brand.name}</span>
                                                        </div>
                                                    )}
                                                    {brand.url && (
                                                        <FiExternalLink className="ml-1 h-4 w-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden />
                                                    )}
                                                </Wrapper>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <button
                                    type="button"
                                    onClick={() => openModal(service)}
                                    className="px-7 py-2.5 bg-brand-navy text-white font-bold rounded hover:bg-brand-orange transition-colors shadow-lg"
                                >
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
