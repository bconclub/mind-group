import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        text: "Mind Group transformed our recruitment process completely. Their attention to detail and understanding of our niche requirements is unmatched.",
        author: "Elena Rodriguez",
        role: "CEO, Tech Giant",
    },
    {
        text: "The engineering services provided were world-class. They delivered the project ahead of time with impeccable quality and maintained excellent communication.",
        author: "David Chen",
        role: "Director, Infrastructure Corp",
    },
    {
        text: "A true partner in business enablement. Their strategic insights have helped us scale our operations globally with confidence.",
        author: "Sarah Johnson",
        role: "VP Operations, Global Logistics",
    }
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative bg-brand-navy rounded-2xl overflow-hidden p-8 md:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
                <FaQuoteLeft size={100} />
            </div>

            <div className="relative z-10">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center"
                    >
                        <p className="text-xl md:text-2xl text-white font-light italic mb-8 leading-relaxed max-w-2xl">
                            "{testimonials[currentIndex].text}"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full mb-3 flex items-center justify-center text-white font-bold text-xl">
                                {testimonials[currentIndex].author.charAt(0)}
                            </div>
                            <h4 className="font-bold text-lg text-white">{testimonials[currentIndex].author}</h4>
                            <p className="text-brand-orange text-sm uppercase tracking-wide">{testimonials[currentIndex].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-between absolute top-1/2 left-0 w-full px-4 -translate-y-1/2 pointer-events-none">
                <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-colors backdrop-blur-sm">
                    <FiChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-colors backdrop-blur-sm">
                    <FiChevronRight size={20} />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-orange w-6' : 'bg-gray-600'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
