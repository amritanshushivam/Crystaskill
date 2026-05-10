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
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Users,
  GraduationCap,
  Briefcase,
  MessageSquare,
  Award,
  MapPin,
  Linkedin,
} from "lucide-react"

const stats = [
  { value: "50K+", label: "Alumni Worldwide", icon: Users },
  { value: "15+", label: "Countries", icon: Globe },
  { value: "200+", label: "Companies Hiring", icon: Briefcase },
  { value: "4.9/5", label: "Community Rating", icon: Award },
]

const benefits = [
  { title: "Lifetime Access", desc: "Stay connected with training updates, new workshops, and exclusive webinars for life.", icon: GraduationCap },
  { title: "Job Referrals", desc: "Get direct referrals from alumni at top companies — Google, Amazon, Infosys, TCS & more.", icon: Briefcase },
  { title: "Mentorship", desc: "Give back by mentoring new learners or find a senior mentor for your career growth.", icon: MessageSquare },
  { title: "Events & Meetups", desc: "Quarterly meetups, annual alumni conference, and networking events across cities.", icon: MapPin },
  { title: "LinkedIn Community", desc: "Join our exclusive LinkedIn group with 30K+ members for opportunities and discussions.", icon: Linkedin },
  { title: "Recognition", desc: "Alumni spotlight features, achievement badges, and speaking opportunities at CrystaSkill events.", icon: Award },
]

const spotlights = [
  { name: "Ananya Joshi", role: "SDE-II at Google", program: "CSE / IT", quote: "CrystaSkill didn't just teach me to code — it taught me to think like an engineer. The placement support was incredible.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80", imageHint: "professional woman" },
  { name: "Rohit Patel", role: "VLSI Engineer at Qualcomm", program: "ECE / EC", quote: "The VLSI track was exactly what I needed. Within 3 months of completion, I had 3 offers on the table.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", imageHint: "professional male" },
  { name: "Priya Sharma", role: "Marketing Head at Flipkart", program: "Management", quote: "The Digital Marketing program gave me real campaign experience. My career growth has been exponential since.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", imageHint: "professional woman smile" },
]

export default function AlumniNetworkPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-500/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/[0.08] rounded-full mb-4">
                <Globe className="w-3.5 h-3.5 text-violet-600" />
                <span className="text-[12px] font-semibold text-violet-600 tracking-wide">Alumni Network</span>
              </div>
              <h1 className="text-primary mb-4">
                A global community of{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">50,000+ professionals</span>
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Our alumni network spans 15+ countries and some of the world&apos;s top companies. Once a CrystaSkill learner, always part of the family.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-5 text-center">
                  <s.icon className="w-6 h-6 text-violet-500 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 bg-white">
          <div className="section-container">
            <h2 className="text-primary mb-8 text-center">Alumni <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Benefits</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-gray-50/50 rounded-2xl border border-black/[0.04] p-6 hover:shadow-md transition-all">
                  <b.icon className="w-8 h-8 text-violet-500 mb-3" />
                  <h3 className="text-[15px] font-bold text-primary mb-1">{b.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spotlight */}
        <section className="py-14">
          <div className="section-container">
            <h2 className="text-primary mb-8 text-center">Alumni <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Spotlight</span></h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {spotlights.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl border border-black/[0.04] p-6 text-center hover:shadow-lg transition-all">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-violet-200">
                    <Image src={s.image} alt={s.name} fill className="object-cover" data-ai-hint={s.imageHint} />
                  </div>
                  <h3 className="text-[15px] font-bold text-primary">{s.name}</h3>
                  <p className="text-[12px] text-accent font-semibold">{s.role}</p>
                  <p className="text-[11px] text-muted-foreground/50 mb-3">{s.program}</p>
                  <p className="text-[13px] text-muted-foreground/70 italic leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
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
                <h2 className="text-white text-2xl font-bold mb-3">Join the alumni network</h2>
                <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">Enroll in any CrystaSkill program and become part of our global community.</p>
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
