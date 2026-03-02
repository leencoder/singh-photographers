import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Camera } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Services', path: '/#services' },
        { name: 'Portfolio', path: '/#portfolio' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <Camera className="text-brand-gold h-8 w-8" />
                        <div className="flex flex-col">
                            <span className="font-serif text-xl tracking-wider text-foreground">Singh Photographers</span>
                            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/70">Est. 1990</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors text-foreground font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground"
                            aria-label="Toggle Theme"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a
                            href="/#contact"
                            className="px-5 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 uppercase text-xs tracking-widest"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 text-foreground"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={toggleMenu} className="text-foreground focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute w-full glass transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4 border-b border-white/10' : 'max-h-0 py-0'
                    }`}
            >
                <div className="flex flex-col items-center space-y-6 px-4 pb-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={closeMenu}
                            className="text-lg uppercase tracking-widest hover:text-brand-gold transition-colors text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/#contact"
                        onClick={closeMenu}
                        className="w-full text-center px-5 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 uppercase text-sm tracking-widest"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
