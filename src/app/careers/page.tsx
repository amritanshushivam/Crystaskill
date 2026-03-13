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
  MapPin,
  Clock,
  Heart,
  Rocket,
  Users,
  GraduationCap,
  Coffee,
  Globe,
  Zap,
} from "lucide-react"

const perks = [
  { title: "Remote-First", desc: "Work from anywhere in the world with flexible hours.", icon: Globe },
  { title: "Learning Budget", desc: "₹50,000/year for trainings, conferences, and certifications.", icon: GraduationCap },
  { title: "Health & Wellness", desc: "Comprehensive medical insurance for you and your family.", icon: Heart },
  { title: "Team Offsites", desc: "Quarterly meetups at scenic locations across India.", icon: Coffee },
  { title: "Stock Options", desc: "ESOPs for all full-time employees from day one.", icon: Rocket },
  { title: "Fast Growth", desc: "Work with a high-growth edtech redefining professional training.", icon: Zap },
]

const openings = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote / Bangalore", type: "Full-Time", desc: "Build and scale our learning platform. React, Node.js, MongoDB, AWS." },
  { title: "AI/ML Engineer", dept: "AI & Data", location: "Remote", type: "Full-Time", desc: "Design AI-powered personalized learning paths and recommendation engines." },
  { title: "Curriculum Designer — CSE", dept: "Education", location: "Remote / Delhi NCR", type: "Full-Time", desc: "Create industry-grade training content for CS & IT domains." },
  { title: "Corporate Sales Manager", dept: "Business", location: "Mumbai / Bangalore", type: "Full-Time", desc: "Manage B2B relationships and close enterprise training deals." },
  { title: "UI/UX Designer", dept: "Design", location: "Remote", type: "Full-Time", desc: "Design beautiful, accessible interfaces for our learner and admin dashboards." },
  { title: "Student Success Associate", dept: "Operations", location: "Remote", type: "Full-Time", desc: "Help learners stay on track, resolve issues, and maximize outcomes." },
  { title: "Content Marketing Lead", dept: "Marketing", location: "Remote", type: "Full-Time", desc: "Drive organic growth through blogs, SEO, social media, and thought leadership." },
  { title: "Campus Ambassador", dept: "Community", location: "Pan India", type: "Internship", desc: "Represent CrystaSkill in your college — organize events, workshops, and drives." },
]

export default function CareersPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
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
                <span className="text-[12px] font-semibold text-emerald-600 tracking-wide">We&apos;re Hiring</span>
              </div>
              <h1 className="text-primary mb-4">
                Build the future of{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">education</span>{" "}
                with us
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Join a passionate team of educators, engineers, and innovators who are transforming how professionals learn and grow. We&apos;re remote-first, impact-driven, and always learning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-primary mb-3">Why work at <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">CrystaSkill</span></h2>
              <p className="text-muted-foreground text-[15px]">Great culture, great benefits, great mission.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {perks.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-gray-50/50 rounded-2xl border border-black/[0.04] p-6 hover:shadow-md transition-all">
                  <p.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-[15px] font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-14 sm:py-20">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-primary mb-3">Open <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Positions</span></h2>
              <p className="text-muted-foreground text-[15px]">{openings.length} roles open across engineering, education, design, and more.</p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-4">
              {openings.map((job, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-black/[0.04] p-5 sm:p-6 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-[15px] font-bold text-primary">{job.title}</h3>
                      <p className="text-[13px] text-muted-foreground mt-1">{job.desc}</p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary/60"><Briefcase className="w-3 h-3" />{job.dept}</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary/60"><MapPin className="w-3 h-3" />{job.location}</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary/60"><Clock className="w-3 h-3" />{job.type}</span>
                      </div>
                    </div>
                    <Button onClick={() => setContactOpen(true)} size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-[12px] h-9 px-5 shrink-0">
                      Apply <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="section-container">
            <div className="bg-primary rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">Don&apos;t see the right role?</h2>
                <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">Send us your resume anyway. We&apos;re always looking for talented people.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg group">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
