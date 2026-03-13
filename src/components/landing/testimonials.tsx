"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Abhishek",
    role: "HR Specialist",
    company: "Wipro",
    degree: "MBA",
    content: "CrystaSkill's HR Management program gave me the perfect foundation for my role at Wipro. The training on recruitment, employee relations, and corporate processes was incredibly practical. The mentors shared real-world scenarios that I use daily in my job!",
    avatar: "/student-testimonials/abhishek Wipro hr.jpeg",
    rating: 5,
    highlight: "Placed at Wipro — HR Team"
  },
  {
    name: "Bharat Bhushan",
    role: "Software Engineer",
    company: "Accenture",
    degree: "BTech",
    content: "I was struggling with core DSA concepts. CrystaSkill's intensive coding bootcamp made everything click. The live coding practices and real project assignments prepared me perfectly for Accenture's technical rounds. Got placed with a great package!",
    avatar: "/student-testimonials/bharat bhushan accenture software engineer.jpeg",
    rating: 5,
    highlight: "Accenture — Software Engineer"
  },
  {
    name: "Divyanshu Kumar",
    role: "Software Developer",
    company: "Capgemini",
    degree: "BTech",
    content: "The Full Stack development track at CrystaSkill transformed my understanding of modern web technologies. Working on real-world projects during training gave me the confidence to ace Capgemini's interviews. This program was the stepping stone I needed!",
    avatar: "/student-testimonials/divyanshu kumar software developer capgemini.jpeg",
    rating: 5,
    highlight: "Capgemini — Full Stack Dev"
  },
  {
    name: "Ritesh",
    role: "Software Developer",
    company: "Accenture",
    degree: "MCA",
    content: "Coming from a tier-2 college, I felt behind my peers. CrystaSkill leveled the playing field with comprehensive training in Java, Spring Boot, and microservices. The mock interviews and career guidance were invaluable. Now thriving at Accenture!",
    avatar: "/student-testimonials/ritesh new.jpeg",
    rating: 5,
    highlight: "Accenture — Career Breakthrough"
  },
  {
    name: "Vicky Kumar",
    role: "Software Developer",
    company: "Vision Waves",
    degree: "MCA",
    content: "CrystaSkill's comprehensive programming curriculum covered everything I needed. The hands-on approach with real projects, combined with expert mentorship, helped me land my dream role at Vision Waves. The placement support was outstanding!",
    avatar: "/student-testimonials/vicky new.jpeg",
    rating: 5,
    highlight: "Vision Waves — Developer Role"
  }
]

export function Testimonials() {
  const duplicated = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-10 sm:py-14 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.06] rounded-full mb-4">
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-[12px] font-semibold text-accent tracking-wide">Success Stories</span>
          </div>
          <h2 className="text-primary mb-3">
            Hear from our{" "}
            <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">placed students</span>
          </h2>
          <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed">
            Real stories from BTech, MCA & MBA students who cracked top placements through our training programs.
          </p>
        </div>

        {/* Testimonial Cards — Auto-scrolling marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div className="flex gap-5 sm:gap-6 w-max animate-marquee-slow">
            {duplicated.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="group relative p-5 sm:p-7 bg-white rounded-2xl sm:rounded-3xl border border-black/[0.04] hover:border-black/[0.08] transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgb(0,0,0,0.06)] flex flex-col min-w-[300px] sm:min-w-[350px] max-w-[380px]"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 sm:w-9 sm:h-9 text-accent/[0.08] mb-3" />
                
                {/* Highlight badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/[0.06] rounded-full w-fit mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold text-accent">{t.highlight}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[13px] sm:text-[14px] text-primary/80 leading-[1.7] sm:leading-[1.8] mb-6 flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-black/[0.04]">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-black/[0.04]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[14px]">{t.name}</h4>
                    <p className="text-[11px] text-muted-foreground/60">
                      {t.role} <span className="text-accent font-semibold">@ {t.company}</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground/40 font-medium">{t.degree}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
