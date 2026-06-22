import { Link, Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { trainingSchedule, clientLogos, testimonials, blogPosts } from '@/data/mockData';

export default function Home() {
    const statsRef = useRef<HTMLDivElement>(null);

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
            <Head title="Pusat Pelatihan K3 & Sertifikasi BNSP Terpercaya" />

            {/* Hero Section */}
            <section className="py-16 lg:py-24 px-6 max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-gray border border-outline-variant rounded-full">
                            <span className="w-2 h-2 rounded-full bg-safety-orange animate-pulse" />
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pusat Pelatihan K3 Terkemuka</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-deep-navy leading-tight">
                            Pusat Pelatihan K3 & Sertifikasi BNSP <span className="text-safety-orange">Terpercaya</span> di Indonesia
                        </h1>
                        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                            Membangun kompetensi keselamatan kerja dengan standar nasional dan internasional. Persiapkan tim Anda untuk bekerja lebih aman dan produktif.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/kontak" className="bg-safety-orange text-white font-heading font-semibold px-8 py-4 rounded-lg text-center hover:bg-safety-orange/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                Konsultasi Gratis <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <Link href="/pelatihan/kemnaker" className="border-2 border-deep-navy text-deep-navy font-heading font-semibold px-8 py-4 rounded-lg text-center hover:bg-deep-navy hover:text-white transition-all">
                                Lihat Semua Program
                            </Link>
                        </div>
                        <div className="pt-6 flex items-center gap-4 opacity-70">
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Terakreditasi:</span>
                            <div className="flex gap-3">
                                {['Kemnaker RI', 'BNSP', 'ISO'].map(badge => (
                                    <span key={badge} className="text-xs font-semibold text-deep-navy bg-primary-fixed/30 px-2.5 py-1 rounded">{badge}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden border border-outline-variant shadow-lg">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt_LezpZvBlUQJnh_aglc-ALGkFFTe4Jox0pmmkokNKUYcBh4vCIE1QM2PG5lgRFaiChPir2uKHt_lQbVvLIHjD0fMMnGubQ-HIdCsrkaGYDu3HDDhpA_XYchJEDSu0mGBGup_fKp62cUW0enYHofRhSK6xdT3QSGe9EKrAlPsQiJ_bwg39R9Tdqst4K6jEVGDCFOLmJoaOMGtTp_-_wRV9ORGE2qJTbWRtEwKQWgL-AIIlbgWEr6iziCH4Avi6d9OMuN6A5V-RUkE')` }} />
                        <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-80 bg-white/90 backdrop-blur-md p-5 rounded-lg border border-outline-variant shadow-lg">
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

            {/* Stats Section */}
            <section ref={statsRef} className="py-12 border-y border-outline-variant bg-surface-gray px-6">
                <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: 15000, suffix: '+', label: 'Alumni Sertifikasi' },
                        { value: 500, suffix: '+', label: 'Klien Korporat' },
                        { value: 50, suffix: '+', label: 'Program Pelatihan' },
                        { value: 49, suffix: '/5', label: 'Rating Peserta' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left md:pl-8 md:border-l md:first:border-l-0 border-outline-variant/50">
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
                    <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-md">
                        <img alt="Training Session" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy">Membangun Budaya Keselamatan yang Kuat</h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                            ProSafe Indonesia didirikan dengan misi tunggal: mengurangi risiko kecelakaan kerja melalui pendidikan dan sertifikasi berkualitas tinggi.
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
                        <Link href="/tentang-kami" className="inline-flex items-center gap-2 text-deep-navy font-heading font-semibold hover:text-safety-orange transition-colors">
                            Pelajari Lebih Lanjut <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 bg-surface-gray border-y border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Layanan Pelatihan & Sertifikasi</h2>
                        <p className="text-lg text-on-surface-variant">Solusi komprehensif untuk kebutuhan pemenuhan regulasi dan peningkatan kompetensi K3.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'shield_person', title: 'Pelatihan KEMNAKER', desc: 'AK3 Umum, Konstruksi, Listrik, dan Spesialis lainnya sesuai regulasi.', href: '/pelatihan/kemnaker', color: 'safety-orange' },
                            { icon: 'workspace_premium', title: 'Sertifikasi BNSP', desc: 'Uji kompetensi profesi K3 standar nasional.', href: '/pelatihan/bnsp', color: 'deep-navy' },
                            { icon: 'local_fire_department', title: 'K3 Migas', desc: 'Pelatihan khusus sektor minyak dan gas bumi.', href: '/pelatihan/migas', color: 'safety-orange' },
                            { icon: 'menu_book', title: 'Non-Sertifikasi', desc: 'P3K, Basic Fire Fighting, Working at Heights.', href: '/pelatihan/non-sertifikasi', color: 'deep-navy' },
                        ].map(card => (
                            <Link key={card.title} href={card.href} className="group block bg-white rounded-xl p-6 border border-outline-variant hover:border-deep-navy hover:shadow-lg transition-all relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-${card.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                                <div className="w-12 h-12 rounded-lg bg-surface-gray flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-deep-navy text-2xl">{card.icon}</span>
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-deep-navy mb-2">{card.title}</h3>
                                <p className="text-sm text-on-surface-variant mb-4">{card.desc}</p>
                                <span className="inline-flex items-center text-safety-orange text-xs font-bold uppercase tracking-wider">
                                    Lihat Program <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                    {/* Corporate & Consulting */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Link href="/corporate" className="group block bg-white rounded-xl p-6 border border-outline-variant hover:border-deep-navy hover:shadow-lg transition-all relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-safety-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-12 h-12 rounded-lg bg-surface-gray flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-deep-navy text-2xl">domain</span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-2">Corporate In-House Training</h3>
                            <p className="text-sm text-on-surface-variant mb-4">Pelatihan disesuaikan di fasilitas perusahaan Anda.</p>
                            <span className="inline-flex items-center text-safety-orange text-xs font-bold uppercase tracking-wider">
                                Minta Penawaran <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </Link>
                        <Link href="/corporate" className="group block bg-white rounded-xl p-6 border border-outline-variant hover:border-deep-navy hover:shadow-lg transition-all relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-deep-navy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-12 h-12 rounded-lg bg-surface-gray flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-deep-navy text-2xl">fact_check</span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-2">Consulting K3 & ISO</h3>
                            <p className="text-sm text-on-surface-variant mb-4">Konsultasi SMK3, CSMS, ISO 9001/14001/45001.</p>
                            <span className="inline-flex items-center text-deep-navy text-xs font-bold uppercase tracking-wider">
                                Pelajari Lebih <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Jadwal Training Preview */}
            <section className="py-20 px-6 max-w-[1280px] mx-auto reveal">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-2">Jadwal Training Terdekat</h2>
                        <p className="text-lg text-on-surface-variant">Daftar sekarang, kuota terbatas setiap batch.</p>
                    </div>
                    <Link href="/jadwal" className="hidden md:inline-flex items-center gap-2 text-deep-navy font-heading font-semibold hover:text-safety-orange transition-colors">
                        Lihat Semua <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
                <div className="overflow-x-auto rounded-xl border border-outline-variant bg-white shadow-sm">
                    <table className="w-full text-left min-w-[700px]">
                        <thead className="bg-surface-gray border-b border-outline-variant">
                            <tr>
                                <th className="py-3 px-5 text-xs font-bold text-text-secondary uppercase tracking-wider">Program</th>
                                <th className="py-3 px-5 text-xs font-bold text-text-secondary uppercase tracking-wider">Tanggal</th>
                                <th className="py-3 px-5 text-xs font-bold text-text-secondary uppercase tracking-wider">Metode</th>
                                <th className="py-3 px-5 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/50">
                            {trainingSchedule.slice(0, 4).map(s => (
                                <tr key={s.id} className="hover:bg-surface-gray/50 transition-colors group">
                                    <td className="py-4 px-5">
                                        <div className="font-heading font-semibold text-deep-navy group-hover:text-safety-orange transition-colors">{s.program}</div>
                                        <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-surface-container-highest text-text-secondary">
                                            <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>verified</span> {s.category}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5 text-sm">{s.date}</td>
                                    <td className="py-4 px-5">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-outline-variant text-sm">
                                            <span className="material-symbols-outlined text-sm">{s.locationIcon}</span> {s.location}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5 text-right">
                                        <Link href="/jadwal" className="bg-white border border-safety-orange text-safety-orange px-4 py-2 rounded-lg text-sm font-semibold hover:bg-safety-orange hover:text-white transition-all">
                                            Daftar
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 md:hidden text-center">
                    <Link href="/jadwal" className="inline-flex items-center gap-2 text-safety-orange font-heading font-semibold">
                        Lihat Semua Jadwal <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Client Logos */}
            <section className="py-16 px-6 bg-surface-gray border-y border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto text-center">
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-8">Dipercaya oleh 500+ Perusahaan Terkemuka di Indonesia</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {clientLogos.map(logo => (
                            <div key={logo.name} className="logo-grayscale w-24 h-14 bg-white border border-outline-variant rounded-lg flex items-center justify-center" title={logo.name}>
                                <span className="font-heading text-lg font-bold text-deep-navy/40">{logo.initials}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 max-w-[1280px] mx-auto reveal">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-3">Apa Kata Klien Kami</h2>
                    <p className="text-lg text-on-surface-variant">Testimoni dari profesional yang telah mempercayakan pelatihan K3 kepada kami.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map(t => (
                        <div key={t.id} className="bg-white rounded-xl p-6 border border-outline-variant hover:shadow-md transition-shadow">
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

            {/* Blog Preview */}
            <section className="py-20 px-6 bg-surface-gray border-y border-outline-variant reveal">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-2">Artikel Terbaru</h2>
                            <p className="text-on-surface-variant">Wawasan dan update terkini seputar industri K3.</p>
                        </div>
                        <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-deep-navy font-heading font-semibold hover:text-safety-orange transition-colors">
                            Semua Artikel <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPosts.map(post => (
                            <Link key={post.id} href="/blog" className="group bg-white rounded-xl overflow-hidden border border-outline-variant hover:shadow-lg transition-all">
                                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
                                <div className="p-5">
                                    <span className="text-xs font-bold text-safety-orange uppercase tracking-wider">{post.category}</span>
                                    <h3 className="font-heading font-semibold text-deep-navy mt-2 mb-2 group-hover:text-safety-orange transition-colors line-clamp-2">{post.title}</h3>
                                    <p className="text-sm text-on-surface-variant line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-3 mt-4 text-xs text-text-secondary">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> {post.date}</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 reveal">
                <div className="max-w-[1280px] mx-auto">
                    <div className="bg-deep-navy rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }} />
                        <div className="relative z-10">
                            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">Siap Meningkatkan Standar K3 Perusahaan Anda?</h2>
                            <p className="text-primary-fixed-dim text-lg max-w-2xl mx-auto mb-8">
                                Konsultasikan kebutuhan pelatihan dan sertifikasi K3 tim Anda secara gratis bersama tim kami.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://wa.me/6281234567890" className="bg-safety-orange text-white font-heading font-semibold px-8 py-4 rounded-lg hover:bg-safety-orange/90 transition-all shadow-lg inline-flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">chat</span> Hubungi via WhatsApp
                                </a>
                                <Link href="/kontak" className="border-2 border-white/30 text-white font-heading font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">mail</span> Kirim Email
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
