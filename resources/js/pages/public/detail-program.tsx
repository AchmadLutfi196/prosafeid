import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function DetailProgram() {
    const [openSection, setOpenSection] = useState<number | null>(0);

    const syllabus = [
        { title: 'Kelompok Dasar (Regulasi)', items: ['Kebijakan K3 Nasional', 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', 'Sistem Manajemen K3 (SMK3)', 'Konsep Dasar K3 dan P2K3'] },
        { title: 'Kelompok Inti (Keahlian Teknis)', items: ['K3 Listrik dan Penanggulangan Kebakaran', 'K3 Pesawat Uap dan Bejana Tekan', 'K3 Mekanik (Pesawat Angkat & Angkut)', 'K3 Konstruksi Bangunan', 'Kesehatan Kerja dan Lingkungan Kerja', 'K3 Bahan Kimia Berbahaya'] },
        { title: 'Kelompok Penunjang (Praktek)', items: ['Analisis Kecelakaan Kerja', 'Praktek Kerja Lapangan (PKL)', 'Penyusunan Laporan PKL', 'Seminar Laporan PKL', 'Evaluasi / Post-Test Kemnaker RI'] },
    ];

    return (
        <>
            <Head title="Ahli K3 Umum Kemnaker RI - Detail Program" />
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-text-secondary py-4 overflow-x-auto whitespace-nowrap">
                    <Link href="/" className="hover:text-deep-navy">Home</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link href="/pelatihan/kemnaker" className="hover:text-deep-navy">Kemnaker RI</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-deep-navy font-semibold">Ahli K3 Umum</span>
                </div>

                {/* Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low p-8 md:p-14 rounded-2xl border border-outline-variant relative overflow-hidden mb-12">
                    <div className="lg:col-span-6 z-10">
                        <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold mb-4 border border-primary-fixed-dim">
                            <span className="material-symbols-outlined icon-fill text-sm">workspace_premium</span> Sertifikasi Kemnaker RI
                        </div>
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-4">Pelatihan & Sertifikasi Ahli K3 Umum</h1>
                        <p className="text-lg text-on-surface-variant mb-6 max-w-xl">Tingkatkan kompetensi dan legalitas perusahaan Anda dengan sertifikasi AK3U resmi dari Kementerian Ketenagakerjaan RI.</p>
                        <div className="flex flex-wrap gap-3">
                            <button className="bg-safety-orange text-white font-heading font-semibold px-6 py-3 rounded-lg text-sm hover:bg-safety-orange/90 transition-all shadow-md flex items-center gap-2">
                                Lihat Jadwal <span className="material-symbols-outlined text-lg">calendar_month</span>
                            </button>
                            <button className="border-2 border-deep-navy text-deep-navy font-heading font-semibold px-6 py-3 rounded-lg text-sm hover:bg-surface-container transition-colors flex items-center gap-2">
                                Download Silabus <span className="material-symbols-outlined text-lg">download</span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-6 z-10">
                        <img className="w-full h-[350px] object-cover rounded-xl border-4 border-white shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMMy4zd_h2un2qwm9jz4YTJTASi7mJGlgTkD8Sw2Yp2y9dQnDNdRUX9C_SO1shj136hG8wMybMlmfmAtNslHa75LRLfHn4BLsbfCyAC3d7FupTw_JMyC1GmAAglkJmuQyxjm0FV84MGNvmCOxNO_3KcIW0C80DVyn2D8vW1H1gAR_TzcCoS-4aekpjRtzUwdQdasmCFAbX-7ISaOr-ZMctWArVI4TK7xh2l43v0t7LlHl0NqGbJsbdX8RMEw4AQzLuIh13WXi3P4ll" alt="Training" />
                    </div>
                    <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined icon-fill" style={{ fontSize: '400px', color: '#001F3F' }}>security</span>
                    </div>
                </div>

                {/* Content + Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Deskripsi */}
                        <section>
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-safety-orange rounded-full" /> Deskripsi Program
                            </h2>
                            <div className="text-on-surface-variant space-y-3 leading-relaxed">
                                <p>Ahli Keselamatan dan Kesehatan Kerja Umum (AK3U) merupakan tenaga teknis berkeahlian khusus yang ditunjuk oleh Menteri Ketenagakerjaan RI untuk mengawasi langsung ditaatinya peraturan perundang-undangan K3 di tempat kerja.</p>
                                <p>Berdasarkan <strong>UU No. 1 Tahun 1970</strong> dan <strong>Permenaker No. 02/MEN/1992</strong>, setiap perusahaan yang mempekerjakan 100 orang atau lebih, atau memiliki risiko bahaya tinggi, <strong>diwajibkan</strong> memiliki minimal satu orang AK3U.</p>
                            </div>
                        </section>

                        {/* Manfaat & Target */}
                        <section>
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-safety-orange rounded-full" /> Manfaat & Target Peserta
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-surface-gray p-6 rounded-xl border border-outline-variant">
                                    <h3 className="font-heading font-semibold text-deep-navy mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-safety-orange">task_alt</span> Manfaat
                                    </h3>
                                    <ul className="space-y-2.5 text-sm text-on-surface-variant">
                                        {['Memahami regulasi K3 Indonesia', 'Mampu melakukan HIRADC', 'Mampu menyusun dan mengevaluasi SMK3', 'Mendapatkan SK Penunjukan & Lisensi Kemnaker RI'].map(item => (
                                            <li key={item} className="flex items-start gap-2"><span className="material-symbols-outlined text-deep-navy text-lg">check</span> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-surface-gray p-6 rounded-xl border border-outline-variant">
                                    <h3 className="font-heading font-semibold text-deep-navy mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-safety-orange">groups</span> Target Peserta
                                    </h3>
                                    <ul className="space-y-2.5 text-sm text-on-surface-variant">
                                        {['HSE Manager / Supervisor / Officer', 'Anggota P2K3', 'HRD / GA Manager', 'Praktisi teknis (min. D3)'].map(item => (
                                            <li key={item} className="flex items-start gap-2"><span className="material-symbols-outlined text-deep-navy text-lg">person</span> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Silabus Accordion */}
                        <section>
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-safety-orange rounded-full" /> Silabus Pelatihan (12 Hari)
                            </h2>
                            <div className="border border-outline-variant rounded-xl divide-y divide-outline-variant overflow-hidden">
                                {syllabus.map((section, idx) => (
                                    <div key={idx}>
                                        <button onClick={() => setOpenSection(openSection === idx ? null : idx)} className="flex justify-between items-center w-full font-heading font-semibold text-deep-navy p-4 hover:bg-surface-container-low transition-colors text-left">
                                            {section.title}
                                            <span className={`material-symbols-outlined transition-transform ${openSection === idx ? 'rotate-180' : ''}`}>expand_more</span>
                                        </button>
                                        {openSection === idx && (
                                            <div className="p-4 bg-surface-gray border-t border-outline-variant">
                                                <ul className="list-disc list-inside space-y-2 text-sm text-on-surface-variant ml-2">
                                                    {section.items.map(item => <li key={item}>{item}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Landasan Hukum */}
                        <section className="bg-deep-navy text-white p-6 rounded-xl flex items-start gap-4">
                            <span className="material-symbols-outlined icon-fill text-safety-orange text-3xl shrink-0">gavel</span>
                            <div>
                                <h3 className="font-heading font-bold mb-2">Landasan Hukum</h3>
                                <p className="text-sm opacity-90">Sertifikasi ini diselenggarakan resmi berdasarkan UU No. 1/1970 tentang Keselamatan Kerja dan Permenaker No. 02/MEN/1992.</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 bg-white rounded-xl border border-outline-variant shadow-lg p-6">
                            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-5 pb-4 border-b border-outline-variant">Ringkasan Program</h3>
                            <ul className="space-y-4 mb-6">
                                {[
                                    { icon: 'schedule', label: 'Durasi', value: '12 Hari (120 JP)' },
                                    { icon: 'laptop_mac', label: 'Metode', value: 'Blended / Offline / In-House' },
                                    { icon: 'card_membership', label: 'Sertifikat', value: 'Kemnaker RI' },
                                    { icon: 'payments', label: 'Investasi', value: 'Hubungi Admin', highlight: true },
                                ].map(item => (
                                    <li key={item.icon} className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-deep-navy shrink-0">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-text-secondary">{item.label}</span>
                                            <strong className={item.highlight ? 'text-safety-orange' : 'text-deep-navy'}>{item.value}</strong>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-surface-gray p-3 rounded-lg border border-outline-variant mb-5 text-xs text-text-secondary text-center">
                                *Persyaratan: Ijazah min. D3, Pas Foto, Surat Sehat, Surat Utusan Perusahaan.
                            </div>
                            <button className="w-full bg-safety-orange text-white font-heading font-semibold py-4 rounded-lg hover:bg-safety-orange/90 transition-all shadow-md flex items-center justify-center gap-2">
                                Daftar Sekarang <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <a href="https://wa.me/6281234567890" className="block text-center w-full mt-3 text-deep-navy text-sm font-bold hover:underline flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-sm">chat</span> Konsultasi via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
