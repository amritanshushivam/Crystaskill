"use client"

import * as React from "react"
import { Check, X, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"

const comparison = [
  { feature: "AI-Powered Learning Paths", traditional: false, crystaskill: true },
  { feature: "24/7 Expert Mentorship", traditional: false, crystaskill: true },
  { feature: "Real-World Capstone Projects", traditional: true, crystaskill: true },
  { feature: "Verified Certification", traditional: false, crystaskill: true },
  { feature: "Lifetime Career Support", traditional: false, crystaskill: true },
  { feature: "Industry Partner Network", traditional: false, crystaskill: true },
]

function useReveal() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); io.disconnect() } },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function RevealDiv({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`css-reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export function Comparison() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <>
    <section className="py-10 sm:py-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <RevealDiv className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.06] rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span className="text-[12px] font-semibold text-accent tracking-wide">Why CrystaSkill</span>
          </div>
          <h2 className="text-primary mb-3">
            Not just another{" "}
            <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">learning platform</span>
          </h2>
          <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed">
            See how our professional education model outperforms traditional online training.
          </p>
        </RevealDiv>

        {/* Comparison Table */}
        <RevealDiv className="max-w-4xl mx-auto" delay={0.1}>
          <div className="bg-white rounded-3xl overflow-hidden border border-black/[0.04] shadow-[0_1px_3px_0_rgb(0,0,0,0.02)]">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-3 bg-primary p-4 sm:p-8">
              <div className="text-[11px] sm:text-[12px] font-semibold text-white/40 uppercase tracking-wider">Capabilities</div>
              <div className="text-center text-[10px] sm:text-[12px] font-semibold text-white/30 uppercase tracking-wider">Traditional</div>
              <div className="text-center flex items-center justify-center gap-1 sm:gap-2">
                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-[10px] sm:text-[12px] font-semibold text-white uppercase tracking-wider">CrystaSkill</span>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-black/[0.04]">
              {comparison.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-3 p-4 sm:p-7 items-center hover:bg-accent/[0.01] transition-colors"
                >
                  <div className="text-[12px] sm:text-[15px] font-semibold text-primary pr-2 sm:pr-4">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.traditional ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/[0.03] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground/30" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-50 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-300" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent stroke-[2.5px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="p-4 sm:p-8 bg-gradient-to-r from-accent/[0.03] to-transparent border-t border-black/[0.04]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="text-[14px] font-semibold text-primary">Ready to upskill your team?</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 px-7 text-[13px] shadow-lg shadow-primary/10 group">
                  Get Started <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </RevealDiv>
        
        {/* Simple separator */}
        <div className="mt-8 max-w-4xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </section>
    <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
