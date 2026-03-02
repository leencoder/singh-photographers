import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = ["All", "Wedding", "Pre-Wedding", "Events", "Portrait", "Commercial"];

const portfolioData = [
    { id: 1, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Wedding", title: "Sikh Wedding in Punjab" },
    { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Wedding", title: "Destination Wedding London" },
    { id: 3, src: "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Pre-Wedding", title: "Romantic Pre-Wedding Shoot" },
    { id: 4, src: "https://images.unsplash.com/photo-1620059521360-14eaf4d5ec25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Corporate Event Birmingham" },
    { id: 5, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Portrait", title: "Family Portraits" },
    { id: 6, src: "https://images.unsplash.com/photo-1505934333218-8fe21ff889ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Wedding", title: "Traditional Indian Engagement" },
    { id: 7, src: "https://images.unsplash.com/photo-1605335805500-11100f2e0431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Pre-Wedding", title: "Sunset Couple Shoot" },
    { id: 8, src: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Commercial", title: "Real Estate Photography" },
    { id: 9, src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Wedding", title: "Bridal Portrait" },
];

const PortfolioGallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filteredImages = useMemo(() => {
        return activeCategory === "All"
            ? portfolioData
            : portfolioData.filter(img => img.category === activeCategory);
    }, [activeCategory]);

    const slides = filteredImages.map(img => ({ src: img.src, title: img.title }));

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section id="portfolio" className="py-24 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4"
                    >
                        Our Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif mb-8 leading-tight"
                    >
                        Featured <span className="italic font-light">Gallery</span>
                    </motion.h2>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mt-8"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === category
                                    ? 'bg-brand-gold text-brand-black font-medium'
                                    : 'bg-transparent text-white/70 hover:text-brand-gold border border-white/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={img.id}
                                className="relative group overflow-hidden break-inside-avoid cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-brand-gold text-[10px] uppercase tracking-widest mb-1">{img.category}</span>
                                    <h3 className="text-white font-serif text-lg">{img.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={slides}
                />

            </div>
        </section>
    );
};

export default PortfolioGallery;
