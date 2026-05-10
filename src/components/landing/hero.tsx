"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"

export function Hero() {
  const [contactOpen, setContactOpen] = React.useState(false)
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-student")

  return (
    <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-end">
          {/* Left - Content */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:pb-4">
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200/60 rounded-lg w-fit text-xs font-medium text-blue-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              50 seats. Limited batch.
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-bold leading-tight text-foreground">
                <span className="block">Training that works.</span>
                <span className="block text-muted-foreground mt-2">Because theory alone doesn't get you hired.</span>
              </h1>
            </div>

            {/* Description - authentic */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Real projects. Real mentors. Real placements. Our 50K+ graduates work at Accenture, Capgemini, Wipro, and 100+ other companies. We focus on filling the exact gaps the industry cares about.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="/programs/cse-it">
                <Button className="w-full sm:w-auto h-12 px-8 bg-accent hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group">
                  Start learning
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                onClick={() => setContactOpen(true)}
                variant="outline" 
                className="w-full sm:w-auto h-12 px-8 border-border bg-white hover:bg-secondary text-foreground font-medium rounded-lg transition-all"
              >
                Talk to us
              </Button>
            </div>

            {/* Trust markers */}
            <div className="pt-4 border-t border-border space-y-3 sm:flex sm:gap-6 sm:space-y-0">
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">trained professionals</div>
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-foreground">94%</div>
                <div className="text-sm text-muted-foreground">placement rate</div>
              </div>
            </div>

            <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
          </div>

          {/* Right - Visual (asymmetrically positioned) */}
          <div className="relative lg:pb-8">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-secondary border border-border/60">
                <Image
                  src={heroImage?.imageUrl || ""}
                  alt="Professional learning"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Stat cards - offset layout */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-6 sm:-left-8">
                <div className="bg-white border border-border/60 px-5 sm:px-6 py-4 rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] w-fit">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">2026</div>
                  <div className="text-xs text-muted-foreground font-medium">Batch</div>
                </div>
              </div>

              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
                <div className="bg-accent text-white px-4 sm:px-5 py-3 rounded-lg shadow-[0_4px_20px_-4px_rgba(32,90,238,0.2)] w-fit">
                  <div className="text-lg sm:text-xl font-bold">50+</div>
                  <div className="text-xs font-medium opacity-90">partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
