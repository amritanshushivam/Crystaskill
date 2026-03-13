"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Users,
  Target,
  CheckCircle2,
  BarChart3,
  Settings,
  GraduationCap,
  Award,
} from "lucide-react"

const stats = [
  { value: "200+", label: "Companies Served" },
  { value: "10K+", label: "Employees Trained" },
  { value: "97%", label: "Client Retention" },
  { value: "50+", label: "Custom Programs" },
]

const features = [
  { title: "Custom Curriculum", desc: "Tailored training programs designed around your company's specific technology stack, processes, and goals.", icon: Settings },
  { title: "Dedicated Success Manager", desc: "A single point of contact managing everything from onboarding to reporting and post-training support.", icon: Users },
  { title: "Flexible Scheduling", desc: "Training sessions scheduled around your team's availability — weekdays, weekends, or intensive bootcamps.", icon: Target },
  { title: "Progress Analytics", desc: "Real-time dashboards tracking learner engagement, quiz scores, project completion, and skill growth.", icon: BarChart3 },
  { title: "Certified Outcomes", desc: "Industry-recognized certifications upon completion. Track ROI with measurable skill improvements.", icon: Award },
  { title: "Scalable Batches", desc: "From teams of 5 to organization-wide rollouts of 500+. Our platform scales seamlessly.", icon: Building2 },
]

const industries = [
  "Information Technology", "Banking & Finance", "Healthcare", "Manufacturing",
  "Telecommunications", "E-Commerce", "Government & PSU", "Education",
  "Automotive", "Energy & Utilities", "Media & Entertainment", "Consulting",
]

export default function CorporateTrainingPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/[0.08] rounded-full mb-4">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[12px] font-semibold text-blue-600 tracking-wide">Corporate Training</span>
              </div>
              <h1 className="text-primary mb-4">
                Upskill your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">entire workforce</span>
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Custom-designed corporate training programs for enterprises. From one-day workshops to year-long transformation journeys — we build what your team needs.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-5 text-center">
                  <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="section-container">
            <h2 className="text-primary mb-8 text-center">Why companies choose <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">CrystaSkill</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-gray-50/50 rounded-2xl border border-black/[0.04] p-6 hover:shadow-md transition-all">
                  <f.icon className="w-8 h-8 text-blue-500 mb-3" />
                  <h3 className="text-[15px] font-bold text-primary mb-1">{f.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="section-container">
            <h2 className="text-primary mb-8 text-center">Industries we <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">serve</span></h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {industries.map((ind, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary/70 bg-white border border-black/[0.05] px-4 py-2.5 rounded-full shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  {ind}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="section-container">
            <div className="bg-primary rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl font-bold mb-3">Request a custom proposal</h2>
                <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">Tell us your team size, tech stack, and goals. We&apos;ll design the perfect training program.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg group">
                  Get a Proposal <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
      <ChatWidget />
    </div>
  )
}
