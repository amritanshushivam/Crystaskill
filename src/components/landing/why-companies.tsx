'use client'

import { TrendingUp, CheckCircle2, Users } from '@/lib/icons'

const reasons = [
  {
    metric: '94%',
    title: 'Placement Rate',
    description: 'Within 6 months of program completion. Tracked independently.',
  },
  {
    metric: '₹12-18 LPA',
    title: 'Average Starting Package',
    description: 'For candidates with zero prior experience entering tier-1 companies.',
  },
  {
    metric: '50K+',
    title: 'Verified Alumni',
    description: 'From Accenture to early-stage startups. Every role. Every function.',
  },
  {
    metric: '4.8/5',
    title: 'Alumni Satisfaction',
    description: 'Anonymous surveys. Independent verification. Annually published.',
  },
]

export function WhyCompaniesChooseUs() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-accent font-semibold mb-2">Proven Results</p>
          <h2 className="text-4xl font-bold mb-4">
            Why 50+ companies partner with us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            We don't claim transformation. We show it. Every metric independently verified. Every claim backed by alumni data.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason) => (
            <div key={reason.metric} className="border-l-2 border-accent pl-6">
              <div className="text-5xl font-bold text-accent mb-2">
                {reason.metric}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
