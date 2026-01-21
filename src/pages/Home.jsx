import { content } from '../data/content';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import TestimonialCarousel from '../components/TestimonialCarousel'; // Using general one if needed, or simplified
import { FiSettings, FiCpu, FiGlobe, FiServer, FiUsers, FiArrowRight, FiCheckCircle } from 'react-icons/fi'; // Icons

const Home = () => {
    const { about, groupCompanies, leadership } = content;

    // Icon mapping
    const serviceIcons = [FiSettings, FiCpu, FiGlobe, FiServer, FiUsers];

    return (
        <div className="bg-brand-light-gray min-h-screen">
            <Hero />

            {/* 2. STATS BAR */}
            <section className="relative z-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Stat 1 - No extra offset */}
                    <div className="bg-brand-navy text-white p-5 md:p-5 flex flex-col justify-center group h-full border-b md:border-b-0 md:border-r border-white/10 pl-6 md:pl-5">
                        <div className="flex justify-between items-center mb-2 gap-4">
                            <div className="flex items-start">
                                <span className="text-4xl md:text-5xl font-bold font-display opacity-100">30<sup className="text-xl text-brand-orange">+</sup></span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full border border-white/30 text-[10px] font-medium uppercase tracking-wider whitespace-nowrap">Since 1992</span>
                        </div>
                        <p className="text-sm font-medium leading-tight">Years of Excellence</p>
                    </div>

                    {/* Stat 2 - Offset Step 1 */}
                    <div className="bg-brand-light-gray text-brand-navy p-5 md:p-5 flex flex-col justify-center group h-full pl-12 md:pl-5">
                        <div className="flex justify-between items-center mb-2 gap-4">
                            <span className="text-4xl md:text-5xl font-bold font-display">06</span>
                            <span className="px-2 py-0.5 rounded-full border border-brand-navy/20 text-[10px] font-medium uppercase tracking-wider text-brand-gray whitespace-nowrap">Entities</span>
                        </div>
                        <p className="text-sm font-medium leading-tight">Group Companies</p>
                    </div>

                    {/* Stat 3 - Offset Step 2 */}
                    <div className="bg-brand-orange text-white p-5 md:p-5 flex flex-col justify-center group h-full pl-20 md:pl-5">
                        <div className="flex justify-between items-center mb-2 gap-4">
                            <span className="text-4xl md:text-5xl font-bold font-display">03</span>
                            <span className="px-2 py-0.5 rounded-full border border-white/30 text-[10px] font-medium uppercase tracking-wider whitespace-nowrap">Global Reach</span>
                        </div>
                        <p className="text-sm font-medium leading-tight">Continents Presence</p>
                    </div>

                    {/* Stat 4 - Offset Step 3 */}
                    <div className="bg-brand-soft-blue text-brand-navy p-5 md:p-5 flex flex-col justify-center group h-full pl-28 md:pl-5">
                        <div className="flex justify-between items-center mb-2 gap-4">
                            <span className="text-4xl md:text-5xl font-bold font-display">1k<sup className="text-xl text-brand-orange">+</sup></span>
                            <span className="px-2 py-0.5 rounded-full border border-brand-navy/20 text-[10px] font-medium uppercase tracking-wider text-brand-gray whitespace-nowrap">Trusted</span>
                        </div>
                        <p className="text-sm font-medium leading-tight">Clients Served</p>
                    </div>
                </div>
            </section>

            {/* 3. WHO WE ARE */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full -z-10"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-navy/10 rounded-full -z-10"></div>
                            <video
                                src="/Sky Mind Group.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Who We Are</h4>
                            <h2 className="text-4xl font-bold text-brand-navy leading-tight">The Mind Group Story</h2>
                            <p className="text-brand-gray text-lg leading-relaxed">
                                {content.landing.story.text1.substring(0, 200)}...
                            </p>
                            <p className="text-brand-gray text-lg leading-relaxed">
                                {content.landing.story.text3}
                            </p>

                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                                Read Full Story <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR PILLARS */}
            <section className="py-24 bg-brand-light-gray">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
                        <h2 className="text-4xl font-bold text-brand-navy mb-6">Comprehensive Business Solutions</h2>
                        <p className="text-gray-500">
                            Delivering technical excellence and innovative solutions for complex projects across multiple industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {about.expertise.map((item, index) => (
                            <ServiceCard
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                icon={serviceIcons[index % serviceIcons.length]}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY PARTNER WITH US */}
            <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
                        <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "Decades of Resilience", icon: FiCheckCircle },
                            { title: "Strategic Partnerships", icon: FiUsers },
                            { title: "Commitment to Excellence", icon: FiSettings }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="bg-[#111827] p-10 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors group h-full flex flex-col items-center">
                                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-8 text-white text-2xl shadow-lg shrink-0">
                                        <Icon />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {about.partners.reasons[idx].desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP PREVIEW (Simplified) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12">Led by Industry Veterans</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                        {leadership.foundingTeam.map((member, idx) => (
                            <div key={idx} className="group">
                                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                                    <img src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random&color=fff`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={member.name} />
                                    <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h4 className="font-bold text-brand-navy text-sm">{member.name}</h4>
                            </div>
                        ))}
                    </div>
                    <Link to="/leadership" className="inline-block px-8 py-3 border border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                        View Full Leadership Team
                    </Link>
                </div>
            </section>

            {/* 7. GROUP COMPANIES */}
            <section className="py-24 bg-brand-soft-blue">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Part of the Mind Group Ecosystem</h2>
                        <p className="text-gray-500">A diversified ecosystem operating across multiple high-growth sectors.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {groupCompanies.map((company, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center h-32 border border-gray-100 group cursor-pointer">
                                {company.logo ? (
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                ) : (
                                    <span className="font-bold text-sm text-brand-gray group-hover:text-brand-orange transition-colors">{company.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CTA */}
            <CTASection />
        </div>
    );
};

export default Home;
