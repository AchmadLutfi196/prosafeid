import { Head } from '@inertiajs/react';
import { testimonials } from '@/data/mockData';

export default function Testimoni() {
    return (
        <>
            <Head title="Testimoni - ProSafe Indonesia" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Testimoni</h1>
                    <p className="text-lg text-primary-fixed-dim">Apa kata klien dan alumni kami tentang pelatihan K3 di ProSafe.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...testimonials, ...testimonials].slice(0, 6).map((t, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 border border-outline-variant hover:shadow-md transition-shadow relative">
                            <span className="absolute top-4 right-4 material-symbols-outlined text-outline-variant text-4xl opacity-30">format_quote</span>
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <span key={i} className="material-symbols-outlined icon-fill text-safety-orange text-lg">star</span>
                                ))}
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/50">
                                <div className="w-12 h-12 rounded-full bg-deep-navy flex items-center justify-center text-white font-heading font-bold">
                                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-deep-navy">{t.name}</p>
                                    <p className="text-xs text-text-secondary">{t.role}, {t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
