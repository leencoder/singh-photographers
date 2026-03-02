import { motion } from 'framer-motion';

const services = [
    {
        category: "Wedding Photography & Videography",
        items: [
            "Traditional Wedding Photography",
            "Candid Wedding Photography",
            "Cinematic Wedding Films",
            "Pre-Wedding Shoots",
            "Destination Weddings",
            "Sikh Wedding Photography",
            "Hindu Wedding Photography",
            "Muslim Wedding Photography",
            "Reception Coverage",
            "Drone Wedding Coverage"
        ]
    },
    {
        category: "Event Photography",
        items: [
            "Engagement",
            "Roka & Ring Ceremony",
            "Birthday Parties",
            "Anniversaries",
            "Corporate Events",
            "Award Shows",
            "Cultural Events"
        ]
    },
    {
        category: "Portrait & Lifestyle",
        items: [
            "Family Portraits",
            "Baby & Maternity Shoots",
            "Couple Shoots",
            "Graduation Shoots",
            "Fashion Photography",
            "Model Portfolio"
        ]
    },
    {
        category: "Commercial & Videography",
        items: [
            "Product Photography",
            "Real Estate Photography",
            "Food Photography",
            "Branding Shoots",
            "4K Cinematic Videography",
            "Drone Videography",
            "Documentary Films",
            "Same-Day Edits"
        ]
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-background text-foreground relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif mb-6 leading-tight"
                    >
                        Comprehensive <span className="italic font-light">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                        className="text-foreground/60 max-w-2xl mx-auto font-light text-sm md:text-base"
                    >
                        From sweeping cinematic aerials to the quietest intimate glances, our spectrum of services ensures that every facet of your life's milestones is beautifully documented.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((serviceGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-foreground/5 border border-foreground/10 p-8 hover:border-brand-gold/50 transition-colors duration-500 group"
                        >
                            <h3 className="text-lg font-serif text-brand-gold mb-6 pb-4 border-b border-foreground/10 group-hover:border-brand-gold/30 transition-colors">
                                {serviceGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {serviceGroup.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-foreground/70 hover:text-foreground transition-colors">
                                        <span className="text-brand-gold mr-2 mt-1 block h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0"></span>
                                        <span className="font-light tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <a href="#contact" className="inline-block px-8 py-3 border border-brand-gold text-brand-gold font-medium uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                        Enquire Now
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default ServicesSection;
