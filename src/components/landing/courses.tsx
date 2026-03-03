"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, ArrowRight, Zap, CheckCircle2, Monitor, Cpu, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const programs = [
  {
    id: "course-coding",
    name: "CSE / IT Training",
    duration: "Flexible",
    students: "25k+ Trained",
    tag: "Flagship Program",
    tagColor: "bg-gradient-to-r from-blue-600 to-violet-600",
    description: "Comprehensive technical training across Web Dev, AI/ML, Data Science, Cyber Security, Mobile Dev, DevOps & more.",
    highlights: ["Web Development", "AI & Machine Learning", "Cloud Computing", "UI/UX Design"],
    href: "/programs/cse-it",
    featured: true,
    icon: Monitor,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    id: "course-data",
    name: "ECE / EC Training",
    duration: "Flexible",
    students: "15k+ Trained",
    tag: "Core Engineering",
    tagColor: "bg-gradient-to-r from-teal-600 to-emerald-600",
    description: "Industry-ready training in Embedded Systems, VLSI, IoT, Robotics, Signal Processing, PCB Design & more.",
    highlights: ["Embedded Systems", "VLSI Design", "IoT & Robotics", "Signal Processing"],
    href: "/programs/ece-ec",
    featured: true,
    icon: Cpu,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    id: "course-leadership",
    name: "Management Training",
    duration: "Flexible",
    students: "12k+ Trained",
    tag: "Business Track",
    tagColor: "bg-gradient-to-r from-amber-600 to-orange-600",
    description: "Professional training in HR, Operations, Finance, Digital Marketing, Stock Market & Cryptocurrency for modern business leaders.",
    highlights: ["HR Management", "Finance", "Digital Marketing", "Stock Market & Crypto"],
    href: "/programs/management",
    featured: true,
    icon: TrendingUp,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
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

export function Courses() {
  return (
    <section id="courses" className="py-10 sm:py-14 bg-white relative">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-8 sm:mb-10 gap-4 text-center lg:text-left">
          <RevealDiv className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.06] rounded-full mb-4">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span className="text-[12px] font-semibold text-accent tracking-wide">Training Programs</span>
            </div>
            <h2 className="text-primary mb-3">
              Industry-led programs that{" "}
              <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">transform</span>{" "}
              your workforce
            </h2>
            <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed">
              Rigorous, corporate-validated training tracks built by practitioners who&apos;ve scaled real products at global companies.
            </p>
          </RevealDiv>
          <RevealDiv delay={0.1}>
            <Link href="/programs/cse-it">
              <Button variant="ghost" className="text-primary font-semibold hover:text-accent transition-colors text-[13px] group">
                View All Programs <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </RevealDiv>
        </div>

        {/* Program Cards — CSS hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {programs.map((program, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === program.id)
            return (
              <RevealDiv key={program.id} delay={idx * 0.12}>
                <div className={`group relative bg-white rounded-3xl border overflow-hidden transition-all duration-500 flex flex-col h-full hover:-translate-y-1 ${
                  program.featured 
                    ? "border-accent/20 hover:border-accent/40 shadow-[0_8px_30px_-8px_hsl(32,95%,52%,0.1)] hover:shadow-[0_24px_80px_-16px_hsl(32,95%,52%,0.18)] ring-1 ring-accent/10" 
                    : "border-black/[0.04] hover:border-accent/15 hover:shadow-[0_24px_80px_-16px_hsl(32,95%,52%,0.1)]"
                }`}>
                  {/* Image */}
                  <div className="relative h-44 sm:h-56 w-full overflow-hidden">
                    <Image
                      src={imageData?.imageUrl || ""}
                      alt={program.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint="professional workspace"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    {/* Tag */}
                    <div className={`absolute top-4 left-4 ${program.tagColor} text-white px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide shadow-lg`}>
                      {program.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`w-10 h-10 rounded-xl ${program.iconBg} flex items-center justify-center`}>
                        <program.icon className={`w-5 h-5 ${program.iconColor}`} />
                      </div>
                      <h3 className="text-[19px] sm:text-[21px] font-extrabold text-primary leading-tight tracking-tight font-headline group-hover:text-accent transition-colors duration-300">{program.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-[13px] leading-[1.7] mb-5">{program.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {program.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary/60 bg-accent/[0.05] px-3 py-1.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-5 text-muted-foreground/50 text-[11px] font-semibold uppercase tracking-wider mb-6 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {program.students}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-5 border-t border-black/[0.04]">
                      <Link href={program.href} className="block">
                        <span className={`inline-flex items-center justify-center rounded-full font-semibold h-11 px-6 text-[13px] shadow-lg transition-all duration-300 w-full group/btn cursor-pointer ${
                          program.featured 
                            ? "bg-gradient-to-r from-accent to-amber-500 hover:from-accent/90 hover:to-amber-500/90 text-white shadow-accent/20 hover:shadow-accent/30 hover:shadow-xl" 
                            : "bg-primary hover:bg-primary/90 text-white shadow-primary/10 hover:shadow-xl"
                        }`}>
                          {program.featured ? "Explore All Trainings" : "Learn More"} <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}
