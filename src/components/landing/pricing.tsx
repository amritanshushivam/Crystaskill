"use client"

import { Check, ArrowRight, Sparkles, Zap, Star, Crown } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "₹5,000",
    priceNote: "one-time payment",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    description: "Perfect for self-paced learners who want to build strong fundamentals.",
    features: [
      "Access to all training modules",
      "Recorded video lectures",
      "Training completion certificate",
      "Community forum access",
      "Self-paced learning",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹10,000",
    priceNote: "one-time payment",
    icon: Star,
    color: "from-accent to-amber-500",
    description: "For committed professionals serious about career transformation.",
    features: [
      "Everything in Basic",
      "Live instructor-led sessions",
      "1-on-1 doubt clearing sessions",
      "Real-world project guidance",
      "Resume & LinkedIn review",
      "Priority email & chat support",
      "Interview preparation kit",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹18,000",
    priceNote: "one-time payment",
    icon: Crown,
    color: "from-violet-500 to-purple-500",
    description: "Complete career acceleration with dedicated mentorship and placement support.",
    features: [
      "Everything in Standard",
      "Dedicated personal mentor",
      "Guaranteed internship/placement assistance",
      "Industry expert masterclasses",
      "Capstone project with certificate",
      "Lifetime access & updates",
      "24/7 priority support",
      "Networking with hiring partners",
    ],
    cta: "Go Premium",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.06] rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-[12px] font-semibold text-accent tracking-wide">Investment Plans</span>
          </div>
          <h2 className="text-primary mb-5">
            Invest in your{" "}
            <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">future</span>
          </h2>
          <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed">
            Flexible plans designed to fit every stage of your professional journey. All plans include full training access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl flex flex-col transition-all duration-500 ${
                plan.highlighted
                  ? "bg-primary text-white p-8 sm:p-10 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.2)] md:scale-105 z-10 ring-1 ring-white/10"
                  : "bg-white border border-black/[0.05] hover:border-black/[0.08] p-7 sm:p-9 hover:shadow-[0_20px_60px_-12px_rgb(0,0,0,0.06)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-amber-500 text-white text-[11px] font-semibold px-5 py-1.5 rounded-full shadow-lg shadow-accent/30 whitespace-nowrap">
                  ✨ Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-lg`}>
                  <plan.icon className="w-5 h-5" />
                </div>
                <p className={`text-[13px] font-semibold uppercase tracking-wider ${plan.highlighted ? "text-white/50" : "text-muted-foreground/40"}`}>
                  {plan.name}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-primary"}`}>
                  {plan.price}
                </span>
                <span className={`text-[12px] font-medium ml-2 ${plan.highlighted ? "text-white/40" : "text-muted-foreground/40"}`}>
                  {plan.priceNote}
                </span>
              </div>

              <p className={`text-[13px] leading-relaxed mb-8 ${plan.highlighted ? "text-white/50" : "text-muted-foreground/50"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3.5 mb-9 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.highlighted ? "bg-white/[0.08]" : "bg-accent/[0.08]"
                    }`}>
                      <Check className={`w-3 h-3 stroke-[2.5px] ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                    </div>
                    <span className={`text-[13px] leading-snug ${plan.highlighted ? "text-white/70" : "text-primary/60"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/programs/cse-it" className="block">
                <span
                  className={`flex items-center justify-center rounded-full h-12 font-semibold text-[14px] w-full transition-all duration-300 cursor-pointer group ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-accent to-amber-500 hover:from-accent/90 hover:to-amber-500/90 text-white shadow-[0_8px_30px_-4px_hsl(32,95%,52%,0.35)] hover:shadow-[0_12px_40px_-4px_hsl(32,95%,52%,0.4)]"
                      : "bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)]"
                  }`}
                >
                  {plan.cta} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-muted-foreground/40 mt-10 sm:mt-14">
          All plans are one-time payments. Our team will contact you for payment details after enrollment.
        </p>
      </div>
    </section>
  )
}
