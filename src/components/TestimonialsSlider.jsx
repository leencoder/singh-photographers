import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Singh Photographers captured our wedding in London perfectly. The cinematic video still makes us cry every single time we watch it. Truely a luxurious experience from start to finish.",
        author: "Priya & Raj",
        location: "London, UK",
        event: "Sikh Wedding"
    },
    {
        id: 2,
        text: "Having a team that understands both Indian traditions and modern aesthetics was crucial for us. Sulinderpal and Amritpal delivered beyond our wildest expectations.",
        author: "Ananya & Vikram",
        location: "Chandigarh, India",
        event: "Destination Wedding"
    },
    {
        id: 3,
        text: "The sheer professionalism and legacy of this team is unmatchable. They covered my parent's wedding in 1995, and now mine in 2024. A true family heirloom.",
        author: "Simranvir Singh",
        location: "Birmingham, UK",
        event: "Traditional Ceremony"
    }
];

const TestimonialsSlider = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
    const prev = () => setCurrent((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));

    return (
        <section className="py-24 bg-brand-gold text-brand-black relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <Quote className="mx-auto h-12 w-12 opacity-20 mb-8" />

                <div className="h-64 sm:h-56 md:h-48 relative overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full px-4"
                        >
                            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-black mb-8 leading-snug">
                                "{testimonials[current].text}"
                            </p>
                            <div className="flex flex-col items-center">
                                <span className="uppercase tracking-widest text-sm font-bold block">{testimonials[current].author}</span>
                                <span className="text-xs uppercase tracking-[0.2em] opacity-70 mt-1">
                                    {testimonials[current].event} — {testimonials[current].location}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center justify-center gap-6 mt-12">
                    <button
                        onClick={prev}
                        className="p-3 border border-brand-black/30 hover:bg-brand-black hover:text-brand-gold transition-colors rounded-full"
                        aria-label="Previous Testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-brand-black w-6' : 'bg-brand-black/30'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="p-3 border border-brand-black/30 hover:bg-brand-black hover:text-brand-gold transition-colors rounded-full"
                        aria-label="Next Testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSlider;
