

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 1
## WEBSITE DEVELOPMENT BRIEF
## PRO SAFE INDONESIA
## Lembaga Pelatihan & Sertifikasi K3 Nasional



Disusun oleh
Rafdi Dhiya Ulhaq — Head of Growth Team
## Pro Media Interaksi

## Untuk
Tim Developer & Designer ProSafe Indonesia

## Juni 2026  │  Versi 1.0
CONFIDENTIAL — Untuk Keperluan Internal Pengembangan Website


WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 2
## 1. RINGKASAN PROYEK
Dokumen ini adalah Website Development Brief untuk pembangunan ulang (rebuild) website
ProSafe Indonesia, lembaga pelatihan dan sertifikasi K3 (Keselamatan dan Kesehatan Kerja) yang
berdomisili di Surabaya dan beroperasi secara nasional. Layanan utama mencakup Pelatihan K3,
Sertifikasi BNSP, Pelatihan Kemnaker, Training Corporate (Inhouse), Konsultasi K3, dan Konsultasi
## ISO.
Website yang berjalan saat ini (prosafe-indonesia.lovable.app) dibangun di atas platform AI website
builder dengan struktur halaman yang sangat terbatas — hanya lima halaman dasar tanpa halaman
individual per program pelatihan, tanpa sistem jadwal interaktif, dan masih berada di subdomain
pihak ketiga. Dokumen ini berisi spesifikasi lengkap untuk website baru yang akan dibangun di
domain sendiri, dengan struktur, fitur, dan standar teknis yang jauh lebih matang.
Brief ini bersifat actionable dan menjadi acuan tunggal bagi tim developer, designer, dan content
team selama proses pengembangan — mencakup sitemap, panduan desain, functional requirement
per halaman, technical requirement, SEO requirement, content requirement, hingga roadmap
pengerjaan.

## Tujuan Utama Pengembangan Website Baru
- Meningkatkan kredibilitas dan kepercayaan calon peserta pelatihan dan klien korporat.
- Memperkuat konversi dari pengunjung website menjadi leads (pendaftar pelatihan / pengirim
formulir konsultasi).
- Meningkatkan visibilitas di mesin pencari Google (SEO) untuk kata kunci strategis industri K3.
- Menyajikan informasi jadwal, program, dan cabang secara terstruktur dan mudah diakses.
- Mendukung operasional tim sales dengan infrastruktur digital yang solid (form leads, integrasi
WhatsApp, tracking).

## Target Pengguna Utama
- HR Manager / Training Manager perusahaan yang mencari vendor pelatihan K3.
- Individu yang ingin mendapatkan sertifikasi K3 (AK3U, BNSP, dll.).
- Safety Officer yang mencari lembaga pelatihan terpercaya.
- Decision maker perusahaan yang membutuhkan konsultasi K3 / ISO.

Positioning & Tone of Voice
ProSafe Indonesia diposisikan sebagai “Mitra K3 Terpercaya untuk Industri Indonesia” —
profesional, kompeten, dan berorientasi solusi. Tone komunikasi: formal namun approachable,
percaya diri namun tidak arogan. Bahasa yang digunakan adalah Bahasa Indonesia formal dengan
sesekali penggunaan terminologi industri K3 yang relevan.

## 2. SITEMAP WEBSITE
Berikut adalah struktur navigasi final yang menjadi acuan pembangunan website. Navigasi utama
menggunakan mega menu untuk kategori “PELATIHAN K3” dan “SERTIFIKASI” agar pengunjung
dapat langsung menemukan program spesifik tanpa navigasi berjenjang yang panjang.

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 3
## Level 1 Level 2 Level 3 / Contoh Program Catatan
## HOME — —
Landing page
utama
## TENTANG
## KAMI
## Profil
## Perusahaan
## —
Sejarah, misi,
visi
## Visi & Misi —

## Legalitas &
## Sertifikasi
## —
## PJK3, BNSP,
ISO, dll.
Tim Instruktur — Profil instruktur
## PELATIHAN
## K3
Kemnaker RI
14 program prioritas (AK3 Umum, K3
## Kebakaran, K3 Konstruksi, K3 Listrik,
Operator Pesawat Angkat, P3K, Auditor
SMK3, dll.)
## Halaman
kategori +
halaman per
program
## BNSP
14 program prioritas (AK3 Umum BNSP,
Safetyman Migas, CSMS, P3K BNSP,
dll.)
## Halaman
kategori +
halaman per
program

