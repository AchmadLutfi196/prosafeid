import { Head, Link } from '@inertiajs/react';
import { branches } from '@/data/mockData';

export default function Cabang() {
    return (
        <>
            <Head title="Cabang Kami - ProSafe Indonesia" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Cabang Kami</h1>
                    <p className="text-lg text-primary-fixed-dim">Lokasi kantor dan pusat pelatihan ProSafe Indonesia.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {branches.map(b => (
                        <div key={b.id} className="bg-white rounded-2xl border border-outline-variant overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="bg-surface-gray h-48 flex items-center justify-center border-b border-outline-variant">
                                <span className="material-symbols-outlined text-outline text-7xl">map</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-heading text-xl font-bold text-deep-navy">{b.name}</h3>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.type === 'Kantor Pusat' ? 'bg-safety-orange text-white' : 'bg-surface-gray text-text-secondary border border-outline-variant'}`}>{b.type}</span>
                                </div>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex items-start gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-outline text-lg shrink-0">location_on</span>{b.address}</li>
                                    <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-outline text-lg">call</span>{b.phone}</li>
                                    <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-outline text-lg">mail</span>{b.email}</li>
                                    <li className="flex items-center gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-outline text-lg">schedule</span>{b.hours}</li>
                                </ul>
                                <div className="pt-4 border-t border-outline-variant">
                                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Program Tersedia:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {b.programs.map(p => (
                                            <span key={p} className="text-xs bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-1 rounded-full font-semibold">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
