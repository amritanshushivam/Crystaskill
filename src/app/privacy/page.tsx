"use client"

import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-14 sm:pb-20">
        <div className="section-container max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-primary mb-6">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none text-primary/70 space-y-6">
            <p className="text-[14px] leading-relaxed"><strong>Last Updated:</strong> March 1, 2026</p>

            <h2 className="text-[18px] font-bold text-primary">1. Information We Collect</h2>
            <p className="text-[14px] leading-relaxed">We collect personal information you provide directly, including your name, email address, phone number, educational background, and professional details when you register, enroll in programs, or contact us.</p>

            <h2 className="text-[18px] font-bold text-primary">2. How We Use Your Information</h2>
            <p className="text-[14px] leading-relaxed">Your information is used to provide and improve our training services, process enrollments, send program updates, facilitate placement support, and respond to your inquiries. We may also use anonymized data for analytics.</p>

            <h2 className="text-[18px] font-bold text-primary">3. Data Sharing</h2>
            <p className="text-[14px] leading-relaxed">We do not sell your personal data. We may share information with corporate partners and recruiters solely for placement purposes, and only with your consent. Service providers who assist our operations are bound by confidentiality agreements.</p>

            <h2 className="text-[18px] font-bold text-primary">4. Data Security</h2>
            <p className="text-[14px] leading-relaxed">We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-[18px] font-bold text-primary">5. Cookies</h2>
            <p className="text-[14px] leading-relaxed">We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings. See our <Link href="/cookies" className="text-accent hover:underline">Cookie Policy</Link> for details.</p>

            <h2 className="text-[18px] font-bold text-primary">6. Your Rights</h2>
            <p className="text-[14px] leading-relaxed">You have the right to access, correct, or delete your personal data. You may also request data portability or object to certain processing activities. Contact us at the email below to exercise your rights.</p>

            <h2 className="text-[18px] font-bold text-primary">7. Data Retention</h2>
            <p className="text-[14px] leading-relaxed">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Enrollment records are maintained for a minimum of 5 years.</p>

            <h2 className="text-[18px] font-bold text-primary">8. Third-Party Links</h2>
            <p className="text-[14px] leading-relaxed">Our website may contain links to third-party sites. We are not responsible for the privacy practices of those websites. We encourage you to review their privacy policies.</p>

            <h2 className="text-[18px] font-bold text-primary">9. Changes to This Policy</h2>
            <p className="text-[14px] leading-relaxed">We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance.</p>

            <h2 className="text-[18px] font-bold text-primary">10. Contact</h2>
            <p className="text-[14px] leading-relaxed">For privacy-related questions or requests: <a href="mailto:privacy@crystaskill.com" className="text-accent hover:underline">privacy@crystaskill.com</a></p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
