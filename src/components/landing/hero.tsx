"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight, ShieldCheck, Star, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: "50K+", label: "Professionals Trained" },
  { value: "50+", label: "Corporate Partners" },
  { value: "96%", label: "Satisfaction Rate" },
]

export function Hero() {
  const [contactOpen, setContactOpen] = React.useState(false)
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-student")

  return (
    <section className="relative flex items-center pt-24 sm:pt-28 pb-6 sm:pb-10 overflow-hidden">
      {/* Lightweight static gradient background */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/8 via-amber-400/4 to-blue-500/6 blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-500/6 via-violet-400/4 to-accent/5 blur-3xl opacity-40" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col gap-5 sm:gap-6 animate-fade-in-up">
            {/* Status badge */}
            <div className="flex items-center gap-3 px-4 py-2.5 bg-white border border-black/[0.06] rounded-full w-fit shadow-[0_1px_3px_0_rgb(0,0,0,0.02)] mx-auto sm:mx-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[12px] font-semibold text-primary/70 tracking-wide">
                2026 Training Programs Now Open
              </span>
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>

            {/* Headline */}
            <div className="text-center sm:text-left">
              <h1 className="text-primary">
                <span className="block">Empowering Corporates</span>
                <span className="block mt-1 sm:mt-2">
                  with{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                      World-Class
                    </span>
                  </span>
                </span>
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                  Training.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-[1.8] max-w-lg font-normal text-center sm:text-left">
              Where ambition meets expertise. Industry-led training programs designed for organizations that demand nothing less than excellence for their workforce.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
              <Link href="/programs/cse-it" className="w-full sm:w-fit">
                <span className="inline-flex items-center justify-center rounded-full h-14 px-10 text-[14px] font-semibold bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] w-full sm:w-fit transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer">
                  Explore Programs
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Button onClick={() => setContactOpen(true)} variant="outline" size="lg" className="rounded-full h-14 px-10 text-[14px] font-semibold border-black/[0.08] bg-white hover:bg-black/[0.02] text-primary w-full sm:w-fit transition-all duration-300 group">
                <Play className="mr-2 w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                Book a Demo
              </Button>
            </div>

            <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 mt-4 pt-8 border-t border-black/[0.04]">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-[2.5px] border-white bg-gray-100 overflow-hidden relative shadow-sm ring-1 ring-black/[0.04]">
                       <Image 
                        src={`https://picsum.photos/seed/${i + 60}/100/100`} 
                        alt="alumni" 
                        fill 
                        className="object-cover" 
                        data-ai-hint="professional portrait"
                        sizes="36px"
                        loading="lazy"
                       />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-[11px] text-muted-foreground/60 font-medium mt-0.5">from 50+ companies</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-black/[0.06]" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-[12px] font-semibold text-primary/60">Corporate Approved</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative order-first lg:order-last animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12)] border border-black/[0.04] aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src={heroImage?.imageUrl || ""}
                  alt="Professional Leadership"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint="professional office environment"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              <div className="hidden sm:block absolute -bottom-6 -left-4 sm:-left-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/90 backdrop-blur-xl p-5 sm:p-7 rounded-2xl shadow-[0_20px_60px_-12px_rgb(0,0,0,0.1)] border border-black/[0.04] flex flex-col gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tighter">50K+</span>
                  <span className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest">Trained</span>
                </div>
              </div>

              <div className="hidden sm:block absolute -top-4 -right-4 sm:-right-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <div className="bg-accent text-white p-4 sm:p-5 rounded-2xl shadow-[0_20px_60px_-12px_hsl(32,95%,52%,0.3)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <p className="text-[20px] font-bold leading-none">4.9/5</p>
                    <p className="text-[10px] font-medium text-white/70 uppercase tracking-wider mt-0.5">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-6 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-0 p-4 sm:p-0 sm:py-6 sm:px-12 bg-white rounded-xl sm:rounded-3xl border border-black/[0.04] shadow-[0_1px_3px_0_rgb(0,0,0,0.02)] sm:divide-x sm:divide-black/[0.06] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} value={stat.value} label={stat.label} delay={0.5 + i * 0.1} />
          ))}
        </div>

        <div className="mt-6 sm:mt-8 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
