import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { trainingPrograms } from '@/data/mockData';

export default function Pendaftaran() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            <Head title="Form Pendaftaran Pelatihan │ ProSafe Indonesia">
                <meta name="description" content="Daftar pelatihan K3 dan sertifikasi BNSP di ProSafe Indonesia. Isi formulir pendaftaran online untuk pelatihan Kemnaker, BNSP, K3 Migas." />
            </Head>

            <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 px-6">
                <div className="max-w-[800px] mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-gray border border-outline-variant rounded-full mb-4">
                            <span className="material-symbols-outlined text-safety-orange text-sm">app_registration</span>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pendaftaran Online</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-4">Form Pendaftaran Pelatihan</h1>
                        <p className="text-lg text-on-surface-variant">Isi formulir di bawah ini untuk mendaftar program pelatihan. Tim kami akan menghubungi Anda untuk konfirmasi.</p>
                    </div>

                    {submitted ? (
                        <div className="bg-white rounded-xl p-10 border border-outline-variant text-center">
                            <div className="w-20 h-20 mx-auto rounded-full bg-wa-green/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined icon-fill text-wa-green text-4xl">check_circle</span>
                            </div>
                            <h2 className="font-heading text-2xl font-bold text-deep-navy mb-3">Pendaftaran Berhasil Dikirim!</h2>
                            <p className="text-on-surface-variant mb-6">Tim kami akan menghubungi Anda dalam 1x24 jam kerja untuk konfirmasi dan informasi pembayaran.</p>
                            <a href="https://wa.me/6281222998847" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-wa-green text-white font-heading font-semibold px-6 py-3 rounded-lg hover:bg-wa-green/90 transition-all">
                                <svg fill="currentColor" height="18" width="18" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" /></svg>
                                Hubungi via WhatsApp
                            </a>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl p-8 md:p-10 border border-outline-variant shadow-sm space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Nama Lengkap *</label>
                                    <input type="text" name="name" autoComplete="name" required className="input-prosafe text-sm" placeholder="Masukkan nama lengkap" />
                                </div>
                                <div>
                                    <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Email *</label>
                                    <input type="email" name="email" autoComplete="email" spellCheck="false" required className="input-prosafe text-sm" placeholder="email@perusahaan.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">No. WhatsApp *</label>
                                    <input type="tel" name="phone" autoComplete="tel" required className="input-prosafe text-sm" placeholder="08xx-xxxx-xxxx" />
                                </div>
                                <div>
                                    <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Perusahaan / Instansi</label>
                                    <input type="text" name="company" autoComplete="organization" className="input-prosafe text-sm" placeholder="Nama perusahaan (opsional)" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Program Pelatihan *</label>
                                <select name="program" required className="input-prosafe text-sm bg-white">
                                    <option value="">Pilih program pelatihan</option>
                                    {trainingPrograms.map(p => (
                                        <option key={p.id} value={p.id}>[{p.categoryLabel}] {p.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Kota Pilihan *</label>
                                    <select name="city" required className="input-prosafe text-sm bg-white">
                                        <option value="">Pilih kota</option>
                                        <option value="surabaya">Surabaya</option>
                                        <option value="jakarta">Jakarta</option>
                                        <option value="semarang">Semarang</option>
                                        <option value="balikpapan">Balikpapan</option>
                                        <option value="online">Online</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Jumlah Peserta</label>
                                    <input type="number" name="quantity" min="1" defaultValue={1} className="input-prosafe text-sm" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-heading font-semibold text-deep-navy mb-1.5">Pesan Tambahan</label>
                                <textarea name="message" rows={3} className="input-prosafe text-sm resize-none" placeholder="Pertanyaan atau informasi tambahan (opsional)" />
                            </div>

                            <button type="submit" className="btn-prosafe-primary w-full justify-center py-4 text-base">
                                <span className="material-symbols-outlined">send</span> Kirim Pendaftaran
                            </button>
                            <p className="text-xs text-text-secondary text-center">Dengan mengirim formulir ini, Anda menyetujui <a href="/kebijakan-privasi" className="text-safety-orange hover:underline">Kebijakan Privasi</a> kami.</p>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
