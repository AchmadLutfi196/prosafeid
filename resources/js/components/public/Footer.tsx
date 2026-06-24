import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="w-full bg-surface-container-highest border-t border-outline-variant">
            {/* Main Footer */}
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo-prosafe.png" alt="ProSafe Indonesia" className="h-10 w-auto" />
                            <span className="font-heading text-lg font-bold text-deep-navy">ProSafe Indonesia</span>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                            Pusat pelatihan dan sertifikasi K3 terdepan yang berkomitmen meningkatkan standar keselamatan kerja di berbagai sektor industri Indonesia.
                        </p>
                        <div className="flex items-center gap-3">
                            {['public', 'photo_camera', 'play_circle', 'link'].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-text-secondary hover:bg-deep-navy hover:text-white active:scale-90 transition-all">
                                    <span className="material-symbols-outlined text-lg">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h4 className="font-heading text-xs font-bold text-deep-navy mb-5 uppercase tracking-wider">Perusahaan</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Tentang Kami', href: '/tentang-kami' },
                                { label: 'Hubungi Kami', href: '/kontak' },
                                { label: 'Karir', href: '/karir' },
                                { label: 'Blog & Artikel', href: '/blog' },
                                { label: 'Galeri', href: '/galeri' },
                                { label: 'Testimoni', href: '/testimoni' },
                            ].map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-on-surface-variant hover:text-safety-orange transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h4 className="font-heading text-xs font-bold text-deep-navy mb-5 uppercase tracking-wider">Layanan</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Pelatihan Kemnaker RI', href: '/pelatihan/kemnaker' },
                                { label: 'Sertifikasi BNSP', href: '/pelatihan/bnsp' },
                                { label: 'K3 Migas & Offshore', href: '/pelatihan/migas' },
                                { label: 'Corporate In-House', href: '/corporate' },
                                { label: 'Consulting K3 & ISO', href: '/corporate' },
                                { label: 'Jadwal Training', href: '/jadwal' },
                                { label: 'Cek Sertifikat', href: '/cek-sertifikat' },
                            ].map(item => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-on-surface-variant hover:text-safety-orange transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="font-heading text-xs font-bold text-deep-navy mb-5 uppercase tracking-wider">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-text-secondary text-lg mt-0.5">location_on</span>
                                <span className="text-sm text-on-surface-variant">Jl. Raya Darmo No. 54-56, Surabaya, Jawa Timur 60265</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-text-secondary text-lg">mail</span>
                                <a href="mailto:prosafeindonesia@gmail.com" className="text-sm text-on-surface-variant hover:text-safety-orange transition-colors">prosafeindonesia@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-text-secondary text-lg">call</span>
                                <a href="tel:+6281222998847" className="text-sm text-on-surface-variant hover:text-safety-orange transition-colors">+62 812-2299-8847</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-text-secondary text-lg">chat</span>
                                <a href="https://wa.me/6281222998847" className="text-sm text-on-surface-variant hover:text-safety-orange transition-colors">WhatsApp: 0812-2299-8847</a>
                            </li>
                        </ul>

                        {/* Cabang */}
                        <div className="mt-6">
                            <h5 className="font-heading text-xs font-bold text-deep-navy mb-3 uppercase tracking-wider">Cabang Kami</h5>
                            <div className="flex flex-wrap gap-2">
                                {[{name: 'Surabaya', id: 'surabaya'}, {name: 'Jakarta', id: 'jakarta'}, {name: 'Semarang', id: 'semarang'}, {name: 'Balikpapan', id: 'balikpapan'}].map(city => (
                                    <Link key={city.id} href={`/cabang/${city.id}`} className="text-xs px-3 py-1.5 rounded-full border border-outline-variant text-text-secondary hover:border-safety-orange hover:text-safety-orange hover:bg-safety-orange/5 active:scale-95 transition-all">
                                        {city.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legalitas Badges */}
            <div className="border-t border-outline-variant">
                <div className="max-w-[1280px] mx-auto px-6 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-text-secondary">
                        <span className="text-xs font-bold uppercase tracking-wider">Terakreditasi:</span>
                        {['PJK3 Kemnaker RI', 'BNSP', 'ISO 9001:2015'].map(badge => (
                            <div key={badge} className="flex items-center gap-1.5 text-xs font-semibold text-deep-navy bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant badge-trust">
                                <span className="material-symbols-outlined icon-fill text-safety-orange text-sm">verified</span>
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-outline-variant bg-surface-container pb-[calc(56px+env(safe-area-inset-bottom,0px))] md:pb-0">
                <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-text-secondary">
                    <p>© 2026 ProSafe Indonesia. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/kebijakan-privasi" className="hover:text-deep-navy transition-colors">Kebijakan Privasi</Link>
                        <Link href="/syarat-ketentuan" className="hover:text-deep-navy transition-colors">Syarat & Ketentuan</Link>
                        <Link href="/cabang" className="hover:text-deep-navy transition-colors">Cabang Kami</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
