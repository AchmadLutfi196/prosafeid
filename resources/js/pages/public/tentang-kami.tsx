import { Head } from '@inertiajs/react';
import { teamMembers } from '@/data/mockData';

export default function TentangKami() {
    return (
        <>
            <Head title="Tentang Kami - ProSafe Indonesia" />
            {/* Hero */}
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Tentang ProSafe Indonesia</h1>
                    <p className="text-lg text-primary-fixed-dim max-w-2xl mx-auto">Mitra K3 Terpercaya untuk Industri Indonesia sejak 2015.</p>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-6">
                {/* Profil */}
                <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-4">Profil Perusahaan</h2>
                        <p className="text-on-surface-variant leading-relaxed mb-4">ProSafe Indonesia didirikan pada tahun 2015 di Surabaya sebagai lembaga pelatihan dan sertifikasi K3 yang berkomitmen untuk meningkatkan standar keselamatan kerja di seluruh Indonesia.</p>
                        <p className="text-on-surface-variant leading-relaxed mb-6">Dengan lisensi resmi PJK3 dari Kemnaker RI dan akreditasi BNSP, kami telah melatih lebih dari 15.000 profesional dari berbagai sektor industri termasuk konstruksi, minyak & gas, manufaktur, dan energi.</p>
                        <div className="grid grid-cols-3 gap-4">
                            {[{ num: '2015', label: 'Tahun Berdiri' }, { num: '30+', label: 'Instruktur' }, { num: '4', label: 'Cabang' }].map(s => (
                                <div key={s.label} className="text-center p-4 bg-surface-gray rounded-xl border border-outline-variant">
                                    <p className="font-heading text-2xl font-bold text-deep-navy">{s.num}</p>
                                    <p className="text-xs text-text-secondary mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-outline-variant shadow-md">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49" alt="ProSafe Office" className="w-full h-[400px] object-cover" />
                    </div>
                </section>

                {/* Visi Misi */}
                <section className="py-16 border-t border-outline-variant">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-deep-navy text-white p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-4 right-4 opacity-10"><span className="material-symbols-outlined" style={{ fontSize: '80px' }}>visibility</span></div>
                            <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined icon-fill text-safety-orange">visibility</span> Visi</h3>
                            <p className="text-primary-fixed-dim leading-relaxed">Menjadi lembaga pelatihan dan sertifikasi K3 terdepan yang menghasilkan tenaga kerja kompeten dan berbudaya keselamatan tinggi di Indonesia.</p>
                        </div>
                        <div className="bg-surface-gray p-8 rounded-2xl border border-outline-variant relative overflow-hidden">
                            <div className="absolute top-4 right-4 opacity-5"><span className="material-symbols-outlined" style={{ fontSize: '80px' }}>flag</span></div>
                            <h3 className="font-heading text-xl font-bold text-deep-navy mb-4 flex items-center gap-2"><span className="material-symbols-outlined icon-fill text-safety-orange">flag</span> Misi</h3>
                            <ul className="space-y-3 text-on-surface-variant">
                                {['Menyelenggarakan pelatihan K3 berkualitas tinggi sesuai standar nasional dan internasional', 'Menyediakan instruktur bersertifikat dan berpengalaman di industri', 'Mengembangkan kurikulum yang relevan dengan kebutuhan industri terkini', 'Mendukung perusahaan dalam memenuhi regulasi K3 yang berlaku'].map(m => (
                                    <li key={m} className="flex items-start gap-2"><span className="material-symbols-outlined text-safety-orange text-lg">check_circle</span> <span className="text-sm">{m}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Legalitas */}
                <section className="py-16 border-t border-outline-variant">
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-8 text-center">Legalitas & Akreditasi</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'verified', title: 'PJK3 Kemnaker RI', desc: 'Perusahaan Jasa K3 Resmi' },
                            { icon: 'workspace_premium', title: 'BNSP', desc: 'Lembaga Sertifikasi Profesi' },
                            { icon: 'fact_check', title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu' },
                            { icon: 'shield', title: 'ISO 45001', desc: 'Manajemen K3' },
                        ].map(item => (
                            <div key={item.title} className="text-center p-6 bg-white rounded-xl border border-outline-variant hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined icon-fill text-safety-orange text-4xl mb-3 block">{item.icon}</span>
                                <h4 className="font-heading font-semibold text-deep-navy mb-1">{item.title}</h4>
                                <p className="text-xs text-text-secondary">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tim Instruktur */}
                <section className="py-16 border-t border-outline-variant">
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-8 text-center">Tim Instruktur</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map(m => (
                            <div key={m.id} className="bg-white rounded-xl border border-outline-variant p-6 text-center hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 rounded-full bg-deep-navy flex items-center justify-center text-white font-heading font-bold text-xl mx-auto mb-4">
                                    {m.name.split(' ').slice(-2).map(n => n[0]).join('')}
                                </div>
                                <h4 className="font-heading font-semibold text-deep-navy text-sm mb-1">{m.name}</h4>
                                <p className="text-xs text-safety-orange font-semibold mb-3">{m.role}</p>
                                <p className="text-xs text-text-secondary mb-3">Pengalaman: {m.experience}</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {m.certifications.map(c => (
                                        <span key={c} className="text-[10px] font-bold bg-surface-gray px-2 py-0.5 rounded border border-outline-variant text-text-secondary">{c}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
