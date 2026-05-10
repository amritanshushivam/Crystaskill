"use client"

import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { ArrowLeft, Download, FileText, Image as ImageIcon, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PressKitPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-14 sm:pb-20">
        <div className="section-container max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-primary mb-4">Press Kit</h1>
          <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed mb-10 max-w-2xl">
            Everything you need to feature CrystaSkill in publications, articles, and media coverage. Download brand assets, company information, and official materials.
          </p>

          <div className="space-y-10">
            {/* Company Overview */}
            <section>
              <h2 className="text-[20px] font-bold text-primary mb-4">Company Overview</h2>
              <div className="bg-white rounded-2xl border border-black/[0.04] p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[12px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-1">Founded</p>
                    <p className="text-[15px] font-semibold text-primary">2023</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-[15px] font-semibold text-primary">India</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-1">Professionals Trained</p>
                    <p className="text-[15px] font-semibold text-primary">50,000+</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-1">Corporate Partners</p>
                    <p className="text-[15px] font-semibold text-primary">50+</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-black/[0.04]">
                  <p className="text-[12px] font-semibold text-muted-foreground/50 uppercase tracking-wider mb-2">About</p>
                  <p className="text-[14px] leading-relaxed text-primary/70">CrystaSkill is a leading professional training and development company that empowers corporates and individuals with industry-led programs in technology, engineering, and business management. Our mission is to bridge the gap between academic knowledge and industry requirements through hands-on, expert-mentored training.</p>
                </div>
              </div>
            </section>

            {/* Brand Assets */}
            <section>
              <h2 className="text-[20px] font-bold text-primary mb-4">Brand Assets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-black/[0.04] p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-primary mb-1">Logo Pack</h3>
                    <p className="text-[13px] text-muted-foreground/60 mb-3">PNG, SVG formats in light and dark variants</p>
                    <Button variant="outline" size="sm" disabled className="rounded-full text-[12px] font-semibold gap-2 opacity-50 cursor-not-allowed">
                      <Download className="w-3.5 h-3.5" /> Coming Soon
                    </Button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-black/[0.04] p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-primary mb-1">Brand Guidelines</h3>
                    <p className="text-[13px] text-muted-foreground/60 mb-3">Colors, typography, and usage guidelines</p>
                    <Button variant="outline" size="sm" disabled className="rounded-full text-[12px] font-semibold gap-2 opacity-50 cursor-not-allowed">
                      <Download className="w-3.5 h-3.5" /> Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Colors */}
            <section>
              <h2 className="text-[20px] font-bold text-primary mb-4">Brand Colors</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl border border-black/[0.04] p-4 text-center">
                  <div className="w-full h-16 rounded-xl bg-[hsl(220,25%,10%)] mb-3" />
                  <p className="text-[13px] font-semibold text-primary">Primary</p>
                  <p className="text-[11px] text-muted-foreground/50">#1a1d23</p>
                </div>
                <div className="bg-white rounded-2xl border border-black/[0.04] p-4 text-center">
                  <div className="w-full h-16 rounded-xl bg-[hsl(32,95%,52%)] mb-3" />
                  <p className="text-[13px] font-semibold text-primary">Accent</p>
                  <p className="text-[11px] text-muted-foreground/50">#f59e0b</p>
                </div>
                <div className="bg-white rounded-2xl border border-black/[0.04] p-4 text-center">
                  <div className="w-full h-16 rounded-xl bg-[hsl(210,20%,98%)] border border-black/[0.06] mb-3" />
                  <p className="text-[13px] font-semibold text-primary">Background</p>
                  <p className="text-[11px] text-muted-foreground/50">#f9fafb</p>
                </div>
                <div className="bg-white rounded-2xl border border-black/[0.04] p-4 text-center">
                  <div className="w-full h-16 rounded-xl bg-white border border-black/[0.06] mb-3" />
                  <p className="text-[13px] font-semibold text-primary">Card</p>
                  <p className="text-[11px] text-muted-foreground/50">#ffffff</p>
                </div>
              </div>
            </section>

            {/* Media Contact */}
            <section>
              <h2 className="text-[20px] font-bold text-primary mb-4">Media Contact</h2>
              <div className="bg-white rounded-2xl border border-black/[0.04] p-6 sm:p-8 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-primary mb-1">Press Inquiries</h3>
                  <p className="text-[13px] text-muted-foreground/60 mb-2">For media inquiries, interviews, and partnerships</p>
                  <a href="mailto:press@crystaskill.com" className="text-[14px] font-semibold text-accent hover:underline">press@crystaskill.com</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
