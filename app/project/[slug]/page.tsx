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
    subtitle: "Surabaya Destination Booking Application",
    description:
      "A destination booking platform focused on the city of Surabaya. This application makes it easy for users to discover, explore, and book various popular destinations such as city parks, museums, culinary spots, and local events. With a modern and intuitive interface, the app is designed to provide a fast, secure, and convenient booking experience for both local and international tourists.",
    longDescription:
      "This Surabaya destination booking application is designed to support local tourism by providing easy access to information and reservations. Users can view details of each destination, including ticket prices, operating hours, map locations, and reviews from other visitors. The system is built using React for a responsive and user-friendly frontend, with Node.js and MongoDB on the backend for efficient data management. Key features include destination search by category (nature, culture, culinary), online ticket booking with payment integration, and an admin dashboard for managing destination and order data. The app is optimized to support mobile devices, allowing tourists to book anytime, anywhere.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Midtrans"],
    category: "Web Development",
    client: "Final Semester 3 Exam",
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
      "Comprehensive Surabaya Tourist Destinations",
      "Search & Filter by Category (nature, culture, culinary, events)",
      "Online Booking & Ticket Purchase",
      "Payment Gateway Integration",
      "Destination Map & Navigation",
      "Visitor Reviews & Ratings",
      "Popular Destination Recommendations",
      "Notifications & Visit Schedule Reminders",
      "Admin Dashboard for Destination & Booking Management",
      "Responsive Design (Mobile & Desktop)",
    ],
    challenges: [
      "First-time experience using Midtrans as a payment gateway",
      "Some struggles in managing teamwork",
    ],
    solutions: [
      "Integrated a local payment gateway to facilitate secure ticket transactions",
      "Implemented category-based search and filtering to help users find destinations based on their interests",
      "Provided an interactive map with Google Maps integration for accurate navigation",
      "Built a review and rating system for users to share experiences and assist other potential visitors",
      "Implemented a notification system to remind users of visit schedules and destination promotions",
      "Developed an admin dashboard with CRUD features for managing destinations, tickets, and bookings",
      "Optimized responsive design with Tailwind CSS for use across various devices",
    ],
  },

  "go-orbit": {
    title: "Go-orbit Company Website",
    subtitle: "Digital Platform for Training and Consulting Services",
    description:
      "The official website for Go-orbit, showcasing the company profile and a range of professional services such as training, coaching, and consulting for human resource and corporate development.",
    longDescription:
      "This project aims to establish a strong digital presence for Go-orbit. The website is designed as the primary information hub for potential clients, providing comprehensive details about training programs, consulting services, and organized events. With easy navigation and a professional design, the site facilitates potential clients in understanding Go-orbit’s service advantages and contacting the team for further consultation. The website also serves as a portfolio gallery showcasing various activities and testimonials from previous clients to build trust and credibility.",
    technologies: ["Cromwell", "Next.js", "Typescript", "Tailwind CSS", "MySQL"],
    category: "Web Development",
    client: "Go-orbit",
    duration: "3 Months",
    year: "2024",
    status: "Completed",
    liveUrl: "https://www.go-orbit.id/",
    githubUrl: null,
    images: [
      "/images/goorbit1.png?height=600&width=800",
      "/images/goorbit2.png?height=400&width=600",
      "/images/goorbit3.png?height=400&width=600",
      "/images/goorbit4.png?height=400&width=600",
    ],
    features: [
      "Professional and Responsive Design",
      "Company Profile Page (About Us)",
      "Service Catalog (Training, Consulting, Outbound)",
      "Activity Documentation Gallery",
      "Contact Form and Location Information",
      "Client Testimonials Section",
      "Social Media Integration",
      "SEO-Friendly Structure",
    ],
    challenges: [
      "Translating Go-orbit’s vision and values into an engaging visual design",
      "Organizing complex service information to be easily understood by visitors",
      "Ensuring fast and optimal website performance across various devices",
      "Adapting to and customizing the Cromwell CMS framework",
    ],
    solutions: [
      "Conducted intensive discussions with the client to understand brand identity and apply it to the website’s UI/UX",
      "Created a logical information architecture with intuitive navigation for each service category",
      "Implemented asset optimization techniques (images and code) to speed up page load times",
      "Provided a gallery and testimonials page to build social proof and trust for potential clients",
    ],
  },

  "danusin": {
    title: "Danusin",
    subtitle: "Map-Based Tracking Application for Fundraising Activities",
    description:
      "A map-based application designed to assist coordinators and sellers in fundraising activities. The app enables real-time location tracking of sellers, helps buyers find the nearest seller, and allows coordinators to monitor team distribution in the field.",
    longDescription:
      "Danusin was developed as a solution to logistical challenges in fundraising activities, where sellers are often spread across wide areas and difficult to coordinate. With real-time map-based tracking, the app provides full visibility for event coordinators to monitor each seller’s movements. Meanwhile, buyers looking to support can easily locate active sellers nearby. The application was created as a project for the Olivia Vocational Competition, focusing on solving real-world problems through technology.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "MySQL", "NextAuth"],
    category: "Web Development",
    client: "Olivia Vocational Competition",
    duration: "1 Month",
    year: "2025",
    status: "Completed",
    liveUrl: "https://danusin.com",
    githubUrl: "https://github.com/Ahmadlazim-03/danusin-next-js",
    images: [
      "/images/danusin1.png?height=600&width=800",
      "/images/danusin2.png?height=400&width=600",
      "/images/danusin3.png?height=400&width=600",
      "/images/danusin4.png?height=400&width=600",
    ],
    features: [
      "Real-Time Seller Location Tracking",
      "Interactive Map Display",
      "User Authentication System (Admin & Seller)",
      "Coordinator Dashboard for Monitoring",
      "Seller Status Updates",
      "Responsive Design for Mobile Use",
    ],
    challenges: [
      "Implementing efficient and accurate real-time location updates",
      "Managing state for multiple users (sellers) simultaneously on the map",
      "Designing a simple and intuitive interface for field use",
    ],
    solutions: [
      "Used Next.js API Routes to handle location requests from clients",
      "Leveraged mapping libraries (such as Leaflet or Mapbox) integrated with React",
      "Applied mobile-first design with Tailwind CSS to ensure a good user experience on mobile devices",
      "Used Prisma as an ORM to simplify interactions with the MySQL database",
    ],
  },

  "compro": {
    title: "HIMTI UNAIR 2025 Profile Website",
    subtitle: "Official Digital Platform for the Informatics Engineering Student Association of Airlangga University",
    description:
      "A company profile website designed as the official information and communication hub for the Informatics Engineering Student Association (HIMTI) of Airlangga University for the 2025 period.",
    longDescription:
      "This website was developed to professionally represent the identity, vision, and mission of HIMTI UNAIR 2025 to students, faculty, and external parties. The platform serves as the primary source of information regarding the organizational structure, upcoming work programs, activity documentation, and the latest articles and news. Its goal is to increase member engagement, streamline information dissemination, and build a modern and structured organizational image.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Livewire"],
    category: "Web Development",
    client: "HIMTI Airlangga University 2025",
    duration: "2 Months",
    year: "2025",
    status: "Completed",
    liveUrl: "https://himtiunair.com",
    githubUrl: "https://github.com/Ahmadlazim-03/Company-Profile",
    images: [
      "/images/compro1.png?height=600&width=800",
      "/images/compro2.png?height=400&width=600",
      "/images/compro3.png?height=400&width=600",
      "/images/compro4.png?height=400&width=600",
    ],
    features: [
      "Complete Profile & Organization Vision-Mission",
      "2025 Organizational Structure Page",
      "Agenda and Work Program Details",
      "Article, News, and Documentation Portal",
      "Photo and Video Activity Gallery",
      "Content Management System (CMS) for Admins",
      "Modern and Responsive Design",
    ],
    challenges: [
      "Designing a professional UI/UX that aligns with HIMTI’s brand identity",
      "Structuring information architecture to accommodate extensive content (work programs, news, etc.)",
      "Building a backend system that is easy for board members to use for updating website content",
    ],
    solutions: [
      "Applied a design system based on HIMTI’s brand guidelines for visual consistency",
      "Used server-side rendering (SSR) with Blade for fast and SEO-friendly website performance",
      "Built a custom admin panel using Laravel’s resource controller for dynamic content management",
      "Applied mobile-first design with Tailwind CSS for accessibility across all devices",
    ],
  },

  "chat-bot": {
    title: "Smart WhatsApp Chatbot",
    subtitle: "Multimodal AI Assistant with Media Analysis Capabilities",
    description:
      "A smart WhatsApp chatbot built to surpass the capabilities of standard Meta AI. This bot has advanced multimodal capabilities, allowing it to analyze and process various types of media directly within conversations.",
    longDescription:
      "This project was developed to address the limitations of conventional chatbots by integrating advanced AI models. The chatbot not only understands text but can also analyze image content, summarize videos, extract text from documents, and transcribe voice messages. Built with n8n for workflow orchestration, the bot can connect to various external services, making it a highly flexible tool for task automation, personal assistance, or even as a learning aid.",
    technologies: ["n8n", "WAHA (WhatsApp HTTP API)", "Docker", "VPS", "Redis", "GPT-4o"],
    category: "Artificial Intelligence",
    client: "Personal Project",
    duration: "1 Month",
    year: "2025",
    status: "Completed",
    liveUrl: "",
    githubUrl: "",
    images: [
      "/images/chatbot1.png?height=600&width=800",
      "/images/chatbot2.png?height=400&width=600",
      "/images/chatbot3.png?height=400&width=600",
      "/images/chatbot4.png?height=400&width=600",
      "/images/chatbot5.png?height=400&width=600",
    ],
    features: [
      "Image Content Analysis (Image Recognition)",
      "Video Summarization and Analysis",
      "Text Extraction from Documents (PDF, Docx)",
      "Voice Message Transcription to Text",
      "Contextual Conversation Capabilities",
      "Automated Workflow Integration (via n8n)",
      "Multimodal Support (Text, Image, Voice, Document)",
    ],
    challenges: [
      "Integrating various AI models for multimodal analysis (image, video, voice)",
      "Maintaining fast and interactive bot response times, especially when processing media",
      "Handling various file formats and potential errors during processing",
      "Managing conversation state to remain relevant and maintain context",
    ],
    solutions: [
      "Used n8n as an orchestration platform to connect the WhatsApp API with various AI services",
      "Leveraged Redis for caching and task queuing to ensure media processing does not block conversations",
      "Built robust error-handling logic for each media type uploaded",
      "Stored short conversation history in Redis to maintain conversation context",
    ],
  },

  "volunteervibe-app": {
    title: "VolunteerVibe",
    subtitle: "Mobile Application to Promote Volunteerism Among Youth",
    description:
      "A mobile application designed to promote volunteer activities among teenagers aged 15-25 by bridging the gap between them and social organizations.",
    longDescription:
      "This project was developed as an innovative solution to address the low participation rate of volunteers among teenagers. The application aims to tackle challenges such as lack of awareness and accessibility to opportunities while fostering a sense of social responsibility, skill development, and community connections among its users.",
    technologies: ["Android OS", "PocketBase", "Google Maps API"],
    category: "Mobile Application",
    client: "Mr. Boda",
    duration: "4 Weeks",
    year: "2024",
    status: "Requirements Specification Completed",
    liveUrl: "",
    githubUrl: "https://github.com/Arya-f4/VolunteerVibe",
    images: [
      "/images/volunteer1.png?height=10&width=10",
      "/images/volunteer2.png?height=400&width=600",
      "/images/volunteer3.png?height=400&width=600",
      "/images/volunteer4.png?height=10&width=10",
      "/images/volunteer5.png?height=400&width=600",
      "/images/volunteer6.png?height=400&width=600",
    ],
    features: [
      "Event Search by Geolocation, Category, or Date",
      "User Account Management (Registration, Login, Password Reset)",
      "Event Registration and Posting by Organizations",
      "Gamification Features with Points, Rewards, and Badges",
      "Volunteer Hours Tracking and Logging",
      "Event and Opportunity Reminder Notifications",
      "Social Media Sharing of Activities",
    ],
    challenges: [
      "Creating an engaging platform to boost volunteer participation among teenagers",
      "Ensuring the system can handle up to 1000 simultaneous users",
      "Ensuring user data security and privacy in compliance with GDPR standards",
    ],
    solutions: [
      "Implemented gamification features like points and badges to motivate users",
      "Used scalable PocketBase for real-time database management and authentication",
      "Implemented advanced geolocation-based search to facilitate event discovery",
      "Mandated secure data handling as a core system requirement",
    ],
  },

  "mycode-app": {
    title: "My Code Application",
    subtitle: "Interactive Coding Learning Platform",
    description:
      "An interactive mobile application for learning to code, designed for beginners, similar to W3Schools. The app provides structured courses, practice exercises, and gamification elements to make learning effective and engaging.",
    longDescription:
      "This project was developed to make coding education more accessible to anyone, anytime, directly from a mobile device. The application breaks down complex programming concepts into concise, digestible lessons. With an integrated code editor and interactive exercises, users can immediately apply the theory they learn. Gamification elements such as points, badges, and leaderboards are added to maintain motivation and create an engaging learning experience.",
    technologies: ["Flutter", "PocketBase", "Android OS"],
    category: "Education & Mobile",
    client: "Personal Project",
    duration: "2 Months",
    year: "2025",
    status: "Completed",
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadlazim-03/Mobile-Flutter-My-Code",
    images: [
      "/images/mycode1.png?height=600&width=800",
      "/images/mycode2.png?height=400&width=600",
      "/images/mycode3.png?height=400&width=600",
      "/images/mycode4.png?height=400&width=600",
    ],
    features: [
      "Various Programming Courses (Python, JavaScript, etc.)",
      "Interactive Practice Exercises with Code Checking",
      "Gamification Features (Points, Badges, Leaderboards)",
      "In-App Code Playground",
      "Learning Progress Tracking per Course",
      "Course Completion Certificates",
    ],
    challenges: [
      "Designing a functional and user-friendly code editor for small screens",
      "Creating structured and beginner-friendly course content",
      "Implementing an accurate code checker for practice exercises",
    ],
    solutions: [
      "Used custom Flutter widgets to build a responsive editor interface",
      "Developed a step-by-step curriculum with real-world examples",
      "Integrated a backend service with PocketBase to run and validate code from exercises",
      "Applied gamification to enhance user motivation and retention",
    ],
  },

  "netflix-app": {
    title: "Netflix Application",
    subtitle: "Cloning Project of a Popular Video Streaming Application",
    description:
      "A cloning project of the popular video streaming service, Netflix. This project replicates the core user experience of browsing, searching, and watching video content, built using Flutter for the mobile application.",
    longDescription:
      "This project aims to understand and implement the core architecture of a large-scale streaming application. The main focus is on developing a responsive UI/UX similar to the original app using Flutter. Movie and TV show data are fetched from an external API (such as TMDB), managed by a Node.js backend that also handles authentication and user data, such as watchlists (My List).",
    technologies: ["Flutter", "Node.js", "MongoDB", "TMDB API"],
    category: "Mobile & Streaming",
    client: "Personal Project",
    duration: "3 Months",
    year: "2025",
    status: "Completed",
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadlazim-03/netflix_mobile_application",
    images: [
      "/images/netflix1.png?height=600&width=800",
      "/images/netflix2.png?height=400&width=600",
      "/images/netflix3.png?height=400&width=600",
      "/images/netflix4.png?height=400&width=600",
      "/images/netflix5.png?height=400&width=600",
    ],
    features: [
      "User Authentication (Login & Register)",
      "Dynamic Homepage with Content Categories (Trending, Popular, etc.)",
      "Movie and TV Show Search Function",
      "Content Detail Page (Synopsis, Rating, Cast)",
      "Integrated Video Player with Basic Controls",
      "‘My List’ Feature for Saving Watchlist Content",
    ],
    challenges: [
      "Building a complex and responsive UI like Netflix using Flutter",
      "Managing large application state, including movie data and user status (e.g., watchlist)",
      "Efficiently integrating an external API (like TMDB) for content data",
    ],
    solutions: [
      "Used a modular Flutter widget architecture to build each UI component separately",
      "Applied a state management solution (such as BLoC) to handle data across the app",
      "Created a Node.js backend service to act as an intermediary between the app and TMDB API, as well as manage user data",
      "Optimized API calls and image caching for a smooth browsing experience",
    ],
  },

  "database-manager": {
    title: "Database Manager",
    subtitle: "All-in-One Platform for Database Management and API Automation",
    description:
      "A web-based database management tool that allows users to connect to various databases (PostgreSQL, MongoDB, MySQL) and automatically generate secure REST APIs for each collection/table, complete with a permission system.",
    longDescription:
      "This project was developed to simplify backend development by providing a centralized platform. Users no longer need to manage multiple database tools or write boilerplate code for CRUD APIs. With an intuitive interface, developers can manage data and instantly obtain functional and secure API endpoints, significantly speeding up development time.",
    technologies: ["SvelteKit", "Go Fiber", "MongoDB", "Docker"],
    category: "Developer Tools",
    client: "Personal Project",
    duration: "3 Months",
    year: "2025",
    status: "in-progress",
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadlazim-03/database-manager",
    images: [
      "/images/database1.png?height=600&width=800",
      "/images/database2.png?height=400&width=600",
      "/images/database3.png?height=400&width=600",
      "/images/database4.png?height=400&width=600",
    ],
    features: [
      "Multi-Database Connection (PostgreSQL, MongoDB, MySQL)",
      "Graphical Interface for Data Management (CRUD)",
      "Automatic REST API Generator for Each Collection/Table",
      "Role-Based Permission System for APIs",
      "Automatically Generated API Documentation",
      "Secure Database Connection Management",
    ],
    challenges: [
      "Building reliable connectors for various database types with different structures",
      "Designing a secure system for storing user database credentials",
      "Creating a dynamic API generator logic capable of handling various data schemas",
    ],
    solutions: [
      "Used official drivers for each database and created an abstraction layer in Go Fiber to standardize operations",
      "Implemented at-rest encryption for all stored credentials",
      "Built a template engine in the backend to dynamically generate API routes and controllers based on read schemas",
      "Used SvelteKit to create a reactive and fast user interface",
    ],
  },

  "data-preprocessing-tools": {
    title: "Auto Pre-Processing Data Tools",
    subtitle: "Automated Data Pre-Processing Workflow for Machine Learning",
    description:
      "A web-based tool designed to automate and simplify the data pre-processing workflow for machine learning needs. Users can upload datasets and apply various pre-processing techniques through an interactive interface to prepare raw data for use in machine learning models.",
    longDescription:
      "This project was developed to address one of the most time-consuming aspects of machine learning: data preparation. The tool provides a no-code interface that guides users through each critical step, from data cleaning (handling missing values, outliers) to transformation (normalization, encoding). The goal is to empower data scientists and analysts to prepare high-quality datasets faster and more efficiently.",
    technologies: ["SvelteKit", "Go Fiber", "Python", "Pandas", "Scikit-learn"],
    category: "Data Science & AI",
    client: "Personal Project",
    duration: "4 Months",
    year: "2025",
    status: "in-progress",
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadlazim-03/auto-preprocessing-data-application",
    images: [
      "/images/preprocessing1.png?height=600&width=800",
    ],
    features: [
      "Upload Datasets from Various Formats (CSV, Excel)",
      "Handling Missing Values with Various Methods",
      "Data Transformation and Scaling (Normalization, Standardization)",
      "Categorical Variable Encoding (One-Hot, Label Encoding)",
      "Interactive Data Visualization for Exploration",
      "Dataset Splitting (Training & Testing Data)",
      "Download Pre-Processed Dataset",
    ],
    challenges: [
      "Efficiently managing large datasets in a web environment without causing browser crashes",
      "Integrating Python backend for data processing with SvelteKit frontend in real-time",
      "Providing an intuitive interface for users with varying technical expertise",
    ],
    solutions: [
      "Processed data asynchronously in the backend, with the frontend only displaying status or results",
      "Used WebSocket for real-time communication between frontend and backend during processing",
      "Designed a wizard-based (step-by-step) workflow in SvelteKit to guide users through each pre-processing stage",
    ],
  },

  "sipandu": {
    title: "Si Pandu Application",
    subtitle: "Integrated Map-Based Disaster Reporting Application",
    description:
      "A public reporting application for a specific region, allowing users to report natural disaster incidents directly through a map interface. Incoming reports can then be viewed and processed by local authorities for faster and more coordinated response.",
    longDescription:
      "This project was developed to accelerate communication between the public and the government during disasters. With 'Si Pandu', citizens can easily mark incident locations on a map, upload photos as evidence, and track the status of their reports. Meanwhile, the government gains access to a centralized dashboard to verify and manage all incoming reports, enabling a more structured and efficient response to emergencies.",
    technologies: ["Flutter", "PocketBase", "Android OS", "Google Maps API"],
    category: "Mobile & Public Services",
    client: "Conceptual Project for Local Government",
    duration: "3 Months",
    year: "2025",
    status: "Completed",
    liveUrl: "",
    githubUrl: "",
    images: [
      "/images/sipandu1.png?height=600&width=800",
      "/images/sipandu2.png?height=600&width=800",
    ],
    features: [
      "Interactive Map-Based Disaster Reporting",
      "Submit Reports with Photo Attachments and Descriptions",
      "Report Status Tracking (Received, In Progress, Resolved)",
      "Admin Dashboard for Government to Verify & Manage Reports",
      "Real-Time Notifications for New Reports and Status Updates",
      "User Report History",
    ],
    challenges: [
      "Ensuring the accuracy of GPS location data submitted by users",
      "Building a reliable real-time notification system for emergency reports",
      "Designing two distinct yet integrated interfaces: one for reporters (citizens) and one for admins (government)",
    ],
    solutions: [
      "Integrated Google Maps API for geolocation data retrieval and validation",
      "Used push notification services via PocketBase to send instant alerts to the admin dashboard",
      "Designed separate user flows for each role (user and admin) within the Flutter application",
      "Provided a photo upload feature as visual evidence to aid report verification by the government",
    ],
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
