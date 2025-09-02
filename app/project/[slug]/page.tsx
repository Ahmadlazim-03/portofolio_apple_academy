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
    "liveUrl": "Informasi tidak tersedia",
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
                    <Link href="/#contact">Get In Touch</Link>
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
