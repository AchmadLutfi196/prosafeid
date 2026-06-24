import { Head } from '@inertiajs/react';

export default function KebijakanPrivasi() {
    return (
        <>
            <Head title="Kebijakan Privasi │ ProSafe Indonesia">
                <meta name="description" content="Kebijakan Privasi ProSafe Indonesia. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda." />
            </Head>

            <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 px-6">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-2">Kebijakan Privasi</h1>
                    <p className="text-sm text-text-secondary mb-10">Terakhir diperbarui: 1 Juni 2026</p>

                    <div className="prose-custom space-y-8">
                        <section>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">1. Pendahuluan</h2>
                            <p className="text-on-surface-variant leading-relaxed">ProSafe Indonesia ("kami") berkomitmen untuk melindungi privasi data pribadi Anda sesuai dengan Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP). Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda.</p>
                        </section>

                        <section>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">2. Data yang Kami Kumpulkan</h2>
                            <p className="text-on-surface-variant leading-relaxed mb-3">Kami mengumpulkan data pribadi berikut saat Anda menggunakan layanan kami:</p>
                            <ul className="space-y-2">
                                {['Nama lengkap, email, dan nomor telepon melalui formulir pendaftaran', 'Informasi perusahaan dan jabatan untuk keperluan pelatihan korporat', 'Data sertifikasi dan hasil ujian kompetensi', 'Informasi pembayaran untuk proses transaksi', 'Data penggunaan website melalui cookies dan analytics'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-safety-orange text-sm mt-1">check_circle</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">3. Tujuan Penggunaan Data</h2>
                            <p className="text-on-surface-variant leading-relaxed mb-3">Data pribadi Anda digunakan untuk:</p>
                            <ul className="space-y-2">
                                {['Memproses pendaftaran dan penyelenggaraan pelatihan', 'Menerbitkan sertifikat dan dokumen resmi', 'Mengirimkan informasi jadwal, promo, dan update pelatihan', 'Meningkatkan kualitas layanan dan pengalaman pengguna website', 'Memenuhi kewajiban hukum dan regulasi'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-safety-orange text-sm mt-1">check_circle</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">4. Perlindungan Data</h2>
                            <p className="text-on-surface-variant leading-relaxed">Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau pemusnahan. Termasuk penggunaan enkripsi SSL, kontrol akses, dan audit keamanan berkala.</p>
                        </section>

                        <section>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">5. Hak Anda</h2>
                            <p className="text-on-surface-variant leading-relaxed mb-3">Sesuai UU PDP, Anda memiliki hak untuk:</p>
                            <ul className="space-y-2">
                                {['Mengakses dan memperoleh salinan data pribadi Anda', 'Memperbarui atau memperbaiki data yang tidak akurat', 'Menghapus data pribadi Anda (dengan batasan tertentu)', 'Menarik persetujuan atas pemrosesan data', 'Mengajukan keberatan atas pemrosesan data'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-safety-orange text-sm mt-1">check_circle</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">6. Hubungi Kami</h2>
                            <p className="text-on-surface-variant leading-relaxed">Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di <a href="mailto:privacy@prosafe.co.id" className="text-safety-orange hover:underline font-semibold">privacy@prosafe.co.id</a> atau melalui halaman Kontak kami.</p>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}
