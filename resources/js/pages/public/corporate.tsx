import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { clientLogos } from '@/data/mockData';
import BrandLogo from '@/components/public/BrandLogos';

export default function Corporate() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <>
            <Head title="Corporate Services & In-House Training K3 │ ProSafe Indonesia">
                <meta name="description" content="Layanan pelatihan K3 in-house, konsultasi K3, assessment risiko, dan sertifikasi ISO untuk perusahaan. Jadwal fleksibel, kurikulum disesuaikan dengan kebutuhan industri Anda." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-12 md:py-16">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs">domain</span> Solusi Perusahaan
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
                        Solusi Keselamatan Kerja & K3 untuk Perusahaan Anda
                    </h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl leading-relaxed mb-8">
                        Meningkatkan kepatuhan K3, mengurangi angka kecelakaan kerja, dan melatih kompetensi tim Anda melalui In-House Training, Konsultasi, Assessment, dan ISO Consulting.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="#request-form" className="btn-prosafe-primary hover:shadow-lg hover:shadow-safety-orange/20 cursor-pointer">
                            <span className="material-symbols-outlined text-sm">assignment</span> Request Penawaran
                        </a>
                        <a 
                            href="https://wa.me/6281222998847?text=Halo%20ProSafe%20Indonesia%20Corporate%20Services%2C%20saya%20tertarik%20untuk%20mengajukan%20penawaran%20Inhouse%20Training%2FConsulting%20perusahaan..." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-sm transition-all duration-200 cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-wa-green text-sm">chat</span> Hubungi Dedicated Corporate
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-surface-gray pt-10 pb-16">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                    
                    {/* Services Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { icon: 'domain', title: 'In-House Training', desc: 'Pelatihan K3 di lokasi perusahaan dengan jadwal, kurikulum, dan studi kasus yang disesuaikan dengan industri Anda.' },
                            { icon: 'analytics', title: 'Consulting K3 & SMK3', desc: 'Penyusunan dokumen K3, CSMS, pendampingan sertifikasi SMK3 Kemnaker, dan kesiapan audit keselamatan kerja.' },
                            { icon: 'assignment', title: 'Safety Assessment', desc: 'Evaluasi menyeluruh terhadap potensi risiko, kepatuhan K3, dan audit kelayakan fasilitas operasional perusahaan.' },
                            { icon: 'fact_check', title: 'ISO Consulting', desc: 'Pendampingan sertifikasi standardisasi sistem manajemen internasional ISO 9001, ISO 14001, dan ISO 45001.' },
                        ].map(s => (
                            <div key={s.title} className="bg-white p-8 rounded-2xl border border-outline-variant/60 card-hover text-center group shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-safety-orange/10 transition-colors duration-300">
                                        <span className="material-symbols-outlined text-deep-navy text-3xl group-hover:text-safety-orange transition-colors duration-300">
                                            {s.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-deep-navy mb-3 group-hover:text-safety-orange transition-colors duration-300">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-on-surface-variant leading-relaxed text-center">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Keunggulan In-House Training */}
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-safety-orange uppercase tracking-widest block mb-2">Mengapa Memilih Kami</span>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Keunggulan In-House Training</h2>
                            <div className="section-divider mx-auto mt-3" />
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'location_on', title: 'Di Lokasi Anda (On-Site)', desc: 'Instruktur kami datang langsung ke fasilitas perusahaan Anda untuk menyelenggarakan pelatihan praktis secara langsung.' },
                                { icon: 'calendar_month', title: 'Jadwal Fleksibel', desc: 'Waktu pelaksanaan yang fleksibel dan dapat diatur sedemikian rupa agar tidak mengganggu operasional harian bisnis Anda.' },
                                { icon: 'tune', title: 'Kurikulum Kustom', desc: 'Materi, simulasi, dan pembahasan kasus disesuaikan khusus dengan karakteristik risiko industri perusahaan Anda.' },
                            ].map(k => (
                                <div key={k.title} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-outline-variant/60 card-hover shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-safety-orange text-2xl">{k.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-base text-deep-navy mb-2">{k.title}</h4>
                                        <p className="text-sm text-on-surface-variant leading-relaxed">{k.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Proses Kerja Sama - Infographic step-by-step */}
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-safety-orange uppercase tracking-widest block mb-2">Sistematis & Efisien</span>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Alur Kerja Sama In-House</h2>
                            <div className="section-divider mx-auto mt-3" />
                        </div>

                        <div className="relative">
                            {/* Connecting Line on Desktop */}
                            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-safety-orange/40 via-deep-navy/20 to-safety-orange/40 z-0 pointer-events-none" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { step: '01', icon: 'forum', title: 'Konsultasi & Analisis', desc: 'Diskusi kebutuhan kompetensi dan analisis risiko industri perusahaan Anda.' },
                                    { step: '02', icon: 'rate_review', title: 'Proposal & Penawaran', desc: 'Penyusunan penawaran harga, silabus kustom, dan jadwal usulan.' },
                                    { step: '03', icon: 'school', title: 'Pelaksanaan Training', desc: 'Penyelenggaraan pelatihan oleh instruktur ahli bersertifikat resmi.' },
                                    { step: '04', icon: 'workspace_premium', title: 'Evaluasi & Sertifikasi', desc: 'Pelaporan hasil pelatihan serta penerbitan sertifikat kompetensi resmi.' },
                                ].map(p => (
                                    <div key={p.step} className="bg-white p-6 rounded-2xl border border-outline-variant/60 text-center shadow-sm hover:shadow-md hover:border-safety-orange/30 hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-full bg-deep-navy text-white font-heading text-lg font-bold flex items-center justify-center mx-auto mb-3 group-hover:bg-safety-orange transition-colors duration-300">
                                            {p.step}
                                        </div>
                                        <span className="material-symbols-outlined text-text-secondary text-2xl mb-2 block group-hover:text-safety-orange transition-colors duration-300 select-none">
                                            {p.icon}
                                        </span>
                                        <h4 className="font-heading font-bold text-base text-deep-navy mb-2">{p.title}</h4>
                                        <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Client Logos Grid */}
                    <section className="mb-20 text-center">
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-8">Dipercaya oleh Perusahaan Terkemuka</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {clientLogos.map(l => (
                                <div key={l.name} className="logo-grayscale w-36 h-16 bg-white border border-outline-variant/60 rounded-xl flex items-center justify-center p-3 shadow-sm" title={l.name}>
                                    <BrandLogo name={l.name} className="max-h-full max-w-full" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Form Request In-House Section */}
                    <section id="request-form" className="max-w-4xl mx-auto bg-deep-navy rounded-3xl p-6 sm:p-8 md:p-14 text-white relative overflow-hidden shadow-xl scroll-mt-24">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                        <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-safety-orange/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Request Penawaran In-House</h2>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed">
                                Silakan lengkapi formulir di bawah ini. Tim Corporate Solutions kami akan segera menghubungi Anda dalam waktu maksimal 1x24 jam kerja dengan proposal penawaran resmi.
                            </p>
                        </div>

                        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-8 md:p-10">
                            {formSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 rounded-full bg-safety-orange/20 flex items-center justify-center mx-auto mb-4 border border-safety-orange/30">
                                        <span className="material-symbols-outlined text-safety-orange text-3xl">check_circle</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-2">Permintaan Berhasil Dikirim</h3>
                                    <p className="text-sm text-primary-fixed-dim max-w-md mx-auto mb-6">
                                        Terima kasih. Proposal penawaran akan disiapkan oleh Account Executive kami dan dikirimkan ke email perusahaan Anda.
                                    </p>
                                    <button 
                                        onClick={() => setFormSubmitted(false)}
                                        className="btn-prosafe-primary px-6 py-2.5 text-sm cursor-pointer"
                                    >
                                        Kirim Form Lainnya
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Nama Perusahaan</label>
                                            <input required type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: PT. Maju Bersama" />
                                        </div>
                                        <div>
                                            <label htmlFor="pic" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Nama PIC (Perwakilan)</label>
                                            <input required type="text" id="pic" name="pic" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Nama Lengkap Anda" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">No. WhatsApp PIC</label>
                                            <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: 081234567890" />
                                        </div>
                                        <div>
                                            <label htmlFor="program" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Program Pelatihan K3 / Layanan</label>
                                            <input required type="text" id="program" name="program" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: AK3 Umum / Damkar Kelas D / K3 Migas" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="participants" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Perkiraan Jumlah Peserta</label>
                                            <input required type="text" id="participants" name="participants" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: 15 Orang / 1 Batch" />
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Kota / Lokasi Pelaksanaan</label>
                                            <input required type="text" id="city" name="city" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: Surabaya (Onsite) / Jakarta" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Detail / Spesifikasi Kebutuhan (Opsional)</label>
                                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Tuliskan jika ada materi kustom khusus, sertifikasi Kemenaker/BNSP, preferensi jadwal, dll..." />
                                    </div>

                                    <button type="submit" className="btn-prosafe-primary w-full py-4 text-base shadow-lg shadow-safety-orange/10 justify-center cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">send</span> Kirim Permintaan Penawaran Resmi
                                    </button>
                                </form>
                            )}
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}
