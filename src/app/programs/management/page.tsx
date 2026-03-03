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
  Users2,
  Settings2,
  Landmark,
  Megaphone,
  TrendingUp,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Briefcase,
  ChevronDown,
} from "lucide-react"

const courses = [
  {
    slug: "hr-management",
    title: "HR Management",
    subtitle: "People & Culture",
    icon: Users2,
    color: "from-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    imageHint: "hr team meeting corporate",
    description: "Master modern HR practices — from talent acquisition and employee engagement to HR analytics and organizational development.",
    topics: ["Talent Acquisition", "Employee Engagement", "HR Analytics & Metrics", "Performance Management", "Compensation & Benefits", "Labour Law & Compliance"],
    syllabus: [
      "Module 1: HR Fundamentals & Strategic HRM",
      "Module 2: Talent Acquisition & Employer Branding",
      "Module 3: Onboarding & Employee Engagement",
      "Module 4: Performance Management Systems",
      "Module 5: Compensation, Benefits & Payroll",
      "Module 6: HR Analytics — Dashboards & Metrics",
      "Module 7: Labour Laws, Compliance & Ethics",
      "Module 8: Organizational Development & Change Management",
    ],
    duration: "12 Weeks",
    projects: "4+ Case Studies",
    students: "3k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "operation-management",
    title: "Operation Management",
    subtitle: "Process Excellence",
    icon: Settings2,
    color: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    imageHint: "operations supply chain logistics",
    description: "Optimize business operations end-to-end. Learn supply chain management, lean manufacturing, Six Sigma, and process automation.",
    topics: ["Supply Chain Management", "Lean & Six Sigma", "Inventory Management", "Process Optimization", "Quality Management", "ERP Systems (SAP)"],
    syllabus: [
      "Module 1: Operations Management Fundamentals",
      "Module 2: Supply Chain Design & Logistics",
      "Module 3: Lean Manufacturing & 5S",
      "Module 4: Six Sigma — DMAIC Methodology",
      "Module 5: Inventory & Demand Planning",
      "Module 6: Quality Management — TQM & ISO",
      "Module 7: ERP Systems — SAP Overview & Implementation",
      "Module 8: Process Automation & Digital Transformation",
    ],
    duration: "12 Weeks",
    projects: "4+ Live Projects",
    students: "2k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "finance",
    title: "Finance",
    subtitle: "Corporate & Investment",
    icon: Landmark,
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    imageHint: "finance accounting charts",
    description: "Build expertise in corporate finance, financial modeling, investment analysis, and risk management for modern businesses.",
    topics: ["Financial Modeling", "Corporate Finance", "Investment Analysis", "Risk Management", "Budgeting & Forecasting", "Tally / SAP FICO"],
    syllabus: [
      "Module 1: Financial Accounting & Statements",
      "Module 2: Corporate Finance — Capital Structure & Valuation",
      "Module 3: Financial Modeling in Excel",
      "Module 4: Investment Analysis & Portfolio Management",
      "Module 5: Risk Management & Derivatives",
      "Module 6: Budgeting, Forecasting & Variance Analysis",
      "Module 7: Tally ERP & SAP FICO",
      "Module 8: Capstone — Financial Analysis Project",
    ],
    duration: "14 Weeks",
    projects: "5+ Live Projects",
    students: "4k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Branding",
    icon: Megaphone,
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
    imageHint: "digital marketing social media",
    description: "Master the full digital marketing stack — SEO, social media, performance marketing, content strategy, and marketing analytics.",
    topics: ["SEO & SEM", "Social Media Marketing", "Google & Meta Ads", "Content Strategy", "Email Marketing", "Marketing Analytics"],
    syllabus: [
      "Module 1: Digital Marketing Fundamentals & Strategy",
      "Module 2: SEO — On-Page, Off-Page & Technical",
      "Module 3: SEM — Google Ads & PPC Campaigns",
      "Module 4: Social Media Marketing — Instagram, LinkedIn & YouTube",
      "Module 5: Meta & Google Ads — Performance Marketing",
      "Module 6: Content Marketing & Email Automation",
      "Module 7: Marketing Analytics — GA4, GTM & Dashboards",
      "Module 8: Capstone — Full Marketing Campaign",
    ],
    duration: "10 Weeks",
    projects: "5+ Live Campaigns",
    students: "5k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "stock-market-crypto",
    title: "Stock Market & Cryptocurrency",
    subtitle: "Trading & Investment",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    imageHint: "stock market trading charts",
    description: "Learn professional trading, technical analysis, portfolio management, and cryptocurrency investing. From basics to advanced strategies.",
    topics: ["Technical Analysis", "Fundamental Analysis", "Options & Derivatives", "Cryptocurrency Trading", "Portfolio Management", "Risk & Money Management"],
    syllabus: [
      "Module 1: Stock Market Fundamentals & Market Structure",
      "Module 2: Technical Analysis — Charts, Patterns & Indicators",
      "Module 3: Fundamental Analysis — Financial Ratios & Valuation",
      "Module 4: Options & Futures — Strategies & Greeks",
      "Module 5: Cryptocurrency — Blockchain, DeFi & Trading",
      "Module 6: Algorithmic & Quantitative Trading Basics",
      "Module 7: Portfolio Construction & Risk Management",
      "Module 8: Live Trading Practice & Psychology",
    ],
    duration: "12 Weeks",
    projects: "Live Trading Practice",
    students: "3k+ Trained",
    level: "Beginner to Advanced",
  },
]

