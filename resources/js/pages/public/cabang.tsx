import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { branches } from '@/data/mockData';

export default function Cabang() {
    const [activeType, setActiveType] = useState<'all' | 'Kantor Pusat' | 'Cabang'>('all');

    const filteredBranches = activeType === 'all'
        ? branches
        : branches.filter(b => b.type === activeType);

    // Mock images matching branch locations for premium aesthetics
    const branchImages: Record<string, string> = {
        surabaya: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&w=800&q=80',
        jakarta: 'https://images.unsplash.com/photo-1555955267-b51301133073?auto=format&fit=crop&w=800&q=80',
        semarang: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
        balikpapan: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    };

    return (
        <>
            <Head title="Cabang & Lokasi Pelatihan │ ProSafe Indonesia">
                <meta name="description" content="Lokasi kantor operasional dan pusat pelatihan keselamatan kerja K3 ProSafe Indonesia di Surabaya, Jakarta, Semarang, dan Balikpapan." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-10 md:py-14">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs">location_on</span> Hub Jaringan Nasional
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Cabang & Training Center</h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl mx-auto">
                        Menjangkau kebutuhan keselamatan kerja industri Anda melalui jaringan cabang dan pusat pelatihan di kota-kota strategis Indonesia.
                    </p>
                </div>
            </section>

            {/* Branches List Section */}
            <div className="bg-surface-gray pt-10 pb-16">
                <div className="max-w-[1280px] mx-auto px-6">
                    
                    {/* Branch Type Filter */}
                    <div className="flex justify-center gap-2 mb-12">
                        {[
                            { id: 'all', label: 'Semua Lokasi' },
                            { id: 'Kantor Pusat', label: 'Kantor Pusat' },
                            { id: 'Cabang', label: 'Kantor Cabang' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveType(tab.id as any)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeType === tab.id
                                        ? 'bg-deep-navy text-white shadow-md shadow-deep-navy/15'
                                        : 'bg-white text-on-surface-variant hover:bg-white-hover border border-outline-variant'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredBranches.map(b => (
                            <div 
                                key={b.id} 
                                className="bg-white rounded-3xl border border-outline-variant/60 overflow-hidden card-hover shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    {/* Location Header Image */}
                                    <div className="h-56 relative overflow-hidden bg-deep-navy">
                                        <img 
                                            src={branchImages[b.id] || 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&w=800&q=80'} 
                                            alt={b.name} 
                                            className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-md ${
                                                b.type === 'Kantor Pusat' 
                                                    ? 'bg-safety-orange text-white' 
                                                    : 'bg-deep-navy/90 backdrop-blur-md text-white border border-white/10'
                                            }`}>
                                                {b.type}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                                            <h3 className="font-heading text-xl font-bold text-white leading-tight">
                                                ProSafe {b.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Branch Details */}
                                    <div className="p-6 md:p-8">
                                        <ul className="space-y-4 mb-6">
                                            <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                                                <span className="material-symbols-outlined text-safety-orange text-lg shrink-0 mt-0.5">location_on</span>
                                                <span className="leading-relaxed font-medium">{b.address}</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                                                <span className="material-symbols-outlined text-safety-orange text-lg shrink-0">call</span>
                                                <span className="font-medium">{b.phone}</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                                                <span className="material-symbols-outlined text-safety-orange text-lg shrink-0">mail</span>
                                                <span className="font-medium">{b.email}</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                                                <span className="material-symbols-outlined text-safety-orange text-lg shrink-0">schedule</span>
                                                <span className="font-medium">{b.hours}</span>
                                            </li>
                                        </ul>

                                        {/* Available Programs */}
                                        <div className="pt-5 border-t border-outline-variant/60">
                                            <h4 className="text-xs font-bold text-deep-navy uppercase tracking-widest mb-3">Program Unggulan Cabang:</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {b.programs.map(p => (
                                                    <span 
                                                        key={p} 
                                                        className="text-[11px] bg-surface-gray text-deep-navy px-3 py-1 rounded-md font-semibold border border-outline-variant/40"
                                                    >
                                                        {p}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer CTA */}
                                <div className="p-6 md:p-8 pt-0">
                                    <Link 
                                        href={`/cabang/${b.id}`} 
                                        className="btn-prosafe-primary w-full justify-center text-sm shadow-md"
                                    >
                                        <span className="material-symbols-outlined text-lg">map</span> Detail Lokasi & Kontak Cabang
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Central Consultation CTA */}
                    <div className="mt-16 bg-deep-navy rounded-3xl p-8 md:p-12 relative overflow-hidden text-center text-white">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                        <div className="relative z-10 max-w-xl mx-auto">
                            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Butuh Jadwal Khusus di Kota Lain?</h3>
                            <p className="text-sm text-primary-fixed-dim mb-6">
                                Kami melayani permintaan pelatihan K3 & Emergency Response in-house di seluruh penjuru wilayah Indonesia.
                            </p>
                            <a 
                                href="https://wa.me/6281222998847" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-prosafe-primary px-8 py-3.5 inline-flex items-center justify-center gap-2 mx-auto"
                            >
                                <span className="material-symbols-outlined text-lg">support_agent</span> Hubungi Hotline Pusat (WhatsApp)
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
