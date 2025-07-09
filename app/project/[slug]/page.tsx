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
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    subtitle: "Full-featured online store with modern design",
    description:
      "A comprehensive e-commerce solution built with React and Node.js, featuring a responsive design, secure payment processing, inventory management, and an intuitive admin dashboard. The platform supports multiple payment methods, real-time inventory tracking, and provides detailed analytics for business insights.",
    longDescription:
      "This e-commerce platform was designed to provide a seamless shopping experience for both customers and administrators. The frontend is built with React and styled with Tailwind CSS for a modern, responsive design. The backend utilizes Node.js with Express and MongoDB for robust data management. Key features include user authentication, shopping cart functionality, order management, payment integration with Stripe, and comprehensive admin tools for product and order management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe API", "JWT"],
    category: "Web Development",
    client: "Fashion Forward Inc.",
    duration: "3 months",
    year: "2024",
    status: "Completed",
    liveUrl: "https://example-store.com",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Responsive Design",
      "Payment Gateway Integration",
      "Admin Dashboard",
      "Inventory Management",
      "User Authentication",
      "Order Tracking",
      "SEO Optimized",
      "Mobile Responsive",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing performance for large product catalogs",
      "Creating an intuitive admin interface",
      "Ensuring mobile responsiveness across devices",
    ],
    solutions: [
      "Integrated Stripe for secure payment processing with PCI compliance",
      "Implemented lazy loading and pagination for better performance",
      "Designed a user-friendly admin dashboard with data visualization",
      "Used responsive design principles and tested across multiple devices",
    ],
    sketchfabModel: "74b953299a0a4219a92539c995a79a82",
  },
  "task-management-app": {
    title: "Task Management App",
    subtitle: "Collaborative project management with real-time updates",
    description:
      "A modern task management application built with Next.js and TypeScript, featuring real-time collaboration, file sharing, and team management capabilities. The app includes drag-and-drop functionality, deadline tracking, and comprehensive project analytics.",
    longDescription:
      "This task management application was developed to streamline team collaboration and project tracking. Built with Next.js and TypeScript for type safety and performance, the app features real-time updates using WebSocket connections. The interface is designed with user experience in mind, featuring intuitive drag-and-drop functionality for task organization and a clean, modern design that works seamlessly across devices.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS", "NextAuth"],
    category: "Web Application",
    client: "TechStart Solutions",
    duration: "4 months",
    year: "2024",
    status: "Completed",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/alexjohnson/task-manager",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Real-time Collaboration",
      "Drag & Drop Interface",
      "File Sharing",
      "Team Management",
      "Deadline Tracking",
      "Project Analytics",
      "Mobile Responsive",
      "Dark Mode Support",
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Creating smooth drag-and-drop interactions",
      "Managing complex state across components",
      "Ensuring data consistency across users",
    ],
    solutions: [
      "Used Socket.io for real-time communication between clients",
      "Implemented React DnD library for smooth drag-and-drop experience",
      "Utilized Zustand for efficient state management",
      "Implemented optimistic updates with rollback functionality",
    ],
    sketchfabModel: "a895a5e3a5124b9594495967110c794f",
  },
  "healthcare-dashboard": {
    title: "Healthcare Dashboard",
    subtitle: "Comprehensive patient management system",
    description:
      "A secure healthcare management system built with React and Python, featuring patient records, appointment scheduling, and analytics dashboard. The system is HIPAA compliant and includes role-based access control.",
    longDescription:
      "This healthcare dashboard was developed to digitize and streamline healthcare operations. The system provides comprehensive patient management, appointment scheduling, and detailed analytics for healthcare providers. Built with security as a top priority, the application implements HIPAA compliance measures and role-based access control to ensure patient data privacy and security.",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "Chart.js", "Material-UI"],
    category: "Healthcare Technology",
    client: "MedCare Clinic",
    duration: "6 months",
    year: "2023",
    status: "Completed",
    liveUrl: "https://healthcare-demo.com",
    githubUrl: "https://github.com/alexjohnson/healthcare-dashboard",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Patient Management",
      "Appointment Scheduling",
      "Medical Records",
      "Analytics Dashboard",
      "HIPAA Compliance",
      "Role-based Access",
      "Prescription Management",
      "Billing Integration",
    ],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Creating intuitive interfaces for medical staff",
      "Integrating with existing medical systems",
      "Managing complex patient data relationships",
    ],
    solutions: [
      "Implemented end-to-end encryption and audit logging",
      "Conducted user research with medical professionals for UX design",
      "Built flexible API integrations with HL7 FHIR standards",
      "Designed normalized database schema with proper relationships",
    ],
    sketchfabModel: "4a9a0c49756543948685e39942739609",
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
