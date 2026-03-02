import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-background text-foreground relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Book Your Date</span>
                        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
                            Begin Your <span className="italic font-light">Journey</span>
                        </h2>
                        <p className="text-foreground/70 font-light mb-10 text-sm md:text-base">
                            Due to high demand spanning across India and the UK, we recommend booking our team 6-12 months in advance.
                        </p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-brand-gold transition-colors" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-brand-gold transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-brand-gold transition-colors" required />
                                </div>
                                <div>
                                    <label htmlFor="event" className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Event Type</label>
                                    <select id="event" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-brand-gold transition-colors appearance-none" required>
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="wedding-india">Wedding - India</option>
                                        <option value="wedding-uk">Wedding - UK</option>
                                        <option value="pre-wedding">Pre-Wedding Shoot</option>
                                        <option value="commercial">Commercial/Events</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Event Date (Approximate)</label>
                                <input type="date" id="date" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-brand-gold transition-colors" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Tell Us About Your Vision</label>
                                <textarea id="message" rows="4" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" className="mt-8 px-10 py-4 bg-brand-gold text-brand-black font-medium uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-colors duration-300 w-full sm:w-auto">
                                Submit Inquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* Map/Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full min-h-[400px] w-full bg-neutral-100 dark:bg-white/5 relative"
                    >
                        {/* A placeholder for a real embedded map iframe */}
                        <div className="absolute inset-0 grayscale contrast-125 opacity-70 mix-blend-multiply dark:mix-blend-screen">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109287.16851221464!2d75.31388880000001!3d31.1294862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a13e550c60805%3A0xe53a39151dbcb5ab!2sLohian%20Khas%2C%20Punjab%20144629!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                        </div>

                        {/* Overlay detail box */}
                        <div className="absolute bottom-8 right-8 left-8 bg-background p-8 border border-foreground/10 shadow-2xl z-10">
                            <h4 className="font-serif text-xl text-brand-gold mb-4">Direct Contact</h4>
                            <div className="space-y-4 text-foreground/80 text-sm">
                                <div>
                                    <p className="uppercase tracking-widest text-[10px] text-foreground/50 mb-1">India Studio</p>
                                    <p>+91 98765 43210</p>
                                </div>
                                <div>
                                    <p className="uppercase tracking-widest text-[10px] text-foreground/50 mb-1">UK Studio</p>
                                    <p>+44 7700 900000</p>
                                </div>
                                <div>
                                    <p className="uppercase tracking-widest text-[10px] text-foreground/50 mb-1">Email</p>
                                    <p>booking@singhphoto.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