## K3 Migas &
## Offshore
10 program (Fire Fighting, Sea
Survival/BOSIET, HUET, BBS, dll.)
## Halaman
kategori +
halaman per
program

## K3 Non-
## Sertifikasi
10 program (Basic First Aid, Confined
Space, Working at Heights, dll.)
## Halaman
kategori +
halaman per
program
## JADWAL
## TRAINING
## — —
Tabel jadwal
per bulan, filter
& search
CORPORATE Inhouse Training —
## Halaman
layanan

## Consulting
## Services
## —
## Assessment —
CABANG KAMI Surabaya — Kantor pusat
## Jakarta — Cabang
## Semarang — Cabang
## Balikpapan — Cabang
## BLOG /
## ARTIKEL
## — —
Konten SEO &
edukasi K3

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 4
## Level 1 Level 2 Level 3 / Contoh Program Catatan
## GALERI — —
Foto & video
kegiatan
## TESTIMONI — —
Ulasan & social
proof
## KARIR — —
## Lowongan
pekerjaan
## KONTAK — —
Form, peta,
WhatsApp,
email
## CEK
## SERTIFIKAT
## — —
## Verifikasi
sertifikat online

## 3. DESAIN & VISUAL IDENTITY GUIDELINES
## Color Palette
- Navy Blue — warna utama (header, CTA sekunder, teks penting)
- Safety Orange / Red — warna aksen untuk CTA utama dan elemen yang butuh perhatian
- White — warna background utama
- Gray — warna teks sekunder dan elemen pendukung
## Typography
Font sans-serif profesional — pilihan: Inter, Montserrat, atau Poppins. Hierarki heading harus
konsisten di seluruh halaman (H1 untuk judul utama per halaman, H2-H3 untuk sub-section).
## Imagery
Gunakan foto kegiatan pelatihan nyata, sertifikat, instruktur berpengalaman, dan peserta di
lapangan. Hindari stock photo generik yang tidak relevan dengan industri K3.
## Iconography
Gunakan icon set yang konsisten dan merepresentasikan tema safety (helm, checklist, sertifikat,
APD, dll.) — rekomendasi: Lucide atau Font Awesome.
## Logo Klien
Logo klien korporat ditampilkan secara prominent dalam grayscale untuk keseragaman visual,
dengan opsi full-color saat di-hover.
## Spacing
Gunakan whitespace yang cukup (generous spacing) di setiap section untuk membangun kesan
premium dan tidak cluttered.

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 5
## 4. FUNCTIONAL REQUIREMENT PER HALAMAN
Bagian ini merinci kebutuhan fungsional untuk setiap tipe halaman utama. Halaman program
pelatihan menggunakan satu template yang seragam dan dipakai berulang untuk seluruh skema
(Kemnaker, BNSP, Migas, Non-Sertifikasi, ISO).
4.1 Halaman Home (Beranda)
Section yang Dibutuhkan
Hero Section — headline kuat, sub-headline, dua tombol CTA (Konsultasi Gratis / Lihat Program)
Stats Counter — jumlah alumni, klien, program, rating (animated counter)
Tentang Singkat — 2-3 kalimat profil perusahaan + link ke halaman Tentang Kami
Layanan Unggulan — grid 6-8 kategori layanan dengan icon dan link
Jadwal Training Terbaru — preview 5-10 jadwal bulan ini + tombol “Lihat Semua”
Klien Kami — logo carousel perusahaan klien
Testimoni / Ulasan — Google Reviews atau testimoni klien
Legalitas & Sertifikasi — badge PJK3, BNSP, ISO, dll.
Artikel Terbaru — 3 artikel/blog terbaru
Feed Instagram — 6-9 postingan terbaru
CTA Section Akhir — banner ajakan konsultasi/daftar dengan form singkat atau nomor
WhatsApp

CTA yang Digunakan
“Konsultasi Gratis” — primary CTA, link ke WhatsApp/Form
“Lihat Semua Program” — secondary CTA, link ke halaman Pelatihan
“Daftar Sekarang” — per jadwal training di section jadwal
“Hubungi Kami” — footer CTA
Floating WhatsApp Button — selalu visible di seluruh halaman

