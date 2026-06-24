import { Head } from '@inertiajs/react';

export default function SyaratKetentuan() {
    return (
        <>
            <Head title="Syarat & Ketentuan │ ProSafe Indonesia">
                <meta name="description" content="Syarat dan Ketentuan penggunaan layanan pelatihan dan sertifikasi K3 ProSafe Indonesia." />
            </Head>

            <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 px-6">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-2">Syarat & Ketentuan</h1>
                    <p className="text-sm text-text-secondary mb-10">Terakhir diperbarui: 1 Juni 2026</p>

                    <div className="space-y-8">
                        {[
                            { title: '1. Ketentuan Umum', content: 'Dengan mengakses dan menggunakan website ProSafe Indonesia serta mendaftar layanan pelatihan kami, Anda menyetujui untuk terikat dengan syarat dan ketentuan berikut. ProSafe Indonesia berhak mengubah syarat ini sewaktu-waktu dengan pemberitahuan melalui website.' },
                            { title: '2. Pendaftaran Pelatihan', content: 'Pendaftaran pelatihan dilakukan melalui formulir di website, WhatsApp, atau email resmi. Pendaftaran dianggap sah setelah peserta menerima konfirmasi tertulis dan melunasi pembayaran sesuai ketentuan yang berlaku. Kuota setiap batch pelatihan terbatas dan berlaku first-come, first-served.' },
                            { title: '3. Pembayaran', content: 'Pembayaran harus dilakukan sesuai invoice yang diterbitkan, paling lambat 3 (tiga) hari kerja sebelum tanggal pelaksanaan pelatihan. Pembayaran dapat dilakukan melalui transfer bank ke rekening resmi ProSafe Indonesia. Bukti transfer wajib dikonfirmasi ke tim admin.' },
                            { title: '4. Pembatalan & Reschedule', content: 'Pembatalan yang dilakukan lebih dari 7 hari sebelum pelaksanaan akan dikenakan potongan 25% dari biaya pelatihan. Pembatalan kurang dari 7 hari tidak dapat di-refund, namun peserta dapat mengganti nama peserta atau reschedule ke batch berikutnya (maksimal 1 kali).' },
                            { title: '5. Sertifikat', content: 'Sertifikat diterbitkan setelah peserta menyelesaikan seluruh rangkaian pelatihan dan memenuhi syarat kelulusan yang ditetapkan. Untuk program sertifikasi BNSP, penerbitan sertifikat mengikuti prosedur dan timeline dari BNSP. ProSafe Indonesia tidak bertanggung jawab atas keterlambatan penerbitan sertifikat oleh pihak ketiga (Kemnaker/BNSP).' },
                            { title: '6. Hak Kekayaan Intelektual', content: 'Seluruh materi pelatihan, modul, dan dokumen yang diberikan selama pelatihan adalah hak milik ProSafe Indonesia. Peserta dilarang menyebarluaskan, menggandakan, atau menggunakan materi untuk keperluan komersial tanpa izin tertulis.' },
                            { title: '7. Batasan Tanggung Jawab', content: 'ProSafe Indonesia berupaya memberikan layanan terbaik namun tidak menjamin hasil ujian sertifikasi tertentu. Kelulusan ujian kompetensi sepenuhnya bergantung pada kemampuan dan persiapan peserta.' },
                            { title: '8. Kontak', content: 'Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi kami melalui email prosafeindonesia@gmail.com atau telepon +62 812-2299-8847.' },
                        ].map(section => (
                            <section key={section.title}>
                                <h2 className="font-heading text-xl font-bold text-deep-navy mb-3">{section.title}</h2>
                                <p className="text-on-surface-variant leading-relaxed">{section.content}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
