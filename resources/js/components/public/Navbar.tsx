import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="hidden lg:block fixed top-0 w-full z-50 bg-deep-navy text-white/80 text-xs">
                <div className="max-w-[1280px] mx-auto px-6 py-1.5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">call</span> +62 31 555 1234</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">mail</span> info@prosafe.co.id</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">schedule</span> Senin-Jumat 08:00 - 17:00 WIB</span>
                        <Link href="/cek-sertifikat" className="hover:text-safety-orange transition-colors">Cek Sertifikat</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="fixed top-0 lg:top-7 w-full z-50 bg-white border-b border-outline-variant/60 shadow-sm">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0">
                        <img src="/images/logo-prosafe.png" alt="ProSafe Indonesia" className="h-9 w-9 object-contain" />
                        <div className="hidden sm:block leading-tight">
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
                            <button className="flex items-center gap-1 px-3 py-2 text-sm font-heading font-semibold text-on-surface-variant hover:text-deep-navy hover:bg-surface-gray rounded-md transition-colors">
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
                                                <Link href={item.href} className="flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm text-on-surface hover:bg-surface-gray hover:text-safety-orange transition-colors group">
                                                    <span className="material-symbols-outlined text-deep-navy group-hover:text-safety-orange transition-colors" style={{ fontSize: '20px' }}>{item.icon}</span>
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
                            { href: '/blog', label: 'Blog' },
                            { href: '/kontak', label: 'Kontak' },
                        ].map(item => (
                            <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-heading font-semibold text-on-surface-variant hover:text-deep-navy hover:bg-surface-gray rounded-md transition-colors whitespace-nowrap">
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA + Search */}
                    <div className="hidden lg:flex items-center gap-2 ml-auto">
                        <div className="flex items-center border border-outline-variant rounded-full px-3 py-1.5 bg-surface-gray/60 hover:bg-surface-gray transition-colors">
                            <span className="material-symbols-outlined text-text-secondary mr-1.5" style={{ fontSize: '18px' }}>search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-24 outline-none placeholder:text-text-secondary/70" placeholder="Cari..." type="text" />
                        </div>
                        <Link href="/kontak" className="bg-safety-orange text-white font-heading text-sm font-semibold px-5 py-2 rounded-lg hover:bg-safety-orange/90 transition-all shadow-sm hover:shadow-md whitespace-nowrap">
                            Konsultasi Gratis
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-deep-navy p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>{mobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto lg:hidden">
                    <nav className="flex flex-col p-5 gap-0.5">
                        {[
                            { href: '/', label: 'Beranda', active: true },
                            { href: '/pelatihan/kemnaker', label: 'Pelatihan K3' },
                            { href: '/jadwal', label: 'Jadwal Training' },
                            { href: '/corporate', label: 'Corporate' },
                            { href: '/tentang-kami', label: 'Tentang Kami' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/galeri', label: 'Galeri' },
                            { href: '/kontak', label: 'Kontak' },
                        ].map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`font-heading font-semibold text-base py-3 px-4 rounded-lg transition-colors ${item.active ? 'text-deep-navy bg-surface-gray' : 'text-on-surface-variant hover:bg-surface-gray'}`}>
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-outline-variant">
                            <Link href="/kontak" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-safety-orange text-white font-heading text-base font-bold py-3.5 rounded-lg text-center shadow-sm">
                                Konsultasi Gratis
                            </Link>
                        </div>
                    </nav>
                </div>
            )}

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 w-full z-40 bg-white border-t border-outline-variant/60 pb-safe flex justify-around items-center py-1.5 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
                {[
                    { href: '/', icon: 'home', label: 'Home', active: true },
                    { href: '/pelatihan/kemnaker', icon: 'engineering', label: 'Pelatihan', active: false },
                    { href: '/jadwal', icon: 'calendar_month', label: 'Jadwal', active: false },
                    { href: '/corporate', icon: 'business', label: 'Corporate', active: false },
                    { href: '/kontak', icon: 'support_agent', label: 'Kontak', active: false },
                ].map(item => (
                    <Link key={item.href} href={item.href} className={`flex flex-col items-center ${item.active ? 'text-safety-orange' : 'text-text-secondary'}`}>
                        <span className={`material-symbols-outlined ${item.active ? 'icon-fill' : ''}`} style={{ fontSize: '22px' }}>{item.icon}</span>
                        <span className="text-[10px] font-semibold mt-0.5">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
}
