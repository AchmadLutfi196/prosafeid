import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Navbar() {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    // Helper to check if a route is active
    const isActive = (href: string) => {
        if (href === '/') return url === '/';
        // For /pelatihan, matches /pelatihan/kemnaker etc.
        return url.startsWith(href);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="w-full z-50 bg-gradient-to-r from-[#001731] via-deep-navy to-[#002f5d] text-white/95 text-[11px] sm:text-xs lg:text-[13px] border-b border-safety-orange/30">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2 lg:py-2.5 flex justify-between items-center">
                    <div className="flex items-center gap-4 lg:gap-5">
                        <a href="tel:+6281222998847" className="flex items-center gap-1.5 hover:text-safety-orange transition-colors">
                            <span className="material-symbols-outlined icon-fill text-safety-orange" style={{ fontSize: '15px' }}>call</span>
                            <span className="font-semibold text-white">+62 812-2299-8847</span>
                        </a>
                        <span className="hidden sm:inline w-px h-3.5 bg-white/20" />
                        <a href="mailto:prosafeindonesia@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-safety-orange transition-colors">
                            <span className="material-symbols-outlined icon-fill text-safety-orange" style={{ fontSize: '15px' }}>mail</span>
                            <span>prosafeindonesia@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-5">
                        <span className="hidden md:flex items-center gap-1.5">
                            <span className="material-symbols-outlined icon-fill text-safety-orange" style={{ fontSize: '15px' }}>schedule</span>
                            <span>Senin – Jumat, 08:00 – 17:00 WIB</span>
                        </span>
                        <span className="hidden md:inline w-px h-3.5 bg-white/20" />
                        <Link href="/cek-sertifikat" className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold transition-all text-[10px] sm:text-xs border ${isActive('/cek-sertifikat') ? 'bg-safety-orange border-safety-orange text-white' : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:text-safety-orange'}`}>
                            <span className="material-symbols-outlined icon-fill text-safety-orange" style={{ fontSize: '14px' }}>verified</span>
                            <span>Cek Sertifikat</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/60 shadow-sm">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0">
                        <img src="/images/logo-prosafe.png" alt="ProSafe Indonesia" className="h-9 w-9 object-contain" />
                        <div className="leading-tight">
                            <span className="font-heading text-base font-bold text-deep-navy block">ProSafe</span>
                            <span className="font-heading text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Indonesia</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-0.5 ml-8">
                        {/* Pelatihan K3 - Mega Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <button className={`flex items-center gap-1 px-3 py-2 text-sm font-heading font-semibold rounded-md transition-colors ${url.startsWith('/pelatihan') ? 'text-safety-orange bg-surface-gray' : 'text-on-surface-variant hover:text-deep-navy hover:bg-surface-gray'}`}>
                                Pelatihan K3
                                <span className={`material-symbols-outlined transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} style={{ fontSize: '18px' }}>expand_more</span>
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[560px] bg-white shadow-2xl rounded-xl border border-outline-variant/60 p-6 grid grid-cols-2 gap-6 z-50 transition-all duration-200 ${megaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                <div>
                                    <h4 className="font-heading text-[10px] font-bold text-text-secondary mb-3 uppercase tracking-[0.1em]">Kategori Utama</h4>
                                    <ul className="space-y-1">
                                        {[
                                            { href: '/pelatihan/kemnaker', icon: 'shield_person', label: 'Pelatihan Kemnaker RI' },
                                            { href: '/pelatihan/bnsp', icon: 'workspace_premium', label: 'Sertifikasi BNSP' },
                                            { href: '/pelatihan/migas', icon: 'local_fire_department', label: 'K3 Migas & Offshore' },
                                            { href: '/pelatihan/non-sertifikasi', icon: 'menu_book', label: 'Non-Sertifikasi' },
                                        ].map(item => (
                                            <li key={item.href}>
                                                <Link href={item.href} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm text-on-surface hover:bg-surface-gray hover:text-safety-orange transition-colors group ${isActive(item.href) ? 'text-safety-orange bg-surface-gray' : ''}`}>
                                                    <span className={`material-symbols-outlined text-deep-navy group-hover:text-safety-orange transition-colors ${isActive(item.href) ? 'text-safety-orange' : ''}`} style={{ fontSize: '20px' }}>{item.icon}</span>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-heading text-[10px] font-bold text-text-secondary mb-3 uppercase tracking-[0.1em]">Layanan Lainnya</h4>
                                    <ul className="space-y-1">
                                        {[
                                            { href: '/corporate', icon: 'domain', label: 'Corporate In-House' },
                                            { href: '/corporate', icon: 'analytics', label: 'Consulting K3' },
                                            { href: '/corporate', icon: 'fact_check', label: 'ISO Consulting' },
                                        ].map((item, idx) => (
                                            <li key={idx}>
                                                <Link href={item.href} className="flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm text-on-surface hover:bg-surface-gray hover:text-safety-orange transition-colors group">
                                                    <span className="material-symbols-outlined text-deep-navy group-hover:text-safety-orange transition-colors" style={{ fontSize: '20px' }}>{item.icon}</span>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-span-2 pt-3 border-t border-outline-variant/60">
                                    <Link href="/pelatihan/kemnaker" className="inline-flex items-center gap-1 text-safety-orange font-heading text-xs font-bold hover:underline uppercase tracking-wider">
                                        Lihat Semua Program <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {[
                            { href: '/jadwal', label: 'Jadwal' },
                            { href: '/corporate', label: 'Corporate' },
                            { href: '/tentang-kami', label: 'Tentang Kami' },
                            { href: '/cabang', label: 'Cabang' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/kontak', label: 'Kontak' },
                        ].map(item => (
                            <Link key={item.href} href={item.href} className={`px-3 py-2 text-sm font-heading font-semibold rounded-md transition-colors whitespace-nowrap ${isActive(item.href) ? 'text-safety-orange bg-surface-gray' : 'text-on-surface-variant hover:text-deep-navy hover:bg-surface-gray'}`}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA + Search */}
                    <div className="hidden lg:flex items-center gap-2 ml-auto">
                        <div className="flex items-center border border-outline-variant rounded-full px-3 py-1.5 bg-surface-gray/60 focus-within:ring-2 focus-within:ring-safety-orange/20 focus-within:border-safety-orange transition-all duration-200">
                            <span className="material-symbols-outlined text-text-secondary mr-1.5 select-none" style={{ fontSize: '18px' }}>search</span>
                            <input type="search" name="q" autoComplete="off" aria-label="Cari Pelatihan" className="bg-transparent border-none focus:ring-0 text-sm w-24 focus:w-36 transition-all duration-300 outline-none placeholder:text-text-secondary/70" placeholder="Cari..." />
                        </div>
                        <Link href="/kontak" className="btn-prosafe-primary text-sm px-5 py-2.5 whitespace-nowrap">
                            Konsultasi Gratis
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Quick Actions */}
                    <div className="flex items-center gap-2.5 lg:hidden">
                        <a href="https://wa.me/6281222998847" className="w-9 h-9 text-wa-green hover:text-wa-green/80 transition-all flex items-center justify-center rounded-full bg-wa-green/10 border border-wa-green/20 active:scale-95 shadow-sm" aria-label="Chat WhatsApp">
                            <svg fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.57 6.57 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                        </a>
                        <button className="w-9 h-9 text-deep-navy flex items-center justify-center rounded-full bg-surface-gray hover:bg-surface-gray/80 border border-outline-variant/40 transition-all active:scale-95 shadow-sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu Utama">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{mobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto lg:hidden">
                    <nav className="flex flex-col p-5 gap-0.5">
                        {[
                            { href: '/', label: 'Beranda', icon: 'home' },
                            { href: '/pelatihan/kemnaker', label: 'Pelatihan K3', icon: 'engineering' },
                            { href: '/jadwal', label: 'Jadwal Training', icon: 'calendar_month' },
                            { href: '/corporate', label: 'Corporate', icon: 'business' },
                            { href: '/tentang-kami', label: 'Tentang Kami', icon: 'info' },
                            { href: '/cabang', label: 'Cabang Kami', icon: 'location_on' },
                            { href: '/blog', label: 'Blog & Artikel', icon: 'article' },
                            { href: '/galeri', label: 'Galeri', icon: 'photo_library' },
                            { href: '/testimoni', label: 'Testimoni', icon: 'reviews' },
                            { href: '/karir', label: 'Karir', icon: 'work' },
                            { href: '/cek-sertifikat', label: 'Cek Sertifikat', icon: 'verified' },
                            { href: '/kontak', label: 'Kontak', icon: 'call' },
                        ].map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`font-heading font-semibold text-base py-3 px-4 rounded-lg transition-colors flex items-center gap-3 ${isActive(item.href) ? 'text-safety-orange bg-surface-gray' : 'text-on-surface-variant hover:bg-surface-gray'}`}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{item.icon}</span>
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-4 pt-4 border-t border-outline-variant">
                            <Link href="/kontak" onClick={() => setMobileMenuOpen(false)} className="btn-prosafe-primary w-full justify-center text-base py-3.5">
                                Konsultasi Gratis
                            </Link>
                        </div>
                    </nav>
                </div>
            )}

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 w-full z-40 bg-white border-t border-outline-variant/60 pb-safe flex justify-around items-center py-1.5 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
                {[
                    { href: '/', icon: 'home', label: 'Home' },
                    { href: '/pelatihan/kemnaker', icon: 'engineering', label: 'Pelatihan' },
                    { href: '/jadwal', icon: 'calendar_month', label: 'Jadwal' },
                    { href: '/corporate', icon: 'business', label: 'Corporate' },
                    { href: '/kontak', icon: 'support_agent', label: 'Kontak' },
                ].map(item => {
                    const active = isActive(item.href);
                    return (
                        <Link key={item.href} href={item.href} className={`flex flex-col items-center ${active ? 'text-safety-orange' : 'text-text-secondary'}`}>
                            <span className={`material-symbols-outlined ${active ? 'icon-fill' : ''}`} style={{ fontSize: '22px' }}>{item.icon}</span>
                            <span className="text-[10px] font-semibold mt-0.5">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
