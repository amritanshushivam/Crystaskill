'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const spotlightAlumni = [
  {
    name: "Abhishek",
    role: "HR Specialist",
    company: "FMCG sector",
    program: "HR → placement",
    testimonial: "The practical focus here is different. We went deep on role-specific scenarios instead of generic HR theory. I use the frameworks weekly.",
    avatar: "/student-testimonials/abhishek Wipro hr.jpeg",
    highlight: "Weekly framework usage"
  },
  {
    name: "Bharat Bhushan",
    role: "Software Engineer",
    company: "Accenture",
    program: "Backend → placement",
    testimonial: "DSA patterns stuck. Getting interviews wasn't the issue—it was solving problems under pressure that changed. The mock rounds prepared me.",
    avatar: "/student-testimonials/bharat bhushan accenture software engineer.jpeg",
    highlight: "Mock rounds changed the game"
  },
  {
    name: "Divyanshu Kumar",
    role: "Full Stack Developer",
    company: "Capgemini",
    program: "Full Stack → placement",
    testimonial: "You build actual projects here. I shipped a real product during training. That went straight into my portfolio and interviews.",
    avatar: "/student-testimonials/divyanshu kumar software developer capgemini.jpeg",
    highlight: "Real product shipped"
  }
]

export function AlumniSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % spotlightAlumni.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-accent/5 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">Alumni Spotlight</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From student to industry leader
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real graduates. Real companies. Real success stories.
          </p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {spotlightAlumni.map((alumni, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-border/40 transition-all duration-300 hover:border-accent/40 perspective cursor-pointer ${
                  idx === activeIndex ? 'ring-2 ring-accent md:ring-0' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width;
                  const y = (e.clientY - rect.top) / rect.height;
                  const rotateX = (y - 0.5) * 6;
                  const rotateY = (x - 0.5) * -6;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px -4px rgba(0,0,0,0.08)';
                }}
              >
                {/* Image area with actual photo */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Image
                    src={alumni.avatar}
                    alt={alumni.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content area */}
                <div className="p-8">
                  {/* Name and role */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{alumni.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-1">{alumni.role} at {alumni.company}</p>
                    <p className="text-xs text-muted-foreground bg-muted/50 inline-block px-3 py-1 rounded-full">{alumni.program}</p>
                  </div>

                  {/* Testimonial */}
                  <p className="text-muted-foreground text-sm leading-relaxed italic mb-4 border-l-2 border-accent/30 pl-4">
                    "{alumni.testimonial}"
                  </p>

                  {/* Highlight badge */}
                  <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-lg">
                    ✨ {alumni.highlight}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Carousel indicators for mobile */}
          <div className="flex justify-center gap-2 mb-12 md:hidden">
            {spotlightAlumni.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-accent w-8' : 'bg-border'
                }`}
                aria-label={`Go to alumni ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 py-12 border-t border-border/40">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
            <p className="text-sm text-muted-foreground">Career transformations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Fortune 500 placements</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3x</div>
            <p className="text-sm text-muted-foreground">Average salary growth</p>
          </div>
        </div>
      </div>
    </section>
  )
}
