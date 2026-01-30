import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FiX, FiCheck } from 'react-icons/fi';
import { useLeadModal } from '../context/LeadModalContext';

const WEBHOOK_URL = 'https://build.goproxe.com/webhook/mind-group-global';
const SUCCESS_AUTO_CLOSE_MS = 2500;

const LeadModal = () => {
    const { isOpen, closeModal, preselectedService, serviceOptions } = useLeadModal();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const closeTimeoutRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setService(preselectedService);
            setSubmitted(false);
        } else {
            setName('');
            setEmail('');
            setPhone('');
            setService('');
            setSubmitted(false);
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        }
    }, [isOpen, preselectedService]);

    useEffect(() => {
        if (!isOpen) return;
        const handleEscape = (e) => e.key === 'Escape' && closeModal();
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, [isOpen, closeModal]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true);
        const payload = {
            source: 'lead_modal',
            name,
            email,
            phone,
            service,
            submittedAt: new Date().toISOString(),
        };
        try {
            const res = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed to submit');
            setName('');
            setEmail('');
            setPhone('');
            setService('');
            setSubmitted(true);
            closeTimeoutRef.current = setTimeout(closeModal, SUCCESS_AUTO_CLOSE_MS);
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) closeModal();
    };

    if (!isOpen) return null;

    const modal = (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl">
                    <h2 id="lead-modal-title" className="text-xl font-bold text-brand-navy">
                        {submitted ? 'Thank you' : 'Get in touch'}
                    </h2>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-brand-navy transition-colors"
                        aria-label="Close"
                    >
                        <FiX size={22} />
                    </button>
                </div>

                {submitted ? (
                    <div className="p-8 text-center">
                        <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                            <FiCheck size={28} strokeWidth={2.5} />
                        </div>
                        <p className="text-brand-navy font-bold text-lg mb-2">We&apos;ve received your details</p>
                        <p className="text-gray-600 text-sm">We&apos;ll be in touch shortly. This window will close in a moment.</p>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label htmlFor="lead-name" className="block text-xs font-bold text-gray-700 mb-1.5">
                            Full Name
                        </label>
                        <input
                            id="lead-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="lead-email" className="block text-xs font-bold text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            id="lead-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="lead-phone" className="block text-xs font-bold text-gray-700 mb-1.5">
                            Phone Number
                        </label>
                        <input
                            id="lead-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                            placeholder="+91 80 0000 0000"
                        />
                    </div>

                    <div>
                        <label htmlFor="lead-service" className="block text-xs font-bold text-gray-700 mb-1.5">
                            Service / Area of interest
                        </label>
                        <select
                            id="lead-service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-brand-navy"
                        >
                            {serviceOptions.map((opt) => (
                                <option key={opt.value || 'placeholder'} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {error && (
                        <p className="text-sm text-red-600" role="alert">{error}</p>
                    )}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {submitting ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </form>
                )}
            </div>
        </div>
    );

    return createPortal(modal, document.body);
};

export default LeadModal;
