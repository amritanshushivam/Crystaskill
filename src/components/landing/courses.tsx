"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const programs = [
  {
    id: "course-coding",
    name: "CSE / IT",
    subtitle: "For software engineers & web developers",
    description: "Web development, cloud architecture, AI/ML, data science. Taught by people actually building these systems at scale.",
    topics: ["Web Development", "Cloud & DevOps", "AI/ML", "Data Science"],
    trained: "25K+",
    href: "/programs/cse-it",
    featured: true,
  },
  {
    id: "course-data",
    name: "ECE / EC",
    subtitle: "For embedded & hardware engineers",
    description: "Embedded systems, VLSI, IoT, sensors. Deep technical training from former chip designers and embedded engineers.",
    topics: ["Embedded Systems", "VLSI Design", "IoT", "Robotics"],
    trained: "15K+",
    href: "/programs/ece-ec",
    featured: true,
  },
  {
    id: "course-leadership",
    name: "Management",
    subtitle: "For business & operations leaders",
    description: "HR strategy, operations, finance, marketing. From founders and executives who've scaled companies.",
    topics: ["HR & Talent", "Finance", "Digital Marketing", "Operations"],
    trained: "12K+",
    href: "/programs/management",
    featured: true,
  }
]

export function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-24 bg-white relative">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-2">Programs</p>
          <h2 className="font-bold mb-4 text-foreground">
            Three tracks. One goal: getting you hired.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Each program is built around real market demand. Pick a path that matches what you want to build.
          </p>
        </div>

        {/* Program Cards - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => {
            const imageData = PlaceHolderImages.find(img => img.id === program.id)
            return (
              <Link key={program.id} href={program.href}>
                <div className="group relative bg-white rounded-xl sm:rounded-2xl border border-border/60 overflow-hidden transition-all duration-300 hover:border-border hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-secondary">
                    <Image
                      src={imageData?.imageUrl || ""}
                      alt={program.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-7 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {program.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-4">
                      {program.subtitle}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {program.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.topics.slice(0, 2).map((topic) => (
                        <span key={topic} className="text-xs px-3 py-1 bg-secondary text-foreground rounded-md font-medium">
                          {topic}
                        </span>
                      ))}
                      {program.topics.length > 2 && (
                        <span className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-md font-medium">
                          +{program.topics.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-border/60 pt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">{program.trained} trained</span>
                      <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA to see all programs */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/programs/cse-it">
            <Button className="h-11 px-8 bg-foreground hover:bg-foreground/90 text-white font-medium rounded-lg transition-all">
              Explore all programs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
