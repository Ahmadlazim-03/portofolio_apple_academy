"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Filter,
  Globe,
  Smartphone,
  Clock,
  ExternalLink,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

// Load ThreeScene component dynamically
const ThreeScene = dynamic(() => import("@/components/three-scene").then((mod) => mod.ThreeScene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-muted/20">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        <p className="text-muted-foreground">Loading 3D Scene...</p>
      </div>
    </div>
  ),
})

type ProjectCategory = "all" | "web" | "mobile" | "ai" | "incoming"

interface Project {
  name: string
  tech: string
  description: string
  features: string[]
  cta: string
  image: string
  slug: string
  category: ProjectCategory
  popular?: boolean
  status?: "completed" | "in-progress" | "upcoming"
}

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Backend Development",
      description: "Proficient in Node.js, Python, databases, and API development.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with Figma and Adobe Creative Suite.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile apps with React Native and Flutter.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "DevOps & Cloud",
      description: "Experience with AWS, Docker, CI/CD pipelines, and modern deployment strategies.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Project Management",
      description: "Leading development teams and managing projects from concept to deployment.",
      icon: <Star className="size-5" />,
    },
  ]

  const projects: Project[] = [
  {
    name: "Go Explore",
    tech: "Laravel, MySQL",
    description: "A booking application for destinations in Surabaya.",
    features: [
      "Responsive Design",
      "Payment Gateway",
      "Admin Panel",
      "Booking & Ticketing System",
      "Destination Search & Filter",
      "Interactive Map & Navigation",
      "User Reviews & Ratings",
      "Popular Destination Recommendations",
      "Notifications & Reminders",
      "SEO Optimized"
    ],
    cta: "View Project",
    image: "/images/goexplore1.png?height=200&width=300",
    slug: "go-explore",
    category: "web",
    status: "completed",
  },
  {
    name: "Go Orbit Company",
    tech: "Cromwell Framework, Next.js, TypeScript, MySQL",
    description: "Go-orbit provides tailored training, coaching, and consulting to build skills, enhance performance, and achieve the best results.",
    features: [
      "Insights and motivation for teams",
      "Training and coaching",
      "Consulting and mentoring",
      "Experience-based learning and outbound",
      "Special bootcamp training",
      "Event and MICE organizer"
    ],
    cta: "View Project",
    popular: true,
    image: "/images/goorbit1.png?height=200&width=300",
    slug: "go-orbit",
    category: "web",
    status: "completed",
  },
  {
    name: "Danusin",
    tech: "Next.js, Typescript, Tailwind CSS, PocketBase",
    description: "An application to help track business fund locations.",
    features: [
      "Real-Time Seller Location Tracking on Map",
      "Coordinator Dashboard for Team Monitoring",
      "Centralized Seller Team Management (by Coordinator)",
      "Seller Activity Status Update (e.g., 'Selling', 'Resting')",
      "Secure Authentication System for Coordinators and Sellers",
      "Role-Based Access Control (Coordinator vs. Seller)"
    ],
    cta: "View Project",
    image: "/images/danusin1.png?height=200&width=300",
    slug: "danusin",
    category: "web",
    status: "completed",
  },
  {
    name: "Company Profile HIMTI 2025",
    tech: "Laravel, PHP, Tailwind CSS, MySQL",
    description: "A company profile application for the Informatics Engineering Student Association 2025.",
    features: [
      "Homepage with Organization Profile",
      "Organizational Structure and Department Details",
      "Agenda and Annual Work Program Plans",
      "News, Articles, and Announcements Portal",
      "Photo and Video Activity Gallery",
      "Registration Form and Contact Page",
      "Content Management System (CMS) for Admin",
      "Integration with Official Social Media Accounts",
      "Modern Responsive Design on All Devices"
    ],
    cta: "View Project",
    image: "/images/compro1.png?height=200&width=300",
    slug: "compro",
    category: "web",
    status: "completed",
  },
  {
    name: "Chat bot Whatsapp",
    tech: "n8n, WAHA, VPS, Redis",
    description: "An intelligent WhatsApp chatbot built to surpass the standard capabilities of Meta AI. This bot has advanced multimodal capabilities, allowing it to analyze and process various types of media such as images, videos, documents, and voice messages directly within the conversation.",
    features: [
      "Image Content Analysis (Image Recognition)",
      "Video Summarization and Analysis",
      "Text Extraction from Documents (PDF, Docx)",
      "Voice Message Transcription to Text",
      "Contextual Conversation Capability",
      "Automated Workflow Integration (via n8n)",
      "Multimodal Support (Text, Image, Voice, Document)"
    ],
    cta: "View Project",
    image: "/images/chatbot1.png?height=200&width=300",
    slug: "chat-bot",
    category: "ai",
    status: "completed",
  },
  {
    name: "Volunteer Vibe Application",
    tech: "Android OS, Pocketbase, Flutter",
    description: "A mobile application designed to promote volunteerism among youth by connecting them with volunteer organizations through an engaging and accessible platform.",
    features: [
      "Event Search by Geolocation",
      "Gamification with Points and Badges",
      "Social Media Sharing",
      "Volunteer Hour Tracking"
    ],
    cta: "View Project",
    image: "/images/volunteer1.png?height=200&width=300",
    slug: "volunteervibe-app",
    category: "mobile",
    status: "completed"
  },
  {
    name: "My Code Application",
    tech: "Android OS, Pocketbase, Flutter",
    description: "An interactive mobile application for learning coding designed for beginners, similar to W3Schools. This app provides structured courses, exercises, and gamification elements to make the learning process effective and enjoyable.",
    features: [
      "Various Programming Courses",
      "Interactive Exercises",
      "Gamification Features (Points & Badges)",
      "In-App Code Editor",
      "Learning Progress Tracking"
    ],
    cta: "View Project",
    image: "/images/mycode1.png?height=200&width=300",
    slug: "mycode-app",
    category: "mobile",
    status: "completed",
  },
  {
    name: "Netflix Application",
    tech: "Android OS, Pocketbase, Flutter",
    description: "A clone project of the popular video streaming service, Netflix. This project replicates the core user experience of browsing, searching, and watching video content, built using Flutter for mobile applications.",
    features: [
      "User Authentication (Login & Register)",
      "Homepage with Movie Categories",
      "Content Search Function",
      "Movie Detail Page (Synopsis & Rating)",
      "Integrated Video Player",
      "User Profile and 'My List'"
    ],
    cta: "View Project",
    image: "/images/netflix1.png?height=200&width=300",
    slug: "netflix-app",
    category: "mobile",
    status: "completed",
  },
  {
    name: "Si Pandu Application",
    tech: "Android OS, Pocketbase, Flutter",
    description: "A community reporting application for a region, allowing users to report natural disaster events directly through a map interface. Submitted reports can then be viewed and processed by local governments for faster and more coordinated responses.",
    features: [
      "Map-Based Reporting",
      "Submit Reports with Photos & Descriptions",
      "Report Status Tracking (Received, In Progress, Completed)",
      "Government Dashboard for Report Verification",
      "Real-Time Notifications"
    ],
    cta: "View Project",
    image: "/images/sipandu1.png?height=200&width=300",
    slug: "sipandu",
    category: "mobile",
    status: "completed"
  },
  {
    name: "Database Manager",
    tech: "SvelteKit, Go Fiber, MongoDB",
    description: "A web-based database management tool that allows users to connect to multiple types of databases such as PostgreSQL, MongoDB, and MySQL. The platform provides features to remotely manage collections/tables and automatically generates secure REST APIs for each collection, complete with a permission system.",
    features: [
      "Multi-Database Connection (PostgreSQL, MongoDB, MySQL)",
      "Remote Collection/Table Management",
      "Automatic REST API Generator",
      "Permission System for APIs",
      "Graphical User Interface (GUI) for Data"
    ],
    cta: "In Development",
    image: "/images/database1.png?height=200&width=300",
    slug: "database-manager",
    category: "incoming",
    status: "in-progress",
  },
  {
    name: "Auto Pre-Processing Data Tools",
    tech: "SvelteKit, Go Fiber, Python",
    description: "A web-based tool designed to automate and simplify the data preprocessing workflow for machine learning needs. Users can upload datasets and apply various preprocessing techniques through an interactive interface to prepare raw data for machine learning models.",
    features: [
      "Upload Dataset (CSV, Excel, etc.)",
      "Handle Missing Values",
      "Data Transformation (Normalization & Standardization)",
      "Categorical Variable Encoding",
      "Interactive Data Visualization",
      "Download Preprocessed Dataset"
    ],
    cta: "In Development",
    image: "/images/preprocessing1.png?height=200&width=300",
    slug: "data-preprocessing-tools",
    category: "incoming",
    status: "in-progress"
  },
  ]


  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects", icon: <Filter className="size-4" /> },
    { id: "web" as ProjectCategory, label: "Web", icon: <Globe className="size-4" /> },
    { id: "mobile" as ProjectCategory, label: "Mobile", icon: <Smartphone className="size-4" /> },
    { id: "ai" as ProjectCategory, label: "AI", icon: <Clock className="size-4" /> },
    { id: "incoming" as ProjectCategory, label: "Incoming", icon: <Clock className="size-4" /> },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm border-b border-border/40" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2 font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="/images/myprofile.jpg" // Ganti dengan path gambar Anda
              alt="Logo Ahmad Lazim"
              className="size-8 rounded-lg shadow-lg object-cover"
            />
            <span>Ahmad Lazim</span>
          </motion.div>

          <nav className="hidden md:flex gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <a 
              href="https://wa.me/6281252374308" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </a>
          </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
            >
              <div className="container py-4 flex flex-col gap-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="py-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Log in
                  </Link>
                  <Button className="rounded-full">
                    Get Started
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-6 rounded-full px-6 py-2 text-sm font-medium shadow-lg" variant="secondary">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for Work
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Full-Stack Developer &{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Building Digital Solutions
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I create beautiful, functional, and user-centered digital experiences. Specializing in React, Next.js,
                and modern web technologies with a passion for clean code and exceptional design.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all">
                  <Link href="#projects">View My Work</Link>
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base bg-transparent hover:bg-muted/50 transition-all"
              >
                <a href="/CV.pdf" download>
                  Download CV
                </a>
              </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: <Check className="size-4 text-primary" />, text: "2+ Years Experience" },
                  { icon: <Check className="size-4 text-primary" />, text: "10+ Projects" },
                  { icon: <Check className="size-4 text-primary" />, text: "Remote Available" },
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="/images/company.jpg?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="Portfolio dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70 animate-pulse"></div>
            </motion.div>
          </div>
        </section>

        {/* 3D Showcase Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                My Assistant AI
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Interactive 3D Experience</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Explore my work in an immersive 3D environment. Move your mouse to interact with the elements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border/40 bg-gradient-to-b from-background to-muted/20 shadow-2xl">
                <ThreeScene />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="skills" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Skills
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What I Bring to the Table</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A comprehensive skill set spanning frontend, backend, design, and project management to deliver
                exceptional digital solutions.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:border-primary/20 group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <motion.div
                        className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                My Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How I Work With Clients</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "Understanding your needs, goals, and target audience to create a comprehensive project roadmap.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description:
                    "Creating wireframes, prototypes, and developing your solution using best practices and modern technologies.",
                },
                {
                  step: "03",
                  title: "Testing & Launch",
                  description: "Thorough testing, optimization, and deployment with ongoing support and maintenance.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4 group"
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Featured Projects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Work</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A selection of projects that showcase my skills and experience across different technologies and
                industries.
              </p>
            </motion.div>

            {/* Project Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full transition-all ${
                    activeCategory === category.id ? "shadow-lg" : "hover:bg-muted/50"
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.id === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === category.id).length}
                  </Badge>
                </Button>
              ))}
            </motion.div>

            <div className="mx-auto max-w-6xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 lg:grid-cols-3 lg:gap-8"
                >
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card
                        className={`group relative overflow-hidden h-full transition-all duration-300 hover:shadow-xl ${
                          project.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md hover:shadow-xl"
                        } bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:border-primary/20`}
                      >
                        {project.popular && (
                          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg z-10">
                            Featured
                          </div>
                        )}

                        {project.status && (
                          <div
                            className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full z-10 ${
                              project.status === "completed"
                                ? "bg-green-500/20 text-green-700 dark:text-green-300"
                                : project.status === "in-progress"
                                  ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
                                  : "bg-blue-500/20 text-blue-700 dark:text-blue-300"
                            }`}
                          >
                            {project.status === "completed"
                              ? "Completed"
                              : project.status === "in-progress"
                                ? "In Progress"
                                : "Upcoming"}
                          </div>
                        )}

                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.name}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {project.name}
                            </h3>
                            {project.category === "web" && <Globe className="size-4 text-muted-foreground" />}
                            {project.category === "mobile" && <Smartphone className="size-4 text-muted-foreground" />}
                            {project.category === "incoming" && <Clock className="size-4 text-muted-foreground" />}
                          </div>
                          <p className="text-primary font-medium text-sm mb-2">{project.tech}</p>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                          <ul className="space-y-2 mb-6 flex-grow">
                            {project.features.map((feature, j) => (
                              <li key={j} className="flex items-center text-sm">
                                <Check className="mr-2 size-3 text-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex gap-2">
                            <Button
                              asChild
                              className={`flex-1 rounded-full ${
                                project.popular ? "bg-primary hover:bg-primary/90" : ""
                              }`}
                              variant={project.popular ? "default" : "outline"}
                              disabled={project.status === "upcoming"}
                            >
                              <Link href={`/project/${project.slug}`} className="flex items-center justify-center">
                                {project.cta}
                                <ExternalLink className="ml-2 size-3" />
                              </Link>
                            </Button>
                            {project.status === "completed" && (
                              <Button variant="ghost" size="icon" className="rounded-full">
                                <Github className="size-4" />
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Start Your Next Project?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Let's work together to bring your ideas to life. I'm available for freelance projects and full-time
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <a 
                    href="https://wa.me/6281252374308" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10 transition-all"
                >
                  <a href="/CV.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Available for new projects. Let's discuss your ideas.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  A
                </div>
                <span>Ahmad Lazim</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer & Building Digital Solutions.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", label: "Facebook" },
                  {
                    icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                    label: "Twitter",
                  },
                  {
                    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <Link key={index} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d={social.icon}></path>
                    </svg>
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {[
              { title: "Services", links: ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"] },
              { title: "Work", links: ["Portfolio", "Case Studies", "Blog", "Contact"] },
              { title: "Connect", links: ["https://www.linkedin.com/in/ahmad-lazim-5b8302288", "https://github.com/Ahmadlazim-03", "Twitter"] },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-sm font-bold">{section.title}</h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Ahmad Lazim. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
