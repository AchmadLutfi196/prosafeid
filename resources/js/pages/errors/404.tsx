import { Link, Head } from '@inertiajs/react';

export default function NotFound() {
    return (
        <>
            <Head title="404 - Halaman Tidak Ditemukan │ ProSafe Indonesia" />

            <section className="py-20 lg:py-32 px-6">
                <div className="max-w-[600px] mx-auto text-center">
                    {/* Animated 404 Number */}
                    <div className="relative mb-8">
                        <span className="font-heading text-[150px] md:text-[200px] font-black text-surface-container-highest leading-none select-none">404</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-safety-orange/10 flex items-center justify-center animate-float">
                                <span className="material-symbols-outlined text-safety-orange text-5xl">search_off</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="font-heading text-2xl md:text-3xl font-bold text-deep-navy mb-4">
                        Halaman Tidak Ditemukan
                    </h1>
                    <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda atau gunakan navigasi di bawah.
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/" className="bg-safety-orange text-white font-heading font-semibold px-8 py-4 rounded-lg hover:bg-safety-orange/90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">home</span> Kembali ke Beranda
                        </Link>
                        <Link href="/kontak" className="border-2 border-deep-navy text-deep-navy font-heading font-semibold px-8 py-4 rounded-lg hover:bg-deep-navy hover:text-white transition-all inline-flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">support_agent</span> Hubungi Kami
                        </Link>
                    </div>

                    {/* Suggested Pages */}
                    <div className="bg-surface-gray rounded-xl p-6 border border-outline-variant">
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">Mungkin Anda Mencari:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {[
                                { href: '/pelatihan/kemnaker', label: 'Pelatihan K3', icon: 'engineering' },
                                { href: '/jadwal', label: 'Jadwal Training', icon: 'calendar_month' },
                                { href: '/corporate', label: 'Corporate', icon: 'business' },
                                { href: '/cek-sertifikat', label: 'Cek Sertifikat', icon: 'verified' },
                                { href: '/blog', label: 'Blog & Artikel', icon: 'article' },
                                { href: '/pendaftaran', label: 'Daftar Training', icon: 'app_registration' },
                            ].map(item => (
                                <Link key={item.href} href={item.href} className="flex items-center gap-2 p-3 rounded-lg text-sm text-on-surface-variant hover:bg-white hover:text-deep-navy hover:shadow-sm transition-all group">
                                    <span className="material-symbols-outlined text-text-secondary group-hover:text-safety-orange transition-colors" style={{ fontSize: '18px' }}>{item.icon}</span>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
