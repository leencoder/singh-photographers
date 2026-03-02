import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statements = [
    { id: 1, text: "Capturing Timeless", highlight: "Love Stories" },
    { id: 2, text: "Based in Punjab &", highlight: "United Kingdom" },
    { id: 3, text: "We Travel Globally To", highlight: "Document Moments" }
];

const HeroSection = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % statements.length);
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(textInterval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Dark Overlay */}
            <div className="absolute inset-0 bg-brand-black z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-40 mix-blend-luminosity"
                >
                    {/* Default to an elegant placeholder */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-wedding-rings-on-a-small-wooden-log-42173-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-black/80"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-20">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="uppercase tracking-[0.4em] text-brand-gold text-xs sm:text-sm mb-6 font-medium"
                >
                    Luxury Wedding Photography
                </motion.p>

                <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center">
                    <motion.h1
                        key={currentTextIndex} // Re-animate when text changes
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-tight"
                    >
                        {statements[currentTextIndex].text}<br />
                        <span className="italic text-brand-gold font-light">
                            {statements[currentTextIndex].highlight}
                        </span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-12 font-light tracking-wide pt-4"
                >
                    Since 1990
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                >
                    <a
                        href="#portfolio"
                        className="px-8 py-4 bg-brand-gold text-brand-black font-medium uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 min-w-48 text-center rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        Explore Portfolio
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
            >
                <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] mb-4">Discover More</span>
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-1/2 bg-brand-gold absolute left-0"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
