import { Link, Head } from '@inertiajs/react';
import { careerListings } from '@/data/mockData';

export default function Karir() {
    return (
        <>
            <Head title="Karir │ ProSafe Indonesia">
                <meta name="description" content="Bergabunglah dengan tim ProSafe Indonesia. Temukan lowongan pekerjaan di bidang K3, marketing, dan operasional." />
            </Head>

            {/* Hero */}
            <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 px-6 bg-surface-gray border-b border-outline-variant">
                <div className="max-w-[1280px] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-outline-variant rounded-full mb-4">
                        <span className="material-symbols-outlined text-safety-orange text-sm">work</span>
                        <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Karir</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-4">Bergabung dengan Tim ProSafe Indonesia</h1>
                    <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                        Kami mencari talenta terbaik yang memiliki passion di bidang keselamatan kerja. Jadilah bagian dari misi kami membangun budaya K3 yang lebih baik di Indonesia.
                    </p>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-16 px-6 max-w-[1280px] mx-auto">
                <h2 className="font-heading text-2xl font-bold text-deep-navy text-center mb-10">Mengapa Bergabung dengan Kami?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: 'trending_up', title: 'Jenjang Karir Jelas', desc: 'Pengembangan kompetensi dan sertifikasi profesional yang berkelanjutan.' },
                        { icon: 'groups', title: 'Tim Profesional', desc: 'Bekerja bersama praktisi K3 berpengalaman dan bersertifikasi nasional.' },
                        { icon: 'volunteer_activism', title: 'Dampak Nyata', desc: 'Kontribusi langsung dalam mengurangi risiko kecelakaan kerja di Indonesia.' },
                    ].map(item => (
                        <div key={item.title} className="bg-white rounded-xl p-8 border border-outline-variant text-center card-hover group">
                            <div className="w-14 h-14 mx-auto rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-deep-navy text-2xl group-hover:text-safety-orange transition-colors">{item.icon}</span>
                            </div>
                            <h3 className="font-heading font-semibold text-deep-navy mb-2">{item.title}</h3>
                            <p className="text-sm text-on-surface-variant">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lowongan */}
            <section className="py-16 px-6 bg-surface-gray border-y border-outline-variant">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-8">Lowongan Tersedia</h2>
                    <div className="space-y-4">
                        {careerListings.map(job => (
                            <div key={job.id} className="bg-white rounded-xl p-6 border border-outline-variant card-hover">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-deep-navy">{job.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary bg-surface-gray px-2.5 py-1 rounded-full border border-outline-variant">
                                                <span className="material-symbols-outlined text-xs">location_on</span> {job.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary bg-surface-gray px-2.5 py-1 rounded-full border border-outline-variant">
                                                <span className="material-symbols-outlined text-xs">schedule</span> {job.type}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary bg-surface-gray px-2.5 py-1 rounded-full border border-outline-variant">
                                                <span className="material-symbols-outlined text-xs">apartment</span> {job.department}
                                            </span>
                                        </div>
                                    </div>
                                    <a href={`https://wa.me/6281222998847?text=Halo%20ProSafe,%20saya%20tertarik%20melamar%20posisi%20${encodeURIComponent(job.title)}`} target="_blank" rel="noopener noreferrer" className="btn-prosafe-primary shrink-0 text-sm">
                                        <span className="material-symbols-outlined text-lg">send</span> Lamar Sekarang
                                    </a>
                                </div>
                                <p className="text-sm text-on-surface-variant mb-3">{job.description}</p>
                                <div>
                                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Persyaratan:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                        {job.requirements.map((req, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                                                <span className="material-symbols-outlined text-safety-orange text-sm mt-0.5">check</span> {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-xs text-text-secondary mt-3">Diposting: {job.postedDate}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="font-heading text-2xl font-bold text-deep-navy mb-4">Tidak Menemukan Posisi yang Sesuai?</h2>
                    <p className="text-on-surface-variant mb-6 max-w-xl mx-auto">Kirimkan CV dan surat lamaran Anda ke email kami. Kami akan menghubungi Anda jika ada posisi yang sesuai.</p>
                    <a href="mailto:karir@prosafe.co.id" className="inline-flex items-center gap-2 bg-deep-navy text-white font-heading font-semibold px-8 py-4 rounded-xl hover:bg-deep-navy/90 shadow-md hover:shadow-lg active:scale-[0.98]">
                        <span className="material-symbols-outlined">mail</span> karir@prosafe.co.id
                    </a>
                </div>
            </section>
        </>
    );
}