SEO Requirement
Title: “Pelatihan K3 & Sertifikasi BNSP Terpercaya │ ProSafe Indonesia”
Meta description menyebutkan kota utama, jenis pelatihan, dan CTA konsultasi gratis
Satu H1 yang mengandung keyword utama
Schema: Organization, LocalBusiness, AggregateRating, FAQPage (jika ada FAQ section)

## Developer Notes
Hero section harus load < 2.5 detik (LCP)
Stats counter menggunakan animasi counter berbasis JavaScript
Logo carousel menggunakan infinite scroll (Swiper.js atau setara)
Google Reviews widget: gunakan Google Places API atau plugin embed
Instagram feed: gunakan Elfsight atau Smash Balloon

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 6
Floating WhatsApp button posisi bottom-right, visible di semua device
Semua gambar hero section menggunakan format WebP dan lazy loading

4.2 Halaman Program Pelatihan (Template)
Section yang Dibutuhkan
Breadcrumb: Home > Pelatihan > [Kategori] > [Nama Program]
Hero Program: judul program, badge sertifikasi (Kemnaker/BNSP/dll.), foto ilustrasi
Ringkasan Cepat (sidebar/card): Durasi, Biaya (atau “Hubungi untuk harga”), Metode
(Online/Offline/Blended), Sertifikat yang Diterbitkan
Deskripsi Program — penjelasan umum dan tujuan pelatihan
Manfaat Pelatihan — list bullet yang jelas
Target Peserta — siapa yang cocok mengikuti program ini
Persyaratan Peserta — dokumen dan kualifikasi yang dibutuhkan
Silabus / Materi Pelatihan — outline topik dalam format accordion/expandable
Jadwal Terdekat — tampilkan jadwal terdekat untuk program ini + tombol Daftar
Landasan Hukum — peraturan yang mewajibkan sertifikasi ini
FAQ — pertanyaan umum tentang program ini (dengan schema FAQ)
CTA Sticky — tombol “Daftar / Konsultasi” yang mengikuti scroll (sticky sidebar)
Program Terkait — link ke program serupa

## 4.3 Halaman Jadwal Training
## Spesifikasi
Filter interaktif berdasarkan Kategori (Kemnaker/BNSP/Migas/dll.), Kota, dan Bulan
Tabel responsif dengan kolom: Nama Program, Tanggal, Kota/Metode, Harga (atau “Hubungi
Kami”), tombol Daftar
Tombol “Daftar” pada setiap baris mengarah ke form pendaftaran atau WhatsApp dengan pre-
filled text
Opsi unduh jadwal dalam format PDF per bulan
Search bar untuk mencari program spesifik
Halaman ini harus dapat diupdate rutin oleh admin melalui CMS
Tampilkan badge “HAMPIR PENUH” atau “TERSISA X KURSI” untuk urgency

## 4.4 Halaman Corporate Services / Inhouse Training
## Spesifikasi
Hero berfokus pada manfaat bagi perusahaan/korporasi
Layanan Corporate: Inhouse Training, Consulting K3, Assessment, ISO Consulting
Keunggulan Inhouse: pelatihan di lokasi perusahaan, jadwal fleksibel, materi dikustomisasi
Proses Kerja: infographic step-by-step cara kerja sama inhouse

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 7
Logo Klien Korporat: daftar perusahaan yang sudah menggunakan inhouse training
Form Request Inhouse: nama perusahaan, program, jumlah peserta, kota
CTA: “Request Penawaran” — link ke form atau WhatsApp dedicated corporate

## 4.5 Halaman Tentang Kami
## Spesifikasi
## Submenu: Profil Perusahaan, Visi & Misi, Legalitas & Akreditasi, Tim Instruktur
Profil: sejarah singkat, nilai-nilai perusahaan, milestone penting
Visi & Misi ditampilkan secara visual dan berkesan
Legalitas: scan/image SK PJK3, lisensi BNSP, sertifikat ISO, dll.
Tim Instruktur: foto, nama, keahlian, sertifikasi — membangun trust
Angka pencapaian: tahun berdiri, jumlah trainer bersertifikat, program tersedia

