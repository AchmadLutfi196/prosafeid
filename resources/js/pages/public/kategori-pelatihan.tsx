import { Link, Head } from '@inertiajs/react';
import { trainingPrograms } from '@/data/mockData';

export default function KategoriPelatihan({ category = 'kemnaker' }: { category?: string }) {
    const categoryMap: Record<string, { title: string; desc: string }> = {
        kemnaker: { title: 'Pelatihan Kemnaker RI', desc: 'Program sertifikasi resmi dari Kementerian Ketenagakerjaan Republik Indonesia.' },
        bnsp: { title: 'Sertifikasi BNSP', desc: 'Uji kompetensi profesi K3 oleh Badan Nasional Sertifikasi Profesi.' },
        migas: { title: 'K3 Migas & Offshore', desc: 'Pelatihan khusus sektor minyak, gas bumi, dan operasi offshore.' },
        'non-sertifikasi': { title: 'K3 Non-Sertifikasi', desc: 'Awareness training dan pelatihan praktis untuk kebutuhan internal perusahaan.' },
    };
    const info = categoryMap[category] || categoryMap.kemnaker;
    const programs = trainingPrograms.filter(p => p.category === category.replace('-', ''));

    return (
        <>
            <Head title={`${info.title} │ ProSafe Indonesia`}>
                <meta name="description" content={`${info.desc} Daftar program pelatihan K3 di ProSafe Indonesia.`} />
            </Head>
            {/* Breadcrumb */}
            <div className="max-w-[1280px] mx-auto px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Link href="/" className="hover:text-deep-navy">Home</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-deep-navy font-semibold">{info.title}</span>
                </div>
            </div>
            {/* Hero */}
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-14 relative z-10">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">{info.title}</h1>
                    <p className="text-lg text-primary-fixed-dim">{info.desc}</p>
                </div>
            </section>
            {/* Programs Grid */}
            <section className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map(p => (
                        <Link key={p.id} href={`/program/${p.slug}`} className="group bg-white rounded-xl border border-outline-variant card-hover overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-safety-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface-gray flex items-center justify-center">
                                        <span className="material-symbols-outlined text-deep-navy text-2xl">{p.icon}</span>
                                    </div>
                                    <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold text-text-secondary tracking-wider">{p.categoryLabel}</span>
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-deep-navy mb-2 group-hover:text-safety-orange transition-colors">{p.name}</h3>
                                <p className="text-sm text-on-surface-variant mb-4">{p.description}</p>
                                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/50">
                                    <span className="text-xs text-text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {p.duration}</span>
                                    <span className="text-xs font-bold text-safety-orange uppercase tracking-wider flex items-center gap-1">Detail <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {programs.length === 0 && (
                    <div className="text-center py-16 text-on-surface-variant">
                        <span className="material-symbols-outlined text-5xl text-outline block mb-4">folder_open</span>
                        <p className="font-heading text-lg font-semibold text-deep-navy mb-2">Program Segera Hadir</p>
                        <p className="text-sm">Program pelatihan untuk kategori ini sedang dalam pengembangan.</p>
                    </div>
                )}
            </section>
        </>
    );
}
