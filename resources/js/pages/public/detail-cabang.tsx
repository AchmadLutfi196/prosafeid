import { Head, Link } from '@inertiajs/react';
import { branches } from '@/data/mockData';

export default function DetailCabang({ city }: { city: string }) {
    const branch = branches.find(b => b.id === city);

    if (!branch) {
        return (
            <>
                <Head title="Cabang Tidak Ditemukan │ ProSafe Indonesia" />
                <section className="py-20 px-6 text-center">
                    <span className="material-symbols-outlined text-outline text-6xl mb-4">location_off</span>
                    <h1 className="font-heading text-2xl font-bold text-deep-navy mb-3">Cabang Tidak Ditemukan</h1>
                    <p className="text-on-surface-variant mb-6">Cabang yang Anda cari tidak tersedia.</p>
                    <Link href="/cabang" className="btn-prosafe-secondary inline-flex text-sm">
                        <span className="material-symbols-outlined">arrow_back</span> Lihat Semua Cabang
                    </Link>
                </section>
            </>
        );
    }

    // Default map embed fallback if not provided in data
    const defaultMapEmbed = `https://maps.google.com/maps?q=ProSafe%20Indonesia%20${branch.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <>
            <Head title={`Cabang ${branch.name} │ ProSafe Indonesia`}>
                <meta name="description" content={`Kantor ${branch.type} ProSafe Indonesia di ${branch.name}. ${branch.address}. Program pelatihan K3: ${branch.programs.join(', ')}.`} />
                <meta property="og:title" content={`Cabang ${branch.name} │ ProSafe Indonesia`} />
                <meta property="og:description" content={`Kantor ${branch.type} ProSafe Indonesia di ${branch.name}. ${branch.address}. Program pelatihan K3: ${branch.programs.join(', ')}.`} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": `ProSafe Indonesia ${branch.name}`,
                        "image": "https://prosafe.co.id/images/logo-prosafe.png",
                        "telephone": branch.phone,
                        "email": branch.email,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": branch.address,
                            "addressLocality": branch.name,
                            "addressCountry": "ID"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "08:00",
                            "closes": "17:00"
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
                                "name": "Cabang",
                                "item": "https://prosafe.co.id/cabang"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": branch.name,
                                "item": `https://prosafe.co.id/cabang/${branch.id}`
                            }
                        ]
                    })}
                </script>
            </Head>

            {/* Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-10 md:py-14">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-safety-orange/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-primary-fixed-dim text-xs mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <Link href="/cabang" className="hover:text-white transition-colors">Cabang</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-white font-medium">{branch.name}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">ProSafe {branch.name}</h1>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-sm bg-safety-orange text-white`}>
                            {branch.type}
                        </span>
                    </div>
                    <p className="text-base md:text-lg text-primary-fixed-dim mt-3 max-w-2xl">
                        Pusat pelatihan keselamatan kerja K3, Sertifikasi BNSP, dan Pembinaan Kemnaker RI untuk wilayah {branch.name} dan sekitarnya.
                    </p>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Interactive Google Map iframe */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-outline-variant/60 shadow-sm h-96 relative">
                            <iframe 
                                title={`Peta Lokasi ProSafe ${branch.name}`}
                                src={branch.mapEmbed || defaultMapEmbed}
                                className="w-full h-full border-0 absolute inset-0"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Available Programs */}
                        <div>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-safety-orange">workspace_premium</span>
                                Program Sertifikasi Tersedia
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {branch.programs.map(p => (
                                    <Link 
                                        key={p} 
                                        href="/pelatihan/kemnaker" 
                                        className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-outline-variant/60 hover:border-safety-orange/40 hover:shadow-md transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-surface-gray flex items-center justify-center shrink-0 group-hover:bg-safety-orange/10 group-hover:text-safety-orange transition-colors">
                                            <span className="material-symbols-outlined text-deep-navy group-hover:text-safety-orange">engineering</span>
                                        </div>
                                        <div>
                                            <p className="font-heading font-semibold text-deep-navy group-hover:text-safety-orange transition-colors leading-tight">{p}</p>
                                            <p className="text-[11px] text-text-secondary mt-1 font-medium">Lihat Detail Jadwal & Biaya →</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Facilities */}
                        <div>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-safety-orange">meeting_room</span>
                                Fasilitas Training Center
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { name: 'Ruang Kelas Full AC', icon: 'ac_unit' },
                                    { name: 'Area Praktik K3', icon: 'construction' },
                                    { name: 'Alat Peraga Lengkap', icon: 'medical_services' },
                                    { name: 'Wi-Fi Kecepatan Tinggi', icon: 'wifi' },
                                    { name: 'Lahan Parkir Luas', icon: 'local_parking' },
                                    { name: 'Musholla & Toilet Bersih', icon: 'clean_hands' }
                                ].map(f => (
                                    <div 
                                        key={f.name} 
                                        className="flex items-center gap-2.5 text-sm text-on-surface-variant bg-surface-gray rounded-xl p-3 border border-outline-variant/50 font-medium"
                                    >
                                        <span className="material-symbols-outlined text-safety-orange text-lg">{f.icon}</span> 
                                        <span>{f.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/60 shadow-sm sticky top-24">
                            <h3 className="font-heading text-lg font-bold text-deep-navy mb-5 flex items-center gap-2 pb-3 border-b border-outline-variant/60">
                                <span className="material-symbols-outlined text-safety-orange">contact_support</span>
                                Hubungi Cabang
                            </h3>
                            <ul className="space-y-5 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-safety-orange text-lg shrink-0 mt-0.5">location_on</span>
                                    <span className="text-sm text-on-surface-variant leading-relaxed font-medium">{branch.address}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-safety-orange text-lg shrink-0">call</span>
                                    <a href={`tel:${branch.phone}`} className="text-sm text-on-surface-variant hover:text-safety-orange font-semibold transition-colors">{branch.phone}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-safety-orange text-lg shrink-0">mail</span>
                                    <a href={`mailto:${branch.email}`} className="text-sm text-on-surface-variant hover:text-safety-orange font-semibold transition-colors">{branch.email}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-safety-orange text-lg shrink-0">schedule</span>
                                    <span className="text-sm text-on-surface-variant font-medium">{branch.hours}</span>
                                </li>
                            </ul>
                            
                            <div className="space-y-3">
                                <a 
                                    href={`https://wa.me/6281222998847?text=Halo%20ProSafe%20${branch.name}%2C%20saya%20ingin%20bertanya%20tentang%20pelatihan%20K3`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-prosafe-primary w-full justify-center text-sm shadow-md"
                                >
                                    <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326z"/>
                                    </svg>
                                    Chat via WhatsApp
                                </a>
                                <Link 
                                    href="/pendaftaran" 
                                    className="btn-prosafe-secondary w-full justify-center text-sm"
                                >
                                    <span className="material-symbols-outlined text-lg">app_registration</span>
                                    Formulir Pendaftaran
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