4.6 Halaman Cabang (Template)
## Spesifikasi
Hero dengan nama kota/cabang dan foto fasilitas
Informasi alamat, nomor telepon, jam operasional, dan embed Google Maps
Program unggulan yang tersedia di cabang tersebut
Foto fasilitas (ruang kelas, lapangan praktik, dll.)
Schema LocalBusiness untuk SEO lokal per kota

## 4.7 Halaman Blog / Artikel
## Spesifikasi
Halaman index dengan kategori dan search artikel
Halaman detail artikel dengan author, tanggal publish, related articles
Setiap artikel minimal memiliki satu gambar utama
Share button ke social media
Schema Article/BlogPosting untuk setiap halaman detail

## 4.8 Halaman Galeri, Testimoni, Kontak & Cek Sertifikat
## Galeri
Grid foto dan video kegiatan training, filter berdasarkan kategori program
Lightbox untuk preview gambar dan embed video


WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 8
## Testimoni / Ulasan
Daftar testimoni tertulis (nama, perusahaan, foto jika ada)
Integrasi Google Reviews widget

## Kontak
Form kontak dengan validasi dan auto-reply
Embed Google Maps lokasi kantor pusat
Tombol langsung ke WhatsApp, email, dan nomor telepon

## Cek Sertifikat
Form input nomor sertifikat / nama peserta untuk verifikasi online
Hasil pencarian menampilkan status valid/tidak valid beserta detail program


## 5. TECHNICAL REQUIREMENTS
## 5.1 Frontend
## Framework Utama
WordPress + Elementor Pro — rekomendasi utama untuk kemudahan manajemen konten oleh non-
technical staff. Alternatif: Next.js, jika tim developer tersedia dan performa SEO ingin
dimaksimalkan.
## Komponen & Library Pendukung
- Swiper.js — carousel dan slider (logo klien, testimoni)
- CountUp.js — animasi stats counter
- jQuery — interaksi dasar jika menggunakan WordPress
- Font Awesome / Lucide — iconography
- Google Fonts — Inter, Poppins, atau Montserrat
- AOS (Animate on Scroll) — efek animasi scroll yang halus
5.2 Backend & CMS
- CMS: WordPress (versi terbaru) — ekosistem plugin lengkap, mudah dikelola non-technical
staff, SEO-friendly dengan Yoast/Rank Math
- Hosting: Cloud hosting Indonesia (IDCloudHost, Niagahoster, atau Dewaweb) — server lokal
untuk kecepatan akses dan geotargeting
- Database: MySQL (default WordPress)
- PHP: versi 8.0 atau lebih baru
## Plugin Wajib
- Yoast SEO atau Rank Math — SEO meta tags dan schema markup

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 9
- Contact Form 7 atau Gravity Forms — form pendaftaran dan kontak
- Smash Balloon — integrasi Instagram feed
- Elfsight (atau widget sejenis) — integrasi Google Reviews
- WP Rocket atau LiteSpeed Cache — caching dan performance optimization
- Wordfence — security
- All in One SEO + WP Schema Pro — advanced schema markup
- WooCommerce — opsional, jika dibutuhkan sistem pembayaran online untuk pendaftaran

