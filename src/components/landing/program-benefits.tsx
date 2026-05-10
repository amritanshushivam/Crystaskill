'use client'

import { Target, Users, ShieldCheck, BookOpen, Globe, Briefcase, Zap, Clock } from '@/lib/icons'

const benefits = [
  {
    title: 'Internship Guarantee',
    description: 'Real projects at real companies. Your portfolio is built, not started.',
    icon: Clock,
    illustration: (
      <svg viewBox="0 0 200 200" className="w-20 h-20">
        {/* Laptop/Project display */}
        <rect x="35" y="75" width="130" height="75" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="40" y="80" width="120" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
        <ellipse cx="100" cy="160" rx="35" ry="8" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        {/* Code lines on screen */}
        <line x1="55" y1="95" x2="90" y2="95" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        <line x1="55" y1="110" x2="145" y2="110" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <line x1="55" y1="125" x2="145" y2="125" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        {/* Status indicator */}
        <circle cx="155" cy="90" r="6" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
  },
  {
    title: 'Mentor Network',
    description: 'Engineers from Accenture, TCS, Capgemini. Not retired professors. Active practitioners.',
    icon: Users,
    illustration: (
      <svg viewBox="0 0 200 200" className="w-20 h-20">
        {/* Central mentor */}
        <circle cx="100" cy="65" r="20" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M 75 105 Q 75 85 100 85 Q 125 85 125 105 L 125 140 L 75 140 Z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        {/* Left mentor */}
        <circle cx="50" cy="85" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        <path d="M 35 120 Q 35 105 50 105 Q 65 105 65 120 L 65 145 L 35 145 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        {/* Right mentor */}
        <circle cx="150" cy="85" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        <path d="M 135 120 Q 135 105 150 105 Q 165 105 165 120 L 165 145 L 135 145 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        {/* Connection lines */}
        <line x1="85" y1="75" x2="55" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3"/>
        <line x1="115" y1="75" x2="145" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeDasharray="3,3"/>
      </svg>
    ),
  },
  {
    title: 'Industry Certified',
    description: 'AWS, Azure, GCP certifications included. Verifiable on your resume from day one.',
    icon: ShieldCheck,
    illustration: (
      <svg viewBox="0 0 200 200" className="w-20 h-20">
        {/* Main shield */}
        <path d="M 100 30 L 150 55 L 150 105 Q 100 150 100 150 Q 50 150 50 105 L 50 55 Z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        {/* Checkmark */}
        <path d="M 80 105 L 95 120 L 130 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Badge glow dots */}
        <circle cx="140" cy="90" r="3" fill="currentColor" opacity="0.6"/>
        <circle cx="70" cy="75" r="2.5" fill="currentColor" opacity="0.5"/>
        <circle cx="130" cy="60" r="2.5" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Job-Ready Skills',
    description: 'We remove what doesn\'t matter. Focus on what gets you hired. DSA, system design, behavioral.',
    icon: Target,
    illustration: (
      <svg viewBox="0 0 200 200" className="w-20 h-20">
        {/* Concentric circles */}
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
        <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.8"/>
        {/* Arrow from outside pointing to center */}
        <path d="M 160 100 L 140 100 M 140 100 L 145 95 M 140 100 L 145 105" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Salary Benchmarking',
    description: 'Know your market rate. Access salary data from 8,000+ alumni across companies.',
    icon: Zap,
    illustration: (
      <svg viewBox="0 0 200 200" className="w-20 h-20">
        {/* Bar chart with positive trend */}
        <rect x="40" y="125" width="20" height="35" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="75" y="105" width="20" height="55" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.8"/>
        <rect x="110" y="75" width="20" height="85" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/>
        <rect x="145" y="50" width="20" height="110" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.4"/>
        {/* Trend line with arrow */}
        <path d="M 35 145 Q 70 110 170 45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
        <path d="M 165 35 L 175 45 L 170 50" fill="currentColor" opacity="0.7"/>
        {/* Baseline */}
        <line x1="30" y1="160" x2="170" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Global Placement',
    description: 'Opportunities in US, UK, Singapore, India. Your location shouldn\'t limit your career.',
    icon: Globe,
    illustration: (
      <svg viewBox="0 0 200 200" className="w-20 h-20">
        {/* Globe circle */}
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        {/* Latitude lines */}
        <ellipse cx="100" cy="100" rx="55" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="100" cy="85" rx="50" ry="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        <ellipse cx="100" cy="115" rx="50" ry="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        {/* Longitude arc */}
        <path d="M 100 45 Q 130 70 130 100 Q 130 130 100 155" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        {/* Location markers - multiple cities */}
        <circle cx="115" cy="70" r="4" fill="currentColor"/>
        <circle cx="130" cy="100" r="4" fill="currentColor" opacity="0.8"/>
        <circle cx="90" cy="125" r="4" fill="currentColor" opacity="0.8"/>
        <circle cx="105" cy="75" r="3" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
]

export function ProgramBenefits() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-accent font-semibold mb-2">What You Get</p>
          <h2 className="text-4xl font-bold mb-4">
            Built for the professional you'll become
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Not generic training. Not theoretical. Six concrete advantages that change your trajectory.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.title}
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Visual Illustration Area */}
                <div className="h-40 bg-gradient-to-br from-accent/20 via-accent/10 to-background flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                  </div>
                  <div className="text-accent/70 group-hover:scale-110 group-hover:text-accent transition-all duration-300 relative z-10">
                    {benefit.illustration}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
