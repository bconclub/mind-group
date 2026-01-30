import { createContext, useContext, useState, useCallback } from 'react';

const LeadModalContext = createContext(null);

// Actual service names shown in dropdown (not categories)
const SERVICE_OPTIONS = [
    { value: '', label: 'What are you looking for?' },
    { value: 'Recruitment & Counselling', label: 'Recruitment & Counselling' },
    { value: 'Engineering Services', label: 'Engineering Services' },
    { value: 'PBOMT', label: 'P-B-O-M-T' },
    { value: 'Data Center', label: 'Data Center' },
];

// Map service object (from "Discuss This Service") to dropdown value
const serviceToOptionValue = (service) => {
    if (!service) return '';
    const title = service.title || '';
    if (title.includes('Recruitment') || title.includes('Counselling')) return 'Recruitment & Counselling';
    if (title.includes('Engineering')) return 'Engineering Services';
    if (title.includes('PBOMT') || title.includes('Build, Operate, Maintain')) return 'PBOMT';
    if (title.includes('Data Centre') || title.includes('Data Center')) return 'Data Center';
    return '';
};

// Map category string (e.g. HUMAN CAPITAL) to dropdown value, for backwards compatibility
const categoryToOptionValue = (category) => {
    if (!category) return '';
    const map = {
        'HUMAN CAPITAL': 'Recruitment & Counselling',
        'ENGINEERING': 'Engineering Services',
        'OPERATIONS': 'PBOMT',
        'TECHNOLOGY': 'Data Center',
    };
    return map[category] || '';
};

export function LeadModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [preselectedService, setPreselectedService] = useState('');

    const openModal = useCallback((categoryOrService) => {
        const value = typeof categoryOrService === 'string'
            ? categoryToOptionValue(categoryOrService)
            : categoryOrService && typeof categoryOrService === 'object'
                ? serviceToOptionValue(categoryOrService)
                : '';
        setPreselectedService(value);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setPreselectedService('');
    }, []);

    return (
        <LeadModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                preselectedService,
                serviceOptions: SERVICE_OPTIONS,
            }}
        >
            {children}
        </LeadModalContext.Provider>
    );
}

export function useLeadModal() {
    const ctx = useContext(LeadModalContext);
    if (!ctx) throw new Error('useLeadModal must be used within LeadModalProvider');
    return ctx;
}
