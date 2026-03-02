import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-white dark:bg-brand-black transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Images Grid */}
                    <div className="relative h-[600px] w-full group">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-200 dark:bg-white/5 overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Traditional Indian Wedding"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-300 dark:bg-white/10 border-8 border-white dark:border-brand-black overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544642921-2e6fd636dd79?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Modern UK Wedding"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* Year Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-black p-6 rounded-full text-center flex flex-col justify-center items-center h-32 w-32 shadow-xl"
                        >
                            <span className="text-xs uppercase tracking-widest font-bold">Since</span>
                            <span className="text-3xl font-serif">1990</span>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Our Legacy</span>
                            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
                                Two Generations of <br /><span className="italic font-light">Visual Storytelling</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-foreground/70 font-light text-sm md:text-base leading-relaxed"
                        >
                            <p>
                                Founded in 1990 by <strong>Sulinderpal Singh</strong> in the vibrant heart of Lohian Khas, Punjab, our journey began with a simple passion: to freeze time and preserve the raw emotion of human connection.
                            </p>
                            <p>
                                Over three decades later, that foundation of traditional storytelling has been infused with modern cinematic brilliance under the direction of co-owner <strong>Amritpal Singh</strong>.
                            </p>
                            <p>
                                Today, Singh Photographers bridges continents. From the culturally rich landscapes of India to the elegant venues of London and Birmingham, we deliver a premium, tailored experience that honors your heritage while crafting a timeless, luxurious narrative of your special day.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10"
                        >
                            <div className="text-4xl font-signature text-foreground opacity-80 mb-2">Sulinderpal & Amritpal Singh</div>
                            <p className="mt-2 text-xs uppercase tracking-widest text-foreground/50">Founders</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
