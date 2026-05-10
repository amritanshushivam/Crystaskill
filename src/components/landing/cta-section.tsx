"use client"

import * as React from "react"
import { ArrowRight } from "@/lib/icons"
import { ContactFormDialog } from "@/components/contact-form-dialog"

export function CTASection() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-foreground p-8 sm:p-12 sm:pr-32">
          {/* Subtle accent element */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold text-accent mb-3">Join the next batch</p>
            <h2 className="text-white font-bold mb-4">
              Limited seats for serious learners.
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed">
              Your curriculum updates as the industry changes. Taught by people actually solving problems at companies like Accenture and Capgemini. Apply now.
            </p>
            
            <button
              onClick={() => setContactOpen(true)}
              className="h-12 px-8 bg-accent hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 group"
            >
              Apply now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
          </div>
        </div>
      </div>
    </section>
  )
}
