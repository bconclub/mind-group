import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="space-y-6">
                    <Link to="/" className="block">
                        <img
                            src="/Mind Group Logo white.png"
                            alt="Mind Group Advisors"
                            className="h-[70px] w-auto object-contain"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Building Resilient, Future-Ready Enterprises through integrated business solutions and human capital excellence.
                    </p>
                    <div className="flex gap-4 pt-2">
                        {[FiLinkedin, FiTwitter, FiFacebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {['Home', 'About', 'Leadership', 'Services', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-brand-orange transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Our Pillars</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {['Business Enablement', 'Engineering Services', 'PBOMT', 'Data Centre Transformation', 'Recruitment'].map((item) => (
                            <li key={item}>
                                <Link to="/services" className="hover:text-brand-orange transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Group Companies */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Group Companies</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {['Mind Search', 'Mind Select', 'Open Mind', 'Mind Search Dubai', 'Digileum', 'Blue-Peak.us'].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="block w-2 h-2 mt-1.5 rounded-full border border-gray-600"></span>
                                <span className="hover:text-brand-orange cursor-pointer transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Mind Group Advisors. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
