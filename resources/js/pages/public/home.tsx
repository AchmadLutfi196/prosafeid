import { Link, Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { clientLogos, testimonials, blogPosts, instagramPosts, legalitasBadges } from '@/data/mockData';
import BrandLogo from '@/components/public/BrandLogos';

export default function Home() {
    const statsRef = useRef<HTMLDivElement>(null);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    useEffect(() => {
        // Scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Animated counters
        const countUp = (el: HTMLElement, target: number, suffix: string) => {
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) { current = target; clearInterval(timer); }
                el.textContent = Math.floor(current).toLocaleString() + suffix;
            }, 20);
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('[data-count]').forEach((el) => {
                        const htmlEl = el as HTMLElement;
                        countUp(htmlEl, parseInt(htmlEl.dataset.count || '0'), htmlEl.dataset.suffix || '');
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        if (statsRef.current) statsObserver.observe(statsRef.current);

        return () => { observer.disconnect(); statsObserver.disconnect(); };
    }, []);

    return (
        <>
            <Head title="Pelatihan K3 & Sertifikasi BNSP Terpercaya │ ProSafe Indonesia">
                <meta name="description" content="Pusat pelatihan K3 dan sertifikasi BNSP terpercaya di Surabaya & Seluruh Indonesia. Pelatihan Kemnaker RI, BNSP, K3 Migas, Inhouse Training. Konsultasi gratis!" />
                <meta property="og:title" content="Pelatihan K3 & Sertifikasi BNSP Terpercaya │ ProSafe Indonesia" />
                <meta property="og:description" content="Pusat pelatihan K3 dan sertifikasi kompetensi K3 industri, maritime, offshore, and rescue terbaik untuk kesiapan tim dan kepatuhan perusahaan Anda." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ProSafe Indonesia",
                        "url": "https://prosafe.co.id",
                        "logo": "https://prosafe.co.id/images/logo-prosafe.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+6281222998847",
                            "contactType": "customer service",
                            "areaServed": "ID",
                            "availableLanguage": "Indonesian"
                        },
                        "sameAs": [
                            "https://www.facebook.com/prosafeindonesia",
                            "https://www.instagram.com/prosafe_indonesia"
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Pelatihan K3 & Sertifikasi BNSP",
                        "image": "https://prosafe.co.id/images/logo-prosafe.png",
                        "description": "Pelatihan Keselamatan dan Kesehatan Kerja (K3) resmi Kemnaker RI dan sertifikasi BNSP.",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "582"
                        }
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="pt-8 pb-16 lg:pt-10 lg:pb-24 px-6 max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-gray border border-outline-variant rounded-full">
                            <span className="w-2 h-2 rounded-full bg-safety-orange animate-pulse" />
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pusat Pelatihan K3 & Rescue</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-deep-navy leading-tight">
                            Pelatihan K3 & Emergency Response Bersertifikasi — Surabaya & Seluruh Indonesia
                        </h1>
                        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                            Penyedia jasa safety training dan sertifikasi kompetensi K3 industri, maritime, offshore, and rescue terbaik untuk kesiapan tim dan kepatuhan perusahaan Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="https://wa.me/6281222998847" className="bg-wa-green text-white font-heading font-semibold px-8 py-4 rounded-xl text-center hover:bg-wa-green/90 shadow-md hover:shadow-xl hover:shadow-wa-green/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                                <svg fill="currentColor" viewBox="0 0 16 16" className="w-5.5 h-5.5 shrink-0" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px' }}>
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.57 6.57 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                                <span>Konsultasi via WhatsApp</span>
                            </a>
                            <Link href="/pelatihan/kemnaker" className="border-2 border-deep-navy text-deep-navy font-heading font-semibold px-8 py-4 rounded-xl text-center hover:bg-deep-navy hover:text-white active:scale-[0.98]">
                                Lihat Program Training
                            </Link>
                        </div>
                        <div className="pt-6 flex items-center gap-4">
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Terakreditasi:</span>
                            <div className="flex gap-2">
                                {['Kemnaker RI', 'BNSP', 'ISO'].map(badge => (
                                    <span key={badge} className="text-xs font-bold text-deep-navy bg-primary-fixed/50 px-3 py-1.5 rounded-md border border-primary-fixed badge-trust">{badge}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-outline-variant shadow-lg">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt_LezpZvBlUQJnh_aglc-ALGkFFTe4Jox0pmmkokNKUYcBh4vCIE1QM2PG5lgRFaiChPir2uKHt_lQbVvLIHjD0fMMnGubQ-HIdCsrkaGYDu3HDDhpA_XYchJEDSu0mGBGup_fKp62cUW0enYHofRhSK6xdT3QSGe9EKrAlPsQiJ_bwg39R9Tdqst4K6jEVGDCFOLmJoaOMGtTp_-_wRV9ORGE2qJTbWRtEwKQWgL-AIIlbgWEr6iziCH4Avi6d9OMuN6A5V-RUkE')` }} />
                        <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-80 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-outline-variant shadow-lg">
                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-full bg-safety-orange/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined icon-fill text-safety-orange">verified</span>
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-deep-navy">Sertifikasi Resmi</h4>
                                    <p className="text-sm text-on-surface-variant mt-0.5">Sertifikat diakui secara nasional oleh KEMNAKER & BNSP.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Banner */}
            <section className="bg-surface-gray py-8 border-y border-outline-variant/60">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
                    {[
                        { icon: 'domain', text: 'In-house & On-Site Training' },
                        { icon: 'workspace_premium', text: 'Sertifikat Peserta' },
                        { icon: 'psychology', text: 'Berbasis Praktik Nyata' },
                        { icon: 'groups', text: 'Instruktur Berpengalaman' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row items-center gap-3 justify-center lg:justify-start">
                            <span className="material-symbols-outlined text-safety-orange text-3xl shrink-0">{item.icon}</span>
                            <span className="font-heading font-semibold text-deep-navy text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-12 border-b border-outline-variant bg-white px-6">
                <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: 15000, suffix: '+', label: 'Alumni Sertifikasi' },
                        { value: 500, suffix: '+', label: 'Klien Korporat' },
                        { value: 50, suffix: '+', label: 'Program Pelatihan' },
                        { value: 49, suffix: '/5', label: 'Rating Peserta' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left md:pl-8 md:border-l md:first:border-l-0 border-outline-variant/50 stat-counter rounded-lg p-2">
                            <p className="font-heading text-3xl md:text-4xl font-bold text-deep-navy">
                                <span data-count={stat.value === 49 ? '4' : stat.value} data-suffix={stat.value === 49 ? '.9/5' : stat.suffix}>0</span>
                            </p>
                            <p className="text-sm text-on-surface-variant mt-2 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Brief */}
            <section className="py-20 px-6 max-w-[1280px] mx-auto reveal">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-2xl overflow-hidden border border-outline-variant shadow-md">
                        <img alt="Training Session" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Tentang Pro Safe Indonesia</h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                            ProSafe Indonesia didirikan dengan misi untuk membantu organisasi dan tenaga profesional di seluruh Indonesia membangun standar keselamatan kerja (K3) tertinggi melalui pelatihan bersertifikasi resmi, simulasi berbasis praktik nyata, dan pendampingan implementasi keselamatan kerja komprehensif.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { title: 'Instruktur Tersertifikasi', desc: 'Praktisi berpengalaman dengan lisensi resmi.' },
                                { title: 'Fasilitas Modern', desc: 'Pusat pelatihan dilengkapi simulasi praktik standar industri.' },
                            ].map(item => (
                                <li key={item.title} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-safety-orange mt-0.5">check_circle</span>
                                    <div>
                                        <h4 className="font-heading font-semibold text-deep-navy">{item.title}</h4>
                                        <p className="text-sm text-on-surface-variant">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Link href="/tentang-kami" className="arrow-link link-underline text-deep-navy font-heading font-semibold hover:text-safety-orange inline-flex items-center gap-1">
                            Pelajari Lebih Lanjut <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="py-20 px-6 bg-surface-gray border-y border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Program Unggulan Kami</h2>
                        <div className="section-divider" />
                        <p className="text-lg text-on-surface-variant">Program pelatihan K3 dasar yang paling dibutuhkan di berbagai sektor industri.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
                                badge: 'KEMNAKER & BNSP',
                                title: 'Basic First Aid (BFA)',
                                quote: 'Pertolongan pertama cepat & tepat pada kecelakaan kerja.',
                                highlights: [
                                    'Sertifikasi Resmi Kemnaker / BNSP',
                                    'Praktik RJP (CPR) & Balut Bidai',
                                    'Penanganan Luka & Cedera Darurat'
                                ],
                                href: '/program/petugas-p3k'
                            },
                            {
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMy4zd_h2un2qwm9jz4YTJTASi7mJGlgTkD8Sw2Yp2y9dQnDNdRUX9C_SO1shj136hG8wMybMlmfmAtNslHa75LRLfHn4BLsbfCyAC3d7FupTw_JMyC1GmAAglkJmuQyxjm0FV84MGNvmCOxNO_3KcIW0C80DVyn2D8vW1H1gAR_TzcCoS-4aekpjRtzUwdQdasmCFAbX-7ISaOr-ZMctWArVI4TK7xh2l43v0t7LlHl0NqGbJsbdX8RMEw4AQzLuIh13WXi3P4ll',
                                badge: 'KEMNAKER',
                                title: 'Basic Fire Fighting (BFF)',
                                quote: 'Penanggulangan kebakaran dini dengan taktis dan aman.',
                                highlights: [
                                    'Sertifikasi Peran Kebakaran Kelas D',
                                    'Simulasi APAR & Fire Hose Praktis',
                                    'Prosedur Evakuasi Darurat Gedung'
                                ],
                                href: '/program/petugas-peran-kebakaran'
                            },
                            {
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_LezpZvBlUQJnh_aglc-ALGkFFTe4Jox0pmmkokNKUYcBh4vCIE1QM2PG5lgRFaiChPir2uKHt_lQbVvLIHjD0fMMnGubQ-HIdCsrkaGYDu3HDDhpA_XYchJEDSu0mGBGup_fKp62cUW0enYHofRhSK6xdT3QSGe9EKrAlPsQiJ_bwg39R9Tdqst4K6jEVGDCFOLmJoaOMGtTp_-_wRV9ORGE2qJTbWRtEwKQWgL-AIIlbgWEr6iziCH4Avi6d9OMuN6A5V-RUkE',
                                badge: 'KEMNAKER & BNSP',
                                title: 'Safety Awareness (BBS)',
                                quote: 'Membangun budaya keselamatan kerja yang proaktif.',
                                highlights: [
                                    'Sertifikasi Ahli K3 Umum Kemnaker',
                                    'Behavior Based Safety (BBS)',
                                    'Identifikasi Bahaya (HIRADC)'
                                ],
                                href: '/program/ahli-k3-umum'
                            }
                        ].map((card, i) => (
                            <Link key={i} href={card.href} className="group block bg-white rounded-2xl border border-outline-variant hover:border-deep-navy hover:shadow-lg transition-all relative overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-safety-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10" />
                                <div className="relative h-48 overflow-hidden bg-slate-100">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute top-4 left-4 bg-deep-navy/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                                        {card.badge}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-heading text-lg font-bold text-deep-navy mb-2 group-hover:text-safety-orange transition-colors">{card.title}</h3>
                                    <p className="text-xs text-text-secondary italic mb-4">"{card.quote}"</p>
                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {card.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                                                <span className="material-symbols-outlined text-safety-orange text-sm shrink-0 mt-0.5">check_circle</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4 border-t border-outline-variant/60 flex items-center justify-between">
                                        <span className="inline-flex items-center text-safety-orange text-xs font-bold uppercase tracking-wider">
                                            Lihat Detail Program <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maritime & Offshore specialized */}
            <section className="py-20 px-6 max-w-[1280px] mx-auto reveal">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Program Khusus Maritime & Offshore</h2>
                    <div className="section-divider" />
                    <p className="text-lg text-on-surface-variant">Pelatihan spesialisasi keselamatan laut dan lepas pantai dengan standar industri global.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
                            badge: 'MARITIME SAFETY',
                            title: 'Basic Sea Survival & HUET',
                            quote: 'Kemampuan bertahan hidup darurat di perairan terbuka.',
                            highlights: [
                                'Teori & Simulasi Sea Survival Lengkap',
                                'Helicopter Underwater Escape Training (HUET)',
                                'Penyelamatan diri menggunakan Liferaft'
                            ],
                            href: '/program/bosiet-sea-survival'
                        },
                        {
                            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
                            badge: 'OFFSHORE SAFETY',
                            title: 'BOSIET',
                            quote: 'Sertifikasi keselamatan wajib pekerja rig offshore.',
                            highlights: [
                                'Basic Offshore Safety Induction',
                                'Fire Fighting & Self Rescue Training',
                                'HUET & First Aid Competency'
                            ],
                            href: '/program/bosiet-sea-survival'
                        }
                    ].map((card, i) => (
                        <Link key={i} href={card.href} className="group block bg-white rounded-2xl border border-outline-variant hover:border-deep-navy hover:shadow-lg transition-all relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-deep-navy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10" />
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-deep-navy/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                                    {card.badge}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-heading text-lg font-bold text-deep-navy mb-2 group-hover:text-safety-orange transition-colors">{card.title}</h3>
                                <p className="text-xs text-text-secondary italic mb-4">"{card.quote}"</p>
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {card.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                                            <span className="material-symbols-outlined text-safety-orange text-sm shrink-0 mt-0.5">check_circle</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-outline-variant/60 flex items-center justify-between">
                                    <span className="inline-flex items-center text-deep-navy text-xs font-bold uppercase tracking-wider group-hover:text-safety-orange transition-colors">
                                        Selengkapnya <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1.5 transition-transform duration-200">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Mengapa Memilih Kami */}
            <section className="py-20 px-6 bg-surface-gray border-y border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Mengapa Memilih Pro Safe Indonesia</h2>
                        <div className="section-divider" />
                        <p className="text-lg text-on-surface-variant">Layanan safety training prima dengan komitmen kepuasan dan kualitas sertifikasi terbaik.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: 'menu_book', title: 'Materi Praktis & Relevan', desc: 'Kurikulum disesuaikan dengan kebutuhan nyata industri modern dan regulasi K3 terkini.' },
                            { icon: 'school', title: 'Instruktur Bersertifikasi', desc: 'Dipandu oleh praktisi K3 dan rescue ahli dengan jam terbang mengajar yang tinggi.' },
                            { icon: 'calendar_month', title: 'Jadwal Fleksibel', desc: 'Kami menawarkan jadwal pelatihan yang dapat disesuaikan dengan operasional perusahaan Anda.' },
                            { icon: 'verified', title: 'Sertifikat Resmi', desc: 'Sertifikat resmi yang diakui secara nasional oleh KEMNAKER RI dan BNSP.' },
                            { icon: 'home_repair_service', title: 'Fasilitas Lengkap', desc: 'Pusat pelatihan modern dengan alat peraga dan simulator simulasi praktis terbaik.' },
                            { icon: 'support_agent', title: 'Dukungan Pasca Pelatihan', desc: 'Pendampingan konsultasi K3 berkelanjutan bagi perusahaan alumni peserta kami.' }
                        ].map((card, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-4 text-safety-orange">
                                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                                </div>
                                <h3 className="font-heading text-lg font-bold text-deep-navy mb-2">{card.title}</h3>
                                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Peserta */}
            <section className="py-20 px-6 max-w-[1280px] mx-auto reveal">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Industri Target & Peserta</h2>
                    <div className="section-divider" />
                    <p className="text-lg text-on-surface-variant">Layanan kami dirancang untuk membekali tenaga kerja di berbagai sektor berisiko tinggi.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: 'local_gas_station', label: 'Minyak & Gas (Migas)', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'precision_manufacturing', label: 'Manufaktur & Pabrik', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'construction', label: 'Konstruksi & Proyek', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'engineering', label: 'Pertambangan', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'directions_boat', label: 'Maritim & Perkapalan', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'hotel', label: 'Pariwisata & Perhotelan', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'local_hospital', label: 'Rumah Sakit & Medis', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' },
                        { icon: 'school', label: 'Lembaga Pendidikan', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-outline-variant rounded-2xl overflow-hidden hover:border-safety-orange hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                            <div className="h-32 sm:h-40 overflow-hidden relative">
                                <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-5 flex flex-col items-center justify-center text-center flex-grow">
                                <div className="w-12 h-12 rounded-full bg-surface-gray flex items-center justify-center mb-3 group-hover:bg-safety-orange/10 transition-colors duration-300">
                                    <span className="material-symbols-outlined text-2xl text-deep-navy group-hover:text-safety-orange transition-colors duration-300">{item.icon}</span>
                                </div>
                                <span className="font-heading font-bold text-deep-navy text-xs sm:text-sm leading-snug">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Alur Pelaksanaan */}
            <section className="py-20 px-6 bg-surface-gray border-y border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Alur Pelaksanaan Training</h2>
                        <div className="section-divider" />
                        <p className="text-lg text-on-surface-variant">Tahapan profesional untuk memastikan pelatihan berjalan lancar dan berdaya guna.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {[
                            { step: '1', title: 'Konsultasi Kebutuhan', desc: 'Diskusi awal mengenai program pelatihan yang paling relevan dengan kondisi tempat kerja.' },
                            { step: '2', title: 'Penawaran & Custom', desc: 'Penyusunan penawaran resmi serta kustomisasi silabus materi agar sesuai profil industri.' },
                            { step: '3', title: 'Pelaksanaan Training', desc: 'Penyampaian materi teori interaktif serta simulasi praktik langsung di lapangan.' },
                            { step: '4', title: 'Evaluasi & Sertifikat', desc: 'Ujian kompetensi peserta, evaluasi trainer, dan penerbitan sertifikasi resmi.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-outline-variant relative pt-10 shadow-sm">
                                <div className="absolute -top-6 left-6 w-12 h-12 bg-safety-orange text-white font-heading font-black text-xl rounded-xl flex items-center justify-center shadow-md shadow-safety-orange/20">
                                    {item.step}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-deep-navy mb-2 mt-1">{item.title}</h3>
                                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos - Infinite Carousel */}
            <section className="py-16 px-6 bg-white border-b border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto text-center">
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-8">Dipercaya oleh 500+ Perusahaan Terkemuka di Indonesia</p>
                    <div className="overflow-hidden relative py-4 -my-4">
                        <div className="logo-marquee flex gap-8 py-2">
                            {[...clientLogos, ...clientLogos].map((logo, i) => (
                                <div key={`${logo.name}-${i}`} className="logo-grayscale shrink-0 w-36 h-16 bg-white border border-outline-variant rounded-lg flex items-center justify-center p-3" title={logo.name}>
                                    <BrandLogo name={logo.name} className="max-h-full max-w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 max-w-[800px] mx-auto reveal">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Pertanyaan Umum (FAQ)</h2>
                    <div className="section-divider" />
                    <p className="text-sm text-on-surface-variant mt-2">Menjawab hal-hal yang sering ditanyakan calon peserta.</p>
                </div>
                <div className="space-y-4">
                    {[
                        { q: 'Apakah sertifikat yang diterbitkan resmi?', a: 'Ya, seluruh sertifikat pelatihan diterbitkan langsung dan diakui secara resmi oleh Kementerian Ketenagakerjaan (KEMNAKER) RI atau Badan Nasional Sertifikasi Profesi (BNSP) sesuai jenis program yang dipilih.' },
                        { q: 'Di mana lokasi pelaksanaan training?', a: 'Pelatihan dapat diselenggarakan di gedung training center kami di Surabaya, maupun secara In-House (on-site) langsung di fasilitas operasional perusahaan Anda di seluruh wilayah Indonesia.' },
                        { q: 'Berapa jumlah minimal peserta untuk pelaksanaan training?', a: 'Untuk program publik minimal kuota bervariasi. Sedangkan untuk in-house training perusahaan, umumnya kami menyarankan minimal 5-10 peserta agar simulasi dan dinamika kelompok berjalan optimal, namun kami sangat fleksibel menyesuaikan kebutuhan Anda.' },
                        { q: 'Apakah materi training bisa disesuaikan dengan kebutuhan spesifik perusahaan?', a: 'Tentu. Kami menyediakan layanan kustomisasi kurikulum agar fokus studi kasus, jenis simulasi, dan jenis alat peraga relevan secara spesifik dengan risiko bahaya di tempat kerja Anda.' },
                        { q: 'Bagaimana sistem pembayaran pelatihan?', a: 'Pembayaran dapat dilakukan melalui transfer bank resmi perusahaan setelah penandatanganan penawaran/kontrak kerja sama, baik secara penuh di awal maupun termin yang disepakati.' },
                        { q: 'Apakah Pro Safe menyediakan training bersertifikasi internasional?', a: 'Ya, untuk program keselamatan maritim dan lepas pantai (offshore) tertentu, kami menawarkan sertifikasi berbasis lisensi regulator industri terkait.' }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-outline-variant overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-bold text-deep-navy hover:text-safety-orange transition-colors"
                            >
                                <span>{faq.q}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 ${faqOpen === idx ? 'rotate-180 text-safety-orange' : 'text-outline'}`}>expand_more</span>
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${faqOpen === idx ? 'max-h-48 border-t border-outline-variant/60' : 'max-h-0'}`}>
                                <p className="px-6 py-5 text-sm text-on-surface-variant leading-relaxed bg-surface-gray/50">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-surface-gray border-t border-outline-variant max-w-[1280px] mx-auto reveal">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Apa Kata Klien Kami</h2>
                    <div className="section-divider" />
                    <p className="text-lg text-on-surface-variant">Testimoni dari profesional yang telah mempercayakan pelatihan K3 kepada kami.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map(t => (
                        <div key={t.id} className="bg-white rounded-2xl p-6 border border-outline-variant card-hover">
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <span key={i} className="material-symbols-outlined icon-fill text-safety-orange text-lg">star</span>
                                ))}
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-4 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3 pt-3 border-t border-outline-variant/50">
                                <div className="w-10 h-10 rounded-full bg-deep-navy flex items-center justify-center text-white font-heading font-bold text-sm">
                                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-sm text-deep-navy">{t.name}</p>
                                    <p className="text-xs text-text-secondary">{t.role}, {t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Inquiry Request Form */}
            <section className="py-20 px-6 max-w-[800px] mx-auto reveal">
                <div className="bg-white border border-outline-variant/70 rounded-2xl p-8 md:p-12 shadow-sm">
                    <div className="text-center mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-2">Hubungi Kami & Dapatkan Penawaran</h2>
                        <p className="text-sm text-on-surface-variant">Isi data di bawah ini, tim marketing kami akan segera menghubungi Anda dengan penawaran harga terbaik.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-wa-green/10 text-wa-green rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl">check_circle</span>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-deep-navy mb-2">Permintaan Penawaran Terkirim</h3>
                            <p className="text-sm text-on-surface-variant mb-6">Terima kasih, admin kami akan segera menghubungi Anda kembali melalui WhatsApp atau email resmi.</p>
                            <button onClick={() => setFormSubmitted(false)} className="btn-prosafe-secondary text-sm px-6 py-2.5">
                                Kirim Form Lainnya
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nama_lengkap" className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-2">Nama Lengkap</label>
                                    <input required type="text" id="nama_lengkap" name="nama" className="input-prosafe w-full text-sm" placeholder="Contoh: Achmad Lutfi" />
                                </div>
                                <div>
                                    <label htmlFor="whatsapp_number" className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-2">No. WhatsApp</label>
                                    <input required type="tel" id="whatsapp_number" name="whatsapp" className="input-prosafe w-full text-sm" placeholder="Contoh: 081222998847" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email_company" className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-2">Email Perusahaan</label>
                                    <input required type="email" id="email_company" name="email" className="input-prosafe w-full text-sm" placeholder="Contoh: hrd@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="nama_perusahaan" className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-2">Nama Perusahaan</label>
                                    <input required type="text" id="nama_perusahaan" name="company" className="input-prosafe w-full text-sm" placeholder="Contoh: PT. Maju Bersama" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="program_pilihan" className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-2">Program Pelatihan</label>
                                <select required id="program_pilihan" name="program" className="input-prosafe w-full text-sm">
                                    <option value="">-- Pilih Program Pelatihan --</option>
                                    <option value="bfa">Basic First Aid (BFA)</option>
                                    <option value="bff">Basic Fire Fighting (BFF)</option>
                                    <option value="bbs">Safety Awareness (BBS)</option>
                                    <option value="sea_survival">Basic Sea Survival & HUET</option>
                                    <option value="bosiet">BOSIET</option>
                                    <option value="other">Kebutuhan Custom Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="keterangan_tambahan" className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-2">Keterangan Tambahan</label>
                                <textarea id="keterangan_tambahan" name="message" rows={4} className="input-prosafe w-full text-sm" placeholder="Contoh: Estimasi jumlah peserta 15 orang, in-house training di Surabaya." />
                            </div>
                            <button type="submit" className="btn-prosafe-primary w-full justify-center py-4 text-base shadow-lg shadow-safety-orange/15 hover:shadow-safety-orange/30">
                                <span className="material-symbols-outlined">send</span> Kirim Permintaan Penawaran
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
