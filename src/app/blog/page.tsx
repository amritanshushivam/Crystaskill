"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  Lightbulb,
  Users,
} from "lucide-react"

const posts = [
  {
    slug: "future-of-corporate-training-2026",
    title: "The Future of Corporate Training in 2026",
    excerpt: "How AI-powered learning paths, micro-credentials, and immersive simulations are reshaping workforce development across industries.",
    category: "Industry Trends",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    imageHint: "corporate training seminar",
  },
  {
    slug: "why-placement-rate-matters",
    title: "Why Your Training Provider's Placement Rate Matters More Than You Think",
    excerpt: "A deep dive into how CrystaSkill maintains a 94% career-transition success rate and what to look for in a training partner.",
    category: "Career Advice",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    imageHint: "job interview professional",
  },
  {
    slug: "ai-ml-skills-demand",
    title: "Top 10 AI & ML Skills Every Engineer Needs in 2026",
    excerpt: "From prompt engineering to MLOps — the most in-demand AI skills and how to learn them systematically.",
    category: "Technology",
    date: "Feb 12, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    imageHint: "artificial intelligence robot",
  },
  {
    slug: "embedded-systems-career-path",
    title: "A Complete Career Roadmap for Embedded Systems Engineers",
    excerpt: "From microcontrollers to RTOS — how to build a successful embedded systems career in the IoT era.",
    category: "ECE / EC",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageHint: "circuit board electronics",
  },
  {
    slug: "management-skills-digital-age",
    title: "5 Management Skills That Matter Most in the Digital Age",
    excerpt: "Digital marketing, data-driven decision making, and agile leadership — the management skills redefining corporate success.",
    category: "Management",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imageHint: "business team meeting",
  },
  {
    slug: "how-crystaskill-trains-50k",
    title: "How CrystaSkill Trained 50,000+ Professionals — Behind the Scenes",
    excerpt: "An inside look at our AI-driven learning engine, mentor matching algorithm, and the infrastructure powering our global programs.",
    category: "Company",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    imageHint: "students learning together",
  },
]

const categoryColors: Record<string, string> = {
  "Industry Trends": "bg-violet-100 text-violet-700",
  "Career Advice": "bg-emerald-100 text-emerald-700",
  "Technology": "bg-blue-100 text-blue-700",
  "ECE / EC": "bg-teal-100 text-teal-700",
  "Management": "bg-amber-100 text-amber-700",
  "Company": "bg-rose-100 text-rose-700",
}

export default function BlogPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-500/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/[0.08] rounded-full mb-4">
                <BookOpen className="w-3.5 h-3.5 text-violet-600" />
                <span className="text-[12px] font-semibold text-violet-600 tracking-wide">Blog & Insights</span>
              </div>
              <h1 className="text-primary mb-4">
                Insights for the{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">modern professional</span>
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Industry trends, career advice, technical deep-dives, and stories from the CrystaSkill community. Stay ahead of the curve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-10 sm:py-14">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-black/[0.04] overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={post.imageHint} />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground/50 font-medium mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-primary leading-snug mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4">
                      <span className="text-[12px] font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-14">
          <div className="section-container">
            <div className="bg-primary rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">Stay in the loop</h2>
                <p className="text-white/50 text-[14px] mb-6 max-w-md mx-auto">Get the latest insights, career tips, and training updates delivered to your inbox.</p>
                <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg group">
                  Subscribe <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
      <ChatWidget />
    </div>
  )
}
