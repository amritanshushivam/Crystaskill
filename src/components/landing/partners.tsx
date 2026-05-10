"use client"

import Image from "next/image"
import React from "react"

const partners = [
  { name: "Accenture", logo: "/logos/accenture.PNG" },
  { name: "TCS", logo: "/logos/tcs.png" },
  { name: "Infosys", logo: "/logos/infosys.svg" },
  { name: "Wipro", logo: "/logos/wipro.PNG" },
  { name: "IBM", logo: "/logos/IBM.PNG" },
  { name: "Capgemini", logo: "/logos/capgemini.PNG" },
  { name: "Cognizant", logo: "/logos/cognizent.PNG" },
  { name: "Tech Mahindra", logo: "/logos/tech%20mahindra.PNG" },
]

function MarqueeRow({ items, reverse = false }: { items: typeof partners; reverse?: boolean }) {
  const duplicated = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div
        className={`flex gap-6 sm:gap-8 py-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {duplicated.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className="flex-shrink-0 bg-gray-50/80 rounded-xl sm:rounded-2xl px-5 sm:px-12 py-4 sm:py-8 border border-black/[0.03] hover:border-accent/20 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(32,95%,52%,0.12)] hover:bg-white group flex items-center justify-center"
            style={{ minWidth: '140px' }}
          >
            <div className="relative h-6 sm:h-10 w-[80px] sm:w-[130px] flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80px, 130px"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  return (
    <section className="py-10 sm:py-14 relative overflow-hidden bg-white">
      <div className="section-container">
        {/* Header */}
        <div
          className="text-center mb-6"
        >
          <p className="text-[11px] font-semibold text-muted-foreground/40 uppercase tracking-[0.3em] mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
            Corporate Partners Who{" "}
            <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">Trust Us</span>
          </h2>
          <p className="text-muted-foreground text-[14px] sm:text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
            We deliver specialized training programs for employees at top-tier global organizations.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolling left */}
      <div className="mt-8">
        <MarqueeRow items={partners} />
      </div>

      {/* Row 2 — scrolling right (reverse) */}
      <div className="mt-4">
        <MarqueeRow items={[...partners].reverse()} reverse />
      </div>

      {/* Bottom stats */}
      <div className="section-container mt-8 sm:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-16 text-center">
          {[
            { value: "50+", label: "Corporate Partners" },
            { value: "50K+", label: "Employees Trained" },
            { value: "96%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col"
            >
              <span className="text-xl sm:text-3xl font-extrabold text-primary tracking-tight">{stat.value}</span>
              <span className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
