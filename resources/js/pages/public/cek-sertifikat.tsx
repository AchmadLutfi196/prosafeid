import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CekSertifikat() {
    const [nomorSertifikat, setNomorSertifikat] = useState('');
    const [searched, setSearched] = useState(false);

    return (
        <>
            <Head title="Cek Sertifikat - ProSafe Indonesia" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Cek Sertifikat</h1>
                    <p className="text-lg text-primary-fixed-dim">Verifikasi keaslian sertifikat pelatihan dari ProSafe Indonesia.</p>
                </div>
            </section>
            <div className="max-w-[600px] mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl border border-outline-variant p-8 shadow-sm">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-surface-gray flex items-center justify-center mx-auto mb-4">
                            <span className="material-symbols-outlined icon-fill text-safety-orange text-3xl">verified</span>
                        </div>
                        <h2 className="font-heading text-xl font-bold text-deep-navy mb-2">Verifikasi Sertifikat</h2>
                        <p className="text-sm text-on-surface-variant">Masukkan nomor sertifikat yang tertera pada dokumen Anda.</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Nomor Sertifikat</label>
                            <input className="w-full px-4 py-3 border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none text-center font-mono text-lg tracking-widest" placeholder="PS-XXXX-XXXX-XXXX" value={nomorSertifikat} onChange={e => setNomorSertifikat(e.target.value)} />
                        </div>
                        <button onClick={() => setSearched(true)} className="w-full bg-safety-orange text-white font-heading font-semibold py-4 rounded-lg hover:bg-safety-orange/90 transition-all shadow-md flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">search</span> Cek Sertifikat
                        </button>
                    </div>

                    {searched && (
                        <div className="mt-8 p-6 bg-surface-gray rounded-xl border border-outline-variant text-center">
                            <span className="material-symbols-outlined text-4xl text-outline mb-2 block">info</span>
                            <p className="text-sm text-on-surface-variant">Fitur verifikasi sertifikat akan segera tersedia.<br />Hubungi admin kami untuk verifikasi manual.</p>
                            <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-1 text-sm font-semibold text-deep-navy mt-3 hover:text-safety-orange transition-colors">
                                <span className="material-symbols-outlined text-sm">chat</span> Hubungi Admin
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
