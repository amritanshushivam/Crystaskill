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
  Briefcase,
  Target,
  FileText,
  Users,
  TrendingUp,
  GraduationCap,
  CheckCircle2,
  Award,
  Building2,
  Handshake,
} from "lucide-react"

const stats = [
  { value: "94%", label: "Placement Rate", icon: Target },
  { value: "500+", label: "Hiring Partners", icon: Building2 },
  { value: "₹8.5 LPA", label: "Average Package", icon: TrendingUp },
  { value: "45 Days", label: "Avg Placement Time", icon: Briefcase },
]

const services = [
  {
    title: "Resume & Portfolio Building",
    desc: "Professional resume writing, LinkedIn optimization, and project portfolio creation guided by industry hiring managers.",
    icon: FileText,
  },
  {
    title: "Mock Interviews",
    desc: "1-on-1 mock interview sessions with HR professionals and technical leads from top companies.",
    icon: Users,
  },
  {
    title: "Job Matching",
    desc: "AI-powered job matching based on your skills, experience, and career goals with our 500+ hiring partners.",
    icon: Target,
  },
  {
    title: "Soft Skills Training",
    desc: "Communication, teamwork, leadership, and negotiation workshops to make you a complete professional.",
    icon: Award,
  },
  {
    title: "Referral Network",
    desc: "Direct referrals from our alumni network and corporate partners for exclusive job openings.",
    icon: Handshake,
  },
  {
    title: "Career Counseling",
    desc: "Dedicated career counselor assigned from day one to guide your learning-to-placement journey.",
    icon: GraduationCap,
  },
]

const process = [
  { step: "01", title: "Complete Your Program", desc: "Finish all modules, projects, and assessments with 80%+ score." },
  { step: "02", title: "Profile Activation", desc: "Your profile goes live on our placement portal visible to hiring partners." },
  { step: "03", title: "Interview Prep", desc: "Mock interviews, resume reviews, and domain-specific prep sessions." },
  { step: "04", title: "Interview Calls", desc: "Receive interview calls from matched companies and attend placement drives." },
  { step: "05", title: "Offer & Onboarding", desc: "Accept offer, negotiate terms, and start your new career chapter." },
]

export default function PlacementDeskPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/[0.08] rounded-full mb-4">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[12px] font-semibold text-emerald-600 tracking-wide">Placement Desk</span>
              </div>
              <h1 className="text-primary mb-4">
                Your career{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">starts here</span>
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Our dedicated Placement Desk connects trained professionals with top hiring companies. From resume building to final placement — we&apos;re with you every step.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-5 text-center">
                  <s.icon className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-14 bg-white">
          <div className="section-container">
            <h2 className="text-primary mb-8 text-center">Placement <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Services</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-gray-50/50 rounded-2xl border border-black/[0.04] p-6 hover:shadow-md transition-all">
                  <s.icon className="w-8 h-8 text-emerald-500 mb-3" />
                  <h3 className="text-[15px] font-bold text-primary mb-1">{s.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14">
          <div className="section-container max-w-3xl">
            <h2 className="text-primary mb-8 text-center">How it <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">works</span></h2>
            <div className="space-y-0">
              {process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-[14px] font-extrabold shadow-lg">{p.step}</div>
                    {i < process.length - 1 && <div className="w-0.5 h-12 bg-emerald-200" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-[15px] font-bold text-primary">{p.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mt-1">{p.desc}</p>
                  </div>
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
                <h2 className="text-white text-2xl font-bold mb-3">Ready to kickstart your career?</h2>
                <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">Enroll in any CrystaSkill program and get full placement support included.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg group">
                  Get Started <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
