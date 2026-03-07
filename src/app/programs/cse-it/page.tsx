"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Brain,
  Database,
  Shield,
  Smartphone,
  Settings,
  Cloud,
  Palette,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Code2,
  ChevronDown,
} from "lucide-react"

const courses = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Full Stack Mastery",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    imageHint: "web development code on screen",
    description: "Build production-grade web applications with modern frameworks. From responsive frontends to scalable backend APIs.",
    topics: ["React / Next.js", "Node.js / Express", "TypeScript", "REST & GraphQL APIs", "Database Design", "Cloud Deployment"],
    syllabus: [
      "Module 1: HTML5, CSS3 & Responsive Design",
      "Module 2: JavaScript ES6+ & DOM Manipulation",
      "Module 3: React.js — Components, Hooks & State",
      "Module 4: Next.js — SSR, Routing & API Routes",
      "Module 5: Node.js & Express — RESTful APIs",
      "Module 6: Databases — MongoDB, PostgreSQL & Prisma",
      "Module 7: TypeScript & GraphQL",
      "Module 8: Authentication, Testing & Cloud Deployment",
    ],
    duration: "16 Weeks",
    projects: "6+ Live Projects",
    students: "8k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "data-science",
    title: "Data Science",
    subtitle: "Analytics & Insights",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageHint: "data analytics dashboard",
    description: "Master data analysis, statistical modeling, and business intelligence. Transform raw data into strategic decisions.",
    topics: ["Python & Pandas", "SQL & Data Pipelines", "Statistical Analysis", "Data Visualization", "Power BI / Tableau", "Big Data (Spark)"],
    syllabus: [
      "Module 1: Python for Data Science — NumPy & Pandas",
      "Module 2: SQL & Relational Databases",
      "Module 3: Exploratory Data Analysis & Statistics",
      "Module 4: Data Visualization — Matplotlib, Seaborn, Plotly",
      "Module 5: Power BI & Tableau Dashboards",
      "Module 6: Feature Engineering & Data Pipelines",
      "Module 7: Big Data with Apache Spark",
      "Module 8: Capstone — End-to-End Analytics Project",
    ],
    duration: "14 Weeks",
    projects: "5+ Live Projects",
    students: "6k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    imageHint: "artificial intelligence neural network",
    description: "Build intelligent systems with deep learning, NLP, and computer vision. From theory to production-ready AI models.",
    topics: ["Machine Learning", "Deep Learning (TensorFlow / PyTorch)", "NLP & LLMs", "Computer Vision", "Generative AI", "Model Deployment"],
    syllabus: [
      "Module 1: Python for ML — Math, Stats & Libraries",
      "Module 2: Supervised Learning — Regression & Classification",
      "Module 3: Unsupervised Learning & Clustering",
      "Module 4: Deep Learning — Neural Networks & CNNs",
      "Module 5: NLP — Text Processing, Transformers & LLMs",
      "Module 6: Computer Vision — Object Detection & Segmentation",
      "Module 7: Generative AI — GANs, Diffusion & Prompt Engineering",
      "Module 8: Model Deployment & MLOps Pipelines",
    ],
    duration: "18 Weeks",
    projects: "5+ Live Projects",
    students: "5k+ Trained",
    level: "Intermediate to Advanced",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    subtitle: "Defense & Protection",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    imageHint: "cyber security lock digital",
    description: "Protect organizations from cyber threats. Learn ethical hacking, network security, incident response and compliance.",
    topics: ["Ethical Hacking", "Network Security", "Penetration Testing", "SOC & SIEM", "Cloud Security", "Compliance & GRC"],
    syllabus: [
      "Module 1: Networking Fundamentals & Protocols",
      "Module 2: Linux Administration & Scripting",
      "Module 3: Ethical Hacking & Reconnaissance",
      "Module 4: Penetration Testing — Web & Network",
      "Module 5: SOC Operations & SIEM Tools",
      "Module 6: Cloud Security — AWS, Azure & GCP",
      "Module 7: Incident Response & Digital Forensics",
      "Module 8: Compliance, GRC & Risk Management",
    ],
    duration: "14 Weeks",
    projects: "4+ Live Labs",
    students: "3k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    icon: Smartphone,
    color: "from-pink-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    imageHint: "mobile app smartphone",
    description: "Create native and cross-platform mobile applications. Ship production apps to App Store and Google Play.",
    topics: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Mobile UI/UX", "App Store Deployment"],
    syllabus: [
      "Module 1: Mobile UI/UX Principles & Design Systems",
      "Module 2: React Native — Core Components & Navigation",
      "Module 3: Flutter — Widgets, State & Dart Fundamentals",
      "Module 4: iOS Development with Swift & SwiftUI",
      "Module 5: Android Development with Kotlin & Jetpack",
      "Module 6: APIs, Authentication & Push Notifications",
      "Module 7: App Performance, Testing & Debugging",
      "Module 8: App Store & Play Store Deployment",
    ],
    duration: "14 Weeks",
    projects: "4+ Live Apps",
    students: "3k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "devops",
    title: "DevOps",
    subtitle: "CI/CD & Infrastructure",
    icon: Settings,
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageHint: "server infrastructure cloud",
    description: "Automate infrastructure, build CI/CD pipelines, and manage cloud-native deployments at enterprise scale.",
    topics: ["Docker & Kubernetes", "CI/CD Pipelines", "AWS / Azure / GCP", "Terraform & IaC", "Monitoring & Logging", "Linux Administration"],
    syllabus: [
      "Module 1: Linux Administration & Shell Scripting",
      "Module 2: Git, GitHub & Version Control Workflows",
      "Module 3: Docker — Containerization & Multi-Stage Builds",
      "Module 4: Kubernetes — Orchestration & Helm Charts",
      "Module 5: CI/CD Pipelines — Jenkins, GitHub Actions & GitLab CI",
      "Module 6: Infrastructure as Code — Terraform & Ansible",
      "Module 7: Cloud Platforms — AWS, Azure & GCP",
      "Module 8: Monitoring — Prometheus, Grafana & ELK Stack",
    ],
    duration: "12 Weeks",
    projects: "5+ Live Projects",
    students: "4k+ Trained",
    level: "Intermediate to Advanced",
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    subtitle: "Cloud Architecture",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    imageHint: "cloud computing data center",
    description: "Master cloud platforms, architecture, and services. Design scalable, secure, and cost-efficient cloud-native solutions.",
    topics: ["AWS Solutions Architect", "Azure Fundamentals", "GCP Cloud Engineer", "Serverless & Microservices", "Cloud Security", "Cost Optimization"],
    syllabus: [
      "Module 1: Cloud Fundamentals & Service Models (IaaS, PaaS, SaaS)",
      "Module 2: AWS — EC2, S3, Lambda, RDS & VPC",
      "Module 3: Azure — VMs, App Services, Functions & AKS",
      "Module 4: GCP — Compute Engine, Cloud Run & BigQuery",
      "Module 5: Serverless Architecture & Microservices",
      "Module 6: Cloud Security — IAM, Encryption & Compliance",
      "Module 7: Cloud Networking & Load Balancing",
      "Module 8: Cost Optimization & Multi-Cloud Strategies",
    ],
    duration: "12 Weeks",
    projects: "4+ Live Projects",
    students: "3k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Design & Experience",
    icon: Palette,
    color: "from-fuchsia-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    imageHint: "ui ux design interface",
    description: "Design intuitive and beautiful digital products. From user research to interactive prototypes and design systems.",
    topics: ["Figma & Adobe XD", "User Research", "Wireframing & Prototyping", "Design Systems", "Interaction Design", "Usability Testing"],
    syllabus: [
      "Module 1: Design Thinking & UX Research Methods",
      "Module 2: Information Architecture & User Flows",
      "Module 3: Wireframing & Low-Fidelity Prototyping",
      "Module 4: Visual Design — Typography, Color & Layout",
      "Module 5: Figma Mastery — Components & Auto Layout",
      "Module 6: Interactive Prototyping & Micro-Interactions",
      "Module 7: Design Systems & Component Libraries",
      "Module 8: Usability Testing, Handoff & Portfolio Project",
    ],
    duration: "12 Weeks",
    projects: "5+ Design Projects",
    students: "2k+ Trained",
    level: "Beginner to Advanced",
  },
]

