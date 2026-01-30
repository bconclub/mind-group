import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import { content } from '../data/content';

const PILLARS = [
    { label: 'Human Capital', slug: 'human-capital' },
    { label: 'Engineering', slug: 'engineering' },
    { label: 'Technology', slug: 'operations' },
    { label: 'Data Centers', slug: 'technology' },
];

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-16 pb-9 border-t border-gray-800">
            <div className="container mx-auto px-5 md:px-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                {/* Brand Column */}
                <div className="space-y-5">
                    <Link to="/" className="block">
                        <img
                            src="/assets/MG Logo.png"
                            alt="Mind Group Global"
                            className="h-[63px] w-auto object-contain"
                        />
                    </Link>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                        Building Resilient, Future-Ready Enterprises through integrated business solutions and human capital excellence.
                    </p>
                    <div className="flex gap-3 pt-1.5">
                        <a href="https://www.linkedin.com/company/mind-group/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300">
                            <FiLinkedin size={16} />
                        </a>
                        <a href="https://x.com/MindGroupIndia" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300">
                            <FiTwitter size={16} />
                        </a>
                        <a href="https://www.facebook.com/mindgroupsolutionsBangalore/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300">
                            <FiFacebook size={16} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-base font-bold mb-5 text-white">Quick Links</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
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

                {/* Our Pillars */}
                <div>
                    <h4 className="text-base font-bold mb-5 text-white">Our Pillars</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                        {PILLARS.map((pillar) => (
                            <li key={pillar.slug}>
                                <Link
                                    to={`/services#service-${pillar.slug}`}
                                    className="hover:text-brand-orange transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                    {pillar.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Group Companies */}
                <div>
                    <h4 className="text-base font-bold mb-5 text-white">Group Companies</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                        {content.groupCompanies.map((company) => (
                            <li key={company.name} className="flex items-start gap-2">
                                <span className="block w-2 h-2 mt-1.5 rounded-full border border-gray-600 flex-shrink-0"></span>
                                {company.url ? (
                                    <a
                                        href={company.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-brand-orange transition-colors"
                                    >
                                        {company.name}
                                    </a>
                                ) : (
                                    <span className="text-gray-400">{company.name}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-5 md:px-11 pt-7 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Mind Group Global. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
                <div className="text-center md:text-right mt-4 text-xs text-gray-500">
                    <p>Built with ❤️ at <a href="https://bconclub.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">BCON Club</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
