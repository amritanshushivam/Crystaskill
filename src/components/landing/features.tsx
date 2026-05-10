"use client"

import * as React from "react"
import { Target, Users, ShieldCheck, Briefcase, Globe, BookOpen } from "@/lib/icons"

const features = [
  {
    icon: Target,
    title: "Curriculum built from real jobs",
    description: "We talk to hiring managers every quarter. Your curriculum updates to match what they're actually hiring for.",
  },
  {
    icon: Users,
    title: "Learn from people who've done it",
    description: "Your mentors aren't instructors. They're active engineering leads and directors who handle real problems at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Industry recognized",
    description: "Certifications that mean something. 50+ companies specifically look for our graduates.",
  },
  {
    icon: BookOpen,
    title: "You build real things",
    description: "Not toy projects. You work on actual problems companies have faced. Your portfolio becomes your resume.",
  },
  {
    icon: Globe,
    title: "Network that helps",
    description: "45,000+ alumni. People who've been where you are. Job leads, referrals, and actual connections.",
  },
  {
    icon: Briefcase,
    title: "Placement support that works",
    description: "Interview prep, portfolio reviews, direct introductions to hiring teams. We're invested in your success.",
  }
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 relative">
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-2">How we're different</p>
          <h2 className="font-bold mb-4 text-foreground">
            Built by people who've been in your shoes
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our approach is straightforward. You learn what matters. From people who know the gaps. Skills that get you hired.
          </p>
        </div>

        {/* Asymmetric feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-max">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 sm:p-8 bg-white border border-border/60 rounded-lg sm:rounded-xl transition-all duration-300 hover:border-accent/40 overflow-hidden perspective cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 8;
                const rotateY = (x - 0.5) * -8;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px -4px rgba(0,0,0,0.05)';
              }}
            >
              {/* Background illustration */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
              </div>

              {/* Icon with background */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
