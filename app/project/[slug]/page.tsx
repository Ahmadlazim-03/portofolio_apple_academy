"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { SketchfabViewer } from "@/components/sketchfab-viewer"

// Mock project data - in real app, this would come from a database or CMS
const projectsData = {
  "go-explore": {
    title: "Go Explore",
    subtitle: "Aplikasi Booking Destinasi Daerah Surabaya",
    description:
      "Sebuah platform booking destinasi wisata yang berfokus pada kota Surabaya. Aplikasi ini memudahkan pengguna untuk menemukan, menjelajahi, dan memesan berbagai destinasi populer seperti taman kota, museum, wisata kuliner, hingga acara lokal. Dengan antarmuka yang modern dan intuitif, aplikasi ini dirancang untuk memberikan pengalaman pemesanan yang cepat, aman, dan nyaman bagi wisatawan lokal maupun mancanegara.",
    longDescription:
      "Aplikasi booking destinasi Surabaya ini dirancang untuk mendukung pariwisata lokal dengan menghadirkan kemudahan akses informasi dan reservasi. Pengguna dapat melihat detail setiap destinasi, mulai dari harga tiket, jam operasional, lokasi di peta, hingga ulasan dari pengunjung lain. Sistem ini dibangun menggunakan React untuk frontend dengan desain responsif dan ramah pengguna, serta Node.js dan MongoDB pada backend untuk pengelolaan data yang efisien. Fitur utama meliputi pencarian destinasi berdasarkan kategori (alam, budaya, kuliner), pemesanan tiket online dengan integrasi pembayaran, serta dashboard admin untuk mengelola data destinasi dan pesanan. Aplikasi ini dioptimalkan agar mendukung perangkat mobile sehingga wisatawan dapat dengan mudah melakukan booking kapan saja dan di mana saja.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Midtrans"],
    category: "Web Development",
    client: "Ujian Akhir Semester 3",
    duration: "3 months",
    year: "2024",
    status: "Completed",
    liveUrl: "https://github.com/Ahmadlazim-03/GoExplore-App",
    githubUrl: "https://github.com/Ahmadlazim-03/GoExplore-App",
    images: [
      "/images/goexplore1.png?height=600&width=800",
      "/images/goexplore2.png?height=400&width=600",
      "/images/goexplore3.png?height=400&width=600",
      "/images/goexplore4.png?height=400&width=600",
    ],
    features: [
      "Destinasi Wisata Surabaya Lengkap",
      "Pencarian & Filter Berdasarkan Kategori (alam, budaya, kuliner, event)",
      "Booking & Pembelian Tiket Online",
      "Integrasi Payment Gateway",
      "Peta Lokasi & Navigasi Destinasi",
      "Ulasan & Rating Pengunjung",
      "Rekomendasi Destinasi Populer",
      "Notifikasi & Reminder Jadwal Kunjungan",
      "Dashboard Admin untuk Pengelolaan Destinasi & Pemesanan",
      "Desain Responsif (Mobile & Desktop)"
    ],
    challenges: [
      "First time experience menggunakan Midtrans sebagai payment gateway",
      "Sedikit mendapatkan struggle dalam manage kerja tim",
    ],
    solutions: [
      "Mengintegrasikan payment gateway lokal untuk memudahkan transaksi tiket secara aman",
      "Menggunakan pencarian berbasis kategori dan filter untuk mempermudah pengguna menemukan destinasi sesuai minat",
      "Menyediakan peta interaktif dengan integrasi Google Maps untuk navigasi yang akurat",
      "Membangun sistem ulasan dan rating agar pengguna dapat berbagi pengalaman serta membantu calon pengunjung lain",
      "Menerapkan sistem notifikasi untuk mengingatkan jadwal kunjungan dan promo destinasi",
      "Mengembangkan dashboard admin dengan fitur CRUD untuk destinasi, tiket, dan pemesanan",
      "Mengoptimalkan desain responsif dengan Tailwind CSS agar dapat digunakan di berbagai perangkat"
    ]
  },

  "go-orbit": {
    "title": "Website Perusahaan Go-orbit",
    "subtitle": "Platform Digital untuk Layanan Pelatihan dan Konsultasi",
    "description": "Website resmi untuk Go-orbit yang menampilkan profil perusahaan dan ragam layanan profesional seperti pelatihan, pembinaan, dan konsultasi untuk pengembangan sumber daya manusia dan korporasi.",
    "longDescription": "Proyek ini bertujuan untuk membangun kehadiran digital yang kuat bagi Go-orbit. Website ini dirancang sebagai pusat informasi utama bagi calon klien, menyediakan detail lengkap mengenai program pelatihan, layanan konsultasi, dan acara yang diselenggarakan. Dengan navigasi yang mudah dan desain yang profesional, situs ini memfasilitasi calon klien dalam memahami keunggulan layanan Go-orbit dan memudahkan mereka untuk menghubungi tim untuk konsultasi lebih lanjut. Website ini juga berfungsi sebagai galeri portofolio yang menampilkan berbagai kegiatan dan testimoni dari klien sebelumnya untuk membangun kepercayaan dan kredibilitas.",
    "technologies": [
      "Cromwell",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "MySQL"
    ],
    "category": "Web Development",
    "client": "Go-orbit",
    "duration": "3 Bulan",
    "year": "2024",
    "status": "Selesai",
    "liveUrl": "https://www.go-orbit.id/",
    "githubUrl": null,
    "images": [
      "/images/goorbit1.png?height=600&width=800",
      "/images/goorbit2.png?height=400&width=600",
      "/images/goorbit3.png?height=400&width=600",
      "/images/goorbit4.png?height=400&width=600"
    ],
    "features": [
      "Desain Profesional dan Responsif",
      "Halaman Profil Perusahaan (Tentang Kami)",
      "Katalog Layanan (Pelatihan, Konsultasi, Outbound)",
      "Galeri Dokumentasi Kegiatan",
      "Formulir Kontak dan Informasi Lokasi",
      "Area Testimoni Klien",
      "Integrasi Media Sosial",
      "Struktur SEO-Friendly"
    ],
    "challenges": [
      "Menerjemahkan visi dan nilai perusahaan Go-orbit ke dalam desain visual yang menarik.",
      "Menyusun struktur informasi layanan yang kompleks agar mudah dipahami oleh pengunjung.",
      "Memastikan website memiliki performa yang cepat dan optimal di berbagai perangkat.",
      "Penyesuain dan adaptasi dengan framework Cromwell CMS"
    ],
    "solutions": [
      "Melakukan sesi diskusi intensif dengan klien untuk memahami brand identity dan menerapkannya pada UI/UX website.",
      "Membuat arsitektur informasi yang logis dengan navigasi yang intuitif untuk setiap kategori layanan.",
      "Mengimplementasikan teknik optimasi aset (gambar dan kode) untuk mempercepat waktu muat halaman.",
      "Menyediakan halaman galeri dan testimoni untuk membangun bukti sosial (social proof) dan kepercayaan calon klien."
    ]
  },

   "danusin": {
    "title": "Danusin",
    "subtitle": "Aplikasi Pelacakan Peta untuk Kegiatan Dana Usaha",
    "description": "Sebuah aplikasi berbasis peta yang dirancang untuk membantu koordinator dan penjual dalam kegiatan dana usaha (danus). Aplikasi ini memungkinkan pelacakan lokasi penjual secara real-time, memudahkan pembeli menemukan penjual terdekat, dan membantu koordinator memantau penyebaran tim di lapangan.",
    "longDescription": "Danusin dikembangkan sebagai solusi untuk tantangan logistik dalam kegiatan dana usaha, di mana penjual seringkali tersebar di lokasi yang luas dan sulit dikoordinasikan. Dengan fitur pelacakan langsung pada peta, aplikasi ini memberikan visibilitas penuh bagi koordinator acara untuk memantau pergerakan setiap penjual. Di sisi lain, pembeli yang ingin mendukung dapat dengan mudah melihat titik lokasi penjual aktif di sekitar mereka. Aplikasi ini dibuat sebagai proyek untuk event kompetisi Vokasi Olivia, dengan fokus pada penyelesaian masalah nyata melalui teknologi.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MySQL",
      "NextAuth"
    ],
    "category": "Web Development",
    "client": "Kompetisi Vokasi Olivia",
    "duration": "1 Bulan",
    "year": "2025",
    "status": "Selesai",
    "liveUrl": "https://danusin.com",
    "githubUrl": "https://github.com/Ahmadlazim-03/danusin-next-js",
    "images": [
      "/images/danusin1.png?height=600&width=800",
      "/images/danusin2.png?height=400&width=600",
      "/images/danusin3.png?height=400&width=600",
      "/images/danusin4.png?height=400&width=600"
    ],
    "features": [
      "Pelacakan Lokasi Penjual Real-Time",
      "Tampilan Peta Interaktif",
      "Sistem Autentikasi Pengguna (Admin & Penjual)",
      "Dashboard Koordinator untuk Monitoring",
      "Update Status Penjual",
      "Desain Responsif untuk Penggunaan Mobile"
    ],
    "challenges": [
      "Mengimplementasikan pembaruan lokasi real-time yang efisien dan akurat",
      "Mengelola state untuk banyak pengguna (penjual) secara bersamaan di peta",
      "Merancang antarmuka yang sederhana dan intuitif untuk digunakan di lapangan"
    ],
    "solutions": [
      "Menggunakan Next.js API Routes untuk menangani permintaan lokasi dari klien",
      "Memanfaatkan library pemetaan (seperti Leaflet atau Mapbox) yang diintegrasikan dengan React",
      "Menerapkan desain mobile-first dengan Tailwind CSS untuk memastikan pengalaman pengguna yang baik di perangkat seluler",
      "Menggunakan Prisma sebagai ORM untuk menyederhanakan interaksi dengan database MySQL"
    ]
  },

  "compro": {
    "title": "Website Profil HIMTI UNAIR 2025",
    "subtitle": "Platform Digital Resmi Himpunan Mahasiswa Teknik Informatika Universitas Airlangga",
    "description": "Sebuah website profil perusahaan (company profile) yang dirancang sebagai pusat informasi dan media komunikasi resmi untuk Himpunan Mahasiswa Teknik Informatika (HIMTI) Universitas Airlangga periode 2025.",
    "longDescription": "Website ini dikembangkan untuk merepresentasikan identitas, visi, dan misi HIMTI UNAIR 2025 secara profesional kepada mahasiswa, fakultas, dan pihak eksternal. Platform ini berfungsi sebagai sumber informasi utama mengenai struktur kepengurusan, program kerja yang akan datang, dokumentasi kegiatan, serta artikel dan berita terbaru. Tujuannya adalah untuk meningkatkan engagement anggota, mempermudah penyebaran informasi, dan membangun citra organisasi yang modern dan terstruktur.",
    "technologies": [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "Livewire"
    ],
    "category": "Web Development",
    "client": "HIMTI Universitas Airlangga 2025",
    "duration": "2 Bulan",
    "year": "2025",
    "status": "Selesai",
    "liveUrl": "https://himtiunair.com",
    "githubUrl": "https://github.com/Ahmadlazim-03/Company-Profile",
    "images": [
      "/images/compro1.png?height=600&width=800",
      "/images/compro2.png?height=400&width=600",
      "/images/compro3.png?height=400&width=600",
      "/images/compro4.png?height=400&width=600"
    ],
    "features": [
      "Profil Lengkap & Visi Misi Organisasi",
      "Halaman Struktur Kepengurusan 2025",
      "Agenda dan Detail Program Kerja",
      "Portal Artikel, Berita, dan Dokumentasi",
      "Galeri Foto dan Video Kegiatan",
      "Sistem Manajemen Konten (CMS) untuk Admin",
      "Desain Modern dan Responsif"
    ],
    "challenges": [
      "Merancang UI/UX yang profesional dan sesuai dengan identitas brand HIMTI",
      "Menyusun arsitektur informasi yang terstruktur untuk menampung banyak konten (proker, berita, dll.)",
      "Membangun sistem back-end yang mudah digunakan oleh pengurus untuk memperbarui konten website."
    ],
    "solutions": [
      "Menerapkan design system berbasis brand guide HIMTI untuk konsistensi visual",
      "Menggunakan rendering dari sisi server (SSR) dengan Blade untuk performa website yang cepat dan SEO-friendly",
      "Membangun panel admin kustom menggunakan resource controller Laravel untuk manajemen konten dinamis",
      "Menerapkan desain mobile-first dengan Tailwind CSS agar dapat diakses di semua perangkat."
    ]
  },

  "chat-bot": {
    "title": "WhatsApp Chatbot Cerdas",
    "subtitle": "Asisten AI Multimodal dengan Kemampuan Analisis Media",
    "description": "Sebuah chatbot WhatsApp cerdas yang dibangun untuk melampaui kemampuan standar Meta AI. Bot ini memiliki kapabilitas multimodal canggih, memungkinkannya menganalisis dan memproses berbagai jenis media langsung di dalam percakapan.",
    "longDescription": "Proyek ini dikembangkan untuk mengatasi keterbatasan chatbot konvensional dengan mengintegrasikan model AI canggih. Chatbot ini tidak hanya memahami teks, tetapi juga dapat menganalisis konten gambar, merangkum video, mengekstrak teks dari dokumen, dan mentranskripsi pesan suara. Dibangun dengan n8n untuk orkestrasi alur kerja, bot ini dapat dihubungkan ke berbagai layanan eksternal, menjadikannya alat yang sangat fleksibel untuk otomatisasi tugas, asisten pribadi, atau bahkan sebagai alat bantu belajar.",
    "technologies": [
      "n8n",
      "WAHA (WhatsApp HTTP API)",
      "Docker",
      "VPS",
      "Redis",
      "GPT-4o"
    ],
    "category": "Artificial Intelligence",
    "client": "Proyek Pribadi",
    "duration": "1 Bulan",
    "year": "2025",
    "status": "Selesai",
    "liveUrl": "",
    "githubUrl": "",
    "images": [
      "/images/chatbot1.png?height=600&width=800",
      "/images/chatbot2.png?height=400&width=600",
      "/images/chatbot3.png?height=400&width=600",
      "/images/chatbot4.png?height=400&width=600",
      "/images/chatbot5.png?height=400&width=600"
    ],
    "features": [
      "Analisis Konten Gambar (Image Recognition)",
      "Ringkasan dan Analisis Video",
      "Ekstraksi Teks dari Dokumen (PDF, Docx)",
      "Transkripsi Pesan Suara menjadi Teks",
      "Kemampuan Percakapan Kontekstual",
      "Integrasi Alur Kerja Otomatis (via n8n)",
      "Dukungan Multimodal (Teks, Gambar, Suara, Dokumen)"
    ],
    "challenges": [
      "Mengintegrasikan berbagai model AI untuk analisis multimodal (gambar, video, suara).",
      "Menjaga waktu respons bot agar tetap cepat dan interaktif, terutama saat memproses media.",
      "Menangani berbagai format file dan potensi error saat pemrosesan.",
      "Mengelola state percakapan agar tetap relevan dan tidak kehilangan konteks."
    ],
    "solutions": [
      "Menggunakan n8n sebagai platform orkestrasi untuk menghubungkan API WhatsApp dengan berbagai layanan AI.",
      "Memanfaatkan Redis untuk caching dan antrian tugas (queueing) agar pemrosesan media tidak memblokir percakapan.",
      "Membangun logika penanganan error yang tangguh untuk setiap jenis media yang diunggah.",
      "Menyimpan riwayat percakapan singkat dalam Redis untuk menjaga konteks pembicaraan."
    ]
  },

  "volunteervibe-app": {
    "title": "VolunteerVibe",
    "subtitle": "Aplikasi Mobile untuk Mempromosikan Volunteerisme di Kalangan Remaja",
    "description": "Sebuah aplikasi mobile yang dirancang untuk mempromosikan kegiatan sukarelawan di kalangan remaja usia 15-25 dengan menjembatani kesenjangan antara mereka dan organisasi sosial.",
    "longDescription": "Proyek ini dikembangkan sebagai solusi inovatif untuk mengatasi rendahnya tingkat partisipasi sukarelawan di kalangan remaja. Aplikasi ini bertujuan untuk mengatasi tantangan seperti kurangnya kesadaran dan aksesibilitas terhadap peluang, serta untuk menumbuhkan rasa tanggung jawab sosial, pengembangan keterampilan, dan koneksi komunitas di antara para penggunanya.",
    "technologies": [
      "Android OS",
      "PocketBase",
      "Google Maps API"
    ],
    "category": "Mobile Application",
    "client": "Mr. Boda",
    "duration": "4 Minggu",
    "year": "2024",
    "status": "Spesifikasi Kebutuhan Selesai",
    "liveUrl": "",
    "githubUrl": "https://github.com/Arya-f4/VolunteerVibe",
    "images": [
      "/images/volunteer1.png?height=10&width=10",
      "/images/volunteer2.png?height=400&width=600",
      "/images/volunteer3.png?height=400&width=600",
      "/images/volunteer4.png?height=10&width=10",
      "/images/volunteer5.png?height=400&width=600",
      "/images/volunteer6.png?height=400&width=600"
    ],
    "features": [
      "Pencarian acara berdasarkan geolokasi, kategori, atau tanggal",
      "Manajemen akun pengguna (registrasi, login, reset password)",
      "Pendaftaran dan posting acara oleh organisasi",
      "Fitur gamifikasi dengan poin, hadiah, dan lencana",
      "Pelacakan dan pencatatan jam sukarelawan",
      "Notifikasi pengingat acara dan peluang baru",
      "Berbagi aktivitas ke media sosial"
    ],
    "challenges": [
      "Menciptakan platform yang menarik untuk meningkatkan partisipasi sukarelawan di kalangan remaja.",
      "Memastikan sistem dapat menangani hingga 1000 pengguna secara bersamaan.",
      "Menjamin keamanan dan privasi data pengguna sesuai dengan standar GDPR."
    ],
    "solutions": [
      "Menerapkan fitur gamifikasi seperti poin dan lencana untuk memotivasi pengguna.",
      "Menggunakan Pocketbase yang skalabel untuk manajemen database real-time dan autentikasi.",
      "Mengimplementasikan fitur pencarian canggih berbasis geolokasi untuk memudahkan penemuan acara.",
      "Mewajibkan penanganan data yang aman sebagai salah satu syarat utama sistem."
    ]
  },

  "mycode-app": {
    "title": "My Code Application",
    "subtitle": "Platform Belajar Coding Interaktif",
    "description": "Sebuah aplikasi mobile interaktif untuk belajar coding yang dirancang bagi pemula, mirip dengan W3Schools. Aplikasi ini menyediakan berbagai kursus terstruktur, latihan soal, dan elemen gamifikasi untuk membuat proses belajar menjadi efektif dan menyenangkan.",
    "longDescription": "Proyek ini dikembangkan untuk membuat pembelajaran coding lebih mudah diakses oleh siapa saja, kapan saja, langsung dari perangkat mobile. Aplikasi ini memecah konsep-konsep pemrograman yang kompleks menjadi materi-materi singkat yang mudah dicerna. Dengan adanya code editor terintegrasi dan latihan interaktif, pengguna dapat langsung mempraktikkan teori yang dipelajari. Elemen gamifikasi seperti poin, lencana, dan papan peringkat ditambahkan untuk menjaga motivasi dan menciptakan pengalaman belajar yang tidak membosankan.",
    "technologies": [
      "Flutter",
      "PocketBase",
      "Android OS"
    ],
    "category": "Edukasi & Mobile",
    "client": "Proyek Pribadi",
    "duration": "2 Bulan",
    "year": "2025",
    "status": "Selesai",
    "liveUrl": "",
    "githubUrl": "https://github.com/Ahmadlazim-03/Mobile-Flutter-My-Code",
    "images": [
      "/images/mycode1.png?height=600&width=800",
      "/images/mycode2.png?height=400&width=600",
      "/images/mycode3.png?height=400&width=600",
      "/images/mycode4.png?height=400&width=600"
    ],
    "features": [
      "Berbagai Kursus Pemrograman (Python, JavaScript, dll.)",
      "Latihan Soal Interaktif dengan Pengecekan Kode",
      "Fitur Gamifikasi (Poin, Lencana, Papan Peringkat)",
      "Code Playground di dalam Aplikasi",
      "Pelacakan Progres Belajar per Kursus",
      "Sertifikat Penyelesaian Kursus"
    ],
    "challenges": [
      "Mendesain code editor yang fungsional dan nyaman digunakan di layar kecil.",
      "Membuat materi kursus yang terstruktur dan mudah dipahami oleh pemula.",
      "Mengimplementasikan sistem pengecekan kode (code checker) yang akurat untuk latihan soal."
    ],
    "solutions": [
      "Menggunakan custom widget Flutter untuk membangun antarmuka editor yang responsif.",
      "Menyusun kurikulum secara bertahap (step-by-step) dengan contoh kasus nyata.",
      "Mengintegrasikan backend service dengan PocketBase untuk menjalankan dan memvalidasi kode dari latihan soal.",
      "Menerapkan sistem gamifikasi untuk meningkatkan motivasi dan retensi pengguna."
    ]
  },

  "netflix-app": {
    "title": "Netflix Application",
    "subtitle": "Proyek Kloning Aplikasi Streaming Video Populer",
    "description": "Sebuah proyek kloning dari layanan streaming video populer, Netflix. Proyek ini mereplikasi pengalaman pengguna inti dalam menelusuri, mencari, dan menonton konten video, dibangun menggunakan Flutter untuk aplikasi mobile.",
    "longDescription": "Proyek ini bertujuan untuk memahami dan mengimplementasikan arsitektur dasar dari aplikasi streaming berskala besar. Fokus utamanya adalah pada pengembangan antarmuka (UI/UX) yang responsif dan mirip dengan aplikasi aslinya menggunakan Flutter. Data film dan serial TV diambil dari API eksternal (seperti TMDB), kemudian dikelola oleh backend Node.js yang juga menangani autentikasi dan data pengguna, seperti daftar tontonan (My List).",
    "technologies": [
      "Flutter",
      "Node.js",
      "MongoDB",
      "TMDB API"
    ],
    "category": "Mobile & Streaming",
    "client": "Proyek Pribadi",
    "duration": "3 Bulan",
    "year": "2025",
    "status": "Selesai",
    "liveUrl": "",
    "githubUrl": "https://github.com/Ahmadlazim-03/netflix_mobile_application",
    "images": [
      "/images/netflix1.png?height=600&width=800",
      "/images/netflix2.png?height=400&width=600",
      "/images/netflix3.png?height=400&width=600",
      "/images/netflix4.png?height=400&width=600",
      "/images/netflix5.png?height=400&width=600"
    ],
    "features": [
      "Autentikasi Pengguna (Login & Register)",
      "Beranda Dinamis dengan Kategori Konten (Trending, Populer, dll.)",
      "Fungsi Pencarian Film dan Serial TV",
      "Halaman Detail Konten (Sinopsis, Rating, Aktor)",
      "Pemutar Video Terintegrasi dengan Kontrol Dasar",
      "Fitur 'My List' untuk Menyimpan Tontonan"
    ],
    "challenges": [
      "Membangun UI yang kompleks dan responsif seperti Netflix menggunakan Flutter.",
      "Mengelola state aplikasi yang besar, termasuk data film dan status pengguna (e.g., watchlist).",
      "Mengintegrasikan API eksternal (seperti TMDB) secara efisien untuk mendapatkan data konten."
    ],
    "solutions": [
      "Menggunakan arsitektur widget Flutter yang modular untuk membangun setiap komponen UI secara terpisah.",
      "Menerapkan state management solution (seperti BLoC) untuk menangani data di seluruh aplikasi.",
      "Membuat backend service dengan Node.js untuk menjadi perantara antara aplikasi dan TMDB API, serta mengelola data pengguna.",
      "Mengoptimalkan pemanggilan API dan caching gambar untuk memastikan pengalaman browsing yang lancar."
    ]
  },

  "database-manager": {
    "title": "Database Manager",
    "subtitle": "Platform All-in-One untuk Manajemen Database dan Otomatisasi API",
    "description": "Sebuah tool manajemen database berbasis web yang memungkinkan pengguna terhubung ke berbagai database (PostgreSQL, MongoDB, MySQL) dan secara otomatis membuat REST API yang aman untuk setiap koleksi/tabel, lengkap dengan sistem perizinan.",
    "longDescription": "Proyek ini dikembangkan untuk menyederhanakan proses pengembangan backend dengan menyediakan satu platform terpusat. Pengguna tidak perlu lagi mengelola beberapa alat database yang berbeda atau menulis kode boilerplate untuk API CRUD. Dengan antarmuka yang intuitif, developer dapat mengelola data dan langsung mendapatkan endpoint API yang fungsional dan aman, sehingga mempercepat waktu pengembangan secara signifikan.",
    "technologies": [
      "SvelteKit",
      "Go Fiber",
      "MongoDB",
      "Docker"
    ],
    "category": "Developer Tools",
    "client": "Proyek Pribadi",
    "duration": "3 Bulan",
    "year": "2025",
    "status": "in-progress",
    "liveUrl": "",
    "githubUrl": "https://github.com/Ahmadlazim-03/database-manager",
    "images": [
      "/images/database1.png?height=600&width=800",
      "/images/database2.png?height=400&width=600",
      "/images/database3.png?height=400&width=600",
      "/images/database4.png?height=400&width=600"
    ],
    "features": [
      "Koneksi Multi-Database (PostgreSQL, MongoDB, MySQL)",
      "Antarmuka Grafis untuk Manajemen Data (CRUD)",
      "Generator REST API Otomatis untuk Setiap Koleksi/Tabel",
      "Sistem Perizinan (Permission) Berbasis Peran untuk API",
      "Dokumentasi API yang Dihasilkan secara Otomatis",
      "Manajemen Koneksi Database yang Aman"
    ],
    "challenges": [
      "Membangun konektor yang andal untuk berbagai jenis database dengan struktur yang berbeda.",
      "Merancang sistem yang aman untuk menyimpan kredensial database pengguna.",
      "Membuat logika generator API yang dinamis dan dapat menangani berbagai skema data."
    ],
    "solutions": [
      "Menggunakan driver resmi untuk setiap database dan membuat lapisan abstraksi (abstraction layer) di Go Fiber untuk menyeragamkan operasi.",
      "Mengimplementasikan enkripsi at-rest untuk semua kredensial yang disimpan.",
      "Membangun sistem template engine di backend untuk menghasilkan route dan controller API secara dinamis berdasarkan skema yang dibaca.",
      "Menggunakan SvelteKit untuk menciptakan antarmuka pengguna yang reaktif dan cepat."
    ]
  },

  "data-preprocessing-tools": {
    "title": "Auto Pre-Processing Data Tools",
    "subtitle": "Otomatisasi Alur Kerja Pra-Pemrosesan Data untuk Machine Learning",
    "description": "Sebuah tools berbasis web yang dirancang untuk mengotomatiskan dan menyederhanakan alur pra-pemrosesan data untuk kebutuhan machine learning. Pengguna dapat mengunggah dataset dan menerapkan berbagai teknik pra-pemrosesan melalui antarmuka yang interaktif untuk menyiapkan data mentah agar siap digunakan dalam model machine learning.",
    "longDescription": "Proyek ini dikembangkan untuk mengatasi salah satu bagian yang paling memakan waktu dalam machine learning, yaitu persiapan data. Tools ini menyediakan antarmuka tanpa kode (no-code) yang memandu pengguna melalui setiap langkah penting, mulai dari membersihkan data (menangani nilai yang hilang, outlier) hingga transformasi (normalisasi, encoding). Tujuannya adalah untuk memberdayakan data scientist dan analis agar dapat menyiapkan dataset berkualitas tinggi dengan lebih cepat dan efisien.",
    "technologies": [
      "SvelteKit",
      "Go Fiber",
      "Python",
      "Pandas",
      "Scikit-learn"
    ],
    "category": "Data Science & AI",
    "client": "Proyek Pribadi",
    "duration": "4 Bulan",
    "year": "2025",
    "status": "in-progress",
    "liveUrl": "",
    "githubUrl": "https://github.com/Ahmadlazim-03/auto-preprocessing-data-application",
    "images": [
      "/images/preprocessing1.png?height=600&width=800",
    ],
    "features": [
      "Upload Dataset dari Berbagai Format (CSV, Excel)",
      "Penanganan Nilai Hilang (Missing Values) dengan Berbagai Metode",
      "Transformasi dan Penskalaan Data (Normalisasi, Standarisasi)",
      "Encoding Variabel Kategorikal (One-Hot, Label Encoding)",
      "Visualisasi Data Interaktif untuk Eksplorasi",
      "Pembagian Dataset (Data Latih & Uji)",
      "Unduh Dataset Hasil Pra-Pemrosesan"
    ],
    "challenges": [
      "Mengelola dataset berukuran besar secara efisien di lingkungan web tanpa menyebabkan browser hang.",
      "Mengintegrasikan backend Python untuk pemrosesan data dengan frontend SvelteKit secara real-time.",
      "Menyediakan antarmuka yang intuitif bagi pengguna dengan berbagai tingkat keahlian teknis."
    ],
    "solutions": [
      "Memproses data secara asynchronous di backend, sementara frontend hanya menampilkan status atau hasil proses.",
      "Menggunakan WebSocket untuk komunikasi real-time antara frontend dan backend selama proses berjalan.",
      "Merancang alur kerja berbasis wizard (langkah-demi-langkah) di SvelteKit untuk memandu pengguna melalui setiap tahap pra-pemrosesan."
    ]
  },

  "sipandu": {
    "title": "Si Pandu Application",
    "subtitle": "Aplikasi Pelaporan Bencana Terpadu Berbasis Peta",
    "description": "Sebuah aplikasi pelaporan masyarakat untuk suatu daerah, yang memungkinkan pengguna untuk melaporkan kejadian bencana alam secara langsung melalui antarmuka peta. Laporan yang masuk kemudian dapat dilihat dan diproses oleh pemerintah daerah untuk penanganan yang lebih cepat dan terkoordinasi.",
    "longDescription": "Proyek ini dikembangkan untuk mempercepat alur komunikasi antara masyarakat dan pemerintah saat terjadi bencana. Dengan 'Si Pandu', warga dapat dengan mudah menandai lokasi kejadian di peta, mengunggah foto sebagai bukti, dan memantau status laporannya. Di sisi lain, pemerintah mendapatkan akses ke dasbor terpusat untuk memverifikasi dan mengelola semua laporan yang masuk, memungkinkan respons yang lebih terstruktur dan efisien terhadap keadaan darurat.",
    "technologies": [
      "Flutter",
      "PocketBase",
      "Android OS",
      "Google Maps API"
    ],
    "category": "Mobile & Layanan Publik",
    "client": "Proyek Konsep untuk Pemerintah Daerah",
    "duration": "3 Bulan",
    "year": "2025",
    "status": "Selesai",
    "liveUrl": "",
    "githubUrl": "",
    "images": [
      "/images/sipandu1.png?height=600&width=800",
      "/images/sipandu2.png?height=600&width=800",
    ],
    "features": [
      "Pelaporan Bencana Berbasis Peta Interaktif",
      "Kirim Laporan dengan Lampiran Foto dan Deskripsi",
      "Pelacakan Status Laporan (Diterima, Diproses, Selesai)",
      "Dasbor Admin untuk Pemerintah Memverifikasi & Mengelola Laporan",
      "Notifikasi Real-Time untuk Laporan Baru dan Update Status",
      "Riwayat Laporan Pengguna"
    ],
    "challenges": [
      "Memastikan akurasi lokasi GPS yang dikirim oleh pengguna.",
      "Membangun sistem notifikasi real-time yang andal untuk laporan darurat.",
      "Merancang dua antarmuka yang berbeda namun terintegrasi: satu untuk pelapor (warga) dan satu untuk admin (pemerintah)."
    ],
    "solutions": [
      "Mengintegrasikan Google Maps API untuk pengambilan dan validasi data geolokasi.",
      "Menggunakan push notification services melalui PocketBase untuk mengirim peringatan instan ke dasbor admin.",
      "Merancang alur pengguna (user flow) yang terpisah untuk setiap peran (user dan admin) di dalam aplikasi Flutter.",
      "Menyediakan fitur upload foto sebagai bukti visual untuk membantu verifikasi laporan oleh pemerintah."
    ]
  }
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const project = projectsData[params.slug as keyof typeof projectsData]

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <ArrowLeft className="size-4" />
            <span>Back to Portfolio</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main className="container px-4 py-8 md:px-6">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <Badge className="mb-4" variant="secondary">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>
                    {project.duration} • {project.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 size-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 size-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/40">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="size-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Additional Images */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden border border-border/40">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 2}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 3D Model Section */}
            {project.sketchfabModel && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Interactive 3D Model</h2>
                <SketchfabViewer
                  modelId={project.sketchfabModel}
                  title={`${project.title} - 3D Visualization`}
                  description="Explore this project in 3D. Use mouse to rotate, zoom, and pan."
                  className="mb-6"
                />
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Year</p>
                      <p className="font-medium">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Category</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Interested in Similar Work?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's discuss how I can help bring your project to life.
                  </p>
                  <Button asChild className="w-full">
                     <a 
                      href="https://wa.me/6281252374308" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get In Touch
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-16 border-t"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(projectsData)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, otherProject]) => (
                <Link key={slug} href={`/project/${slug}`}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-video">
                      <Image
                        src={otherProject.images[0] || "/placeholder.svg"}
                        alt={otherProject.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2" variant="secondary">
                        {otherProject.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2">{otherProject.title}</h3>
                      <p className="text-sm text-muted-foreground">{otherProject.subtitle}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