## 6. INTEGRASI SISTEM
## Integrasi Spesifikasi Prioritas
WhatsApp Business
Floating button + click-to-chat dengan pre-filled message
per halaman program. Nomor berbeda untuk CS Umum
dan Corporate.
## KRITIKAL
Form Leads (Web
## Forms)
Gravity Forms / Contact Form 7. Form pendaftaran,
konsultasi, dan inhouse. Auto-notification ke email admin
dan auto-reply ke user.
## KRITIKAL
## Google Analytics 4
## (GA4)
Tracking traffic dan conversion events (form submit, klik
WhatsApp, klik tombol daftar). Goals dan funnels
dikonfigurasi.
## KRITIKAL
## Google Tag Manager
## (GTM)
Seluruh tracking dipasang via GTM (GA4, Meta Pixel,
dll.) agar mudah dikelola tanpa edit code.
## KRITIKAL
## Google Search
## Console
Submit sitemap, monitoring indexing, keyword
performance.
## KRITIKAL
## Email Marketing
Integrasi Mailchimp atau Klaviyo untuk lead nurturing.
Setiap form submission masuk ke list email.
## TINGGI
## Meta Pixel
(Facebook/Instagram)
Untuk retargeting iklan Meta. Events: PageView, Lead,
InitiateCheckout.
## TINGGI
## Google My Business
Sinkronisasi alamat dan kontak, integrasi Google
## Reviews.
## TINGGI
TikTok Pixel Jika ada aktivitas iklan di TikTok Ads. OPSIONAL
CRM Integration
Koneksi form leads ke CRM (HubSpot Free atau
Salesforce) untuk manajemen pipeline.
## OPSIONAL

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 10
## 7. SEO REQUIREMENTS
7.1 Technical SEO Checklist
## Item Spesifikasi Prioritas
Domain & Hosting Domain .com atau .co.id di server Indonesia KRITIKAL
SSL Certificate HTTPS wajib di semua halaman KRITIKAL
Sitemap XML Auto-generated, submit ke Google Search Console KRITIKAL
Robots.txt Konfigurasi benar, tidak block halaman penting KRITIKAL
Canonical Tags Di setiap halaman untuk mencegah duplicate content KRITIKAL
## Structured Data /
## Schema
Organization, LocalBusiness, Course, FAQ, Review,
BreadcrumbList
## KRITIKAL
## Mobile Optimization
Responsive design, tidak ada konten terhalang di
mobile
## KRITIKAL
Hreflang id-ID untuk semua halaman berbahasa Indonesia TINGGI
Open Graph Tags og:title, og:description, og:image di setiap halaman TINGGI
Image Optimization Format WebP, alt text deskriptif, lazy loading TINGGI
Page Speed Core Web Vitals hijau di Google PageSpeed Insights TINGGI
URL Structure SEO-friendly, descriptive, mengandung keyword TINGGI
## Internal Linking
Setiap halaman terhubung ke halaman lain yang
relevan
## TINGGI
## Breadcrumb
## Navigation
Breadcrumb dengan schema markup di semua
halaman
## TINGGI
Twitter Cards summary_large_image di setiap halaman SEDANG
404 & Redirect Custom 404 page, 301 redirect untuk URL lama SEDANG

## 7.2 Target Keyword Strategy
## Keyword Target Prioritas Target Halaman
Pelatihan K3 Surabaya KRITIKAL Home / Cabang Surabaya
Pelatihan AK3 Umum Surabaya KRITIKAL Halaman Program AK3U
Sertifikasi BNSP K3 KRITIKAL Halaman Sertifikasi BNSP
Kursus K3 Kemnaker KRITIKAL Halaman Pelatihan Kemnaker
Pelatihan K3 Migas TINGGI Halaman K3 Migas
Training BOSIET Indonesia TINGGI Halaman Program BOSIET

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 11
## Keyword Target Prioritas Target Halaman
Inhouse Training K3 Perusahaan TINGGI Halaman Corporate
Konsultan ISO 45001 TINGGI Halaman ISO 45001
Jadwal Pelatihan K3 2026 TINGGI Halaman Jadwal Training
## Lembaga Pelatihan K3
## Terpercaya
SEDANG Home / Tentang Kami
Pelatihan Sea Survival SEDANG Halaman Program Sea Survival
Sertifikasi K3 Kebakaran SEDANG Halaman K3 Kebakaran

7.3 Schema Markup yang Wajib Diimplementasikan
- Organization Schema — Home dan Tentang Kami (nama perusahaan, alamat, telepon, logo,
social media)
- LocalBusiness Schema — setiap halaman Cabang (alamat fisik, jam operasional, rating)
- Course Schema — setiap halaman program pelatihan (nama course, provider, description,
priceCurrency)
- BreadcrumbList Schema — semua halaman yang memiliki breadcrumb
- FAQPage Schema — setiap halaman yang memiliki FAQ section
- Review / AggregateRating Schema — homepage dan halaman program
- Event Schema — halaman jadwal training untuk setiap event pelatihan terjadwal

## 8. NON-FUNCTIONAL REQUIREMENTS
## Aspek Requirement Standar Target
Performance Waktu muat halaman pertama < 3 detik
Performance Largest Contentful Paint (LCP) < 2.5 detik
Performance Cumulative Layout Shift (CLS) < 0.1
Performance First Input Delay (FID) / INP < 200 ms
Performance Google PageSpeed Insights Score Mobile > 70, Desktop > 85
Responsiveness Kompatibilitas device
## Mobile, Tablet, Desktop, Large
## Screen
Responsiveness Browser support
## Chrome, Firefox, Safari, Edge (2
versi terbaru)
Security SSL/HTTPS Wajib di seluruh halaman
Security Form CAPTCHA
Google reCAPTCHA v3 di semua
form
Security Proteksi data pengguna Kebijakan Privasi sesuai UU PDP

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 12
## Aspek Requirement Standar Target
Availability Uptime SLA Minimum 99.5% per bulan
Scalability Traffic spike
Mampu menangani 10x traffic
normal tanpa crash
Accessibility WCAG Compliance Minimum Level AA
Maintainability CMS Admin Panel
Non-technical staff dapat update
konten
Maintainability Code documentation
Inline comments + README
lengkap

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 13
## 9. CONTENT REQUIREMENTS
9.1 Konten yang Perlu Disiapkan oleh Klien
## Jenis Konten Detail
## Timeline
## Penyiapan
Logo Perusahaan Format PNG transparan (minimal 1000x1000px) Sebelum kick-off
Profil Perusahaan Sejarah, visi, misi, nilai-nilai (500-800 kata) Minggu 1
## Dokumen Legalitas
Scan SK PJK3, Lisensi BNSP, sertifikat ISO (jika
ada)
## Minggu 1
Profil Tim Instruktur Foto profesional + bio + sertifikasi (per instruktur) Minggu 1-2
## Deskripsi Per Program
Deskripsi, manfaat, persyaratan, silabus (per
program)
## Minggu 1-3
Jadwal Training Jadwal 3-6 bulan ke depan dalam format tabel Minggu 2
## Logo Klien
Logo perusahaan klien yang pernah dilayani
(format PNG)
## Minggu 2
Foto Kegiatan Minimal 50 foto kegiatan training berkualitas tinggi Minggu 2
## Video Kegiatan
Minimal 3-5 video dokumentasi training (durasi 1-3
menit)
## Minggu 3
## Testimonial Klien
Minimal 10 testimoni tertulis dari klien (nama &
perusahaan)
## Minggu 2
## Informasi Cabang
Alamat, nomor telepon, peta, foto gedung per
cabang
## Minggu 2
## Kontak & Sosmed
Semua nomor WhatsApp, email, link sosial media
aktif
Sebelum kick-off
Artikel Blog (Opsional)
Minimal 5 artikel awal tentang topik K3 (500-1500
kata)
## Minggu 3-4

