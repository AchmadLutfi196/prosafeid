import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function DetailProgram() {
    const [openSection, setOpenSection] = useState<number | null>(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const syllabus = [
        { title: 'Kelompok Dasar (Regulasi)', items: ['Kebijakan K3 Nasional', 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', 'Sistem Manajemen K3 (SMK3)', 'Konsep Dasar K3 dan P2K3'] },
        { title: 'Kelompok Inti (Keahlian Teknis)', items: ['K3 Listrik dan Penanggulangan Kebakaran', 'K3 Pesawat Uap dan Bejana Tekan', 'K3 Mekanik (Pesawat Angkat & Angkut)', 'K3 Konstruksi Bangunan', 'Kesehatan Kerja dan Lingkungan Kerja', 'K3 Bahan Kimia Berbahaya'] },
        { title: 'Kelompok Penunjang (Praktek)', items: ['Analisis Kecelakaan Kerja', 'Praktek Kerja Lapangan (PKL)', 'Penyusunan Laporan PKL', 'Seminar Laporan PKL', 'Evaluasi / Post-Test Kemnaker RI'] },
    ];

    const upcomingSchedules = [
        { date: '6 - 18 Juli 2026', location: 'Surabaya & Online', status: 'Hampir Penuh', type: 'Blended Training' },
        { date: '3 - 15 Agustus 2026', location: 'Jakarta & Online', status: 'Tersedia', type: 'Blended Training' },
        { date: '7 - 19 September 2026', location: 'Surabaya & Online', status: 'Tersedia', type: 'Blended Training' },
    ];

    const faqs = [
        { q: 'Apakah sertifikasi Ahli K3 Umum ini resmi?', a: 'Ya, sertifikasi diterbitkan langsung oleh Kementerian Ketenagakerjaan RI (Kemnaker) dengan lisensi PJK3 resmi ProSafe Indonesia.' },
        { q: 'Berapa lama masa berlaku sertifikat & lisensi AK3U?', a: 'Sertifikat dan lisensi (SKP) berlaku selama 3 tahun dan dapat diperpanjang secara resmi melalui ProSafe Indonesia.' },
        { q: 'Apakah program ini bisa diikuti oleh lulusan SMA/SMK?', a: 'Sesuai regulasi Kemnaker RI Permenaker No. 02/MEN/1992, persyaratan pendidikan minimal untuk skema sertifikasi Ahli K3 Umum Kemnaker RI adalah D3 / S1 semua jurusan.' },
    ];

    const relatedPrograms = [
        { title: 'Auditor SMK3 Kemnaker RI', category: 'Kemnaker RI', icon: 'fact_check', link: '/program/auditor-smk3' },
        { title: 'K3 Kebakaran Kelas D/C/B/A', category: 'Kemnaker RI', icon: 'fire_extinguisher', link: '/program/k3-kebakaran' },
    ];

    return (
        <>
            <Head title="Ahli K3 Umum Kemnaker RI │ ProSafe Indonesia">
                <meta name="description" content="Program pelatihan dan sertifikasi Ahli K3 Umum (AK3U) Kemnaker RI. Durasi 12 hari, sertifikat resmi Kementerian Ketenagakerjaan." />
                <meta property="og:title" content="Ahli K3 Umum Kemnaker RI │ ProSafe Indonesia" />
                <meta property="og:description" content="Program pelatihan dan sertifikasi Ahli K3 Umum (AK3U) Kemnaker RI. Durasi 12 hari, sertifikat resmi Kementerian Ketenagakerjaan." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": "Ahli K3 Umum Kemnaker RI",
                        "description": "Program pembinaan dan sertifikasi calon Ahli K3 Umum (AK3U) Kementerian Ketenagakerjaan RI.",
                        "provider": {
                            "@type": "Organization",
                            "name": "ProSafe Indonesia",
                            "sameAs": "https://prosafe.co.id"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Ahli K3 Umum Kemnaker RI",
                        "image": "https://prosafe.co.id/images/logo-prosafe.png",
                        "description": "Program pelatihan dan sertifikasi Ahli K3 Umum resmi Kemnaker RI.",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "245"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://prosafe.co.id/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Kemnaker RI",
                                "item": "https://prosafe.co.id/pelatihan/kemnaker"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Ahli K3 Umum",
                                "item": "https://prosafe.co.id/program/ahli-k3-umum"
                            }
                        ]
                    })}
                </script>
            </Head>
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
                            <button className="btn-prosafe-primary text-sm">
                                Lihat Jadwal <span className="material-symbols-outlined text-lg">calendar_month</span>
                            </button>
                            <button className="btn-prosafe-secondary text-sm">
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

                        {/* Jadwal Terdekat */}
                        <section>
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-safety-orange rounded-full" /> Jadwal Terdekat
                            </h2>
                            <div className="bg-white border border-outline-variant/60 rounded-xl overflow-hidden shadow-sm divide-y divide-outline-variant">
                                {upcomingSchedules.map((schedule, idx) => (
                                    <div key={idx} className="flex flex-wrap items-center justify-between p-4 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-safety-orange/10 flex items-center justify-center text-safety-orange shrink-0">
                                                <span className="material-symbols-outlined">calendar_month</span>
                                            </div>
                                            <div>
                                                <p className="font-heading font-bold text-deep-navy text-sm">{schedule.date}</p>
                                                <p className="text-xs text-text-secondary">{schedule.location} &bull; {schedule.type}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${schedule.status === 'Hampir Penuh' ? 'bg-alert-red/10 text-alert-red border border-alert-red/20' : 'bg-wa-green/10 text-wa-green border border-wa-green/20'}`}>
                                                {schedule.status}
                                            </span>
                                            <Link href="/pendaftaran" className="btn-prosafe-primary px-4 py-2 text-xs">
                                                Daftar
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section>
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-safety-orange rounded-full" /> FAQ Program
                            </h2>
                            <div className="border border-outline-variant rounded-xl divide-y divide-outline-variant overflow-hidden">
                                {faqs.map((faq, idx) => (
                                    <div key={idx}>
                                        <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="flex justify-between items-center w-full font-heading font-semibold text-deep-navy p-4 hover:bg-surface-container-low transition-colors text-left text-sm md:text-base">
                                            {faq.q}
                                            <span className={`material-symbols-outlined transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                                        </button>
                                        {openFaq === idx && (
                                            <div className="p-4 bg-surface-gray border-t border-outline-variant">
                                                <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Program Terkait */}
                        <section className="pb-8">
                            <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-safety-orange rounded-full" /> Program Terkait
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {relatedPrograms.map((rp, idx) => (
                                    <Link key={idx} href={rp.link} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-outline-variant/60 hover:border-safety-orange/40 hover:shadow-md transition-all group">
                                        <div className="w-12 h-12 rounded-xl bg-surface-gray flex items-center justify-center shrink-0 group-hover:bg-safety-orange/10 group-hover:text-safety-orange transition-colors">
                                            <span className="material-symbols-outlined text-deep-navy group-hover:text-safety-orange text-2xl">{rp.icon}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-safety-orange uppercase tracking-wider">{rp.category}</span>
                                            <h4 className="font-heading font-bold text-deep-navy group-hover:text-safety-orange transition-colors text-sm md:text-base leading-tight mt-0.5">{rp.title}</h4>
                                        </div>
                                    </Link>
                                ))}
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
                             <Link href="/pendaftaran" className="btn-prosafe-primary w-full justify-center py-4 text-base">
                                Daftar Sekarang <span className="material-symbols-outlined">arrow_forward</span>
                             </Link>
                             <a href="https://wa.me/6281222998847" className="btn-prosafe-secondary block w-full text-center text-sm mt-3">
                                <span className="material-symbols-outlined text-sm">chat</span> Konsultasi via WhatsApp
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
