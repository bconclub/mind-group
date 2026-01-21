import { content } from '../data/content';
import TeamCard from '../components/TeamCard';

const Leadership = () => {
    const { foundingTeam, experts } = content.leadership;

    return (
        <div className="bg-brand-light-gray min-h-screen">

            {/* 1. HERO */}
            <div className="bg-brand-navy pt-48 pb-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership & Governance</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Steered by industry veterans and domain experts committed to excellence.
                    </p>
                </div>
            </div>

            {/* 2. FOUNDING TEAM */}
            <section className="py-24 container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-brand-navy">Founding Team</h2>
                    <div className="h-px bg-gray-300 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {foundingTeam.map((member, idx) => (
                        <TeamCard key={idx} member={member} />
                    ))}
                </div>

                {/* 3. PANEL OF EXPERTS */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-brand-navy">Panel of Experts</h2>
                    <div className="h-px bg-gray-300 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experts.map((member, idx) => (
                        <TeamCard key={idx} member={member} simple={true} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Leadership;