const stats = [
  { value: "25K+", label: "Professionals Trained" },
  { value: "8", label: "Specialized Tracks" },
  { value: "94%", label: "Completion Rate" },
  { value: "50+", label: "Corporate Partners" },
]

function CourseCard({ course, idx, category }: { course: typeof courses[0]; idx: number; category: string }) {
  const [syllabusOpen, setSyllabusOpen] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      className="group relative bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgb(0,0,0,0.08)] flex flex-col"
    >
      {/* Hero Image */}
      <div className="relative h-40 sm:h-52 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint={course.imageHint}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-xl ring-2 ring-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <course.icon className="w-[22px] h-[22px] drop-shadow-sm" />
        </div>

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-primary/80 shadow-lg ring-1 ring-black/[0.04]">
          {course.level}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 pb-4">
          <h3 className="text-[20px] font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            {course.title}
          </h3>
          <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-0.5">{course.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-7 flex flex-col flex-1">
        <p className="text-muted-foreground text-[13px] leading-[1.7] mb-5">{course.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.topics.map((topic, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary/70 bg-gradient-to-r from-gray-50 to-white border border-black/[0.05] px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-3 h-3 text-accent drop-shadow-sm" />
              {topic}
            </span>
          ))}
        </div>

        {/* Syllabus toggle */}
        <button
          onClick={() => setSyllabusOpen(!syllabusOpen)}
          className="flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent/80 transition-colors mb-4 group/syl"
        >
          <BookOpen className="w-3.5 h-3.5" />
          {syllabusOpen ? "Hide" : "View"} Syllabus
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${syllabusOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {syllabusOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-4"
            >
              <div className="bg-gray-50/80 rounded-xl p-4 border border-black/[0.04] space-y-2">
                {course.syllabus.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[12px] text-primary/70 leading-relaxed">
                    <span className="text-accent font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 pt-4 sm:pt-5 border-t border-black/[0.04] mt-auto">
          <div className="flex items-center gap-3 sm:gap-5 text-muted-foreground/60 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent/60" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
              {course.projects}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              {course.students}
            </div>
          </div>
          <Link href={`/programs/${category}/${course.slug}`} className="block w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold h-9 px-6 text-[12px] shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto group/btn cursor-pointer">
              Enquire <ArrowRight className="ml-1.5 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function CSEITPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/[0.04] via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/[0.03] via-transparent to-transparent rounded-full blur-3xl" />
          </div>

          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/[0.08] rounded-full mb-4">
                <Code2 className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[12px] font-semibold text-blue-600 tracking-wide">CSE / IT Programs</span>
              </div>

              <h1 className="text-primary mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  CSE / IT
                </span>{" "}
                Training Programs
              </h1>

              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Industry-validated training tracks covering every major domain in Computer Science &amp; Information Technology. From Web Development to Cloud Computing — we&apos;ve got your workforce covered.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-4 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-10 sm:py-14">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, idx) => (
                <CourseCard key={course.slug} course={course} idx={idx} category="cse-it" />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 sm:mt-14 bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[60px] -ml-16 -mb-16" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Need a{" "}
                  <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
                    custom training program
                  </span>{" "}
                  for your team?
                </h2>
                <p className="text-white/50 text-[14px] sm:text-[15px] mb-6 max-w-lg mx-auto">
                  We design tailored training tracks for organizations. Get a dedicated success manager and flexible scheduling.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg shadow-accent/20 hover:shadow-xl transition-all group">
                    Get in Touch <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button onClick={() => setContactOpen(true)} variant="outline" className="rounded-full h-12 px-8 bg-white/[0.06] border-white/[0.1] text-white font-semibold text-[14px] hover:bg-white/[0.1] transition-all">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
      <ChatWidget />
    </div>
  )
}
