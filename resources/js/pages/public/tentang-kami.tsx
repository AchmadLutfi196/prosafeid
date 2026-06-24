import { Head } from '@inertiajs/react';
import { teamMembers } from '@/data/mockData';

export default function TentangKami() {
    return (
        <>
            <Head title="Tentang Kami │ ProSafe Indonesia">
                <meta name="description" content="ProSafe Indonesia adalah lembaga pelatihan dan sertifikasi K3 terpercaya. Terakreditasi PJK3 Kemnaker RI, LSP BNSP, dan ISO 9001:2015." />
                <meta property="og:title" content="Tentang Kami │ ProSafe Indonesia" />
                <meta property="og:description" content="ProSafe Indonesia adalah lembaga pelatihan dan sertifikasi K3 terpercaya. Terakreditasi PJK3 Kemnaker RI, LSP BNSP, dan ISO 9001:2015." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ProSafe Indonesia",
                        "url": "https://prosafe.co.id/tentang-kami",
                        "logo": "https://prosafe.co.id/images/logo-prosafe.png",
                        "description": "Lembaga pelatihan dan sertifikasi K3 nasional terakreditasi Kemnaker RI dan BNSP.",
                        "foundingDate": "2015"
                    })}
                </script>
            </Head>
            {/* Hero */}
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-10 md:py-14 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Tentang ProSafe Indonesia</h1>
                    <p className="text-lg text-primary-fixed-dim max-w-2xl mx-auto">Mitra K3 Terpercaya untuk Industri Indonesia sejak 2015.</p>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-6">
                {/* Profil */}
                <section className="py-10 md:py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2">Profil Singkat</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-4">Profil Perusahaan</h2>
                        <p className="text-on-surface-variant leading-relaxed mb-4 text-sm md:text-base">ProSafe Indonesia didirikan pada tahun 2015 di Surabaya sebagai lembaga pelatihan dan sertifikasi K3 yang berkomitmen untuk meningkatkan standar keselamatan kerja di seluruh Indonesia.</p>
                        <p className="text-on-surface-variant leading-relaxed mb-6 text-sm md:text-base">Dengan lisensi resmi PJK3 dari Kemnaker RI dan akreditasi BNSP, kami telah melatih lebih dari 15.000 profesional dari berbagai sektor industri termasuk konstruksi, minyak & gas, manufaktur, dan energi.</p>
                        <div className="grid grid-cols-3 gap-4">
                            {[{ num: '2015', label: 'Tahun Berdiri' }, { num: '30+', label: 'Instruktur' }, { num: '4', label: 'Cabang' }].map(s => (
                                <div key={s.label} className="text-center p-4 bg-surface-gray rounded-xl border border-outline-variant stat-counter">
                                    <p className="font-heading text-xl md:text-2xl font-bold text-deep-navy">{s.num}</p>
                                    <p className="text-[10px] text-text-secondary mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-outline-variant shadow-md">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49" alt="ProSafe Office" className="w-full h-[350px] md:h-[400px] object-cover" />
                    </div>
                </section>

                {/* Sambutan Direktur */}
                <section className="py-10 md:py-16 border-t border-outline-variant grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-4 rounded-2xl overflow-hidden border border-outline-variant shadow-md bg-white p-4">
                        <img src="/images/team/director.png" alt="Budi Santoso - Direktur Utama" className="w-full h-auto aspect-[3/4] object-cover rounded-xl" />
                        <div className="mt-4 text-center">
                            <h4 className="font-heading font-bold text-deep-navy text-base">Budi Santoso, M.KKK</h4>
                            <p className="text-xs text-safety-orange font-semibold">Direktur Utama ProSafe Indonesia</p>
                        </div>
                    </div>
                    <div className="md:col-span-8">
                        <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2">Sambutan Direktur Utama</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-5">Komitmen Kami Terhadap Budaya Keselamatan Kerja Nasional</h2>
                        <blockquote className="border-l-4 border-safety-orange pl-4 italic text-on-surface-variant leading-relaxed text-sm md:text-base mb-4">
                            "Keselamatan kerja bukanlah pilihan ataupun sekadar checklist regulasi. Keselamatan adalah fondasi utama keberlanjutan bisnis dan yang terpenting, bentuk kepedulian terdalam kita untuk memastikan setiap pekerja dapat pulang kembali ke rumah dengan selamat setiap harinya."
                        </blockquote>
                        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-4">
                            Sejak didirikan pada tahun 2015, ProSafe Indonesia terus mendedikasikan diri untuk menyediakan standar pelatihan K3 terbaik di Indonesia. Kami memahami tantangan industri modern yang terus berubah dengan cepat. Oleh karena itu, kurikulum kami dirancang adaptif, instruktur kami berpengalaman nyata di lapangan, dan fasilitas kami terstandarisasi untuk memenuhi kebutuhan industri minyak & gas, manufaktur, konstruksi, dan maritim secara komprehensif.
                        </p>
                        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                            Kami bangga dapat mendampingi ratusan perusahaan besar nasional dan multinasional dalam perjalanannya membangun nihil kecelakaan kerja (*zero accident*). ProSafe Indonesia berkomitmen penuh menjadi mitra strategis Anda dalam menciptakan lingkungan kerja yang aman, produktif, dan berstandar internasional.
                        </p>
                    </div>
                </section>

                {/* Visi Misi */}
                <section className="py-10 md:py-16 border-t border-outline-variant">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2">Arah Kebijakan</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Visi & Misi</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                        {/* Visi */}
                        <div className="relative rounded-2xl overflow-hidden p-8 md:p-10 flex flex-col justify-center bg-deep-navy shadow-xl shadow-deep-navy/20">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-safety-orange" />
                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-lg bg-safety-orange/15 flex items-center justify-center mb-5">
                                    <span className="material-symbols-outlined icon-fill text-safety-orange text-xl">visibility</span>
                                </div>
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">Visi</h3>
                                <p className="text-slate-300 leading-relaxed text-[15px]">Menjadi lembaga pelatihan dan sertifikasi K3 terdepan yang menghasilkan tenaga kerja kompeten dan berbudaya keselamatan tinggi di Indonesia.</p>
                            </div>
                        </div>

                        {/* Misi */}
                        <div className="relative rounded-2xl overflow-hidden p-8 md:p-10 bg-white border border-outline-variant shadow-lg shadow-deep-navy/5 flex flex-col">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-11 h-11 rounded-lg bg-safety-orange/10 flex items-center justify-center mb-5">
                                    <span className="material-symbols-outlined icon-fill text-safety-orange text-xl">flag</span>
                                </div>
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-5">Misi</h3>
                                <ul className="space-y-2.5 flex-grow">
                                    {[
                                        'Menyelenggarakan pelatihan K3 berkualitas tinggi sesuai standar nasional dan internasional',
                                        'Menyediakan instruktur bersertifikat dan berpengalaman di industri',
                                        'Mengembangkan kurikulum yang relevan dengan kebutuhan industri terkini',
                                        'Mendukung perusahaan dalam memenuhi regulasi K3 yang berlaku'
                                    ].map((m, idx) => (
                                        <li key={m} className="flex items-start gap-3 bg-surface-gray rounded-xl px-4 py-3 border border-outline-variant/40">
                                            <span className="w-7 h-7 rounded-lg bg-deep-navy flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-white font-heading">{idx + 1}</span>
                                            </span>
                                            <span className="text-sm text-on-surface-variant leading-relaxed pt-0.5">{m}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nilai-Nilai Utama */}
                <section className="py-10 md:py-16 border-t border-outline-variant">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2">Nilai-Nilai Utama</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Fondasi Kerja ProSafe Indonesia</h2>
                        <div className="section-divider" />
                        <p className="text-xs text-text-secondary mt-2">Nilai-nilai dasar yang memandu setiap langkah pelayanan, pengajaran, dan dedikasi kami untuk keselamatan industri.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'health_and_safety', title: 'Keselamatan Utama', desc: 'Keselamatan bukan sekadar modul teori, melainkan komitmen moral utama yang melandasi setiap program dan instruksi kami.' },
                            { icon: 'handshake', title: 'Integritas & Kepercayaan', desc: 'Kami menjunjung tinggi kejujuran dan profesionalisme dalam pelaksanaan audit sertifikasi demi kualitas kompetensi murni.' },
                            { icon: 'school', title: 'Keahlian Profesional', desc: 'Instruktur kami adalah praktisi lapangan bersertifikasi dengan jam terbang puluhan tahun di industri berisiko tinggi.' },
                            { icon: 'model_training', title: 'Pembelajaran Praktis', desc: 'Menghadirkan simulasi nyata berbasis studi kasus riil lapangan untuk menjamin kesiapan tim tanggap darurat Anda.' }
                        ].map((v, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-outline-variant shadow-sm hover:shadow-md hover:border-safety-orange/30 transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-safety-orange/10 flex items-center justify-center mb-4 text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300">
                                    <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                                </div>
                                <h3 className="font-heading font-bold text-deep-navy text-base mb-2">{v.title}</h3>
                                <p className="text-xs text-on-surface-variant leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Legalitas */}
                <section className="py-10 md:py-16 border-t border-outline-variant">
                    <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2 text-center">Akreditasi & Izin Resmi</span>
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-3 text-center">Legalitas & Akreditasi</h2>
                    <div className="section-divider" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'verified', title: 'PJK3 Kemnaker RI', desc: 'Perusahaan Jasa K3 Resmi' },
                            { icon: 'workspace_premium', title: 'BNSP', desc: 'Lembaga Sertifikasi Profesi' },
                            { icon: 'fact_check', title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu' },
                            { icon: 'shield', title: 'ISO 45001', desc: 'Manajemen K3' },
                        ].map(item => (
                            <div key={item.title} className="text-center p-6 bg-white rounded-xl border border-outline-variant badge-trust group">
                                <span className="material-symbols-outlined icon-fill text-safety-orange text-4xl mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
                                <h4 className="font-heading font-semibold text-deep-navy mb-1">{item.title}</h4>
                                <p className="text-xs text-text-secondary">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tim Instruktur */}
                <section className="py-10 md:py-16 border-t border-outline-variant">
                    <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2 text-center font-heading">Tenaga Ahli Bersertifikat</span>
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-3 text-center">Tim Instruktur</h2>
                    <div className="section-divider" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map(m => (
                            <div key={m.id} className="bg-white rounded-xl border border-outline-variant p-6 text-center card-hover group">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant mx-auto mb-4 bg-surface-gray shadow-sm">
                                    {m.image ? (
                                        <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    ) : (
                                        <div className="w-full h-full bg-deep-navy flex items-center justify-center text-white font-heading font-bold text-xl">
                                            {m.name.split(' ').slice(-2).map(n => n[0]).join('')}
                                        </div>
                                    )}
                                </div>
                                <h4 className="font-heading font-semibold text-deep-navy text-sm mb-1">{m.name}</h4>
                                <p className="text-xs text-safety-orange font-semibold mb-3">{m.role}</p>
                                <p className="text-xs text-text-secondary mb-3">Pengalaman: {m.experience}</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {m.certifications.map(c => (
                                        <span key={c} className="text-[10px] font-bold bg-surface-gray px-2 py-0.5 rounded border border-outline-variant text-text-secondary badge-trust">{c}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fasilitas Pelatihan */}
                <section className="py-10 md:py-16 border-t border-outline-variant">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold text-safety-orange uppercase tracking-wider block mb-2">Fasilitas & Sarana</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Pusat Pelatihan K3 & Rescue Modern</h2>
                        <div className="section-divider" />
                        <p className="text-xs text-text-secondary mt-2">Kami menyediakan sarana simulasi dan ruang kelas modern terstandarisasi untuk menunjang pengalaman belajar interaktif dan praktis.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { image: '/images/facilities/classroom.png', title: 'Kelas Teori AC & Multimedia', desc: 'Ruang kelas dengan desain ergonomis, Smart Board, sound system modern, dan AC dingin untuk kenyamanan teori.' },
                            { image: '/images/facilities/fire.png', title: 'Fasilitas Praktik Damkar', desc: 'Area outdoor luas terisolasi khusus simulasi pemadaman kebakaran riil (Fire Fighting Practice) dengan APAR & Hydrant.' },
                            { image: '/images/facilities/confined.png', title: 'Simulator Confined Space', desc: 'Instalasi lorong sempit khusus simulasi penyelamatan di ruang terbatas (Confined Space Rescue) berstandar internasional.' },
                            { image: '/images/facilities/equipment.png', title: 'Workshop Alat & Rescue K3', desc: 'Peralatan keselamatan modern lengkap: Full Body Harness, Gas Detector, Tripod Rescue, SCBA, & perlengkapan P3K.' }
                        ].map((f, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm group hover:shadow-md transition-all">
                                <div className="h-44 overflow-hidden relative">
                                    <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-heading font-bold text-deep-navy text-sm mb-2">{f.title}</h3>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
