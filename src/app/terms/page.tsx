"use client"

import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-14 sm:pb-20">
        <div className="section-container max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-primary mb-6">Terms of Service</h1>
          <div className="prose prose-sm max-w-none text-primary/70 space-y-6">
            <p className="text-[14px] leading-relaxed"><strong>Last Updated:</strong> March 1, 2026</p>

            <h2 className="text-[18px] font-bold text-primary">1. Acceptance of Terms</h2>
            <p className="text-[14px] leading-relaxed">By accessing or using CrystaSkill&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

            <h2 className="text-[18px] font-bold text-primary">2. Services</h2>
            <p className="text-[14px] leading-relaxed">CrystaSkill provides online and hybrid professional training programs, mentorship, certification, and placement services. Service availability may vary by region and program.</p>

            <h2 className="text-[18px] font-bold text-primary">3. User Accounts</h2>
            <p className="text-[14px] leading-relaxed">You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate information during registration. Sharing accounts is prohibited.</p>

            <h2 className="text-[18px] font-bold text-primary">4. Intellectual Property</h2>
            <p className="text-[14px] leading-relaxed">All training materials, videos, assessments, and content are owned by CrystaSkill. You may not reproduce, distribute, or share any materials without written permission.</p>

            <h2 className="text-[18px] font-bold text-primary">5. Payment Terms</h2>
            <p className="text-[14px] leading-relaxed">All fees are in Indian Rupees (INR) unless specified otherwise. Payments are processed securely. Refund policy is detailed in our Enrollment Policy page.</p>

            <h2 className="text-[18px] font-bold text-primary">6. Limitation of Liability</h2>
            <p className="text-[14px] leading-relaxed">CrystaSkill is not liable for placement outcomes, career results, or indirect damages. Our programs provide training and support, but individual results may vary.</p>

            <h2 className="text-[18px] font-bold text-primary">7. Modifications</h2>
            <p className="text-[14px] leading-relaxed">We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.</p>

            <h2 className="text-[18px] font-bold text-primary">8. Governing Law</h2>
            <p className="text-[14px] leading-relaxed">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi NCR.</p>

            <h2 className="text-[18px] font-bold text-primary">9. Contact</h2>
            <p className="text-[14px] leading-relaxed">For questions about these terms: <a href="mailto:legal@crystaskill.com" className="text-accent hover:underline">legal@crystaskill.com</a></p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
