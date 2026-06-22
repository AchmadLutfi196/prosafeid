import { Head } from '@inertiajs/react';

export default function Galeri() {
    const images = [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_LezpZvBlUQJnh_aglc-ALGkFFTe4Jox0pmmkokNKUYcBh4vCIE1QM2PG5lgRFaiChPir2uKHt_lQbVvLIHjD0fMMnGubQ-HIdCsrkaGYDu3HDDhpA_XYchJEDSu0mGBGup_fKp62cUW0enYHofRhSK6xdT3QSGe9EKrAlPsQiJ_bwg39R9Tdqst4K6jEVGDCFOLmJoaOMGtTp_-_wRV9ORGE2qJTbWRtEwKQWgL-AIIlbgWEr6iziCH4Avi6d9OMuN6A5V-RUkE', caption: 'Pelatihan AK3 Umum Batch 45 - Jakarta' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49', caption: 'Praktek Kebakaran - Surabaya' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMy4zd_h2un2qwm9jz4YTJTASi7mJGlgTkD8Sw2Yp2y9dQnDNdRUX9C_SO1shj136hG8wMybMlmfmAtNslHa75LRLfHn4BLsbfCyAC3d7FupTw_JMyC1GmAAglkJmuQyxjm0FV84MGNvmCOxNO_3KcIW0C80DVyn2D8vW1H1gAR_TzcCoS-4aekpjRtzUwdQdasmCFAbX-7ISaOr-ZMctWArVI4TK7xh2l43v0t7LlHl0NqGbJsbdX8RMEw4AQzLuIh13WXi3P4ll', caption: 'Sertifikasi BNSP - Balikpapan' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_LezpZvBlUQJnh_aglc-ALGkFFTe4Jox0pmmkokNKUYcBh4vCIE1QM2PG5lgRFaiChPir2uKHt_lQbVvLIHjD0fMMnGubQ-HIdCsrkaGYDu3HDDhpA_XYchJEDSu0mGBGup_fKp62cUW0enYHofRhSK6xdT3QSGe9EKrAlPsQiJ_bwg39R9Tdqst4K6jEVGDCFOLmJoaOMGtTp_-_wRV9ORGE2qJTbWRtEwKQWgL-AIIlbgWEr6iziCH4Avi6d9OMuN6A5V-RUkE', caption: 'Fasilitas Pusat Pelatihan Surabaya' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqyKcQY9gpntiRfAOpKbsV-wa2c67lnRTK6Ej7Rg2MKZqO1HJFU4F5LFpULQ5rcWj4XjDY-JqTjMKKbjShoDr3bP-XN2Omi92EQfxJrhL1Zb5zBU1wCml69VtsinDLo1_NM9PvWjv9KQc3Kam-GkQ_r5LrgAf0JvAiYExrOWLHXHHKGvHQ3jGSMbOO29MaXPqqh0jCV9MxAY96v38wN7zbfIKAW-b9VfW3R_wctwp51-tOOWRbE_U3XmfdqhSULkVa2l4fs7uALP49', caption: 'Penyerahan Sertifikat - PT Pertamina' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMy4zd_h2un2qwm9jz4YTJTASi7mJGlgTkD8Sw2Yp2y9dQnDNdRUX9C_SO1shj136hG8wMybMlmfmAtNslHa75LRLfHn4BLsbfCyAC3d7FupTw_JMyC1GmAAglkJmuQyxjm0FV84MGNvmCOxNO_3KcIW0C80DVyn2D8vW1H1gAR_TzcCoS-4aekpjRtzUwdQdasmCFAbX-7ISaOr-ZMctWArVI4TK7xh2l43v0t7LlHl0NqGbJsbdX8RMEw4AQzLuIh13WXi3P4ll', caption: 'Pelatihan K3 Listrik Batch 12' },
    ];

    return (
        <>
            <Head title="Galeri Kegiatan - ProSafe Indonesia" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Galeri Kegiatan</h1>
                    <p className="text-lg text-primary-fixed-dim">Dokumentasi pelatihan dan kegiatan ProSafe Indonesia.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className="break-inside-avoid mb-6 group rounded-xl overflow-hidden border border-outline-variant hover:shadow-lg transition-all cursor-pointer relative">
                            <img src={img.src} alt={img.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ height: `${250 + (idx % 3) * 80}px` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <p className="text-white font-heading text-sm font-semibold">{img.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
