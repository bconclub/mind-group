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

            {/* 2. WHO WE ARE */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-11">
                    <div className="flex flex-col lg:flex-row items-center gap-14">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-3 -left-3 w-[88px] h-[88px] bg-brand-orange/10 rounded-full -z-10"></div>
                            <div className="absolute -bottom-3 -right-3 w-[115px] h-[115px] bg-brand-navy/10 rounded-full -z-10"></div>
                            <video
                                src="/Sky Mind Group.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl shadow-2xl w-full object-cover h-[450px]"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-5">
                            <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs">Who We Are</h4>
                            <h2 className="text-3xl font-bold text-brand-navy leading-tight">The Mind Group Story</h2>
                            <p className="text-brand-gray text-base leading-relaxed">
                                {content.landing.story.text1.substring(0, 200)}...
                            </p>
                            <p className="text-brand-gray text-base leading-relaxed">
                                {content.landing.story.text3}
                            </p>

                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                                Read Full Story <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STATS BAR */}
            <section className="relative z-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Stat 1 - No extra offset */}
                    <div className="bg-brand-navy text-white p-[18px] md:p-[18px] flex flex-col justify-center group h-full border-b md:border-b-0 md:border-r border-white/10 pl-5 md:pl-[18px]">
                        <div className="flex justify-between items-center mb-1 gap-3">
                            <div className="flex items-start">
                                <span className="text-3xl md:text-4xl font-bold font-display opacity-100">30<sup className="text-lg text-brand-orange">+</sup></span>
                            </div>
                            <span className="px-1.5 py-0.5 rounded-full border border-white/30 text-[9px] font-medium uppercase tracking-wider whitespace-nowrap">Since 1992</span>
                        </div>
                        <p className="text-xs font-medium leading-tight">Years of Excellence</p>
                    </div>

                    {/* Stat 2 - Offset Step 1 */}
                    <div className="bg-brand-light-gray text-brand-navy p-[18px] md:p-[18px] flex flex-col justify-center group h-full pl-11 md:pl-[18px]">
                        <div className="flex justify-between items-center mb-1 gap-3">
                            <span className="text-3xl md:text-4xl font-bold font-display">06</span>
                            <span className="px-1.5 py-0.5 rounded-full border border-brand-navy/20 text-[9px] font-medium uppercase tracking-wider text-brand-gray whitespace-nowrap">Entities</span>
                        </div>
                        <p className="text-xs font-medium leading-tight">Group Companies</p>
                    </div>

                    {/* Stat 3 - Offset Step 2 */}
                    <div className="bg-brand-orange text-white p-[18px] md:p-[18px] flex flex-col justify-center group h-full pl-[72px] md:pl-[18px]">
                        <div className="flex justify-between items-center mb-1 gap-3">
                            <span className="text-3xl md:text-4xl font-bold font-display">03</span>
                            <span className="px-1.5 py-0.5 rounded-full border border-white/30 text-[9px] font-medium uppercase tracking-wider whitespace-nowrap">Global Reach</span>
                        </div>
                        <p className="text-xs font-medium leading-tight">Continents Presence</p>
                    </div>

                    {/* Stat 4 - Offset Step 3 */}
                    <div className="bg-brand-soft-blue text-brand-navy p-[18px] md:p-[18px] flex flex-col justify-center group h-full pl-[100px] md:pl-[18px]">
                        <div className="flex justify-between items-center mb-1 gap-3">
                            <span className="text-3xl md:text-4xl font-bold font-display">1k<sup className="text-lg text-brand-orange">+</sup></span>
                            <span className="px-1.5 py-0.5 rounded-full border border-brand-navy/20 text-[9px] font-medium uppercase tracking-wider text-brand-gray whitespace-nowrap">Trusted</span>
                        </div>
                        <p className="text-xs font-medium leading-tight">Clients Served</p>
                    </div>
                </div>
            </section>

            {/* 4. OUR PILLARS */}
            <section className="py-20 bg-brand-light-gray">
                <div className="container mx-auto px-5 md:px-11">
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">Our Expertise</h4>
                        <h2 className="text-3xl font-bold text-brand-navy mb-5">Comprehensive Business Solutions</h2>
                        <p className="text-gray-500 text-sm">
                            Delivering technical excellence and innovative solutions for complex projects across multiple industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
            <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container mx-auto px-5 md:px-11 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold mb-3">Why Partner With Us?</h2>
                        <div className="w-[72px] h-1 bg-brand-orange mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-center">
                        {[
                            { title: "Decades of Resilience", icon: FiCheckCircle },
                            { title: "Strategic Partnerships", icon: FiUsers },
                            { title: "Commitment to Excellence", icon: FiSettings }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="bg-[#111827] p-9 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors group h-full flex flex-col items-center">
                                    <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center mb-7 text-white text-xl shadow-lg shrink-0">
                                        <Icon />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-xs">
                                        {about.partners.reasons[idx].desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP PREVIEW (Simplified) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-11 text-center">
                    <h2 className="text-2xl font-bold text-brand-navy mb-10">Led by Industry Veterans</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
                        {leadership.foundingTeam.map((member, idx) => (
                            <div key={idx} className="group">
                                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-3 relative">
                                    <img src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random&color=fff`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={member.name} />
                                    <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h4 className="font-bold text-brand-navy text-xs">{member.name}</h4>
                            </div>
                        ))}
                    </div>
                    <Link to="/leadership" className="inline-block px-7 py-2.5 border border-brand-navy text-brand-navy font-bold rounded hover:bg-brand-navy hover:text-white transition-colors">
                        View Full Leadership Team
                    </Link>
                </div>
            </section>

            {/* 7. GROUP COMPANIES */}
            <section className="py-20 bg-brand-soft-blue">
                <div className="container mx-auto px-5 md:px-11">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl font-bold text-brand-navy mb-3">Part of the Mind Group Ecosystem</h2>
                        <p className="text-gray-500 text-sm">A diversified ecosystem operating across multiple high-growth sectors.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {groupCompanies.map((company, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center h-[115px] border border-gray-100 group cursor-pointer">
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
