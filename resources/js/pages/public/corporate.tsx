import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { clientLogos } from '@/data/mockData';
import BrandLogo from '@/components/public/BrandLogos';

export default function Corporate() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState('construction');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const industries = [
        {
            id: 'construction',
            name: 'Konstruksi',
            icon: 'engineering',
            headline: 'Kepatuhan Tinggi untuk Proyek Bebas Kecelakaan (Zero Accident)',
            challenge: 'Bekerja di ketinggian, pemasangan perancah (scaffolding), dan pengoperasian alat berat memiliki risiko kecelakaan kerja tertinggi.',
            solutions: [
                'Sertifikasi Ahli K3 Konstruksi (Muda / Madya) Kemnaker',
                'Pelatihan Khusus Scaffolder & Bekerja di Ketinggian (TKPK / TKBT)',
                'Penyusunan Dokumen Safety Plan & Job Safety Analysis (JSA) Proyek'
            ],
            metric: '150+ Proyek BUMN & Swasta Terlatih'
        },
        {
            id: 'mining',
            name: 'Pertambangan & Energi',
            icon: 'electric_bolt',
            headline: 'Standardisasi Ketat untuk Lingkungan Kerja Ekstrem',
            challenge: 'Area kerja terpencil, gas beracun, ruang terbatas, dan pengoperasian armada berat membutuhkan pengawasan keselamatan 24/7.',
            solutions: [
                'Pelatihan Pengawas Operasional Pertama & Madya (POP / POM)',
                'Sertifikasi Confined Space & Gas Detector BNSP / Kemnaker',
                'Defensive Driving Training (DDT) untuk Operator Alat & Heavy Equipment'
            ],
            metric: '40+ Perusahaan Tambang Terakreditasi'
        },
        {
            id: 'manufacturing',
            name: 'Manufaktur & Pabrik',
            icon: 'precision_manufacturing',
            headline: 'Optimasi Produktivitas Melalui Keselamatan Operasional',
            challenge: 'Interaksi mesin-manusia, bahan kimia berbahaya, kebisingan tinggi, dan risiko kebakaran memerlukan sistem proteksi yang andal.',
            solutions: [
                'Sertifikasi Operator Forklift, Crane, Boiler, dan K3 Listrik',
                'K3 Penanggulangan Kebakaran Resmi (Damkar Kelas D / C / B / A)',
                'Pendampingan Sertifikasi Sistem Manajemen K3 (SMK3 PP 50/2012)'
            ],
            metric: '85+ Pabrik & Area Industri Tersertifikasi'
        },
        {
            id: 'oilgas',
            name: 'Minyak & Gas Bumi',
            icon: 'oil_barrel',
            headline: 'Kualifikasi Global untuk Industri High-Risk',
            challenge: 'Kepatuhan standar internasional dan sertifikasi CSMS (Contractor Safety Management System) adalah syarat mutlak kerja sama.',
            solutions: [
                'Sertifikasi Ahli K3 Kimia & Petugas K3 Kimia Resmi',
                'Penyusunan Dokumen CSMS (Contractor Safety Management System)',
                'Sertifikasi Auditor SMK3 & Sistem Manajemen Integrasi (ISO 45001)'
            ],
            metric: '100% Lolos CSMS Audit Client Kami'
        }
    ];

    const faqs = [
        {
            q: 'Apakah silabus in-house training bisa dikustomisasi sesuai SOP perusahaan kami?',
            a: 'Ya, tentu. Sebelum pelaksanaan training, tim instruktur kami akan melakukan pre-assessment atau diskusi konsultatif dengan tim HSE/HRD Anda untuk menyesuaikan materi, simulasi praktis, dan studi kasus dengan SOP internal dan karakteristik risiko spesifik di perusahaan Anda.'
        },
        {
            q: 'Berapa jumlah minimal peserta untuk menyelenggarakan In-House Training?',
            a: 'Umumnya minimal peserta adalah 10 hingga 15 orang per batch untuk efisiensi biaya. Namun, kami juga melayani jumlah peserta di bawah ketentuan tersebut dengan penyesuaian penawaran khusus.'
        },
        {
            q: 'Di mana lokasi pelaksanaan In-House Training?',
            a: 'Lokasi ditentukan sepenuhnya oleh perusahaan klien (On-Site). Bisa diselenggarakan di ruang meeting kantor, pabrik/site operasional perusahaan, kelas offline di kantor cabang ProSafe, atau hotel pilihan Anda.'
        },
        {
            q: 'Apakah sertifikat yang diterbitkan resmi dan diakui oleh Kementerian Ketenagakerjaan?',
            a: 'Benar. ProSafe Indonesia adalah PJK3 resmi yang terakreditasi oleh Kemnaker RI dan Lembaga Sertifikasi Profesi (LSP) berlisensi BNSP. Sertifikat keahlian dan lisensi kewenangan (lisensi K3 / SIO) diterbitkan langsung oleh instansi berwenang.'
        }
    ];

    return (
        <>
            <Head title="Corporate Services & In-House Training K3 │ ProSafe Indonesia">
                <meta name="description" content="Layanan pelatihan K3 in-house, konsultasi K3, assessment risiko, dan sertifikasi ISO untuk perusahaan. Jadwal fleksibel, kurikulum disesuaikan dengan kebutuhan industri Anda." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-14 md:py-20">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs">domain</span> Solusi Perusahaan
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
                        Solusi Keselamatan Kerja & K3 untuk Perusahaan Anda
                    </h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl leading-relaxed mb-8">
                        Meningkatkan kepatuhan K3, mengurangi angka kecelakaan kerja, dan melatih kompetensi tim Anda melalui In-House Training, Konsultasi, Assessment, dan ISO Consulting.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="#request-form" className="btn-prosafe-primary hover:shadow-lg hover:shadow-safety-orange/20 cursor-pointer">
                            <span className="material-symbols-outlined text-sm">assignment</span> Request Penawaran
                        </a>
                        <a 
                            href="https://wa.me/6281222998847?text=Halo%20ProSafe%20Indonesia%20Corporate%20Services%2C%20saya%20tertarik%20untuk%20mengajukan%20penawaran%20Inhouse%20Training%2FConsulting%20perusahaan..." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-sm transition-all duration-200 cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-wa-green text-sm">chat</span> Hubungi Dedicated Corporate
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-surface-gray pt-10 pb-16">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                    
                    {/* Services Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { icon: 'domain', title: 'In-House Training', desc: 'Pelatihan K3 di lokasi perusahaan dengan jadwal, kurikulum, dan studi kasus yang disesuaikan dengan industri Anda.' },
                            { icon: 'analytics', title: 'Consulting K3 & SMK3', desc: 'Penyusunan dokumen K3, CSMS, pendampingan sertifikasi SMK3 Kemnaker, dan kesiapan audit keselamatan kerja.' },
                            { icon: 'assignment', title: 'Safety Assessment', desc: 'Evaluasi menyeluruh terhadap potensi risiko, kepatuhan K3, dan audit kelayakan fasilitas operasional perusahaan.' },
                            { icon: 'fact_check', title: 'ISO Consulting', desc: 'Pendampingan sertifikasi standardisasi sistem manajemen internasional ISO 9001, ISO 14001, dan ISO 45001.' },
                        ].map(s => (
                            <div key={s.title} className="bg-white p-8 rounded-2xl border border-outline-variant/60 card-hover text-center group shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-safety-orange/10 transition-colors duration-300">
                                        <span className="material-symbols-outlined text-deep-navy text-3xl group-hover:text-safety-orange transition-colors duration-300">
                                            {s.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-deep-navy mb-3 group-hover:text-safety-orange transition-colors duration-300">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-on-surface-variant leading-relaxed text-center">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Keunggulan In-House Training */}
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-safety-orange uppercase tracking-widest block mb-2">Mengapa Memilih Kami</span>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Keunggulan In-House Training</h2>
                            <div className="section-divider mx-auto mt-3" />
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'location_on', title: 'Di Lokasi Anda (On-Site)', desc: 'Instruktur kami datang langsung ke fasilitas perusahaan Anda untuk menyelenggarakan pelatihan praktis secara langsung.' },
                                { icon: 'calendar_month', title: 'Jadwal Fleksibel', desc: 'Waktu pelaksanaan yang fleksibel dan dapat diatur sedemikian rupa agar tidak mengganggu operasional harian bisnis Anda.' },
                                { icon: 'tune', title: 'Kurikulum Kustom', desc: 'Materi, simulasi, dan pembahasan kasus disesuaikan khusus dengan karakteristik risiko industri perusahaan Anda.' },
                            ].map(k => (
                                <div key={k.title} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-outline-variant/60 card-hover shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-safety-orange text-2xl">{k.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-base text-deep-navy mb-2">{k.title}</h4>
                                        <p className="text-sm text-on-surface-variant leading-relaxed">{k.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Interactive Solutions by Industry Section */}
                    <section className="mb-20 bg-white border border-outline-variant/60 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-safety-orange uppercase tracking-widest block mb-2">Solusi Spesifik Sektor</span>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Kustomisasi Berdasarkan Industri</h2>
                            <div className="section-divider mx-auto mt-3" />
                        </div>

                        {/* Tabs Selector */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-outline-variant pb-6">
                            {industries.map(ind => (
                                <button
                                    key={ind.id}
                                    onClick={() => setSelectedIndustry(ind.id)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-sm transition-all duration-300 cursor-pointer ${
                                        selectedIndustry === ind.id 
                                            ? 'bg-deep-navy text-white shadow-md' 
                                            : 'bg-surface-gray text-text-secondary hover:bg-outline-variant/50 hover:text-deep-navy'
                                    }`}
                                >
                                    <span className="material-symbols-outlined text-lg">{ind.icon}</span>
                                    {ind.name}
                                </button>
                            ))}
                        </div>

                        {/* Tabs Content */}
                        <div className="transition-all duration-300">
                            {industries.filter(ind => ind.id === selectedIndustry).map(ind => (
                                <div key={ind.id} className="grid lg:grid-cols-12 gap-8 items-center">
                                    <div className="lg:col-span-7 space-y-5">
                                        <span className="text-xs font-bold text-safety-orange bg-safety-orange/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {ind.name}
                                        </span>
                                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-deep-navy leading-tight">
                                            {ind.headline}
                                        </h3>
                                        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                                            <strong className="text-deep-navy">Tantangan K3:</strong> {ind.challenge}
                                        </p>
                                        <div className="space-y-3">
                                            <p className="text-xs font-bold uppercase text-deep-navy tracking-wider">Rekomendasi Program Utama:</p>
                                            <ul className="space-y-2">
                                                {ind.solutions.map((sol, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-on-surface-variant">
                                                        <span className="material-symbols-outlined text-safety-orange text-sm shrink-0 mt-0.5">check_circle</span>
                                                        <span>{sol}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-5 bg-surface-gray p-8 rounded-2xl border border-outline-variant/40 text-center space-y-4">
                                        <span className="material-symbols-outlined text-deep-navy text-4xl block">shield</span>
                                        <div className="font-heading text-2xl font-black text-safety-orange">{ind.metric}</div>
                                        <p className="text-xs text-text-secondary leading-relaxed">
                                            Kami menjamin kurikulum aplikatif dengan instruktur praktisi berpengalaman di lapangan.
                                        </p>
                                        <a 
                                            href={`https://wa.me/6281222998847?text=Halo%20ProSafe%20Indonesia%20Corporate%20Services%2C%20saya%20ingin%20mengajukan%20pelatihan%20untuk%20sektor%20${ind.name}...`}
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn-prosafe-primary w-full justify-center py-3 text-sm cursor-pointer"
                                        >
                                            <span className="material-symbols-outlined text-sm">chat</span> Konsultasi Sektor {ind.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Stats Metric Counter Section */}
                    <section className="mb-20 bg-white rounded-3xl p-8 border border-outline-variant/60 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-safety-orange/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/60">
                            {[
                                { number: '500+', label: 'Perusahaan Korporat & BUMN', desc: 'Telah memercayakan in-house training kepada ProSafe.' },
                                { number: '15K+', label: 'Alumni Terlatih', desc: 'Pekerja dan pengawas tersertifikasi secara nasional.' },
                                { number: '98.4%', label: 'Tingkat Kelulusan Ujian', desc: 'Didampingi instruktur senior hingga kompeten.' },
                                { number: '10+', label: 'Bidang Keahlian Resmi', desc: 'Kemnaker RI, BNSP, dan Akreditasi ISO Internasional.' },
                            ].map((stat, i) => (
                                <div key={stat.label} className={`pt-6 lg:pt-0 ${i > 0 ? 'lg:pl-6' : ''}`}>
                                    <div className="font-heading text-3xl sm:text-4xl font-extrabold text-safety-orange mb-2">
                                        {stat.number}
                                    </div>
                                    <h4 className="font-heading font-bold text-sm text-deep-navy mb-1">{stat.label}</h4>
                                    <p className="text-xs text-text-secondary leading-relaxed">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Proses Kerja Sama - Infographic step-by-step */}
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-safety-orange uppercase tracking-widest block mb-2">Sistematis & Efisien</span>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Alur Kerja Sama In-House</h2>
                            <div className="section-divider mx-auto mt-3" />
                        </div>

                        <div className="relative">
                            {/* Connecting Line on Desktop */}
                            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-safety-orange/40 via-deep-navy/20 to-safety-orange/40 z-0 pointer-events-none" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { step: '01', icon: 'forum', title: 'Konsultasi & Analisis', desc: 'Diskusi kebutuhan kompetensi dan analisis risiko industri perusahaan Anda.' },
                                    { step: '02', icon: 'rate_review', title: 'Proposal & Penawaran', desc: 'Penyusunan penawaran harga, silabus kustom, dan jadwal usulan.' },
                                    { step: '03', icon: 'school', title: 'Pelaksanaan Training', desc: 'Penyelenggaraan pelatihan oleh instruktur ahli bersertifikat resmi.' },
                                    { step: '04', icon: 'workspace_premium', title: 'Evaluasi & Sertifikasi', desc: 'Pelaporan hasil pelatihan serta penerbitan sertifikat kompetensi resmi.' },
                                ].map(p => (
                                    <div key={p.step} className="bg-white p-6 rounded-2xl border border-outline-variant/60 text-center shadow-sm hover:shadow-md hover:border-safety-orange/30 hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-full bg-deep-navy text-white font-heading text-lg font-bold flex items-center justify-center mx-auto mb-3 group-hover:bg-safety-orange transition-colors duration-300">
                                            {p.step}
                                        </div>
                                        <span className="material-symbols-outlined text-text-secondary text-2xl mb-2 block group-hover:text-safety-orange transition-colors duration-300 select-none">
                                            {p.icon}
                                        </span>
                                        <h4 className="font-heading font-bold text-base text-deep-navy mb-2">{p.title}</h4>
                                        <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Interactive Collapsible FAQ Section */}
                    <section className="mb-20 max-w-4xl mx-auto bg-white border border-outline-variant/60 rounded-3xl p-6 sm:p-10 shadow-sm">
                        <div className="text-center mb-8">
                            <span className="text-xs font-bold text-safety-orange uppercase tracking-widest block mb-2">FAQ Korporasi</span>
                            <h2 className="font-heading text-2xl font-bold text-deep-navy">Pertanyaan yang Sering Diajukan</h2>
                            <div className="section-divider mx-auto mt-2" />
                        </div>

                        <div className="divide-y divide-outline-variant">
                            {faqs.map((faq, i) => (
                                <div key={i} className="py-2">
                                    <button 
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex justify-between items-center py-5 text-left font-heading font-bold text-deep-navy hover:text-safety-orange transition-colors duration-200 group cursor-pointer"
                                    >
                                        <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                                        <span className={`material-symbols-outlined text-outline group-hover:text-safety-orange transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-safety-orange' : ''}`}>
                                            expand_more
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === i ? 'max-h-[300px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Client Logos Grid */}
                    <section className="mb-20 text-center">
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-8">Dipercaya oleh Perusahaan Terkemuka</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {clientLogos.map(l => (
                                <div key={l.name} className="logo-grayscale w-36 h-16 bg-white border border-outline-variant/60 rounded-xl flex items-center justify-center p-3 shadow-sm" title={l.name}>
                                    <BrandLogo name={l.name} className="max-h-full max-w-full" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Form Request In-House Section */}
                    <section id="request-form" className="max-w-4xl mx-auto bg-deep-navy rounded-3xl p-6 sm:p-8 md:p-14 text-white relative overflow-hidden shadow-xl scroll-mt-24">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                        <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-safety-orange/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Request Penawaran In-House</h2>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed">
                                Silakan lengkapi formulir di bawah ini. Tim Corporate Solutions kami akan segera menghubungi Anda dalam waktu maksimal 1x24 jam kerja dengan proposal penawaran resmi.
                            </p>
                        </div>

                        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-8 md:p-10">
                            {formSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 rounded-full bg-safety-orange/20 flex items-center justify-center mx-auto mb-4 border border-safety-orange/30">
                                        <span className="material-symbols-outlined text-safety-orange text-3xl">check_circle</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-2">Permintaan Berhasil Dikirim</h3>
                                    <p className="text-sm text-primary-fixed-dim max-w-md mx-auto mb-6">
                                        Terima kasih. Proposal penawaran akan disiapkan oleh Account Executive kami dan dikirimkan ke email perusahaan Anda.
                                    </p>
                                    <button 
                                        onClick={() => setFormSubmitted(false)}
                                        className="btn-prosafe-primary px-6 py-2.5 text-sm cursor-pointer"
                                    >
                                        Kirim Form Lainnya
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Nama Perusahaan</label>
                                            <input required type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: PT. Maju Bersama" />
                                        </div>
                                        <div>
                                            <label htmlFor="pic" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Nama PIC (Perwakilan)</label>
                                            <input required type="text" id="pic" name="pic" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Nama Lengkap Anda" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">No. WhatsApp PIC</label>
                                            <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: 081234567890" />
                                        </div>
                                        <div>
                                            <label htmlFor="program" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Program Pelatihan K3 / Layanan</label>
                                            <input required type="text" id="program" name="program" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: AK3 Umum / Damkar Kelas D / K3 Migas" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="participants" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Perkiraan Jumlah Peserta</label>
                                            <input required type="text" id="participants" name="participants" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: 15 Orang / 1 Batch" />
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Kota / Lokasi Pelaksanaan</label>
                                            <input required type="text" id="city" name="city" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Contoh: Surabaya (Onsite) / Jakarta" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">Detail / Spesifikasi Kebutuhan (Opsional)</label>
                                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-safety-orange/50 focus:border-safety-orange outline-none" placeholder="Tuliskan jika ada materi kustom khusus, sertifikasi Kemenaker/BNSP, preferensi jadwal, dll..." />
                                    </div>

                                    <button type="submit" className="btn-prosafe-primary w-full py-4 text-base shadow-lg shadow-safety-orange/10 justify-center cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">send</span> Kirim Permintaan Penawaran Resmi
                                    </button>
                                </form>
                            )}
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}
