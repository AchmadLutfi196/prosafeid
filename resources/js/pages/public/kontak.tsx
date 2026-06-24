import { Head, Link } from '@inertiajs/react';
import { branches } from '@/data/mockData';
import { useState, useEffect } from 'react';
import CustomSelect from '@/components/public/CustomSelect';

export default function Kontak() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('Informasi Pelatihan');
    const [liveStatus, setLiveStatus] = useState<{ open: boolean; text: string } | null>(null);
    const [activeBranchId, setActiveBranchId] = useState('surabaya');

    const activeBranch = branches.find(b => b.id === activeBranchId) || branches[0];

    useEffect(() => {
        const getStatus = () => {
            const now = new Date();
            // Convert to WIB (GMT+7)
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const wib = new Date(utc + (3600000 * 7));
            const day = wib.getDay(); // 0: Sunday, 1: Monday, ... 6: Saturday
            const hour = wib.getHours();
            const minute = wib.getMinutes();
            const timeVal = hour * 100 + minute;

            if (day >= 1 && day <= 5) { // Mon-Fri
                if (timeVal >= 800 && timeVal < 1700) return { open: true, text: 'Buka Sekarang' };
            } else if (day === 6) { // Sat
                if (timeVal >= 800 && timeVal < 1200) return { open: true, text: 'Buka Sekarang' };
            }
            return { open: false, text: 'Tutup' };
        };
        setLiveStatus(getStatus());

        const interval = setInterval(() => {
            setLiveStatus(getStatus());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
        }, 800);
    };

    return (
        <>
            <Head title="Hubungi Kami │ ProSafe Indonesia">
                <meta name="description" content="Hubungi ProSafe Indonesia untuk informasi pelatihan K3, sertifikasi BNSP, dan konsultasi. Kantor pusat Surabaya, cabang Jakarta, Semarang, Balikpapan." />
            </Head>

            {/* Header Hero */}
            <section className="bg-deep-navy relative overflow-hidden py-12 md:py-16">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-safety-orange/10 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-safety-orange/10 text-safety-orange uppercase tracking-wider mb-4 border border-safety-orange/20">
                        <span className="material-symbols-outlined text-xs">support_agent</span> Layanan Responsif & Profesional
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
                    <p className="text-base md:text-lg text-primary-fixed-dim max-w-2xl mx-auto">
                        Konsultasikan kebutuhan pelatihan K3, sertifikasi kompetensi, atau in-house training perusahaan Anda dengan tim marketing ahli kami.
                    </p>
                </div>
            </section>

            {/* Content Body */}
            <div className="bg-surface-gray pt-6 sm:pt-10 pb-16">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
                    
                    {/* Top Grid (Form & Hotline + hours) */}
                    <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                        
                        {/* Form Column (7 Cols) */}
                        <div className="lg:col-span-7 bg-white rounded-3xl border border-outline-variant/65 p-4 sm:p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                            {formSubmitted ? (
                                <div className="text-center py-12 sm:py-16">
                                    <div className="w-16 h-16 bg-wa-green/10 text-wa-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                        <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
                                    </div>
                                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-2">Pesan Berhasil Terkirim</h2>
                                    <p className="text-sm text-on-surface-variant mb-8 max-w-md mx-auto leading-relaxed">
                                        Terima kasih atas pesan Anda. Tim Customer Service ProSafe Indonesia akan segera menghubungi Anda kembali melalui WhatsApp atau email resmi dalam kurun waktu 1x24 jam.
                                    </p>
                                    <button onClick={() => setFormSubmitted(false)} className="btn-prosafe-secondary text-sm px-8 py-3 rounded-xl">
                                        Kirim Pesan Lainnya
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                    <div>
                                        <h2 className="font-heading text-xl md:text-2xl font-bold text-deep-navy mb-1">Kirim Pesan Langsung</h2>
                                        <p className="text-xs text-text-secondary">Silakan lengkapi formulir di bawah ini, admin kami akan merespons pertanyaan Anda.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                                        <div>
                                            <label htmlFor="input_name" className="text-[11px] font-bold text-deep-navy uppercase tracking-wider mb-2 block">Nama Lengkap</label>
                                            <div className="input-prosafe-icon-wrapper group">
                                                <span className="material-symbols-outlined text-outline group-focus-within:text-safety-orange transition-colors">person</span>
                                                <input required type="text" id="input_name" name="name" autoComplete="name" className="input-prosafe text-sm w-full focus:border-safety-orange focus:ring-4 focus:ring-safety-orange/10" placeholder="Nama Lengkap Anda" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="input_company" className="text-[11px] font-bold text-deep-navy uppercase tracking-wider mb-2 block">Nama Perusahaan</label>
                                            <div className="input-prosafe-icon-wrapper group">
                                                <span className="material-symbols-outlined text-outline group-focus-within:text-safety-orange transition-colors">business</span>
                                                <input required type="text" id="input_company" name="company" autoComplete="organization" className="input-prosafe text-sm w-full focus:border-safety-orange focus:ring-4 focus:ring-safety-orange/10" placeholder="PT. Maju Jaya Bersama" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                                        <div>
                                            <label htmlFor="input_email" className="text-[11px] font-bold text-deep-navy uppercase tracking-wider mb-2 block">Alamat Email</label>
                                            <div className="input-prosafe-icon-wrapper group">
                                                <span className="material-symbols-outlined text-outline group-focus-within:text-safety-orange transition-colors">mail</span>
                                                <input required type="email" id="input_email" name="email" autoComplete="email" spellCheck="false" className="input-prosafe text-sm w-full focus:border-safety-orange focus:ring-4 focus:ring-safety-orange/10" placeholder="email@perusahaan.com" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="input_phone" className="text-[11px] font-bold text-deep-navy uppercase tracking-wider mb-2 block">No. WhatsApp</label>
                                            <div className="input-prosafe-icon-wrapper group">
                                                <span className="material-symbols-outlined text-outline group-focus-within:text-safety-orange transition-colors">chat</span>
                                                <input required type="tel" id="input_phone" name="phone" autoComplete="tel" className="input-prosafe text-sm w-full focus:border-safety-orange focus:ring-4 focus:ring-safety-orange/10" placeholder="Contoh: 081234567890" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-deep-navy uppercase tracking-wider mb-2 block">Subjek Pesan</label>
                                        <CustomSelect
                                            value={selectedSubject}
                                            onChange={setSelectedSubject}
                                            placeholder="Pilih Subjek Pesan"
                                            icon="school"
                                            required
                                            name="subject"
                                            options={[
                                                { value: 'Informasi Pelatihan', label: 'Informasi Pelatihan', sublabel: 'Pertanyaan seputar pendaftaran & jadwal public class' },
                                                { value: 'Inhouse Training', label: 'Inhouse Training', sublabel: 'Permintaan pelatihan khusus di lokasi perusahaan Anda' },
                                                { value: 'Konsultasi K3', label: 'Konsultasi K3', sublabel: 'Pendampingan audit, sertifikasi, & manajemen K3' },
                                                { value: 'Kerjasama', label: 'Kerjasama', sublabel: 'Kolaborasi program, vendor, & kemitraan strategis' },
                                                { value: 'Lainnya', label: 'Lainnya', sublabel: 'Hal-hal lainnya yang ingin ditanyakan' }
                                            ]}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="input_message" className="text-[11px] font-bold text-deep-navy uppercase tracking-wider mb-2 block">Detail Pesan / Kebutuhan</label>
                                        <div className="input-prosafe-icon-wrapper group">
                                            <span className="material-symbols-outlined textarea-icon text-outline group-focus-within:text-safety-orange transition-colors">edit_note</span>
                                            <textarea required id="input_message" name="message" rows={5} className="input-prosafe text-sm w-full resize-none focus:border-safety-orange focus:ring-4 focus:ring-safety-orange/10" placeholder="Jelaskan secara detail program pelatihan K3 yang Anda tanyakan..." />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="btn-prosafe-primary w-full justify-center py-4 text-base shadow-md hover:shadow-lg hover:shadow-safety-orange/15 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Mengirim Pesan...
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-symbols-outlined text-lg mr-1.5">send</span> Kirim Pesan Sekarang
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Direct Contacts & Hours Stack (5 Cols) */}
                        <div className="lg:col-span-5 space-y-6">
                            
                            {/* Direct Contact Deck */}
                            <div className="bg-white rounded-3xl border border-outline-variant/65 p-4 sm:p-6 md:p-8 shadow-sm">
                                <h3 className="font-heading font-bold text-deep-navy text-lg mb-5 pb-3 border-b border-outline-variant/50">Hubungi Hotline Kami</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: 'call', label: 'Hubungi Telepon', value: '+62 812-2299-8847', href: 'tel:+6281222998847' },
                                        { icon: 'mail', label: 'Email Pemasaran', value: 'prosafeindonesia@gmail.com', href: 'mailto:prosafeindonesia@gmail.com' },
                                        { icon: 'chat', label: 'Hotline WhatsApp', value: '0812-2299-8847', href: 'https://wa.me/6281222998847' },
                                    ].map(c => (
                                        <a 
                                            key={c.icon} 
                                            href={c.href} 
                                            target={c.icon === 'chat' ? '_blank' : undefined}
                                            rel={c.icon === 'chat' ? 'noopener noreferrer' : undefined}
                                            className="group flex items-center justify-between p-3.5 sm:p-4 bg-surface-gray hover:bg-gradient-to-br hover:from-white hover:to-safety-orange/5 border border-outline-variant/50 hover:border-safety-orange/30 rounded-2xl transition-all duration-300 hover:shadow-sm min-w-0"
                                        >
                                            <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-outline-variant/60 flex items-center justify-center shrink-0 text-deep-navy group-hover:bg-safety-orange group-hover:text-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-safety-orange/10 transition-all duration-300">
                                                    <span className="material-symbols-outlined text-base sm:text-lg">{c.icon}</span>
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="text-[9px] sm:text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-0.5">{c.label}</span>
                                                    <span className="font-heading font-bold text-xs sm:text-sm text-deep-navy group-hover:text-safety-orange transition-colors duration-200 truncate block">{c.value}</span>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-outline text-[10px] sm:text-xs group-hover:text-safety-orange group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-1">arrow_forward_ios</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Jam Operasional */}
                            <div className="bg-white rounded-3xl border border-outline-variant/65 p-4 sm:p-6 md:p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-5 pb-3 border-b border-outline-variant/50">
                                    <h3 className="font-heading font-bold text-deep-navy text-lg">Jam Operasional</h3>
                                    {liveStatus && (
                                        liveStatus.open ? (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-wa-green/10 text-wa-green border border-wa-green/20 uppercase tracking-wider">
                                                <span className="w-1.5 h-1.5 rounded-full bg-wa-green animate-pulse"></span> {liveStatus.text}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-text-secondary border border-outline-variant uppercase tracking-wider">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> {liveStatus.text}
                                            </span>
                                        )
                                    )}
                                </div>
                                <div className="space-y-3.5">
                                    {[
                                        { day: 'Senin - Jumat', hours: '08:00 - 17:00 WIB', desc: 'Layanan respons penuh' },
                                        { day: 'Sabtu', hours: '08:00 - 12:00 WIB', desc: 'Setengah hari kerja' },
                                        { day: 'Minggu / Hari Libur', hours: 'Tutup', desc: 'Libur Nasional', isClosed: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-2 border-b border-outline-variant/40 last:border-0 last:pb-0">
                                            <div>
                                                <span className="text-xs font-bold text-deep-navy block">{item.day}</span>
                                                <span className="text-[10px] text-text-secondary">{item.desc}</span>
                                            </div>
                                            <span className={`text-xs font-bold ${item.isClosed ? 'text-alert-red bg-alert-red/5 px-2.5 py-1 rounded-lg border border-alert-red/10' : 'text-deep-navy'}`}>{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Wide Section for Maps & Branch Networks */}
                    <div className="bg-white rounded-3xl border border-outline-variant/65 p-4 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="mb-6">
                            <h3 className="font-heading font-bold text-deep-navy text-xl md:text-2xl mb-1">Jaringan Kantor Cabang & Training Center</h3>
                            <p className="text-xs text-text-secondary">Pilih lokasi cabang untuk melihat peta interaktif, alamat lengkap, dan petunjuk arah ke kantor kami.</p>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                            {/* Branch Selection Panel (5 Cols) */}
                            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                                <div>
                                    <label className="text-[10px] font-bold text-deep-navy uppercase tracking-wider block mb-3">Pilih Lokasi Kantor</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {branches.map(b => (
                                            <button
                                                key={b.id}
                                                type="button"
                                                onClick={() => setActiveBranchId(b.id)}
                                                className={`group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer min-w-0 ${
                                                    activeBranchId === b.id
                                                        ? 'bg-safety-orange/5 border-safety-orange text-safety-orange shadow-sm'
                                                        : 'bg-surface-gray border-outline-variant/50 text-deep-navy hover:bg-white-hover hover:border-outline-variant/80'
                                                }`}
                                            >
                                                <span className={`material-symbols-outlined text-base sm:text-lg shrink-0 transition-colors ${
                                                    activeBranchId === b.id ? 'text-safety-orange' : 'text-text-secondary group-hover:text-deep-navy'
                                                }`}>
                                                    location_on
                                                </span>
                                                <div className="text-left min-w-0">
                                                    <p className="font-heading text-xs font-bold leading-tight truncate">{b.name}</p>
                                                    <p className={`text-[8px] font-bold tracking-wide uppercase mt-0.5 truncate ${
                                                        activeBranchId === b.id ? 'text-safety-orange/80' : 'text-text-secondary/80'
                                                    }`}>
                                                        {b.type}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Active Branch Address Details */}
                                <div className="space-y-4 bg-surface-gray/50 p-4 sm:p-5 rounded-2xl border border-outline-variant/40 text-xs flex-grow">
                                    <div className="flex items-start gap-2.5 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-safety-orange text-base shrink-0 mt-0.5">location_on</span>
                                        <div>
                                            <span className="font-bold text-deep-navy block mb-0.5">Alamat Kantor</span>
                                            <span className="leading-relaxed font-medium">{activeBranch.address}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-outline-variant/40">
                                        <div className="flex items-start gap-2 text-on-surface-variant">
                                            <span className="material-symbols-outlined text-safety-orange text-base shrink-0 mt-0.5">call</span>
                                            <div>
                                                <span className="font-bold text-deep-navy block mb-0.5">Nomor Telepon</span>
                                                <span className="font-medium">{activeBranch.phone}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2 text-on-surface-variant">
                                            <span className="material-symbols-outlined text-safety-orange text-base shrink-0 mt-0.5">mail</span>
                                            <div>
                                                <span className="font-bold text-deep-navy block mb-0.5">Alamat Email</span>
                                                <span className="font-medium break-all">{activeBranch.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    <Link
                                        href={`/cabang/${activeBranch.id}`}
                                        className="btn-prosafe-secondary py-3 text-[11px] justify-center rounded-xl cursor-pointer font-bold w-full"
                                    >
                                        <span className="material-symbols-outlined text-xs mr-1.5">info</span> Detail Cabang
                                    </Link>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=ProSafe+Indonesia+${activeBranch.name}+${encodeURIComponent(activeBranch.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-prosafe-primary py-3 text-[11px] justify-center bg-safety-orange text-white rounded-xl hover:shadow-md hover:shadow-safety-orange/10 cursor-pointer font-bold w-full"
                                    >
                                        <span className="material-symbols-outlined text-xs mr-1.5">directions</span> Petunjuk Arah
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps Embed Panel (7 Cols) */}
                            <div className="lg:col-span-7">
                                <div className="relative w-full h-[260px] sm:h-[320px] lg:h-full min-h-[250px] lg:min-h-[300px] rounded-2xl overflow-hidden border border-outline-variant/60 bg-surface-gray shadow-inner">
                                    <iframe
                                        src={activeBranch.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Peta Lokasi ProSafe ${activeBranch.name}`}
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
