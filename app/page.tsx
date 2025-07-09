"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

// Muat komponen ThreeScene secara dinamis hanya di sisi klien
const ThreeScene = dynamic(() => import("@/components/three-scene").then(mod => mod.ThreeScene), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-muted/20">
      <p className="text-muted-foreground">Loading 3D Scene...</p>
    </div>
  ),
})

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              A
            </div>
            <span>Alex Johnson</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#hero"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
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
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#hero" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#skills" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#projects" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
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
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Available for Work
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Full-Stack Developer & UI/UX Designer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I create beautiful, functional, and user-centered digital experiences. Specializing in React, Next.js,
                and modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  <Link href="#projects">View My Work</Link>
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-transparent">
                  Download CV
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>50+ Projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Remote Available</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="Portfolio dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
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
                3D Showcase
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
              <div className="aspect-video rounded-xl overflow-hidden border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <ThreeScene />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map(i => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company logo ${i}`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
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
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
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
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Client Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Clients Say About My Work</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Feedback from satisfied clients who have worked with me on various projects.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and user experience was outstanding.",
                  author: "Sarah Mitchell",
                  role: "CEO, Fashion Forward",
                  rating: 5,
                },
                {
                  quote:
                    "Working with Alex was a pleasure. The mobile app he developed for us has received great feedback from our users and increased engagement significantly.",
                  author: "Michael Chen",
                  role: "Product Manager, TechStart",
                  rating: 5,
                },
                {
                  quote:
                    "Alex's design skills are top-notch. He transformed our outdated website into a modern, responsive platform that truly represents our brand.",
                  author: "Emily Rodriguez",
                  role: "Marketing Director, GreenTech",
                  rating: 5,
                },
                {
                  quote:
                    "The dashboard Alex built for our SaaS product is intuitive and powerful. His full-stack expertise really showed in the final product.",
                  author: "David Kim",
                  role: "CTO, DataFlow",
                  rating: 5,
                },
                {
                  quote:
                    "Alex's project management skills kept everything on track. He delivered on time, within budget, and the quality was exceptional.",
                  author: "Lisa Patel",
                  role: "Operations Manager, StartupHub",
                  rating: 5,
                },
                {
                  quote:
                    "The React Native app Alex developed performs flawlessly across both iOS and Android. His technical expertise is impressive.",
                  author: "James Wilson",
                  role: "Founder, MobileFirst",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

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

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "E-Commerce Platform",
                    tech: "React, Node.js, MongoDB",
                    description:
                      "A full-featured online store with payment integration, inventory management, and admin dashboard.",
                    features: ["Responsive Design", "Payment Gateway", "Admin Panel", "SEO Optimized"],
                    cta: "View Project",
                    image: "/placeholder.svg?height=200&width=300",
                    slug: "ecommerce-platform",
                  },
                  {
                    name: "Task Management App",
                    tech: "Next.js, TypeScript, Prisma",
                    description:
                      "A collaborative project management tool with real-time updates and team collaboration features.",
                    features: ["Real-time Updates", "Team Collaboration", "File Sharing", "Mobile Responsive"],
                    cta: "View Project",
                    popular: true,
                    image: "/placeholder.svg?height=200&width=300",
                    slug: "task-management-app",
                  },
                  {
                    name: "Healthcare Dashboard",
                    tech: "React, Python, PostgreSQL",
                    description:
                      "A comprehensive healthcare management system with patient records, appointments, and analytics.",
                    features: ["Patient Management", "Appointment System", "Analytics Dashboard", "HIPAA Compliant"],
                    cta: "View Project",
                    image: "/placeholder.svg?height=200&width=300",
                    slug: "healthcare-dashboard",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`group relative overflow-hidden h-full transition-all duration-300 hover:border-primary hover:shadow-lg ${
                        project.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md hover:shadow-xl"
                      } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {project.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Featured
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <p className="text-primary font-medium mt-1">{project.tech}</p>
                        <p className="text-muted-foreground mt-2">{project.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {project.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          className={`w-full mt-auto rounded-full ${
                            project.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
                          }`}
                          variant={project.popular ? "default" : "outline"}
                        >
                          <Link href={`/project/${project.slug}`}>{project.cta}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="contact" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Common questions about working with me and my development process.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is your typical project timeline?",
                    answer:
                      "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during the planning phase.",
                  },
                  {
                    question: "Do you work with clients remotely?",
                    answer:
                      "Yes, I work with clients worldwide remotely. I use modern collaboration tools and maintain regular communication to ensure smooth project execution regardless of location.",
                  },
                  {
                    question: "What technologies do you specialize in?",
                    answer:
                      "I specialize in React, Next.js, TypeScript, Node.js, Python, and modern web technologies. I also have experience with mobile development using React Native and various databases and cloud platforms.",
                  },
                  {
                    question: "Do you provide ongoing maintenance and support?",
                    answer:
                      "Yes, I offer ongoing maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements as needed.",
                  },
                  {
                    question: "How do you handle project communication?",
                    answer:
                      "I believe in transparent communication. I provide regular updates, use project management tools, and schedule weekly check-ins to ensure you're always informed about project progress.",
                  },
                  {
                    question: "What are your rates?",
                    answer:
                      "My rates vary depending on project complexity and timeline. I offer both hourly and project-based pricing. Contact me for a detailed quote based on your specific requirements.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

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
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Get In Touch
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  Download CV
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
                <span>Alex Johnson</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer & UI/UX Designer. Creating beautiful, functional digital experiences.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Work</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dribbble
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}