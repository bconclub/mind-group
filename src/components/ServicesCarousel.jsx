import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ServiceCard from './ServiceCard';

const ServicesCarousel = ({ services, icons }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, itemsPerView]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const maxIndex = Math.max(0, services.length - itemsPerView);
            return prev >= maxIndex ? 0 : prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const maxIndex = Math.max(0, services.length - itemsPerView);
            return prev <= 0 ? maxIndex : prev - 1;
        });
    };

    const goToSlide = (index) => {
        const maxIndex = Math.max(0, services.length - itemsPerView);
        setCurrentIndex(Math.min(index, maxIndex));
    };

    const maxIndex = Math.max(0, services.length - itemsPerView);

    return (
        <section className="py-20 bg-brand-light-gray">
            <div className="container mx-auto px-5 md:px-11">
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">Our Expertise</h4>
                    <h2 className="text-3xl font-bold text-brand-navy mb-5">Comprehensive Business Solutions</h2>
                    <p className="text-gray-500 text-sm">
                        Delivering technical excellence and innovative solutions for complex projects across multiple industries.
                    </p>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            style={{ gap: '1.75rem' }}
                            animate={{
                                x: `calc(-${currentIndex} * (100% / ${itemsPerView} + 1.75rem))`
                            }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            {services.map((service, idx) => {
                                const Icon = icons[idx % icons.length];
                                return (
                                    <div
                                        key={idx}
                                        className="flex-shrink-0"
                                        style={{
                                            width: `calc((100% - ${(itemsPerView - 1) * 1.75}rem) / ${itemsPerView})`
                                        }}
                                    >
                                        <ServiceCard
                                            title={service.title}
                                            desc={service.desc}
                                            icon={Icon}
                                            delay={0}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    {services.length > itemsPerView && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-brand-orange text-brand-navy hover:text-white transition-all duration-300 z-10 border border-gray-200"
                                aria-label="Previous services"
                            >
                                <FiChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-brand-orange text-brand-navy hover:text-white transition-all duration-300 z-10 border border-gray-200"
                                aria-label="Next services"
                            >
                                <FiChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                {/* Dots Indicator */}
                {services.length > itemsPerView && (
                    <div className="flex justify-center gap-2 mt-10">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`transition-all duration-300 rounded-full ${
                                    idx === currentIndex
                                        ? 'bg-brand-orange w-8 h-2'
                                        : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesCarousel;
