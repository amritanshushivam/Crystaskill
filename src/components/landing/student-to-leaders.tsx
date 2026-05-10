'use client'

import Image from "next/image"
import { ArrowRight } from "@/lib/icons"

const industrialLeaders = [
  {
    name: "Abhishek",
    role: "HR Specialist",
    company: "FMCG sector",
    program: "MBA",
    content: "The practical focus here is different. We went deep on role-specific scenarios instead of generic HR theory. I use the frameworks weekly.",
    avatar: "/student-testimonials/abhishek Wipro hr.jpeg",
    highlight: "HR → placement",
    impact: "Weekly framework usage"
  },
  {
    name: "Bharat Bhushan",
    role: "Software Engineer",
    company: "Accenture",
    program: "BTech",
    content: "DSA patterns stuck. Getting interviews wasn't the issue—it was solving problems under pressure that changed. The mock rounds prepared me.",
    avatar: "/student-testimonials/bharat bhushan accenture software engineer.jpeg",
    highlight: "Backend → placement",
    impact: "Mock rounds changed the game"
  },
  {
    name: "Divyanshu Kumar",
    role: "Full Stack Developer",
    company: "Capgemini",
    program: "BTech",
    content: "You build actual projects here. I shipped a real product during training. That went straight into my portfolio and interviews.",
    avatar: "/student-testimonials/divyanshu kumar software developer capgemini.jpeg",
    highlight: "Full Stack → placement",
    impact: "Real product shipped"
  },
  {
    name: "Ritesh",
    role: "Software Developer",
    company: "Accenture",
    program: "MCA",
    content: "Tier-2 college meant I had gaps. The mentors didn't make me feel behind—they just filled them. The internship led to the job.",
    avatar: "/student-testimonials/ritesh new.jpeg",
    highlight: "MCA → career start",
    impact: "Gaps filled by mentors"
  },
  {
    name: "Vicky Kumar",
    role: "Software Developer",
    company: "Vision Waves",
    program: "MCA",
    content: "The curriculum felt updated. Java sprint boot, microservices—all current. Paired with real mentorship and actual networking.",
    avatar: "/student-testimonials/vicky new.jpeg",
    highlight: "Comprehensive → hired",
    impact: "Current tech stack"
  }
]

export function StudentToLeaders() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            From students to industrial leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real people solving real problems at the world's leading companies. Their journey from our programs to industry impact.
          </p>
        </div>

        {/* Leaders Grid - 5 columns that wraps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industrialLeaders.map((leader, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white border border-border/60 rounded-xl transition-all duration-300 hover:border-accent/40 perspective cursor-pointer flex flex-col"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (y - 0.5) * 10;
                const rotateY = (x - 0.5) * -10;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px -4px rgba(0,0,0,0.08)';
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
              </div>

              {/* Avatar */}
              <div className="relative z-10 flex justify-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent/60 group-hover:ring-4 group-hover:ring-accent/20 transition-all duration-300">
                  <Image
                    src={leader.avatar}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="64px"
                    quality={75}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 text-center">
                <h3 className="font-semibold text-foreground mb-0.5 text-sm">{leader.name}</h3>
                <p className="text-xs text-accent font-medium mb-3">{leader.highlight}</p>
                
                {/* Role and company */}
                <div className="mb-4 pb-4 border-b border-border/40">
                  <p className="text-xs text-muted-foreground leading-tight">
                    <span className="font-semibold text-foreground">{leader.role}</span>
                    <br/>
                    {leader.company}
                  </p>
                </div>

                {/* Testimonial excerpt */}
                <p className="text-xs text-muted-foreground leading-relaxed italic mb-4 line-clamp-3">
                  "{leader.content}"
                </p>

                {/* Impact badge */}
                <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-lg group-hover:bg-accent/20 transition-colors">
                  {leader.impact}
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Journey metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">50+</div>
            <p className="text-xs text-muted-foreground">Hiring partners</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">94%</div>
            <p className="text-xs text-muted-foreground">Placement rate</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">12-18 LPA</div>
            <p className="text-xs text-muted-foreground">Avg. package</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">45K+</div>
            <p className="text-xs text-muted-foreground">Alumni network</p>
          </div>
        </div>
      </div>
    </section>
  )
}