## 9.2 Panduan Penulisan Konten Website
- Bahasa: Bahasa Indonesia formal, hindari bahasa gaul atau terlalu kasual
- Tone: profesional, percaya diri, dan berorientasi solusi untuk klien
- Keyword: setiap halaman program harus mengandung keyword utama secara natural (tidak
keyword stuffing)
- Panjang konten: halaman program minimal 800 kata, artikel blog minimal 1.000 kata
- CTA: setiap halaman harus memiliki minimal satu CTA yang jelas
- Gambar: setiap artikel dan halaman program harus memiliki minimal satu gambar utama yang
relevan

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 14
## 10. ESTIMATED PAGE LIST
Estimasi total halaman yang dibangun pada tahap pertama, tidak termasuk artikel blog yang
ditambahkan secara ongoing.
## No Halaman Tipe Prioritas
1 Home (Beranda) Halaman Utama KRITIKAL
## 2-5
Tentang Kami (Profil, Visi-Misi, Legalitas, Tim
## Instruktur)
## Halaman
Statis/Dinamis
## TINGGI
6 Pelatihan Kemnaker RI (Index) Halaman Kategori KRITIKAL
## 7-20
Halaman Program Kemnaker (14 program
prioritas)
Halaman Program KRITIKAL
21 Sertifikasi BNSP (Index) Halaman Kategori KRITIKAL
## 22-35
Halaman Program BNSP (14 program
prioritas)
Halaman Program KRITIKAL
36 K3 Migas & Offshore (Index) Halaman Kategori TINGGI
37-46 Halaman Program Migas (10 program) Halaman Program TINGGI
47 K3 Non-Sertifikasi (Index) Halaman Kategori SEDANG
## 48-57
Halaman Program Non-Sertifikasi (10
program)
Halaman Program SEDANG
## 58-63
Konsultasi ISO (Index + ISO
## 9001/14001/45001/22000/50001)
## Halaman Kategori
## + Program
## TINGGI
64 Konsultasi K3 Halaman Layanan TINGGI
## 65-67
Corporate Services (Index, Inhouse Training,
## Assessment)
Halaman Layanan KRITIKAL
68 Jadwal Training Halaman Dinamis KRITIKAL
## 69-72
Cabang (Surabaya, Jakarta, Semarang,
## Balikpapan)
Halaman Cabang TINGGI
73+ Blog / Artikel (Index + Detail, ongoing) Halaman Blog TINGGI
75 Galeri Halaman Statis SEDANG
76 Testimoni / Ulasan Halaman Statis SEDANG
77 Karir Halaman Dinamis RENDAH
## 78 Cek Sertifikat
## Halaman
## Fungsional
## SEDANG
## 79 Form Pendaftaran
## Halaman
## Fungsional
## KRITIKAL
80 Kontak Halaman Utama KRITIKAL

WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 15
## No Halaman Tipe Prioritas
81-82 Kebijakan Privasi & Syarat Ketentuan Halaman Legal TINGGI/SEDANG
83 404 Not Found (Custom) Halaman Sistem TINGGI

Total estimasi halaman tahap pertama: 83 halaman (di luar artikel blog ongoing).
Pada tahap selanjutnya (post-launch), halaman program akan terus ditambahkan hingga mencakup
seluruh portofolio layanan ProSafe Indonesia.
## 11. DEVELOPMENT ROADMAP
Fase Timeline Deliverable PIC
## Fase 0 Minggu 1
Kick-off meeting, finalisasi brief, sign-off requirement,
pengumpulan aset konten dari klien
PM + Klien
## Fase 1
## Minggu 1-
## 2
Setup domain & hosting, instalasi WordPress, setup
plugin utama, pembuatan style guide & design system
## Developer +
## Designer
## Fase 2
## Minggu 2-
## 3
Desain wireframe/mockup semua halaman utama di
Figma, review & approval desain oleh klien
## UI/UX
## Designer +
## Klien
## Fase 3
## Minggu 3-
## 5
Development halaman utama: Home, Tentang Kami,
## Jadwal, Kontak, Galeri, Corporate Services
## Frontend +
## Backend
## Developer
## Fase 4
## Minggu 5-
## 7
Development template halaman program + input
minimum 15 halaman program (Kemnaker, BNSP,
Migas, dll.)
## Frontend
## Developer +
## Content
## Fase 5
## Minggu 7-
## 8
Implementasi SEO technical: schema markup, sitemap
XML, robots.txt, meta tags, Google Search Console
setup
## SEO
## Specialist
## Fase 6
## Minggu 8-
## 9
Integrasi: GA4, GTM, Meta Pixel, WhatsApp, Email
## Marketing, Instagram Feed, Google Reviews
## Developer +
## Digital
## Marketer
## Fase 7 Minggu 9
User Acceptance Testing (UAT), bug fixing,
performance optimization (Core Web Vitals)
## QA +
## Developer
## Fase 8
## Minggu
## 10
Launch website (go-live), monitoring 48 jam pertama,
handover dokumen & training admin ke tim klien
## PM +
## Developer +
## Klien
## Post-
## Launch
## Bulan 2-3
Input konten program secara bertahap, monitoring
SEO, penambahan artikel blog, optimasi berdasarkan
data GA4
## Content +
## SEO
## Specialist

Total estimasi waktu pengerjaan: 10 minggu (2,5 bulan) dari kick-off hingga go-live.


WEBSITE DEVELOPMENT BRIEF — ProSafe Indonesia Pro Media Interaksi
CONFIDENTIAL │ Juni 2026 Halaman 16
## 12. APPROVAL / SIGN-OFF
Dokumen ini disetujui sebagai acuan resmi pembangunan website ProSafe Indonesia oleh pihak-
pihak berikut:

Disusun oleh:

## Rafdi Dhiya Ulhaq
Head of Growth Team
## Pro Media Interaksi
Disetujui oleh:

[Nama Perwakilan ProSafe]
[Jabatan]
ProSafe Indonesia

## — Akhir Dokumen —