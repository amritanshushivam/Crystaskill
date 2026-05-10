"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Abhishek",
    role: "HR Specialist",
    company: "FMCG sector",
    degree: "MBA",
    content: "The practical focus here is different. We went deep on role-specific scenarios instead of generic HR theory. I use the frameworks weekly.",
    avatar: "/student-testimonials/abhishek Wipro hr.jpeg",
    highlight: "HR → placement",
  },
  {
    name: "Bharat Bhushan",
    role: "Software Engineer",
    company: "Accenture",
    degree: "BTech",
    content: "DSA patterns stuck. Getting interviews wasn't the issue—it was solving problems under pressure that changed. The mock rounds prepared me.",
    avatar: "/student-testimonials/bharat bhushan accenture software engineer.jpeg",
    highlight: "Backend → placement",
  },
  {
    name: "Divyanshu Kumar",
    role: "Full Stack Developer",
    company: "Capgemini",
    degree: "BTech",
    content: "You build actual projects here. I shipped a real product during training. That went straight into my portfolio and interviews.",
    avatar: "/student-testimonials/divyanshu kumar software developer capgemini.jpeg",
    highlight: "Full Stack → placement",
  },
  {
    name: "Ritesh",
    role: "Software Developer",
    company: "Accenture",
    degree: "MCA",
    content: "Tier-2 college meant I had gaps. The mentors didn't make me feel behind—they just filled them. The internship led to the job.",
    avatar: "/student-testimonials/ritesh new.jpeg",
    highlight: "MCA → career start",
  },
  {
    name: "Vicky Kumar",
    role: "Software Developer",
    company: "Vision Waves",
    degree: "MCA",
    content: "The curriculum felt updated. Java sprint boot, microservices—all current. Paired with real mentorship and actual networking.",
    avatar: "/student-testimonials/vicky new.jpeg",
    highlight: "Comprehensive → hired",
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  useEffect(() => {
    if (!isAutoScroll) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Auto-scroll every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoScroll])

  const handleManualScroll = (direction: 'prev' | 'next') => {
    setIsAutoScroll(false)
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
    // Resume auto-scroll after 6 seconds of inactivity
    setTimeout(() => setIsAutoScroll(true), 6000)
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-accent mb-2">Real outcomes</p>
          <h2 className="font-bold mb-4 text-foreground">
            From training to hired
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            50,000+ graduates. Real companies. Real jobs. Here's what they're saying.
          </p>
        </div>

        {/* Testimonials Carousel - Auto-scrolling on all screen sizes */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg sm:rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={`testimonial-${t.name}-${idx}`}
                  className="w-full flex-shrink-0 px-4 sm:px-6"
                >
                  <div
                    className="group relative p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl border border-border/60 hover:border-accent/40 transition-all duration-300 h-full"
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
                    {/* Quote indicator */}
                    <div className="text-4xl font-light text-accent/20 mb-4 leading-none">"</div>

                    {/* Content */}
                    <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
                      {t.content}
                    </p>

                    {/* Author */}
                    <div className="border-t border-border/60 pt-5 flex items-center gap-3.5">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 group-hover:ring-2 group-hover:ring-accent/30 transition-all duration-300">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="44px"
                          quality={75}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {t.role} • {t.company}
                        </p>
                        <p className="text-xs text-accent font-medium mt-0.5">{t.highlight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls - Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => handleManualScroll('prev')}
              className="p-2 rounded-full border border-border hover:bg-accent/10 transition-colors hover:border-accent"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator - Shows current position and is clickable */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => {
                    setIsAutoScroll(false)
                    setCurrentIndex(idx)
                    setTimeout(() => setIsAutoScroll(true), 6000)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-accent w-8' : 'bg-border w-2 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManualScroll('next')}
              className="p-2 rounded-full border border-border hover:bg-accent/10 transition-colors hover:border-accent"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Optional: Large views can show 3 items preview */}
          <div className="mt-12 hidden lg:grid grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, idx) => (
              <div
                key={`preview-${t.name}-${idx}`}
                className="group relative p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl border border-border/60 hover:border-accent/40 transition-all duration-300 opacity-75 hover:opacity-100"
              >
                <div className="text-4xl font-light text-accent/20 mb-4 leading-none">"</div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
                  {t.content}
                </p>
                <div className="border-t border-border/60 pt-5 flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                      quality={75}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {t.role} • {t.company}
                    </p>
                    <p className="text-xs text-accent font-medium mt-0.5">{t.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
