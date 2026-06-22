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
            <Head title="Jadwal Pelatihan K3 2026" />

            {/* Hero */}
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Jadwal Pelatihan & Sertifikasi K3 2026</h1>
                        <p className="text-lg text-primary-fixed-dim opacity-90">Pilih jadwal yang sesuai untuk kebutuhan kompetensi tim Anda. Semua pelatihan terakreditasi resmi.</p>
                    </div>
                    <a href="#" className="group flex items-center gap-3 bg-white text-deep-navy font-heading font-semibold px-6 py-4 rounded-xl border border-outline-variant hover:border-deep-navy transition-all shadow-sm shrink-0">
                        <span className="material-symbols-outlined icon-fill text-safety-orange">picture_as_pdf</span>
                        <span>Download Jadwal PDF<br /><span className="text-sm font-normal text-text-secondary group-hover:text-deep-navy">Juli 2026 (2.4MB)</span></span>
                        <span className="material-symbols-outlined text-text-secondary group-hover:text-safety-orange transition-colors">download</span>
                    </a>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-6 pb-20">
                {/* Filters */}
                <section className="bg-surface-gray rounded-xl border border-outline-variant p-6 my-8 flex flex-col lg:flex-row gap-4 items-end">
                    <div className="w-full lg:w-1/3">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Cari Program</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                            <input className="w-full pl-10 pr-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none" placeholder="Contoh: Ahli K3 Umum..." value={search} onChange={e => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Kategori</label>
                        <select className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm focus:border-deep-navy outline-none" value={kategori} onChange={e => setKategori(e.target.value)}>
                            <option value="">Semua Kategori</option>
                            <option value="kemnaker">KEMNAKER</option>
                            <option value="bnsp">BNSP</option>
                            <option value="migas">MIGAS</option>
                        </select>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5 block">Lokasi</label>
                        <select className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm focus:border-deep-navy outline-none" value={kota} onChange={e => setKota(e.target.value)}>
                            <option value="">Semua Lokasi</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="surabaya">Surabaya</option>
                            <option value="balikpapan">Balikpapan</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                    <button className="w-full lg:w-auto px-6 py-2.5 bg-surface-container-high border border-outline-variant text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">filter_list</span> Reset
                    </button>
                </section>

                {/* Table */}
                <section className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container border-b border-outline-variant">
                        <div className="col-span-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Nama Program</div>
                        <div className="col-span-3 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Tanggal</div>
                        <div className="col-span-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Lokasi</div>
                        <div className="col-span-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</div>
                        <div className="col-span-1 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Aksi</div>
                    </div>
                    {filtered.length === 0 && (
                        <div className="p-12 text-center text-on-surface-variant">
                            <span className="material-symbols-outlined text-4xl text-outline mb-2 block">search_off</span>
                            Tidak ada jadwal yang cocok dengan filter Anda.
                        </div>
                    )}
                    {filtered.map(s => (
                        <div key={s.id} className="group border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center relative">
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${s.status === 'almost-full' ? 'bg-alert-red' : 'bg-surface-tint'} md:rounded-none`} />
                                <div className="col-span-1 md:col-span-4 pl-3 md:pl-0">
                                    <span className="font-heading font-semibold text-deep-navy">{s.program}</span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold text-text-secondary tracking-wider">{s.category}</span>
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-3 flex items-center gap-2 pl-3 md:pl-0">
                                    <span className="material-symbols-outlined text-outline">calendar_month</span>
                                    <span className="text-sm">{s.date}</span>
                                </div>
                                <div className="col-span-1 md:col-span-2 flex items-center gap-2 pl-3 md:pl-0">
                                    <span className="material-symbols-outlined text-outline">{s.locationIcon}</span>
                                    <span className="text-sm">{s.location}</span>
                                </div>
                                <div className="col-span-1 md:col-span-2 pl-3 md:pl-0">
                                    {s.status === 'almost-full' ? (
                                        <span className="inline-flex items-center gap-1.5 bg-alert-red text-white text-xs font-bold px-3 py-1 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white" /> Hampir Penuh
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold px-3 py-1 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-deep-navy" /> Tersedia
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-1 md:col-span-1 flex justify-end pl-3 md:pl-0 mt-2 md:mt-0">
                                    <button className="w-full md:w-auto bg-safety-orange text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-safety-orange/90 transition-colors">Daftar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* CTA */}
                <section className="bg-white border border-outline-variant rounded-xl p-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-surface-tint flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined icon-fill text-white">forum</span>
                        </div>
                        <div>
                            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">Butuh Inhouse Training?</h3>
                            <p className="text-sm text-on-surface-variant max-w-xl">Jadwal publik tidak sesuai? Kami menyediakan solusi pelatihan khusus (Inhouse) disesuaikan waktu dan kebutuhan perusahaan Anda.</p>
                        </div>
                    </div>
                    <Link href="/corporate" className="flex items-center gap-2 bg-deep-navy text-white font-heading font-semibold px-8 py-3 rounded-lg hover:bg-deep-navy/90 transition-colors whitespace-nowrap">
                        <span className="material-symbols-outlined">chat</span> Hubungi Tim Kami
                    </Link>
                </section>
            </div>
        </>
    );
}
