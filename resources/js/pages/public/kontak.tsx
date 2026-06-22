import { Head } from '@inertiajs/react';
import { branches } from '@/data/mockData';

export default function Kontak() {
    return (
        <>
            <Head title="Hubungi Kami - ProSafe Indonesia" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
                    <p className="text-lg text-primary-fixed-dim max-w-2xl mx-auto">Konsultasikan kebutuhan pelatihan K3 Anda. Tim kami siap membantu.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-white rounded-2xl border border-outline-variant p-8 shadow-sm">
                        <h2 className="font-heading text-xl font-bold text-deep-navy mb-6">Kirim Pesan</h2>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Nama Lengkap</label>
                                    <input className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none" placeholder="Nama Anda" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Perusahaan</label>
                                    <input className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none" placeholder="Nama Perusahaan" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Email</label>
                                    <input type="email" className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none" placeholder="email@perusahaan.com" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">No. WhatsApp</label>
                                    <input className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none" placeholder="0812xxxxxxxx" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Subjek</label>
                                <select className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy outline-none">
                                    <option>Informasi Pelatihan</option>
                                    <option>Inhouse Training</option>
                                    <option>Konsultasi K3</option>
                                    <option>Kerjasama</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Pesan</label>
                                <textarea rows={5} className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none resize-none" placeholder="Jelaskan kebutuhan Anda..." />
                            </div>
                            <button className="w-full bg-safety-orange text-white font-heading font-semibold py-4 rounded-lg hover:bg-safety-orange/90 transition-all shadow-md flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">send</span> Kirim Pesan
                            </button>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-outline-variant p-6 shadow-sm">
                            <h3 className="font-heading font-semibold text-deep-navy mb-4">Kontak Langsung</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: 'call', label: 'Telepon', value: '+62 31 555 1234', href: 'tel:+62315551234' },
                                    { icon: 'mail', label: 'Email', value: 'info@prosafe.co.id', href: 'mailto:info@prosafe.co.id' },
                                    { icon: 'chat', label: 'WhatsApp', value: '0812-3456-7890', href: 'https://wa.me/6281234567890' },
                                ].map(c => (
                                    <li key={c.icon}>
                                        <a href={c.href} className="flex items-center gap-3 group">
                                            <div className="w-10 h-10 rounded-full bg-surface-gray flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-deep-navy">{c.icon}</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-text-secondary block">{c.label}</span>
                                                <span className="font-heading font-semibold text-deep-navy group-hover:text-safety-orange transition-colors">{c.value}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl border border-outline-variant p-6 shadow-sm">
                            <h3 className="font-heading font-semibold text-deep-navy mb-4">Jam Operasional</h3>
                            <ul className="space-y-2 text-sm text-on-surface-variant">
                                <li className="flex justify-between"><span>Senin - Jumat</span><strong className="text-deep-navy">08:00 - 17:00 WIB</strong></li>
                                <li className="flex justify-between"><span>Sabtu</span><strong className="text-deep-navy">08:00 - 12:00 WIB</strong></li>
                                <li className="flex justify-between"><span>Minggu / Hari Libur</span><strong className="text-alert-red">Tutup</strong></li>
                            </ul>
                        </div>
                        {/* Cabang Cards */}
                        <div className="bg-white rounded-2xl border border-outline-variant p-6 shadow-sm">
                            <h3 className="font-heading font-semibold text-deep-navy mb-4">Lokasi Cabang</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {branches.map(b => (
                                    <div key={b.id} className="text-center p-3 bg-surface-gray rounded-lg border border-outline-variant hover:border-deep-navy transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-deep-navy">location_on</span>
                                        <p className="font-heading text-sm font-semibold text-deep-navy">{b.name}</p>
                                        <p className="text-[10px] text-text-secondary">{b.type}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
