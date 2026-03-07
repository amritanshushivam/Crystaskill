"use client"

import * as React from "react"
import { ShieldCheck, Target, Users, Globe, BookOpen, Briefcase, ArrowUpRight } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Industry-Led Curricula",
    description: "Every module reverse-engineered from current demands of industry leaders at Stripe, Google, and Meta.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from active directors and engineering leads who share high-growth frameworks weekly.",
    color: "from-violet-500/10 to-violet-600/5",
    iconColor: "text-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Certification",
    description: "Industry-verified certifications recognized by 50+ corporate partners across the technology sector.",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Real-World Projects",
    description: "Navigate actual business crises and engineering bottlenecks through immersive hands-on capstone projects.",
    color: "from-amber-500/10 to-amber-600/5",
    iconColor: "text-amber-600",
  },
  {
    icon: Globe,
    title: "Global Alumni Network",
    description: "Access a vetted network of 45,000+ professionals holding senior positions at companies worldwide.",
    color: "from-rose-500/10 to-rose-600/5",
    iconColor: "text-rose-600",
  },
  {
    icon: Briefcase,
    title: "Career Acceleration",
    description: "Executive coaching, portfolio optimization, and direct referral pathways to top-tier firms globally.",
    color: "from-cyan-500/10 to-cyan-600/5",
    iconColor: "text-cyan-600",
  }
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

export function Features() {
  return (
    <section id="features" className="py-10 sm:py-14 relative overflow-hidden">
      {/* Lightweight grid background */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 0.5px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <RevealDiv className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.06] rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[12px] font-semibold text-accent tracking-wide">The CrystaSkill Advantage</span>
          </div>
          <h2 className="text-primary mb-3">
            Built for Ambitious Organizations.{" "}
            <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Focused on Real Impact.</span>
          </h2>
          <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
            We prioritize professional depth over academic breadth. Designed for organizations that demand workforce excellence.
          </p>
        </RevealDiv>

        {/* Feature Grid — CSS hover instead of TiltCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <RevealDiv key={idx} delay={idx * 0.08}>
              <div className="group relative p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-black/[0.04] hover:border-black/[0.08] transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgb(0,0,0,0.06)] hover:-translate-y-1 cursor-default h-full">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.iconColor} stroke-[1.75px]`} />
                </div>

                {/* Content */}
                <h3 className="text-[15px] sm:text-[17px] font-bold text-primary mb-2 sm:mb-2.5 tracking-tight flex items-center gap-2">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 text-primary/10 group-hover:text-accent transition-colors" />
                </h3>
                <p className="text-muted-foreground text-[13px] sm:text-[14px] leading-[1.7]">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </RevealDiv>
          ))}
        </div>
        
        {/* Simple gradient separator */}
        <div className="mt-8 sm:mt-12 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </section>
  )
}
