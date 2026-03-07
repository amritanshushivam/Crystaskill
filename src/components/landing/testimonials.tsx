"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "TCS",
    degree: "BTech CSE",
    content: "I was in my final year of BTech with zero industry exposure. CrystaSkill's Full Stack program gave me hands-on projects and mock interviews. Got placed at TCS with a 6.5 LPA package before my last semester ended!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Placed at TCS — 6.5 LPA"
  },
  {
    name: "Rohit Verma",
    role: "Associate Consultant",
    company: "Capgemini",
    degree: "BTech IT",
    content: "The Data Science track was a game changer. The mentors are actual industry professionals. CrystaSkill helped me crack Capgemini's recruitment drive — something I thought was impossible from a tier-2 college.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Cracked Capgemini from Tier-2 college"
  },
  {
    name: "Ananya Patel",
    role: "Analyst",
    company: "Accenture",
    degree: "BTech ECE",
    content: "As a final year ECE student, I had no coding background. CrystaSkill's structured training and resume building workshops helped me get placed at Accenture. Forever grateful to the placement team!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "ECE to Accenture — career switch"
  },
  {
    name: "Amit Kumar",
    role: "Systems Engineer",
    company: "Infosys",
    degree: "BTech CSE",
    content: "CrystaSkill's Java Full Stack training was exactly what I needed. The live projects and industry-level coding practice made my Infosys interview feel like a breeze. Placed with 5 LPA straight out of college!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Placed at Infosys — 5 LPA"
  },
  {
    name: "Sneha Reddy",
    role: "Project Engineer",
    company: "Wipro",
    degree: "BTech IT",
    content: "I joined CrystaSkill during my 3rd year and the Python + AI/ML track transformed my skills completely. The mock tests and group discussions prepared me perfectly. Got selected in Wipro's campus drive!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Selected in Wipro campus drive"
  },
  {
    name: "Vikram Singh",
    role: "Associate Developer",
    company: "IBM",
    degree: "MCA",
    content: "After my BCA, I wasn't sure about my career direction. CrystaSkill's Cloud Computing track during MCA helped me build real AWS projects. IBM hired me right after campus placement. Best decision ever!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "MCA to IBM — Cloud track"
  },
  {
    name: "Pooja Gupta",
    role: "Business Analyst",
    company: "Cognizant",
    degree: "MBA",
    content: "The Management training at CrystaSkill covered everything from analytics to strategic thinking. The case study approach and corporate exposure helped me crack Cognizant's BA role with a fantastic package.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "MBA to Cognizant — Business Analyst"
  },
  {
    name: "Arjun Mehta",
    role: "DevOps Engineer",
    company: "Tech Mahindra",
    degree: "BTech CSE",
    content: "CrystaSkill's DevOps & Cloud track gave me hands-on experience with Docker, Kubernetes, and CI/CD pipelines. The mentors shared real-world scenarios that came up in my Tech Mahindra interview. Got placed at 7 LPA!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Placed at Tech Mahindra — 7 LPA"
  },
  {
    name: "Neha Joshi",
    role: "Embedded Systems Engineer",
    company: "Bosch",
    degree: "BTech ECE",
    content: "As an ECE student, I wanted to stay in core electronics. CrystaSkill's Embedded Systems and VLSI training was top-notch. The practical labs and industry projects helped me get into Bosch. Dream come true!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "ECE core — Placed at Bosch"
  },
  {
    name: "Rahul Dubey",
    role: "Data Analyst",
    company: "Deloitte",
    degree: "MCA",
    content: "I switched from commerce background to tech through MCA. CrystaSkill's Data Analytics program with Python and SQL made me industry-ready. Cracked Deloitte's off-campus drive. Couldn't be happier!",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Commerce to Deloitte — career switch"
  },
  {
    name: "Kavita Nair",
    role: "HR Executive",
    company: "Capgemini",
    degree: "MBA HR",
    content: "CrystaSkill's HR Management program covered everything — from recruitment analytics to labor laws. The corporate training exposure and soft skills sessions were exceptional. Placed at Capgemini HR team!",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "MBA HR — Capgemini placement"
  },
  {
    name: "Siddharth Rao",
    role: "Cyber Security Analyst",
    company: "Wipro",
    degree: "BTech IT",
    content: "Cyber Security was always my passion. CrystaSkill's specialized track with ethical hacking, penetration testing, and network security labs prepared me beyond expectations. Wipro's security team hired me at 6.8 LPA!",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    highlight: "Cyber Security — Wipro 6.8 LPA"
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
