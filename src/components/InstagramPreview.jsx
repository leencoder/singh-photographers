import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const instaImages = [
    "https://images.unsplash.com/photo-1544642921-2e6fd636dd79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1620059521360-14eaf4d5ec25?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
];

const InstagramPreview = () => {
    return (
        <section className="bg-background w-full overflow-hidden">
            <div className="flex flex-col md:flex-row w-full items-stretch">

                {/* Text Block */}
                <div className="w-full md:w-1/3 bg-brand-gold text-brand-black p-12 md:p-16 flex flex-col justify-center items-center text-center">
                    <Instagram size={48} className="mb-6 opacity-80" />
                    <h2 className="text-3xl font-serif mb-4">Follow Our Journey</h2>
                    <p className="text-sm md:text-base font-medium opacity-80 mb-8 max-w-sm">
                        Join thousands of followers to see behind-the-scenes magic and latest love stories.
                    </p>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-brand-black hover:bg-brand-black hover:text-brand-gold transition-colors uppercase tracking-widest text-xs font-bold"
                    >
                        @singhphotographers
                    </a>
                </div>

                {/* Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3">
                    {instaImages.map((src, index) => (
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group aspect-square overflow-hidden block"
                        >
                            <img
                                src={src}
                                alt="Instagram post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram size={32} className="text-white" />
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InstagramPreview;
