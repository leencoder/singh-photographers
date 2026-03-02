import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background text-foreground/80 border-t border-foreground/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

                    {/* Brand */}
                    <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center gap-2">
                            <Camera className="text-brand-gold h-8 w-8" />
                            <div className="flex flex-col items-start">
                                <span className="font-serif text-xl tracking-wider text-foreground">Singh Photographers</span>
                                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/50">Est. 1990</span>
                            </div>
                        </Link>
                        <p className="text-sm mt-4 text-center md:text-left max-w-xs">
                            Capturing Timeless Love Stories Since 1990. Luxury wedding photography in Punjab & United Kingdom.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-brand-gold hover:text-brand-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-brand-gold hover:text-brand-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-brand-gold hover:text-brand-gold transition-colors">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Home</a></li>
                            <li><a href="/#about" className="hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">About Us</a></li>
                            <li><a href="/#services" className="hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Services</a></li>
                            <li><a href="/#portfolio" className="hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Portfolio</a></li>
                            <li><a href="/#contact" className="hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Contact</a></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div className="text-center md:text-left">
                        <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">Our Locations</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                                <div className="text-sm">
                                    <p className="font-medium text-foreground">India Studio</p>
                                    <p className="text-foreground/60">Lohian Khas, Jalandhar,<br />Punjab 144629, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                                <div className="text-sm">
                                    <p className="font-medium text-foreground">UK Studio</p>
                                    <p className="text-foreground/60">London & Birmingham<br />United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="font-serif text-lg text-foreground mb-6 uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone className="text-brand-gold shrink-0" size={18} />
                                <a href="tel:+919876543210" className="text-sm hover:text-brand-gold transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone className="text-brand-gold shrink-0" size={18} />
                                <a href="tel:+447700900000" className="text-sm hover:text-brand-gold transition-colors">
                                    +44 7700 900000
                                </a>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail className="text-brand-gold shrink-0" size={18} />
                                <a href="mailto:info@singhphotographers.com" className="text-sm hover:text-brand-gold transition-colors">
                                    hello@singhphoto.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-foreground/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Singh Photographers. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
