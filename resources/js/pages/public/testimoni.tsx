import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { testimonials } from '@/data/mockData';

export default function Testimoni() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'alumni' | 'corporate'>('all');

    // Categorize testimonials for realistic simulation
    const categorizedTestimonials = testimonials.map((t, idx) => ({
        ...t,
        category: idx % 2 === 0 ? 'alumni' as const : 'corporate' as const,
        avatarInitials: t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    }));

    const filteredTestimonials = activeFilter === 'all'
        ? categorizedTestimonials
        : categorizedTestimonials.filter(t => t.category === activeFilter);

    return (
        <>
            <Head title="Testimoni Alumni & Klien │ ProSafe Indonesia">
                <meta name="description" content="Testimoni dan ulasan jujur dari alumni pelatihan K3 serta Klien Korporat ProSafe Indonesia. Rating 4.9/5 berdasarkan lebih dari 15.000 ulasan." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-20">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs icon-fill">star</span> Ulasan & Testimoni
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Apa Kata Alumni & Klien Kami</h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl mx-auto">
                        Ulasan tulus dari ribuan profesional yang telah mengikuti program sertifikasi keselamatan kerja bersama ProSafe Indonesia.
                    </p>
                </div>
            </section>

            {/* Stats and Rating Summary Dashboard */}
            <div className="bg-white border-b border-outline-variant py-12 relative z-10">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        
                        {/* Rating Big Display */}
                        <div className="bg-surface-gray rounded-2xl p-6 text-center border border-outline-variant/60">
                            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-2">Rata-rata Rating</h3>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-5xl font-extrabold font-heading text-deep-navy">4.9</span>
                                <div className="text-left">
                                    <div className="flex text-safety-orange">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className="material-symbols-outlined icon-fill text-lg">star</span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-text-secondary font-medium">Berdasarkan 15,240+ Alumni</p>
                                </div>
                            </div>
                        </div>

                        {/* Stars Breakdown */}
                        <div className="space-y-2">
                            {[
                                { stars: 5, pct: 96 },
                                { stars: 4, pct: 4 },
                                { stars: 3, pct: 0 },
                                { stars: 2, pct: 0 },
                                { stars: 1, pct: 0 }
                            ].map((row) => (
                                <div key={row.stars} className="flex items-center gap-3 text-sm">
                                    <div className="w-12 text-right font-medium text-deep-navy flex items-center justify-end gap-1">
                                        <span>{row.stars}</span>
                                        <span className="material-symbols-outlined text-safety-orange text-xs icon-fill">star</span>
                                    </div>
                                    <div className="flex-1 h-2 bg-outline-variant/40 rounded-full overflow-hidden">
                                        <div className="h-full bg-safety-orange rounded-full" style={{ width: `${row.pct}%` }} />
                                    </div>
                                    <div className="w-10 text-right text-xs font-semibold text-text-secondary">
                                        {row.pct}%
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface-gray/50 rounded-xl p-4 border border-outline-variant/40 text-center">
                                <h4 className="text-2xl font-bold font-heading text-deep-navy">99.2%</h4>
                                <p className="text-[11px] text-text-secondary font-semibold uppercase tracking-wider mt-1">Kepuasan Klien</p>
                            </div>
                            <div className="bg-surface-gray/50 rounded-xl p-4 border border-outline-variant/40 text-center">
                                <h4 className="text-2xl font-bold font-heading text-deep-navy">500+</h4>
                                <p className="text-[11px] text-text-secondary font-semibold uppercase tracking-wider mt-1">Perusahaan Klien</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Testimonials List Section */}
            <div className="bg-surface-gray py-16">
                <div className="max-w-[1280px] mx-auto px-6">
                    
                    {/* Category Filter Tabs */}
                    <div className="flex justify-center gap-2 mb-12">
                        {[
                            { id: 'all', label: 'Semua Ulasan' },
                            { id: 'alumni', label: 'Alumni Individu' },
                            { id: 'corporate', label: 'Klien Korporat' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id as any)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeFilter === tab.id
                                        ? 'bg-deep-navy text-white shadow-md shadow-deep-navy/15'
                                        : 'bg-white text-on-surface-variant hover:bg-white-hover border border-outline-variant'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTestimonials.map((t, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white rounded-2xl p-6 border border-outline-variant/60 card-hover relative flex flex-col justify-between shadow-sm"
                            >
                                <div>
                                    <span className="absolute top-4 right-4 material-symbols-outlined text-outline-variant text-4xl opacity-20 pointer-events-none">
                                        format_quote
                                    </span>
                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-4">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <span key={i} className="material-symbols-outlined icon-fill text-safety-orange text-lg">star</span>
                                        ))}
                                    </div>
                                    {/* Text */}
                                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-medium text-justify">
                                        "{t.text}"
                                    </p>
                                </div>
                                
                                {/* User Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/40">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-deep-navy to-deep-navy/80 text-white font-heading font-bold text-sm flex items-center justify-center shadow-inner shrink-0">
                                        {t.avatarInitials}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="font-heading font-bold text-sm text-deep-navy">{t.name}</p>
                                            {t.category === 'corporate' && (
                                                <span className="bg-safety-orange/10 text-safety-orange text-[9px] font-bold px-1.5 py-0.5 rounded">
                                                    HRD
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-text-secondary font-medium">
                                            {t.role} di {t.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Invite Review CTA */}
                    <div className="mt-16 bg-deep-navy rounded-2xl p-8 md:p-12 relative overflow-hidden text-center text-white">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                        <div className="relative z-10 max-w-xl mx-auto">
                            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Pernah Mengikuti Training Bersama Kami?</h3>
                            <p className="text-sm text-primary-fixed-dim mb-6">
                                Bagikan pengalaman Anda selama mengikuti pelatihan di ProSafe Indonesia untuk membantu profesional lainnya.
                            </p>
                            <a 
                                href="https://wa.me/6281222998847" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-prosafe-primary px-8 py-3.5 inline-flex items-center justify-center gap-2 mx-auto"
                            >
                                <span className="material-symbols-outlined text-lg">rate_review</span> Kirim Testimoni via WhatsApp
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
