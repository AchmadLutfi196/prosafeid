import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CekSertifikat() {
    const [nomorSertifikat, setNomorSertifikat] = useState('');
    const [searched, setSearched] = useState(false);
    const [result, setResult] = useState<any | null>(null);

    const handleCheck = () => {
        setSearched(true);
        const code = nomorSertifikat.trim().toUpperCase();

        // Simulated certificate database
        if (code === 'PS-2026-AK3U-001' || code === 'PS-2026-K3KB-002') {
            setResult({
                name: code === 'PS-2026-AK3U-001' ? 'Ahmad Faisal' : 'Budi Santoso',
                program: code === 'PS-2026-AK3U-001' ? 'Ahli K3 Umum' : 'Petugas Peran Kebakaran Kelas D',
                licenseNumber: code,
                issueDate: code === 'PS-2026-AK3U-001' ? '24 Juli 2026' : '04 Agustus 2026',
                expiryDate: code === 'PS-2026-AK3U-001' ? '24 Juli 2029' : '04 Agustus 2029',
                status: 'VALID',
                authority: 'Kementerian Ketenagakerjaan RI'
            });
        } else {
            setResult(null);
        }
    };

    return (
        <>
            <Head title="Verifikasi Keaslian Sertifikat │ ProSafe Indonesia">
                <meta name="description" content="Verifikasi keaslian sertifikat pelatihan K3 dan sertifikasi BNSP yang diterbitkan oleh ProSafe Indonesia secara online." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-10 md:py-14">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-safety-orange/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs">verified</span> Sistem Verifikasi Online
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Cek Keaslian Sertifikat</h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl mx-auto">
                        Verifikasikan kredensial, lisensi K3, dan status kelulusan peserta pelatihan ProSafe Indonesia secara langsung.
                    </p>
                </div>
            </section>

            <div className="bg-surface-gray pt-10 pb-16">
                <div className="max-w-[650px] mx-auto px-6">
                    <div className="bg-white rounded-3xl border border-outline-variant/60 p-8 shadow-sm">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-2">Verifikasi Sertifikat K3</h2>
                            <p className="text-sm text-on-surface-variant">
                                Masukkan nomor sertifikasi resmi Anda di bawah ini untuk memulai pencarian.
                            </p>
                            <p className="text-xs text-text-secondary mt-2 bg-surface-gray py-1 px-3 rounded-lg inline-block font-medium">
                                Contoh nomor demo: <span className="font-mono text-deep-navy font-bold">PS-2026-AK3U-001</span>
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Nomor Lisensi / Sertifikat</label>
                                <input 
                                    type="text" 
                                    name="cert_number" 
                                    autoComplete="off" 
                                    spellCheck="false" 
                                    className="input-prosafe text-center font-mono text-base uppercase tracking-wider transition-all placeholder:text-text-secondary/50" 
                                    placeholder="CONTOH: PS-2026-AK3U-001" 
                                    value={nomorSertifikat} 
                                    onChange={e => setNomorSertifikat(e.target.value)}
                                    onKeyDown={e => { if (e.key === 'Enter') handleCheck(); }}
                                />
                            </div>
                            <button 
                                onClick={handleCheck} 
                                className="btn-prosafe-primary w-full justify-center py-4 text-base active:scale-[0.98]"
                            >
                                <span className="material-symbols-outlined text-lg">search</span> Verifikasi Sertifikat
                            </button>
                        </div>

                        {/* Results Box */}
                        {searched && (
                            <div className="mt-8 pt-6 border-t border-outline-variant/60">
                                {result ? (
                                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200/60 text-left animate-fade-in-up">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="material-symbols-outlined text-emerald-600 text-3xl icon-fill">check_circle</span>
                                            <div>
                                                <h3 className="font-heading text-lg font-bold text-emerald-950">Sertifikat Terverifikasi</h3>
                                                <p className="text-xs text-emerald-700/80">Kredensial valid dan terdaftar dalam basis data kami.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-emerald-100">
                                            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-emerald-100/50">
                                                <span className="text-xs text-emerald-800 font-semibold">Nama Peserta</span>
                                                <span className="text-xs text-on-surface col-span-2 font-bold">{result.name}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-emerald-100/50">
                                                <span className="text-xs text-emerald-800 font-semibold">Nama Program</span>
                                                <span className="text-xs text-on-surface col-span-2 font-bold">{result.program}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-emerald-100/50">
                                                <span className="text-xs text-emerald-800 font-semibold">No. Sertifikat</span>
                                                <span className="text-xs text-on-surface col-span-2 font-mono font-bold text-[13px]">{result.licenseNumber}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-emerald-100/50">
                                                <span className="text-xs text-emerald-800 font-semibold">Tanggal Terbit</span>
                                                <span className="text-xs text-on-surface col-span-2 font-bold">{result.issueDate}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-emerald-100/50">
                                                <span className="text-xs text-emerald-800 font-semibold">Masa Berlaku</span>
                                                <span className="text-xs text-on-surface col-span-2 font-bold">{result.expiryDate}</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 py-1.5">
                                                <span className="text-xs text-emerald-800 font-semibold">Instansi/Lembaga</span>
                                                <span className="text-xs text-on-surface col-span-2 font-bold">{result.authority}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-red-50 rounded-2xl p-6 border border-red-200/60 text-center animate-fade-in-up">
                                        <span className="material-symbols-outlined text-4xl text-red-500 icon-fill mb-2">warning</span>
                                        <h3 className="font-heading text-base font-bold text-red-950">Sertifikat Tidak Ditemukan</h3>
                                        <p className="text-sm text-red-700/90 mt-1">
                                            Nomor sertifikat yang Anda masukkan tidak terdaftar dalam database otomatis kami.
                                        </p>
                                        <p className="text-xs text-text-secondary mt-3 max-w-sm mx-auto">
                                            Sertifikat Anda mungkin masih dalam proses verifikasi administrasi atau diterbitkan sebelum tahun 2026.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-red-200/40">
                                            <a 
                                                href={`https://wa.me/6281222998847?text=Halo%20ProSafe%20Indonesia%2C%20saya%20ingin%20meminta%20verifikasi%20manual%20untuk%20nomor%20sertifikat%3A%20${nomorSertifikat}`} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-prosafe-secondary text-sm px-6 py-2.5 inline-flex items-center gap-1.5"
                                            >
                                                <span className="material-symbols-outlined text-lg">support_agent</span>
                                                Minta Verifikasi Manual
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