const stats = [
  { value: "12K+", label: "Professionals Trained" },
  { value: "5", label: "Specialized Tracks" },
  { value: "93%", label: "Completion Rate" },
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
      <div className="relative h-40 sm:h-52 w-full overflow-hidden">
        <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={course.imageHint} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-xl ring-2 ring-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <course.icon className="w-[22px] h-[22px] drop-shadow-sm" />
        </div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-primary/80 shadow-lg ring-1 ring-black/[0.04]">{course.level}</div>
        <div className="absolute bottom-0 left-0 right-0 p-5 pb-4">
          <h3 className="text-[20px] font-bold text-white tracking-tight leading-tight drop-shadow-lg">{course.title}</h3>
          <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-0.5">{course.subtitle}</p>
        </div>
      </div>

      <div className="p-4 sm:p-7 flex flex-col flex-1">
        <p className="text-muted-foreground text-[13px] leading-[1.7] mb-5">{course.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.topics.map((topic, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary/70 bg-gradient-to-r from-gray-50 to-white border border-black/[0.05] px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-3 h-3 text-accent drop-shadow-sm" />{topic}
            </span>
          ))}
        </div>

        <button onClick={() => setSyllabusOpen(!syllabusOpen)} className="flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent/80 transition-colors mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          {syllabusOpen ? "Hide" : "View"} Syllabus
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${syllabusOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {syllabusOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden mb-4">
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

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 pt-4 sm:pt-5 border-t border-black/[0.04] mt-auto">
          <div className="flex items-center gap-3 sm:gap-5 text-muted-foreground/60 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1"><Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent/60" />{course.duration}</div>
            <div className="flex items-center gap-1"><BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />{course.projects}</div>
            <div className="flex items-center gap-1"><Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />{course.students}</div>
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

export default function ManagementPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/[0.04] via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/[0.03] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/[0.08] rounded-full mb-4">
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[12px] font-semibold text-amber-600 tracking-wide">Management Programs</span>
              </div>
              <h1 className="text-primary mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Management</span>{" "}
                Training Programs
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Industry-validated management training covering HR, Operations, Finance, Digital Marketing, and Stock Market &amp; Crypto. Build the business leaders of tomorrow.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-4 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, idx) => (
                <CourseCard key={course.slug} course={course} idx={idx} category="management" />
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 sm:mt-14 bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-amber-500/10 rounded-full blur-[60px] -ml-16 -mb-16" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Need a{" "}
                  <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">custom management program</span>{" "}
                  for your team?
                </h2>
                <p className="text-white/50 text-[14px] sm:text-[15px] mb-6 max-w-lg mx-auto">We design tailored management training for organizations. Get a dedicated success manager and executive-level facilitators.</p>
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
