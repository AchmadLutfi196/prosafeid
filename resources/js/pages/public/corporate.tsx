import { Head, Link } from '@inertiajs/react';
import { clientLogos } from '@/data/mockData';

export default function Corporate() {
    return (
        <>
            <Head title="Corporate Services - Inhouse Training K3" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Solusi K3 untuk Perusahaan</h1>
                    <p className="text-lg text-primary-fixed-dim max-w-2xl">Pelatihan In-House, Konsultasi K3, Assessment, dan ISO Consulting — disesuaikan dengan kebutuhan industri Anda.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                {/* Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { icon: 'domain', title: 'Inhouse Training', desc: 'Pelatihan K3 di lokasi perusahaan dengan jadwal dan materi yang disesuaikan.' },
                        { icon: 'analytics', title: 'Consulting K3', desc: 'Penyusunan dokumen SMK3, CSMS, dan pendampingan audit.' },
                        { icon: 'assignment', title: 'Assessment', desc: 'Evaluasi risiko dan audit kepatuhan K3 di tempat kerja.' },
                        { icon: 'fact_check', title: 'ISO Consulting', desc: 'Persiapan dan pendampingan sertifikasi ISO 9001, 14001, 45001.' },
                    ].map(s => (
                        <div key={s.title} className="bg-white p-6 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center">
                            <div className="w-14 h-14 rounded-xl bg-surface-gray flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-deep-navy text-3xl">{s.icon}</span>
                            </div>
                            <h3 className="font-heading font-semibold text-deep-navy mb-2">{s.title}</h3>
                            <p className="text-sm text-on-surface-variant">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Keunggulan */}
                <section className="mb-16">
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-8 text-center">Keunggulan Inhouse Training</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: 'location_on', title: 'Di Lokasi Anda', desc: 'Pelatihan diselenggarakan di fasilitas perusahaan Anda sendiri.' },
                            { icon: 'calendar_month', title: 'Jadwal Fleksibel', desc: 'Waktu pelaksanaan disesuaikan dengan operasional perusahaan.' },
                            { icon: 'tune', title: 'Materi Kustom', desc: 'Studi kasus dan materi disesuaikan dengan industri spesifik Anda.' },
                        ].map(k => (
                            <div key={k.title} className="flex items-start gap-4 p-6 bg-surface-gray rounded-xl border border-outline-variant">
                                <span className="material-symbols-outlined text-safety-orange text-3xl shrink-0">{k.icon}</span>
                                <div>
                                    <h4 className="font-heading font-semibold text-deep-navy mb-1">{k.title}</h4>
                                    <p className="text-sm text-on-surface-variant">{k.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Proses */}
                <section className="mb-16">
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-8 text-center">Proses Kerja Sama</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan training' },
                            { step: '02', title: 'Proposal', desc: 'Penyusunan penawaran kustom' },
                            { step: '03', title: 'Pelaksanaan', desc: 'Training oleh instruktur ahli' },
                            { step: '04', title: 'Sertifikasi', desc: 'Penerbitan sertifikat resmi' },
                        ].map(p => (
                            <div key={p.step} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-deep-navy text-white font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-3">{p.step}</div>
                                <h4 className="font-heading font-semibold text-deep-navy mb-1">{p.title}</h4>
                                <p className="text-xs text-text-secondary">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Klien */}
                <section className="mb-16 text-center">
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-6">Dipercaya oleh Perusahaan Terkemuka</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {clientLogos.slice(0, 8).map(l => (
                            <div key={l.name} className="logo-grayscale w-24 h-14 bg-white border border-outline-variant rounded-lg flex items-center justify-center" title={l.name}>
                                <span className="font-heading text-lg font-bold text-deep-navy/40">{l.initials}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Form */}
                <section className="bg-deep-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">Request Penawaran Inhouse</h2>
                        <p className="text-primary-fixed-dim mb-8 max-w-xl mx-auto">Tim kami akan menghubungi Anda dalam 1x24 jam kerja.</p>
                        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
                            <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:ring-1 focus:ring-safety-orange outline-none" placeholder="Nama Perusahaan" />
                            <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:ring-1 focus:ring-safety-orange outline-none" placeholder="Nama PIC" />
                            <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:ring-1 focus:ring-safety-orange outline-none" placeholder="No. WhatsApp" />
                            <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:ring-1 focus:ring-safety-orange outline-none" placeholder="Program yang Diinginkan" />
                        </div>
                        <button className="mt-6 bg-safety-orange text-white font-heading font-semibold px-10 py-4 rounded-lg hover:bg-safety-orange/90 transition-all shadow-lg">
                            Kirim Request Penawaran
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
