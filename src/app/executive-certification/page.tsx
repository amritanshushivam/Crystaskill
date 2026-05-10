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
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

const programs = [
  {
    title: "Executive Leadership Program",
    duration: "24 Weeks",
    level: "C-Suite / VP",
    desc: "Strategic decision-making, digital transformation, and leadership in the AI era. Designed for CXOs, VPs, and senior directors.",
    modules: ["Strategic Leadership in Tech", "Digital Transformation Roadmaps", "AI for Business Decisions", "Change Management", "Board-Level Communication", "M&A & Growth Strategy"],
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Senior Management Certification",
    duration: "16 Weeks",
    level: "Directors / Senior Managers",
    desc: "Advanced management frameworks, cross-functional leadership, and P&L ownership for senior managers scaling to executive roles.",
    modules: ["P&L Management", "Cross-Functional Leadership", "Data-Driven Decision Making", "Team Scaling & Culture", "Executive Presentation Skills", "Negotiation Mastery"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Technology Leadership Track",
    duration: "20 Weeks",
    level: "Engineering Leads / CTOs",
    desc: "Architecture thinking, engineering team management, and technology strategy for technical leaders transitioning to CTO roles.",
    modules: ["System Design at Scale", "Engineering Team Management", "Tech Strategy & Roadmapping", "Cloud & DevOps Leadership", "Security & Compliance", "Innovation & R&D Management"],
    color: "from-emerald-500 to-teal-500",
  },
]

const benefits = [
  { title: "Peer Learning", desc: "Learn alongside 20-30 experienced executives from diverse industries.", icon: Users },
  { title: "1-on-1 Executive Coaching", desc: "Personalized coaching sessions with industry-veteran mentors.", icon: Zap },
  { title: "Industry Projects", desc: "Work on real business cases from Fortune 500 and fast-growth companies.", icon: Briefcase },
  { title: "Verified Certification", desc: "Industry-recognized executive certification upon program completion.", icon: ShieldCheck },
]

export default function ExecutiveCertificationPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-500/[0.06] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/[0.08] rounded-full mb-4">
                <Award className="w-3.5 h-3.5 text-violet-600" />
                <span className="text-[12px] font-semibold text-violet-600 tracking-wide">Executive Programs</span>
              </div>
              <h1 className="text-primary mb-4">
                Executive{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Certification</span>{" "}
                Programs
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Premium executive education for senior leaders and C-suite professionals. Accelerate your leadership journey with industry-veteran mentors and real-world business cases.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-14">
          <div className="section-container">
            <div className="space-y-6">
              {programs.map((prog, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl border border-black/[0.04] p-6 sm:p-8 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white shrink-0`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-[18px] font-bold text-primary">{prog.title}</h3>
                        <span className="text-[11px] font-bold text-violet-600 bg-violet-100 px-2.5 py-1 rounded-full">{prog.level}</span>
                      </div>
                      <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{prog.desc}</p>
                      <div className="flex items-center gap-4 mb-4 text-[12px] text-muted-foreground/60 font-semibold">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{prog.duration}</span>
                        <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" />{prog.modules.length} Modules</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {prog.modules.map((m, j) => (
                          <span key={j} className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary/60 bg-gray-50 border border-black/[0.04] px-3 py-1.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3 text-accent" />{m}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5">
                        <Button onClick={() => setContactOpen(true)} className="rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-semibold text-[13px] h-10 px-6 shadow-lg group">
                          Apply Now <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 bg-white">
          <div className="section-container">
            <h2 className="text-primary mb-8 text-center">Program <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Highlights</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-gray-50/50 rounded-2xl border border-black/[0.04] p-6 text-center hover:shadow-md transition-all">
                  <b.icon className="w-8 h-8 text-violet-500 mx-auto mb-3" />
                  <h3 className="text-[14px] font-bold text-primary mb-1">{b.title}</h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
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
                <h2 className="text-white text-2xl font-bold mb-3">Ready for the next level?</h2>
                <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">Limited seats per cohort. Apply now for the 2026 executive batch.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg group">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
