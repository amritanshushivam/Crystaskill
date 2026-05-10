"use client"

import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { ArrowLeft } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-14 sm:pb-20">
        <div className="section-container max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-primary mb-6">Cookie Policy</h1>
          <div className="prose prose-sm max-w-none text-primary/70 space-y-6">
            <p className="text-[14px] leading-relaxed"><strong>Last Updated:</strong> March 1, 2026</p>

            <h2 className="text-[18px] font-bold text-primary">What Are Cookies</h2>
            <p className="text-[14px] leading-relaxed">Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering your preferences and understanding how you use our platform.</p>

            <h2 className="text-[18px] font-bold text-primary">Types of Cookies We Use</h2>
            <p className="text-[14px] leading-relaxed"><strong>Essential Cookies:</strong> Required for basic site functionality — login sessions, form submissions, and security.</p>
            <p className="text-[14px] leading-relaxed"><strong>Analytics Cookies:</strong> Google Analytics to track page views, session duration, and user behavior. Data is anonymized.</p>
            <p className="text-[14px] leading-relaxed"><strong>Preference Cookies:</strong> Remember your language, theme, and other display preferences.</p>

            <h2 className="text-[18px] font-bold text-primary">Managing Cookies</h2>
            <p className="text-[14px] leading-relaxed">You can control cookies through your browser settings. Disabling essential cookies may affect site functionality. You can clear cookies at any time through your browser.</p>

            <h2 className="text-[18px] font-bold text-primary">Third-Party Cookies</h2>
            <p className="text-[14px] leading-relaxed">We use services like Google Analytics that may set their own cookies. These are governed by their respective privacy policies.</p>

            <h2 className="text-[18px] font-bold text-primary">Contact</h2>
            <p className="text-[14px] leading-relaxed">For questions about cookies: <a href="mailto:privacy@crystaskill.com" className="text-accent hover:underline">privacy@crystaskill.com</a></p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
