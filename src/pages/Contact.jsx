import { content } from '../data/content';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const { contact } = content;

    return (
        <div className="bg-brand-light-gray min-h-screen">

            {/* Hero */}
            <div className="bg-brand-navy pt-40 pb-24 text-center text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
                    <p className="text-gray-300">Transform your business with Mind Group Advisors</p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 -mt-10 mb-24 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

                    {/* Form Section */}
                    <div className="lg:w-2/3 p-10 md:p-14">
                        <h2 className="text-3xl font-bold text-brand-navy mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Service Interest</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                                        <option>Select a Service...</option>
                                        <option>Business Enablement</option>
                                        <option>Engineering Services</option>
                                        <option>PBOMT</option>
                                        <option>Data Centre Transformation</option>
                                        <option>Recruitment</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows="5" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="button" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                                Send Message <FiSend />
                            </button>
                        </form>
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:w-1/3 bg-brand-navy text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                        <div>
                            <h3 className="text-xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg text-brand-orange">
                                        <FiMapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-200 mb-1">Our Headquarters</p>
                                        <p className="text-gray-400 text-sm">{contact.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg text-brand-orange">
                                        <FiPhone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-200 mb-1">Phone Number</p>
                                        <p className="text-gray-400 text-sm">{contact.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg text-brand-orange">
                                        <FiMail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-200 mb-1">Email Address</p>
                                        <p className="text-gray-400 text-sm">{contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-sm text-gray-400">
                                Operating across multiple continents to serve you better.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12 bg-gray-200 rounded-xl h-[400px] w-full flex items-center justify-center text-gray-500 font-bold">
                    Google Map Integration Placeholder
                </div>
            </div>
        </div>
    );
};

export default Contact;
