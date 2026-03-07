"use client"

import * as React from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { ContactFormDialog } from "@/components/contact-form-dialog"

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

export function CTASection() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <section className="py-10 sm:py-14">
      <div className="section-container">
        <RevealDiv className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem]">
          {/* Background */}
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
          
          {/* Static decorative blurs (no JS animation) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px]" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />

          {/* Content */}
          <div className="relative z-10 px-5 sm:px-14 py-10 sm:py-16 text-center">
            <RevealDiv delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.08] border border-white/[0.08] rounded-full mb-5 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-[12px] font-semibold text-white/80 tracking-wide">2026 Training Batch — Now Enrolling</span>
              </div>
            </RevealDiv>

            <RevealDiv delay={0.2}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 max-w-3xl mx-auto">
                Transform Your Workforce{" "}
                <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
                  With Us.
                </span>
              </h2>
            </RevealDiv>

            <RevealDiv delay={0.3}>
              <p className="text-[15px] sm:text-[16px] text-white/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                Join 50+ organizations that trust CrystaSkill to upskill their teams with industry-validated training programs.
              </p>
            </RevealDiv>

            <RevealDiv delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setContactOpen(true)} className="h-14 px-10 text-[14px] font-semibold bg-accent text-white rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_8px_40px_-4px_hsl(32,95%,52%,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group w-full sm:w-auto">
                  Get in Touch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button onClick={() => setContactOpen(true)} className="h-14 px-10 text-[14px] font-semibold bg-white/[0.06] border border-white/[0.1] text-white rounded-full hover:bg-white/[0.1] transition-all duration-300 w-full sm:w-auto">
                  Request a Proposal
                </button>
              </div>
              <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
            </RevealDiv>

            {/* Bottom trust line */}
            <RevealDiv delay={0.5}>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 sm:mt-16 pt-8 border-t border-white/[0.06]">
                {["Custom training programs", "Dedicated success manager", "Flexible scheduling"].map((text, i) => (
                  <span key={i} className="text-[12px] text-white/30 font-medium flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                    {text}
                  </span>
                ))}
              </div>
            </RevealDiv>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
