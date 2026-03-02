import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationsSection = () => {
    return (
        <section className="py-24 bg-background text-foreground relative flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Global Presence</span>
                        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground leading-tight">
                            From Lohian Khas <br />
                            <span className="italic font-light">to London</span>
                        </h2>
                        <p className="text-foreground/70 font-light mb-10 max-w-lg leading-relaxed text-sm md:text-base">
                            Wherever your love story takes place, we travel with you. With established bases in both India and the United Kingdom, our cohesive team delivers the same luxury experience worldwide without compromise.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-brand-gold/10 p-3 h-fit rounded-full text-brand-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif text-foreground mb-2">India Base</h4>
                                    <p className="text-foreground/60 text-sm mb-1">Serving all of Punjab & Chandigarh</p>
                                    <p className="text-foreground/40 text-xs uppercase tracking-widest font-medium">Headquarters: Lohian Khas</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-brand-gold/10 p-3 h-fit rounded-full text-brand-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif text-foreground mb-2">UK Base</h4>
                                    <p className="text-foreground/60 text-sm mb-1">London, Birmingham, Bristol</p>
                                    <p className="text-foreground/40 text-xs uppercase tracking-widest font-medium">Serving the entire United Kingdom</p>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="inline-block mt-12 text-xs uppercase tracking-widest text-brand-gold border-b border-brand-gold pb-1 hover:text-foreground hover:border-foreground transition-all duration-300">
                            Inquire about your destination
                        </a>
                    </motion.div>

                    {/* Visual Divider / Map Idea */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] w-full bg-brand-black border border-white/10 group overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59693e2d8ce6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="London Architecture"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>

                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/20 pt-6">
                            <div>
                                <span className="text-white text-3xl font-serif">5000+</span>
                                <p className="text-brand-gold text-xs uppercase tracking-widest mt-1">Global Events</p>
                            </div>
                            <div className="text-right">
                                <span className="text-white text-3xl font-serif">2</span>
                                <p className="text-brand-gold text-xs uppercase tracking-widest mt-1">Continents</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
