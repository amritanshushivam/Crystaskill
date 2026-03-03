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
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  CreditCard,
  RefreshCw,
  ShieldCheck,
} from "lucide-react"

const policies = [
  {
    title: "Enrollment Process",
    icon: FileText,
    items: [
      "Browse and select your desired program and training track.",
      "Choose a plan (Basic, Standard, or Premium) that fits your needs.",
      "Fill in the enrollment form with accurate personal and contact details.",
      "Complete payment via our secure payment gateway (UPI, Cards, Net Banking).",
      "Receive confirmation email with access credentials within 24 hours.",
      "Onboarding call with your success manager within 48 hours.",
    ],
  },
  {
    title: "Eligibility Criteria",
    icon: CheckCircle2,
    items: [
      "Open to students, working professionals, and corporate teams.",
      "Minimum age: 18 years (or 16 with parental consent).",
      "No prior coding experience needed for beginner-level tracks.",
      "Intermediate & advanced tracks may require prerequisite knowledge.",
      "Corporate enrollments: minimum batch size of 5 participants.",
    ],
  },
  {
    title: "Payment & Pricing",
    icon: CreditCard,
    items: [
      "All prices are in Indian Rupees (INR) and inclusive of GST.",
      "Payment options: One-time, EMI (via partner banks), or corporate PO.",
      "Scholarships available for meritorious and economically weaker students.",
      "Corporate sponsorship and group discount pricing available on request.",
      "Payment is required before the program start date.",
    ],
  },
  {
    title: "Refund Policy",
    icon: RefreshCw,
    items: [
      "Full refund if cancellation is requested within 7 days of enrollment.",
      "50% refund if cancellation is requested within 7-14 days.",
      "No refund after 14 days or if more than 20% of modules are accessed.",
      "Refunds processed within 10 business days to original payment method.",
      "Corporate enrollments: refund terms as per the contract agreement.",
    ],
  },
  {
    title: "Attendance & Completion",
    icon: Clock,
    items: [
      "Minimum 80% attendance required for live sessions.",
      "All assignments and projects must be submitted by deadlines.",
      "Certificate issued only upon successful completion of all requirements.",
      "Extension of up to 4 weeks available in case of genuine hardship.",
      "Re-enrollment available at 50% discount if program is not completed.",
    ],
  },
  {
    title: "Code of Conduct",
    icon: ShieldCheck,
    items: [
      "Zero tolerance for plagiarism, cheating, or academic dishonesty.",
      "Respectful behavior towards mentors, peers, and support staff.",
      "No sharing of login credentials or training materials with non-enrolled persons.",
      "Violation of code may result in immediate termination without refund.",
    ],
  },
]

export default function EnrollmentPolicyPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.08] rounded-full mb-4">
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span className="text-[12px] font-semibold text-accent tracking-wide">Enrollment Policy</span>
              </div>
              <h1 className="text-primary mb-4">
                Enrollment{" "}
                <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Everything you need to know about enrolling in CrystaSkill programs — eligibility, payments, refunds, and more.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="section-container max-w-4xl">
            <div className="space-y-8">
              {policies.map((section, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-black/[0.04] p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent/[0.06] flex items-center justify-center text-accent">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-primary">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] text-primary/70 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-primary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl font-bold mb-3">Have questions about enrollment?</h2>
                <p className="text-white/50 text-[14px] mb-6">Our enrollment desk is happy to help with any queries.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg group">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
