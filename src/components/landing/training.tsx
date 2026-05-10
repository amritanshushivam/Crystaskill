
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const programs = [
  {
    id: "course-coding",
    name: "Corporate Management Training",
    type: "Corporate",
    duration: "12 Weeks",
    outcome: "Placement Guaranteed",
    tag: "High Demand"
  },
  {
    id: "course-data",
    name: "Hospitality & Event Internship",
    type: "Internship",
    duration: "24 Weeks",
    outcome: "Industry Certification",
    tag: "Active Now"
  }
]

export function TrainingSection() {
  return (
    <section id="training" className="py-24 bg-[#F5F7FA]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Training & Excellence Center</h2>
            <p className="text-[#6B7280] text-lg">
              Empowering the next generation of professionals through hands-on corporate training and impactful internships.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === program.id)
            return (
              <div
                key={program.id}
                className="premium-card overflow-hidden group flex flex-col"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={imageData?.imageUrl || ""}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint="professional workspace"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#C8A951] text-white border-none px-3 py-1 font-bold">
                    {program.tag}
                  </Badge>
                </div>

                <div className="p-10 flex flex-col flex-1 gap-6">
                  <div className="flex items-center gap-2 text-[#C8A951] text-sm font-bold uppercase tracking-widest">
                    <Award className="w-4 h-4" />
                    <span>{program.type} Program</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0A1F44] leading-tight">{program.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-[#6B7280] text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      {program.outcome}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <Link href="/corporate-training" className="w-full">
                      <Button className="rounded-lg bg-[#0A1F44] hover:bg-[#081938] text-white h-12 px-8 font-bold w-full">
                        Continue training <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
