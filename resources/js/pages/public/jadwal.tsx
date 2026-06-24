import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import { trainingSchedule } from '@/data/mockData';

export default function JadwalTraining() {
    const [search, setSearch] = useState('');
    const [kategori, setKategori] = useState('');
    const [kota, setKota] = useState('');

    const filtered = trainingSchedule.filter(s => {
        const matchSearch = s.program.toLowerCase().includes(search.toLowerCase());
        const matchKat = !kategori || s.category.toLowerCase() === kategori;
        const matchKota = !kota || s.location.toLowerCase().includes(kota);
        return matchSearch && matchKat && matchKota;
    });

    return (
        <>
            <Head title="Jadwal Pelatihan K3 2026 │ ProSafe Indonesia">
                <meta name="description" content="Jadwal lengkap pelatihan K3 dan sertifikasi BNSP terbaru tahun 2026. Filter berdasarkan kategori, kota, dan lokasi. Hubungi kami untuk jadwal kustom." />
                <meta property="og:title" content="Jadwal Pelatihan K3 2026 │ ProSafe Indonesia" />
                <meta property="og:description" content="Jadwal lengkap pelatihan K3 dan sertifikasi BNSP terbaru tahun 2026. Filter berdasarkan kategori, kota, dan lokasi. Hubungi kami untuk jadwal kustom." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": trainingSchedule.map(s => ({
                            "@type": "Event",
                            "name": s.program,
                            "startDate": "2026-07-06T08:00:00+07:00",
                            "location": {
                                "@type": "Place",
                                "name": s.location,
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": s.location.includes("Online") ? "Online" : s.location,
                                    "addressCountry": "ID"
                                }
                            },
                            "offers": {
                                "@type": "Offer",
                                "url": "https://prosafe.co.id/pendaftaran",
                                "price": "0",
                                "priceCurrency": "IDR",
                                "availability": "https://schema.org/InStock"
                            },
                            "performer": {
                                "@type": "Organization",
                                "name": "ProSafe Indonesia"
                            }
                        }))
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="bg-deep-navy relative overflow-hidden py-10 md:py-14">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div className="max-w-2xl text-center md:text-left">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                            <span className="material-symbols-outlined text-xs">calendar_month</span> Agenda & Jadwal
                        </span>
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Jadwal Pelatihan & Sertifikasi K3 2026
                        </h1>
                        <p className="text-base md:text-lg text-primary-fixed-dim max-w-xl">
                            Dapatkan kompetensi keselamatan kerja berstandar nasional dan internasional. Amankan kuota pelatihan Anda sekarang juga.
                        </p>
                    </div>
                    <a 
                        href="https://wa.me/6281222998847?text=Halo%20ProSafe%20Indonesia,%20saya%20ingin%20meminta%20brosur%20dan%20jadwal%20lengkap%20pelatihan%20K3%20terbaru." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 bg-white text-deep-navy font-heading font-semibold px-6 py-4 rounded-2xl border border-outline-variant hover:border-safety-orange transition-all duration-300 shadow-sm shrink-0 w-full md:w-auto"
                    >
                        <div className="w-10 h-10 rounded-xl bg-safety-orange/10 flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Download Kalender</p>
                            <p className="text-sm font-bold text-deep-navy">Brosur & Jadwal PDF</p>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary group-hover:text-safety-orange transition-colors ml-auto md:ml-4">download</span>
                    </a>
                </div>
            </section>

            <div className="bg-surface-gray pt-8 pb-12 md:pt-10 md:pb-16">
                <div className="max-w-[1280px] mx-auto px-6">
                    
                    {/* Interactive Filters Bar */}
                    <section className="bg-white rounded-2xl border border-outline-variant/60 p-6 mb-8 shadow-sm flex flex-col lg:flex-row gap-4 items-end">
                        <div className="w-full lg:w-1/3">
                            <label className="text-xs font-bold text-deep-navy uppercase tracking-wider mb-2 block">Cari Program</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary select-none text-lg">search</span>
                                <input 
                                    type="text" 
                                    name="search" 
                                    autoComplete="off" 
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-outline-variant text-sm text-deep-navy placeholder:text-text-secondary/60 focus:ring-2 focus:ring-safety-orange/30 focus:border-safety-orange outline-none transition-all" 
                                    placeholder="Contoh: Ahli K3 Umum..." 
                                    value={search} 
                                    onChange={e => setSearch(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <label className="text-xs font-bold text-deep-navy uppercase tracking-wider mb-2 block">Kategori</label>
                            <select 
                                className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm text-deep-navy focus:ring-2 focus:ring-safety-orange/30 focus:border-safety-orange outline-none transition-all bg-white"
                                value={kategori} 
                                onChange={e => setKategori(e.target.value)}
                            >
                                <option value="">Semua Kategori</option>
                                <option value="kemnaker">KEMNAKER RI</option>
                                <option value="bnsp">BNSP RI</option>
                                <option value="migas">MIGAS</option>
                            </select>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <label className="text-xs font-bold text-deep-navy uppercase tracking-wider mb-2 block">Lokasi</label>
                            <select 
                                className="w-full px-4 py-3 rounded-xl border border-outline-variant text-sm text-deep-navy focus:ring-2 focus:ring-safety-orange/30 focus:border-safety-orange outline-none transition-all bg-white"
                                value={kota} 
                                onChange={e => setKota(e.target.value)}
                            >
                                <option value="">Semua Lokasi</option>
                                <option value="jakarta">Jakarta</option>
                                <option value="surabaya">Surabaya</option>
                                <option value="balikpapan">Balikpapan</option>
                                <option value="online">Online / Blended</option>
                            </select>
                        </div>
                        <button 
                            onClick={() => { setSearch(''); setKategori(''); setKota(''); }} 
                            className="w-full lg:w-auto px-6 h-[46px] bg-surface-gray border border-outline-variant text-deep-navy text-sm font-bold rounded-xl hover:bg-outline-variant/30 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer select-none transition-all duration-200"
                        >
                            <span className="material-symbols-outlined text-lg">filter_alt_off</span> Reset
                        </button>
                    </section>

                    {/* Schedules Results Grid/List */}
                    <div className="bg-white border border-outline-variant/60 rounded-2xl overflow-hidden shadow-sm">
                        
                        {/* Desktop Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-deep-navy text-white font-heading">
                            <div className="col-span-5 text-xs font-bold uppercase tracking-wider">Nama Program Sertifikasi</div>
                            <div className="col-span-3 text-xs font-bold uppercase tracking-wider">Waktu Pelaksanaan</div>
                            <div className="col-span-2 text-xs font-bold uppercase tracking-wider">Metode / Lokasi</div>
                            <div className="col-span-1.5 text-xs font-bold uppercase tracking-wider">Status</div>
                            <div className="col-span-0.5 text-xs font-bold uppercase tracking-wider text-right"></div>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="p-16 text-center text-on-surface-variant bg-white">
                                <div className="w-16 h-16 bg-surface-gray rounded-full flex items-center justify-center mx-auto mb-4 border border-outline-variant/40">
                                    <span className="material-symbols-outlined text-3xl text-text-secondary">search_off</span>
                                </div>
                                <h3 className="font-heading text-lg font-bold text-deep-navy mb-1">Tidak Ada Jadwal Ditemukan</h3>
                                <p className="text-sm text-text-secondary max-w-sm mx-auto">
                                    Kami tidak menemukan jadwal pelatihan yang cocok dengan filter pencarian Anda. Silakan coba filter lainnya.
                                </p>
                            </div>
                        ) : (
                            <div className="divide-y divide-outline-variant/50">
                                {filtered.map(s => (
                                    <div 
                                        key={s.id} 
                                        className="hover:bg-surface-gray/30 transition-colors duration-200 p-5 md:px-6 md:py-5"
                                    >
                                        {/* Desktop View */}
                                        <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-5">
                                                <h3 className="font-heading font-bold text-base text-deep-navy hover:text-safety-orange transition-colors">
                                                    {s.program}
                                                </h3>
                                                <div className="flex gap-2 mt-2">
                                                    <span className="bg-safety-orange/10 text-safety-orange text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wide border border-safety-orange/10">
                                                        {s.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-span-3 flex items-center gap-2.5 text-sm text-on-surface-variant font-medium">
                                                <span className="material-symbols-outlined text-text-secondary text-lg">calendar_month</span>
                                                <span>{s.date}</span>
                                            </div>
                                            <div className="col-span-2 flex items-center gap-2.5 text-sm text-on-surface-variant font-medium">
                                                <span className="material-symbols-outlined text-text-secondary text-lg">{s.locationIcon || 'location_on'}</span>
                                                <span>{s.location}</span>
                                            </div>
                                            <div className="col-span-1.5">
                                                {s.status === 'almost-full' ? (
                                                    <span className="inline-flex items-center gap-1.5 bg-alert-red/10 text-alert-red text-[11px] font-bold px-3 py-1 rounded-full border border-alert-red/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-alert-red animate-pulse" /> Hampir Penuh
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 bg-cta/10 text-cta text-[11px] font-bold px-3 py-1 rounded-full border border-cta/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-cta" /> Tersedia
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-0.5 text-right">
                                                <Link 
                                                    href="/pendaftaran" 
                                                    className="btn-prosafe-primary px-5 py-2.5 text-xs font-bold inline-flex items-center justify-center whitespace-nowrap"
                                                >
                                                    Daftar
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Mobile View */}
                                        <div className="block md:hidden space-y-4">
                                            <div className="flex justify-between items-start">
                                                <span className="bg-safety-orange/10 text-safety-orange text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wide border border-safety-orange/10">
                                                    {s.category}
                                                </span>
                                                {s.status === 'almost-full' ? (
                                                    <span className="inline-flex items-center gap-1 bg-alert-red/10 text-alert-red text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-alert-red/20">
                                                        <span className="w-1 h-1 rounded-full bg-alert-red animate-pulse" /> Hampir Penuh
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 bg-cta/10 text-cta text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-cta/20">
                                                        <span className="w-1 h-1 rounded-full bg-cta" /> Tersedia
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-heading font-bold text-base text-deep-navy">
                                                    {s.program}
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-medium text-text-secondary">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                                                    <span>{s.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-sm">{s.locationIcon || 'location_on'}</span>
                                                    <span>{s.location}</span>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link 
                                                    href="/pendaftaran" 
                                                    className="btn-prosafe-primary w-full py-3 text-xs font-bold justify-center"
                                                >
                                                    Daftar Pelatihan
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* In-House Solutions Banner */}
                    <section className="bg-white border border-outline-variant/60 rounded-3xl p-8 md:p-10 mt-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                            <div className="w-14 h-14 rounded-2xl bg-safety-orange/10 flex items-center justify-center shrink-0 text-safety-orange">
                                <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                            </div>
                            <div>
                                <h3 className="font-heading text-lg md:text-xl font-bold text-deep-navy mb-1.5">Butuh Solusi Khusus Perusahaan (In-House)?</h3>
                                <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                                    Jadwal publik di atas kurang cocok dengan operasional kantor Anda? Kami melayani program in-house training dengan tanggal, materi, dan lokasi yang fleksibel sesuai kebutuhan bisnis Anda.
                                </p>
                            </div>
                        </div>
                        <Link 
                            href="/corporate" 
                            className="btn-prosafe-secondary whitespace-nowrap active:scale-[0.98] w-full lg:w-auto justify-center"
                        >
                            <span className="material-symbols-outlined">chat</span> Hubungi AE Kami
                        </Link>
                    </section>

                </div>
            </div>
        </>
    );
}
