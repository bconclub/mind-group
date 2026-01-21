import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Mind Group transformed our recruitment process completely. Their attention to detail and understanding of our niche requirements is unmatched.",
        author: "CEO, Tech Giant",
        role: "Partner"
    },
    {
        text: "The engineering services provided were world-class. They delivered the project ahead of time with impeccable quality.",
        author: "Director, Infrastructure Corp",
        role: "Client"
    },
    {
        text: "A true partner in business enablement. Their strategic insights have helped us scale our operations globally.",
        author: "VP Operations, Global Logistics",
        role: "Partner"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative bg-white p-12 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
            <div className="absolute top-8 left-8 text-primary/20">
                <Quote size={64} />
            </div>

            <div className="relative z-10 min-h-[200px] flex items-center justify-center text-center">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="px-8"
                    >
                        <p className="text-xl md:text-2xl text-charcoal font-medium italic mb-6 leading-relaxed">
                            "{testimonials[currentIndex].text}"
                        </p>
                        <div>
                            <div className="font-bold text-lg text-primary">{testimonials[currentIndex].author}</div>
                            <div className="text-gray-500 text-sm">{testimonials[currentIndex].role}</div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-100 text-charcoal transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
