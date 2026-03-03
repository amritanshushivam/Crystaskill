"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const footerLinks = {
  programs: [
    { label: "CSE / IT", href: "/programs/cse-it" },
    { label: "ECE / EC", href: "/programs/ece-ec" },
    { label: "Management", href: "/programs/management" },
    { label: "Executive Certification", href: "/executive-certification" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press Kit", href: "/press-kit" },
  ],
  support: [
    { label: "Enrollment Policy", href: "/enrollment-policy" },
    { label: "Placement Desk", href: "/placement-desk" },
    { label: "Alumni Network", href: "/alumni-network" },
    { label: "Corporate Training", href: "/corporate-training" },
  ],
}

export function Footer() {
  const brandLogo = PlaceHolderImages.find(img => img.id === "brand-logo")

  return (
    <footer className="relative border-t border-black/[0.08] bg-gray-50/50">
      {/* Main footer */}
      <div className="section-container pt-8 sm:pt-14 pb-6 sm:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-36 sm:w-44 h-10 sm:h-12 overflow-hidden">
                <Image src={brandLogo?.imageUrl || ""} alt="CrystaSkill" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-primary/70 text-[13px] sm:text-[14px] leading-[1.8] max-w-xs">
              The global standard in corporate training. AI-powered, industry-led programs that transform workforces at scale.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/crystaskill" },
                { icon: Twitter, href: "https://twitter.com/crystaskill" },
                { icon: Instagram, href: "https://www.instagram.com/crystaskill" },
              ].map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-black/[0.05] hover:bg-accent/10 flex items-center justify-center text-primary/40 hover:text-accent transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {[
            { title: "Programs", links: footerLinks.programs },
            { title: "Company", links: footerLinks.company },
            { title: "Support", links: footerLinks.support },
          ].map((col) => (
            <div key={col.title} className="col-span-1 lg:col-span-2">
              <h4 className="text-[10px] sm:text-[11px] font-bold text-primary/60 uppercase tracking-[0.2em] mb-3 sm:mb-5">{col.title}</h4>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-[12px] sm:text-[13px] font-medium text-primary/80 hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div id="contact" className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h4 className="text-[10px] sm:text-[11px] font-bold text-primary/60 uppercase tracking-[0.2em] mb-3 sm:mb-5">Connect</h4>
            <div className="flex sm:flex-col gap-4 sm:gap-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-primary/50 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:hello@crystaskill.com" className="text-[13px] font-medium text-primary/80 hover:text-accent transition-colors">
                    hello@crystaskill.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-primary/50 uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+15551234567" className="text-[13px] font-medium text-primary/80 hover:text-accent transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-primary/50 font-medium">
            © 2026 CrystaSkill Global Education. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[12px] text-primary/50 hover:text-accent font-medium transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[12px] text-primary/50 hover:text-accent font-medium transition-colors">Terms</Link>
            <Link href="/cookies" className="text-[12px] text-primary/50 hover:text-accent font-medium transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
