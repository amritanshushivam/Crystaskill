"use client"

import { useParams } from "next/navigation"
import { CourseDetailPage } from "@/components/course-detail-page"
import { notFound } from "next/navigation"

const courses = [
  {
    slug: "hr-management",
    title: "HR Management",
    subtitle: "People & Culture",
    color: "from-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    imageHint: "hr team meeting corporate",
    description: "Master modern HR practices — from talent acquisition and employee engagement to HR analytics and organizational development.",
    topics: ["Talent Acquisition", "Employee Engagement", "HR Analytics & Metrics", "Performance Management", "Compensation & Benefits", "Labour Law & Compliance"],
    syllabus: ["Module 1: HR Fundamentals & Strategic HRM", "Module 2: Talent Acquisition & Employer Branding", "Module 3: Onboarding & Employee Engagement", "Module 4: Performance Management Systems", "Module 5: Compensation, Benefits & Payroll", "Module 6: HR Analytics — Dashboards & Metrics", "Module 7: Labour Laws, Compliance & Ethics", "Module 8: Organizational Development & Change Management"],
    duration: "12 Weeks", projects: "4+ Case Studies", students: "3k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "operation-management",
    title: "Operation Management",
    subtitle: "Process Excellence",
    color: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    imageHint: "operations supply chain logistics",
    description: "Optimize business operations end-to-end. Learn supply chain management, lean manufacturing, Six Sigma, and process automation.",
    topics: ["Supply Chain Management", "Lean & Six Sigma", "Inventory Management", "Process Optimization", "Quality Management", "ERP Systems (SAP)"],
    syllabus: ["Module 1: Operations Management Fundamentals", "Module 2: Supply Chain Design & Logistics", "Module 3: Lean Manufacturing & 5S", "Module 4: Six Sigma — DMAIC Methodology", "Module 5: Inventory & Demand Planning", "Module 6: Quality Management — TQM & ISO", "Module 7: ERP Systems — SAP Overview & Implementation", "Module 8: Process Automation & Digital Transformation"],
    duration: "12 Weeks", projects: "4+ Live Projects", students: "2k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "finance",
    title: "Finance",
    subtitle: "Corporate & Investment",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    imageHint: "finance accounting charts",
    description: "Build expertise in corporate finance, financial modeling, investment analysis, and risk management for modern businesses.",
    topics: ["Financial Modeling", "Corporate Finance", "Investment Analysis", "Risk Management", "Budgeting & Forecasting", "Tally / SAP FICO"],
    syllabus: ["Module 1: Financial Accounting & Statements", "Module 2: Corporate Finance — Capital Structure & Valuation", "Module 3: Financial Modeling in Excel", "Module 4: Investment Analysis & Portfolio Management", "Module 5: Risk Management & Derivatives", "Module 6: Budgeting, Forecasting & Variance Analysis", "Module 7: Tally ERP & SAP FICO", "Module 8: Capstone — Financial Analysis Project"],
    duration: "14 Weeks", projects: "5+ Live Projects", students: "4k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Growth & Branding",
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
    imageHint: "digital marketing social media",
    description: "Master the full digital marketing stack — SEO, social media, performance marketing, content strategy, and marketing analytics.",
    topics: ["SEO & SEM", "Social Media Marketing", "Google & Meta Ads", "Content Strategy", "Email Marketing", "Marketing Analytics"],
    syllabus: ["Module 1: Digital Marketing Fundamentals & Strategy", "Module 2: SEO — On-Page, Off-Page & Technical", "Module 3: SEM — Google Ads & PPC Campaigns", "Module 4: Social Media Marketing — Instagram, LinkedIn & YouTube", "Module 5: Meta & Google Ads — Performance Marketing", "Module 6: Content Marketing & Email Automation", "Module 7: Marketing Analytics — GA4, GTM & Dashboards", "Module 8: Capstone — Full Marketing Campaign"],
    duration: "10 Weeks", projects: "5+ Live Campaigns", students: "5k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "stock-market-crypto",
    title: "Stock Market & Cryptocurrency",
    subtitle: "Trading & Investment",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    imageHint: "stock market trading charts",
    description: "Learn professional trading, technical analysis, portfolio management, and cryptocurrency investing. From basics to advanced strategies.",
    topics: ["Technical Analysis", "Fundamental Analysis", "Options & Derivatives", "Cryptocurrency Trading", "Portfolio Management", "Risk & Money Management"],
    syllabus: ["Module 1: Stock Market Fundamentals & Market Structure", "Module 2: Technical Analysis — Charts, Patterns & Indicators", "Module 3: Fundamental Analysis — Financial Ratios & Valuation", "Module 4: Options & Futures — Strategies & Greeks", "Module 5: Cryptocurrency — Blockchain, DeFi & Trading", "Module 6: Algorithmic & Quantitative Trading Basics", "Module 7: Portfolio Construction & Risk Management", "Module 8: Live Trading Practice & Psychology"],
    duration: "12 Weeks", projects: "Live Trading Practice", students: "3k+ Trained", level: "Beginner to Advanced",
  },
]

export default function ManagementCoursePage() {
  const params = useParams()
  const courseSlug = params.course as string
  const course = courses.find((c) => c.slug === courseSlug)

  if (!course) {
    notFound()
  }

  return (
    <CourseDetailPage
      course={course}
      category="management"
      categoryLabel="Management Programs"
      categoryColor="from-amber-600 to-orange-600"
    />
  )
}
