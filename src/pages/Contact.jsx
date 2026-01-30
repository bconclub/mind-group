import { useState, useEffect } from 'react';
import { content } from '../data/content';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const WEBHOOK_URL = 'https://build.goproxe.com/webhook/mind-group-global';

const Contact = () => {
    const { contact } = content;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceInterest, setServiceInterest] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    // Set page title and meta description
    useEffect(() => {
        document.title = 'Contact Us | Mind Group Global';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Get in touch with Mind Group Global. Connect with us to discuss how we can help transform your business through integrated solutions in Human Capital, Engineering, Technology, and Operations.');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);
        setSubmitting(true);
        const payload = {
            source: 'contact_page',
            name,
            email,
            phone,
            serviceInterest: serviceInterest || undefined,
            message: message || undefined,
            submittedAt: new Date().toISOString(),
        };
        try {
            const res = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed to submit');
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setPhone('');
            setServiceInterest('');
            setMessage('');
        } catch (err) {
            setSubmitStatus('error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-brand-light-gray min-h-screen">

            {/* Hero */}
            <div className="bg-brand-navy pt-36 pb-20 text-center text-white">
                <div className="container mx-auto px-5 md:px-11">
                    <h1 className="text-3xl font-bold mb-3">Let's Connect</h1>
                    <p className="text-gray-300 text-sm">Transform your business with Mind Group Global</p>
                </div>
            </div>

            <div className="container mx-auto px-5 md:px-11 -mt-9 mb-20 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

                    {/* Form Section */}
                    <div className="lg:w-2/3 p-9 md:p-12">
                        <h2 className="text-2xl font-bold text-brand-navy mb-7">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-[14px] py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-[14px] py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number</label>
                                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-[14px] py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Service Interest</label>
                                    <select value={serviceInterest} onChange={(e) => setServiceInterest(e.target.value)} className="w-full px-[14px] py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all">
                                        <option value="">Select a Service...</option>
                                        <option value="Business Enablement">Business Enablement</option>
                                        <option value="Engineering Services">Engineering Services</option>
                                        <option value="PBOMT">PBOMT</option>
                                        <option value="Data Centre Transformation">Data Centre Transformation</option>
                                        <option value="Recruitment">Recruitment</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Message</label>
                                <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-[14px] py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>

                            {submitStatus === 'success' && (
                                <p className="text-sm text-green-600 font-medium">Message sent successfully. We&apos;ll be in touch soon.</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                            )}
                            <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-7 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 disabled:opacity-60 disabled:cursor-not-allowed">
                                {submitting ? 'Sending...' : 'Send Message'} <FiSend />
                            </button>
                        </form>
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:w-1/3 bg-brand-navy text-white p-9 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[230px] h-[230px] bg-brand-orange rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                        <div>
                            <h3 className="text-lg font-bold mb-7">Contact Information</h3>
                            <div className="space-y-7">
                                <div className="flex items-start gap-3">
                                    <div className="p-2.5 bg-white/10 rounded-lg text-brand-orange">
                                        <FiMapPin size={21} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-200 mb-1 text-sm">Our Headquarters</p>
                                        <p className="text-gray-400 text-xs">{contact.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2.5 bg-white/10 rounded-lg text-brand-orange">
                                        <FiPhone size={21} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-200 mb-1 text-sm">Phone Number</p>
                                        <p className="text-gray-400 text-xs">{contact.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2.5 bg-white/10 rounded-lg text-brand-orange">
                                        <FiMail size={21} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-200 mb-1 text-sm">Email Address</p>
                                        <p className="text-gray-400 text-xs">{contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-7 border-t border-white/10">
                            <p className="text-xs text-gray-400">
                                Operating across multiple continents to serve you better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
