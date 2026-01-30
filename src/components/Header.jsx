import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { contact } = content;

    return (
        <header className="w-full">
            {/* 1. Top Dark Bar */}
            <div className="bg-charcoal text-white text-xs py-2 px-4 md:px-12 flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-primary" /> Jayanagar, Bangalore</span>
                    <span className="flex items-center gap-1"><Phone size={12} className="text-primary" /> {contact.phone}</span>
                </div>
                <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                    <Globe size={12} />
                    <span>Mind Group Global</span>
                    <ChevronDown size={12} />
                </div>
            </div>

            {/* 2. Secondary Tan Bar */}
            <div className="bg-light-tan text-charcoal text-sm py-2 px-4 md:px-12 flex justify-end">
                <div className="hidden md:flex gap-6 font-medium">
                    <span className="cursor-pointer hover:text-white transition-colors">India</span>
                    <span className="cursor-pointer hover:text-white transition-colors">USA</span>
                    <span className="cursor-pointer hover:text-white transition-colors">UAE</span>
                    <span className="cursor-pointer hover:text-white transition-colors">Singapore</span>
                </div>
            </div>

            {/* 3. Main White Nav */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="px-4 md:px-12 py-4 flex justify-between items-center">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            M
                        </div>
                        <div className="flex flex-col">
                            <span className="text-charcoal font-bold text-xl leading-none">MIND</span>
                            <span className="text-primary text-xs font-semibold tracking-widest">GROUP</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-charcoal">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <div className="relative group cursor-pointer">
                            <span className="flex items-center gap-1 hover:text-primary transition-colors">The Group <ChevronDown size={14} /></span>
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg py-2 w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 border-t-2 border-primary">
                                <Link to="/group-companies" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">Group Companies</Link>
                                <Link to="/leadership" className="block px-4 py-2 hover:bg-gray-50 hover:text-primary">Leadership</Link>
                            </div>
                        </div>
                        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-charcoal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg"
                    >
                        <div className="flex flex-col p-4 gap-4 font-medium text-charcoal">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <Link to="/group-companies" onClick={() => setIsMenuOpen(false)}>Group Companies</Link>
                            <Link to="/leadership" onClick={() => setIsMenuOpen(false)}>Leadership</Link>
                            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    );
};

export default Header;
