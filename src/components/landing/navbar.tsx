"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, Rocket, ShieldCheck, Users, Briefcase, GraduationCap, Globe, Laptop, ArrowUpRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ContactFormDialog } from "@/components/contact-form-dialog"

const navData = [
  {
    label: "Advantage",
    href: "#features",
    items: [
      { title: "The Methodology", desc: "Our unique 2026 learning framework.", icon: Rocket, link: "/about" },
      { title: "Industry Standard", desc: "Built with Google & Stripe leads.", icon: ShieldCheck, link: "/corporate-training" },
      { title: "Placement Desk", desc: "94% successful career pivots.", icon: Briefcase, link: "/placement-desk" },
    ]
  },
  {
    label: "Programs",
    href: "#courses",
    items: [
      { title: "CSE / IT", desc: "Web Dev, AI/ML, DevOps & more.", icon: Laptop, link: "/programs/cse-it" },
      { title: "ECE / EC", desc: "Embedded, VLSI, IoT & Robotics.", icon: Globe, link: "/programs/ece-ec" },
      { title: "Management", desc: "HR, Finance, Marketing & more.", icon: Briefcase, link: "/programs/management" },
    ]
  },
  {
    label: "Alumni",
    href: "#testimonials",
    items: [
      { title: "Success Stories", desc: "From pivots to promotions.", icon: GraduationCap, link: "/alumni-network" },
      { title: "Global Network", desc: "45k+ professionals worldwide.", icon: Globe, link: "/alumni-network" },
    ]
  },
  {
    label: "Enrollment",
    href: "#contact",
    items: [
      { title: "Apply Now", desc: "Strategic 2026 intake open.", icon: Rocket, link: "/enrollment-policy" },
      { title: "Fees & Funding", desc: "Corporate sponsorship paths.", icon: Briefcase, link: "/enrollment-policy" },
      { title: "Contact Desk", desc: "Speak with our concierge.", icon: Users, link: "#contact" },
    ]
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  const [navVisible, setNavVisible] = React.useState(false)
  const brandLogo = PlaceHolderImages.find(img => img.id === "brand-logo")

  React.useEffect(() => {
    // fade-in on mount
    requestAnimationFrame(() => setNavVisible(true))
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        } ${
          scrolled 
            ? "py-2.5 sm:py-3 bg-white/80 backdrop-blur-2xl border-b border-black/[0.04] shadow-[0_1px_3px_0_rgb(0,0,0,0.02)]" 
            : "py-4 sm:py-5 md:py-7 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <Link href="/" className="flex items-center group relative z-10">
            <div className="relative w-32 sm:w-40 md:w-48 h-10 sm:h-12 overflow-hidden">
              <Image 
                src={brandLogo?.imageUrl || ""} 
                alt="CrystaSkill" 
                fill 
                className="object-contain object-left"
                priority
                data-ai-hint="brand logo"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navData.map((nav) => (
              <div
                key={nav.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(nav.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 rounded-full ${
                  activeDropdown === nav.label 
                    ? 'text-primary bg-black/[0.04]' 
                    : 'text-primary/60 hover:text-primary'
                }`}>
                  {nav.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === nav.label ? 'rotate-180' : ''}`} />
                </button>

                {/* CSS-only dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
                    activeDropdown === nav.label
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="w-[340px] bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.06] shadow-[0_20px_60px_-12px_rgb(0,0,0,0.12),0_0_0_1px_rgb(0,0,0,0.03)] p-2.5">
                    {nav.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link || nav.href}
                        className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-black/[0.03] transition-all duration-200 group/item"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center text-accent/80 group-hover/item:from-accent group-hover/item:to-accent/80 group-hover/item:text-white transition-all duration-300 shrink-0">
                          <item.icon className="w-[18px] h-[18px]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-[13px] font-semibold text-primary">{item.title}</p>
                            <ArrowUpRight className="w-3 h-3 text-primary/20 group-hover/item:text-accent transition-colors opacity-0 group-hover/item:opacity-100" />
                          </div>
                          <p className="text-[12px] text-muted-foreground/70 leading-snug mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button onClick={() => setContactOpen(true)} className="hidden sm:inline-flex rounded-full h-10 px-7 text-[13px] font-semibold bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.97]">
              Contact Us
            </Button>

            <button 
              onClick={() => setMobileOpen(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu — CSS transitions */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[420px] h-full bg-white z-[100] flex flex-col shadow-[-20px_0_60px_-20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-black/[0.04]">
          <div className="relative w-36 h-10">
            <Image src={brandLogo?.imageUrl || ""} alt="CrystaSkill" fill className="object-contain object-left" />
          </div>
          <button 
            onClick={() => setMobileOpen(false)} 
            className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center hover:bg-black/[0.08] transition-colors"
          >
            <X className="w-4 h-4 text-primary" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {navData.map((nav) => (
            <div key={nav.label} className="px-4 mb-2">
              <p className="px-4 py-3 text-[11px] font-bold text-accent uppercase tracking-[0.25em]">{nav.label}</p>
              {nav.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.link || nav.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-black/[0.02] transition-colors active:scale-[0.98]"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.06] flex items-center justify-center text-accent shrink-0">
                    <item.icon className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-primary">{item.title}</p>
                    <p className="text-[12px] text-muted-foreground/60 mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-black/[0.04]">
          <Button onClick={() => { setMobileOpen(false); setContactOpen(true) }} className="w-full h-14 rounded-2xl bg-primary font-semibold text-white text-[15px] shadow-lg shadow-primary/10 hover:shadow-xl transition-all">
            Contact Us — Get Started
          </Button>
          <p className="text-center text-[11px] text-muted-foreground/50 mt-3">Custom training programs for your organization</p>
        </div>
      </div>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
