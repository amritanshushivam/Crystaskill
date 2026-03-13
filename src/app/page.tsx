import dynamic from "next/dynamic"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Partners } from "@/components/landing/partners"
import { ChatWidgetWrapper } from "@/components/chatbot/chat-widget-wrapper"

// Lazy-load below-fold sections for faster initial page load
const Features = dynamic(() => import("@/components/landing/features").then(m => ({ default: m.Features })), { ssr: true })
const Courses = dynamic(() => import("@/components/landing/courses").then(m => ({ default: m.Courses })), { ssr: true })
const Comparison = dynamic(() => import("@/components/landing/comparison").then(m => ({ default: m.Comparison })), { ssr: true })
const Testimonials = dynamic(() => import("@/components/landing/testimonials").then(m => ({ default: m.Testimonials })), { ssr: true })
const CTASection = dynamic(() => import("@/components/landing/cta-section").then(m => ({ default: m.CTASection })), { ssr: true })
const Footer = dynamic(() => import("@/components/landing/footer").then(m => ({ default: m.Footer })), { ssr: true })

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Courses />
        <Comparison />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <ChatWidgetWrapper />
    </div>
  )
}
