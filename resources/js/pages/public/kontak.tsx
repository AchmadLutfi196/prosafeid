import { Head } from '@inertiajs/react';
import { branches } from '@/data/mockData';
import { useState } from 'react';

export default function Kontak() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
        }, 800);
    };

    return (
        <>
            <Head title="Hubungi Kami │ ProSafe Indonesia"><meta name="description" content="Hubungi ProSafe Indonesia untuk informasi pelatihan K3, sertifikasi BNSP, dan konsultasi. Kantor pusat Surabaya, cabang Jakarta, Semarang, Balikpapan." /></Head>
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-10 md:py-14 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
                    <p className="text-lg text-primary-fixed-dim max-w-2xl mx-auto">Konsultasikan kebutuhan pelatihan K3 Anda. Tim kami siap membantu.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-white rounded-2xl border border-outline-variant p-8 shadow-sm">
                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-wa-green/10 text-wa-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                                </div>
                                <h2 className="font-heading text-2xl font-bold text-deep-navy mb-2">Pesan Berhasil Terkirim</h2>
                                <p className="text-sm text-on-surface-variant mb-6 max-w-md mx-auto">Terima kasih atas pesan Anda. Customer service ProSafe Indonesia akan segera menghubungi Anda kembali melalui WhatsApp atau email resmi dalam 1x24 jam.</p>
                                <button onClick={() => setFormSubmitted(false)} className="btn-prosafe-secondary text-sm px-6 py-2.5">
                                    Kirim Pesan Lainnya
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h2 className="font-heading text-xl font-bold text-deep-navy mb-2">Kirim Pesan</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Nama Lengkap</label>
                                        <input required type="text" name="name" autoComplete="name" className="input-prosafe text-sm w-full" placeholder="Nama Anda" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Perusahaan</label>
                                        <input required type="text" name="company" autoComplete="organization" className="input-prosafe text-sm w-full" placeholder="Nama Perusahaan" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Email</label>
                                        <input required type="email" name="email" autoComplete="email" spellCheck="false" className="input-prosafe text-sm w-full" placeholder="email@perusahaan.com" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">No. WhatsApp</label>
                                        <input required type="tel" name="phone" autoComplete="tel" className="input-prosafe text-sm w-full" placeholder="0812xxxxxxxx" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Subjek</label>
                                    <select required name="subject" className="input-prosafe text-sm w-full bg-white">
                                        <option value="Informasi Pelatihan">Informasi Pelatihan</option>
                                        <option value="Inhouse Training">Inhouse Training</option>
                                        <option value="Konsultasi K3">Konsultasi K3</option>
                                        <option value="Kerjasama">Kerjasama</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Pesan</label>
                                    <textarea required name="message" rows={5} className="input-prosafe text-sm w-full resize-none" placeholder="Jelaskan kebutuhan Anda..." />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn-prosafe-primary w-full justify-center py-4 text-base disabled:opacity-75 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined mr-1">send</span> Kirim Pesan
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-outline-variant p-6 shadow-sm">
                            <h3 className="font-heading font-semibold text-deep-navy mb-4">Kontak Langsung</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: 'call', label: 'Telepon', value: '+62 812-2299-8847', href: 'tel:+6281222998847' },
                                    { icon: 'mail', label: 'Email', value: 'prosafeindonesia@gmail.com', href: 'mailto:prosafeindonesia@gmail.com' },
                                    { icon: 'chat', label: 'WhatsApp', value: '0812-2299-8847', href: 'https://wa.me/6281222998847' },
                                ].map(c => (
                                    <li key={c.icon}>
                                        <a href={c.href} className="flex items-center gap-3 group">
                                            <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0 group-hover:bg-safety-orange/10 transition-colors">
                                                <span className="material-symbols-outlined text-deep-navy group-hover:text-safety-orange transition-colors">{c.icon}</span>
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
                                    <div key={b.id} className="text-center p-4 bg-surface-gray rounded-xl border border-outline-variant hover:border-safety-orange/40 hover:bg-safety-orange/5 active:scale-[0.97] transition-all cursor-pointer">
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
