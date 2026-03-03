"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  Rocket,
  ShieldCheck,
  GraduationCap,
  Building2,
  Lightbulb,
  TrendingUp,
} from "lucide-react"

const stats = [
  { value: "50K+", label: "Professionals Trained", icon: GraduationCap },
  { value: "200+", label: "Corporate Partners", icon: Building2 },
  { value: "96%", label: "Satisfaction Rate", icon: Award },
  { value: "15+", label: "Countries Served", icon: Globe },
]

const values = [
  { title: "Innovation First", desc: "We constantly evolve our curriculum with AI-powered tools and cutting-edge industry practices.", icon: Lightbulb, color: "from-violet-500 to-indigo-500" },
  { title: "Student Success", desc: "Every program is designed with one goal — measurable career transformation for our learners.", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
  { title: "Industry Alignment", desc: "Our training tracks are built in collaboration with top tech companies and industry leaders.", icon: ShieldCheck, color: "from-blue-500 to-cyan-500" },
  { title: "Inclusive Growth", desc: "We believe quality education should be accessible. Flexible plans, scholarships, and corporate sponsorships.", icon: Heart, color: "from-rose-500 to-pink-500" },
  { title: "Global Community", desc: "Join a network of 50,000+ alumni across 15 countries, supporting each other's growth.", icon: Globe, color: "from-amber-500 to-orange-500" },
  { title: "Excellence", desc: "Our instructors are top practitioners — Google engineers, Stripe architects, and Fortune 500 leaders.", icon: Award, color: "from-purple-500 to-violet-500" },
]

const timeline = [
  { year: "2019", title: "Founded", desc: "CrystaSkill was born with a mission to bridge the gap between academia and industry." },
  { year: "2020", title: "First 1,000 Students", desc: "Launched our first online cohort during the global pandemic, reaching students across India." },
  { year: "2021", title: "Corporate Partnerships", desc: "Partnered with 50+ companies to deliver custom corporate training programs." },
  { year: "2022", title: "AI Integration", desc: "Introduced AI-powered learning paths and personalized mentorship matching." },
  { year: "2023", title: "Global Expansion", desc: "Expanded to 10+ countries with multilingual support and region-specific curriculum." },
  { year: "2024", title: "50K Milestone", desc: "Crossed 50,000 professionals trained with a 96% satisfaction rate." },
  { year: "2025", title: "Executive Programs", desc: "Launched executive certification tracks for C-suite and senior leadership." },
  { year: "2026", title: "The Future", desc: "Continuing to innovate with immersive learning, VR labs, and global placement networks." },
]

const leadership = [
  { name: "Shivam Sharma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", imageHint: "professional male" },
  { name: "Amritanshu Singh", role: "Co-Founder & CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", imageHint: "professional male tech" },
  { name: "Priya Mehta", role: "VP of Education", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", imageHint: "professional woman" },
  { name: "Rahul Verma", role: "Head of Placements", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80", imageHint: "professional male suit" },
]

export default function AboutPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/[0.06] via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/[0.04] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.08] rounded-full mb-4">
                <Building2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-[12px] font-semibold text-accent tracking-wide">About CrystaSkill</span>
              </div>
              <h1 className="text-primary mb-4">
                Transforming{" "}
                <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">careers</span>{" "}
                through world-class education
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                CrystaSkill is the global standard in professional training and corporate education. We combine AI-powered learning, expert mentorship, and industry partnerships to deliver measurable career outcomes.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-5 text-center">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 sm:p-10 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-[22px] font-bold mb-3">Our Mission</h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  To democratize quality professional education by making industry-grade training accessible to every learner, everywhere. We bridge the gap between academic theory and real-world skills that employers demand.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-accent to-amber-500 rounded-3xl p-8 sm:p-10 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[22px] font-bold mb-3">Our Vision</h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  To become the world's most trusted platform for professional upskilling — where every graduate is job-ready, every company finds talent, and education knows no borders.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 sm:py-20">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-primary mb-3">Our Core <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Values</span></h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">The principles that guide everything we do at CrystaSkill.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl border border-black/[0.04] p-6 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white mb-4`}>
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[16px] font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 sm:py-20 bg-gray-50/50">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-primary mb-3">Our <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Journey</span></h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">From a small idea to a global education platform.</p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-0">
              {timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-accent/20 flex items-center justify-center text-[13px] font-extrabold text-accent shadow-sm">{t.year}</div>
                    {i < timeline.length - 1 && <div className="w-0.5 h-12 bg-accent/10" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-[15px] font-bold text-primary">{t.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mt-1">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-14 sm:py-20">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-primary mb-3">Our <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Leadership</span></h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">Meet the people driving CrystaSkill's mission forward.</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {leadership.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden mx-auto mb-4 border-2 border-black/[0.04]">
                    <Image src={p.image} alt={p.name} fill className="object-cover" data-ai-hint={p.imageHint} />
                  </div>
                  <h4 className="text-[14px] font-bold text-primary">{p.name}</h4>
                  <p className="text-[12px] text-muted-foreground">{p.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-20">
          <div className="section-container">
            <div className="bg-primary rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">Join the CrystaSkill community</h2>
                <p className="text-white/50 text-[14px] sm:text-[15px] mb-6 max-w-lg mx-auto">Whether you're an individual learner or a corporate team — we have the right program for you.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg shadow-accent/20 hover:shadow-xl transition-all group">
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
