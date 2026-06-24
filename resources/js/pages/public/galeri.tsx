import { Head } from '@inertiajs/react';
import { useState } from 'react';

interface GalleryItem {
    src: string;
    caption: string;
    category: 'pelatihan' | 'praktek' | 'fasilitas' | 'corporate';
    categoryLabel: string;
}

export default function Galeri() {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const images: GalleryItem[] = [
        { 
            src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_LezpZvBlUQJnh_aglc-ALGkFFTe4Jox0pmmkokNKUYcBh4vCIE1QM2PG5lgRFaiChPir2uKHt_lQbVvLIHjD0fMMnGubQ-HIdCsrkaGYDu3HDDhpA_XYchJEDSu0mGBGup_fKp62cUW0enYHofRhSK6xdT3QSGe9EKrAlPsQiJ_bwg39R9Tdqst4K6jEVGDCFOLmJoaOMGtTp_-_wRV9ORGE2qJTbWRtEwKQWgL-AIIlbgWEr6iziCH4Avi6d9OMuN6A5V-RUkE', 
            caption: 'Pelatihan AK3 Umum Batch 45 - Jakarta',
            category: 'pelatihan',
            categoryLabel: 'Sertifikasi K3'
        },
        { 
            src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49', 
            caption: 'Praktek Penanggulangan Kebakaran - Surabaya',
            category: 'praktek',
            categoryLabel: 'Praktek Lapangan'
        },
        { 
            src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMy4zd_h2un2qwm9jz4YTJTASi7mJGlgTkD8Sw2Yp2y9dQnDNdRUX9C_SO1shj136hG8wMybMlmfmAtNslHa75LRLfHn4BLsbfCyAC3d7FupTw_JMyC1GmAAglkJmuQyxjm0FV84MGNvmCOxNO_3KcIW0C80DVyn2D8vW1H1gAR_TzcCoS-4aekpjRtzUwdQdasmCFAbX-7ISaOr-ZMctWArVI4TK7xh2l43v0t7LlHl0NqGbJsbdX8RMEw4AQzLuIh13WXi3P4ll', 
            caption: 'Uji Kompetensi K3 BNSP - Balikpapan',
            category: 'pelatihan',
            categoryLabel: 'Sertifikasi K3'
        },
        { 
            src: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80', 
            caption: 'Fasilitas & Ruang Kelas Pusat Pelatihan Surabaya',
            category: 'fasilitas',
            categoryLabel: 'Fasilitas'
        },
        { 
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', 
            caption: 'In-House Training & Penyerahan Sertifikat - Corporate Klien',
            category: 'corporate',
            categoryLabel: 'Layanan Corporate'
        },
        { 
            src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', 
            caption: 'Pendidikan & Praktek K3 Listrik Batch 12',
            category: 'pelatihan',
            categoryLabel: 'Sertifikasi K3'
        },
    ];

    const filters = [
        { id: 'all', label: 'Semua Kegiatan' },
        { id: 'pelatihan', label: 'Sertifikasi K3' },
        { id: 'praktek', label: 'Praktek Lapangan' },
        { id: 'fasilitas', label: 'Fasilitas' },
        { id: 'corporate', label: 'Layanan Corporate' }
    ];

    const filteredImages = activeFilter === 'all' 
        ? images 
        : images.filter(img => img.category === activeFilter);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
        }
    };

    return (
        <>
            <Head title="Galeri Kegiatan │ ProSafe Indonesia">
                <meta name="description" content="Dokumentasi foto dan video kegiatan pelatihan K3, praktek lapangan, sertifikasi BNSP, dan training corporate di ProSafe Indonesia." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-20">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safety-orange/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs">photo_library</span> Dokumentasi Visual
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Galeri Kegiatan Kami</h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl mx-auto">
                        Melihat lebih dekat kegiatan pelatihan, praktek lapangan, dan suasana kelas di berbagai cabang ProSafe Indonesia.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <div className="bg-surface-gray py-16">
                <div className="max-w-[1280px] mx-auto px-6">
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeFilter === filter.id
                                        ? 'bg-deep-navy text-white shadow-md shadow-deep-navy/15'
                                        : 'bg-white text-on-surface-variant hover:bg-white-hover border border-outline-variant'
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    {filteredImages.length > 0 ? (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                            {filteredImages.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setSelectedImageIndex(idx)}
                                    className="break-inside-avoid mb-6 group rounded-2xl overflow-hidden border border-outline-variant/60 bg-white card-hover cursor-pointer relative shadow-sm"
                                >
                                    <div className="relative overflow-hidden">
                                        <img 
                                            src={img.src} 
                                            alt={img.caption} 
                                            className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                            style={{ height: `${280 + (idx % 3) * 60}px` }} 
                                        />
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-deep-navy/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                                {img.categoryLabel}
                                            </span>
                                        </div>
                                        {/* Overlay Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-safety-orange mb-2 text-2xl">zoom_in</span>
                                                <p className="text-white font-heading text-base font-bold mb-1 leading-snug">
                                                    {img.caption}
                                                </p>
                                                <p className="text-white/70 text-xs font-medium">Klik untuk memperbesar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-outline-variant">
                            <span className="material-symbols-outlined text-outline-variant text-5xl mb-3">image_search</span>
                            <p className="text-text-secondary text-sm">Tidak ada dokumentasi untuk kategori ini.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    {/* Close button */}
                    <button 
                        className="absolute top-6 right-6 text-white/75 hover:text-white transition-colors p-2"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>

                    {/* Navigation Buttons */}
                    <button 
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                        onClick={handlePrev}
                    >
                        <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                    </button>
                    <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                        onClick={handleNext}
                    >
                        <span className="material-symbols-outlined text-2xl">arrow_forward_ios</span>
                    </button>

                    {/* Lightbox Image Container */}
                    <div 
                        className="max-w-4xl max-h-[75vh] w-full flex justify-center items-center relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={filteredImages[selectedImageIndex].src} 
                            alt={filteredImages[selectedImageIndex].caption} 
                            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" 
                        />
                    </div>

                    {/* Caption bar */}
                    <div className="text-center mt-6 max-w-2xl px-6" onClick={(e) => e.stopPropagation()}>
                        <span className="bg-safety-orange text-deep-navy text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded inline-block mb-2">
                            {filteredImages[selectedImageIndex].categoryLabel}
                        </span>
                        <h3 className="text-white text-lg font-heading font-semibold leading-relaxed">
                            {filteredImages[selectedImageIndex].caption}
                        </h3>
                        <p className="text-white/40 text-xs mt-1">
                            Foto {selectedImageIndex + 1} dari {filteredImages.length}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
