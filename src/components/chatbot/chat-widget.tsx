"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, MessageCircle, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

/* ═══════════════════════════════════════════════════════
   MANUAL KNOWLEDGE BASE — no Gemini/AI API needed
   ═══════════════════════════════════════════════════════ */

interface FAQ {
  keywords: string[]
  answer: string
}

const KNOWLEDGE_BASE: FAQ[] = [
  // ── About CrystaSkill ──
  {
    keywords: ["crystaskill", "what is", "about", "who are you", "company", "tell me", "kya hai"],
    answer: "CrystaSkill is a professional education and corporate training platform. We offer industry-led programs in CSE/IT, ECE/EC, and Management — training BTech, MCA, and MBA students with hands-on, placement-focused learning. Over 50,000+ students trained with 96% satisfaction rate! 🎓",
  },
  {
    keywords: ["different", "why choose", "unique", "special", "better", "advantage"],
    answer: "What makes CrystaSkill different:\n\n• Practical, project-based learning with real industry mentors\n• 96% satisfaction rate\n• 50+ corporate partners (TCS, Infosys, Wipro, Accenture, etc.)\n• 50,000+ students trained\n• Flexible duration — learn at your pace\n• Certificate of completion for all plans",
  },

  // ── Programs ──
  {
    keywords: ["programs", "training", "what do you offer", "categories", "branches", "streams"],
    answer: "We offer three main training programs:\n\n🖥️ **CSE / IT Training** — Web Dev, AI/ML, Data Science, Cyber Security, Cloud Computing, Mobile Dev, DevOps, UI/UX Design\n\n⚡ **ECE / EC Training** — Embedded Systems, VLSI Design, IoT & Robotics, Signal Processing, PCB Design, Wireless Communication\n\n📊 **Management Training** — HR, Operations, Finance, Digital Marketing, Stock Market & Cryptocurrency",
  },
  {
    keywords: ["cse", "it", "computer", "software", "web dev", "ai", "ml", "data science", "cyber", "devops", "cloud", "ui", "ux"],
    answer: "🖥️ **CSE / IT Training** includes:\n\n• Web Development (Full Stack)\n• AI & Machine Learning\n• Data Science & Analytics\n• Cyber Security\n• Mobile App Development\n• DevOps & CI/CD\n• Cloud Computing (AWS/Azure/GCP)\n• UI/UX Design\n\nDuration: Flexible | 25,000+ students trained\n\nExplore more at: /programs/cse-it",
  },
  {
    keywords: ["ece", "ec", "electronics", "embedded", "vlsi", "iot", "robotics", "pcb", "signal"],
    answer: "⚡ **ECE / EC Training** includes:\n\n• Embedded Systems\n• VLSI Design\n• IoT & Smart Devices\n• Robotics & Automation\n• Signal Processing\n• PCB Design & Fabrication\n• Wireless Communication\n\nDuration: Flexible | 15,000+ students trained\n\nExplore more at: /programs/ece-ec",
  },
  {
    keywords: ["management", "mba", "hr", "finance", "marketing", "stock", "crypto", "operations"],
    answer: "📊 **Management Training** includes:\n\n• HR Management\n• Operations Management\n• Finance & Accounting\n• Digital Marketing\n• Stock Market & Cryptocurrency\n\nDuration: Flexible | 12,000+ students trained\n\nExplore more at: /programs/management",
  },

  // ── Pricing ──
  {
    keywords: ["price", "cost", "fee", "pricing", "plan", "kitna", "paisa", "rupee", "₹", "amount", "charge", "pay"],
    answer: "💰 We offer three plans:\n\n**Basic — ₹5,000** (one-time)\n• All training modules access\n• Recorded video lectures\n• Completion certificate\n• Community forum & email support\n\n**Standard — ₹10,000** (one-time) ⭐ Most Popular\n• Everything in Basic\n• Live instructor sessions\n• 1-on-1 doubt clearing\n• Project guidance\n• Resume review & interview prep\n\n**Premium — ₹18,000** (one-time)\n• Everything in Standard\n• Personal mentor\n• Placement assistance\n• Industry masterclasses\n• Lifetime access & 24/7 support",
  },
  {
    keywords: ["basic plan", "5000", "5,000", "cheapest", "lowest"],
    answer: "📦 **Basic Plan — ₹5,000** (one-time payment)\n\n• Access to all training modules\n• Recorded video lectures\n• Training completion certificate\n• Community forum access\n• Self-paced learning\n• Email support\n\nPerfect for self-paced learners!",
  },
  {
    keywords: ["standard plan", "10000", "10,000", "popular", "recommended"],
    answer: "⭐ **Standard Plan — ₹10,000** (one-time payment) — Most Popular!\n\n• Everything in Basic\n• Live instructor-led sessions\n• 1-on-1 doubt clearing sessions\n• Real-world project guidance\n• Resume & LinkedIn review\n• Priority email & chat support\n• Interview preparation kit\n\nBest for career transformation!",
  },
  {
    keywords: ["premium plan", "18000", "18,000", "best plan", "full", "everything"],
    answer: "👑 **Premium Plan — ₹18,000** (one-time payment)\n\n• Everything in Standard\n• Dedicated personal mentor\n• Guaranteed internship/placement assistance\n• Industry expert masterclasses\n• Capstone project with certificate\n• Lifetime access & updates\n• 24/7 priority support\n• Networking with hiring partners\n\nComplete career acceleration package!",
  },

  // ── Placement ──
  {
    keywords: ["placement", "job", "hire", "career", "internship", "naukri"],
    answer: "🎯 **Placement & Career Support:**\n\n• **Standard Plan** includes interview preparation, resume building, and LinkedIn review\n• **Premium Plan** includes dedicated placement assistance, internship support, and networking with hiring partners\n\nOur 50+ corporate partners include TCS, Infosys, Wipro, Accenture, and more. We have a strong track record of successful career placements!",
  },

  // ── Certificate ──
  {
    keywords: ["certificate", "certification", "certified", "proof"],
    answer: "📜 Yes! All training plans include a **Certificate of Completion**.\n\n• Basic: Training completion certificate\n• Standard: Industry-recognized certification\n• Premium: Capstone project certificate + industry certification\n\nOur certificates are valued by top employers across India.",
  },

  // ── Duration ──
  {
    keywords: ["duration", "how long", "time", "weeks", "months", "kitna time"],
    answer: "⏱️ All our training programs have **flexible duration** — you learn at your own pace!\n\n• Self-paced video lectures available 24/7\n• Live sessions scheduled based on batch timings\n• Most students complete a training in 8-16 weeks\n• Premium plan includes lifetime access",
  },

  // ── Contact ──
  {
    keywords: ["contact", "email", "phone", "reach", "talk", "call", "support", "help"],
    answer: "📞 **Contact Us:**\n\n• Email: support@crystaskill.com\n• Use the **Contact Us** button in the navigation bar\n• Fill out the contact form and our team will respond within 24 hours\n\nOur enrollment advisors are happy to help you choose the right program!",
  },

  // ── Payment ──
  {
    keywords: ["payment", "upi", "gateway", "how to pay", "emi", "installment"],
    answer: "💳 **Payment Information:**\n\nAll plans are one-time payments in INR (₹). After enrollment, our team will contact you with payment details.\n\n• Payment gateway coming soon\n• Currently supported: Bank Transfer, UPI\n• Our team will guide you through the payment process after you enroll",
  },

  // ── Enrollment ──
  {
    keywords: ["enroll", "register", "join", "sign up", "admit", "admission", "start", "begin"],
    answer: "🚀 **How to Enroll:**\n\n1. Browse our programs (/programs/cse-it, /programs/ece-ec, /programs/management)\n2. Choose a training that interests you\n3. Select your plan (Basic ₹5K / Standard ₹10K / Premium ₹18K)\n4. Click 'Enroll Now' and fill in your details\n5. Our team will contact you for payment & onboarding\n\nOr use the 'Contact Us' button for a personalized recommendation!",
  },

  // ── Greeting ──
  {
    keywords: ["hi", "hello", "hey", "namaste", "good morning", "good evening", "hola"],
    answer: "Hello! 👋 Welcome to CrystaSkill! I'm here to help you explore our training programs, pricing, and more.\n\nHere are some things I can help with:\n• 📚 Training programs & details\n• 💰 Pricing & plans\n• 🎯 Placement support\n• 📜 Certificates\n• 📞 Contact information\n\nWhat would you like to know?",
  },
  {
    keywords: ["thanks", "thank you", "thx", "dhanyawad", "shukriya"],
    answer: "You're welcome! 😊 If you have any more questions, feel free to ask. You can also reach us at support@crystaskill.com. Good luck with your learning journey! 🚀",
  },
]

const FALLBACK_ANSWER =
  "I'm not sure about that specific question. Here's what I can help with:\n\n• Training programs (CSE/IT, ECE/EC, Management)\n• Pricing plans (₹5K / ₹10K / ₹18K)\n• Placement & career support\n• Certificates & duration\n• Enrollment process\n\nFor anything else, please email us at **support@crystaskill.com** or use the Contact Us form. Our team responds within 24 hours! 📧"

function findAnswer(question: string): string {
  const q = question.toLowerCase().trim()
  let bestMatch: FAQ | null = null
  let bestScore = 0

  for (const faq of KNOWLEDGE_BASE) {
    let score = 0
    for (const kw of faq.keywords) {
      if (q.includes(kw.toLowerCase())) {
        score += kw.length // longer keyword matches are more specific
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = faq
    }
  }

  return bestMatch && bestScore > 0 ? bestMatch.answer : FALLBACK_ANSWER
}

/* ═══════════════════════════════════════════════════════
   QUICK SUGGESTION BUTTONS
   ═══════════════════════════════════════════════════════ */
const QUICK_QUESTIONS = [
  "What programs do you offer?",
  "What are the pricing plans?",
  "Do you help with placement?",
  "How do I enroll?",
]

/* ═══════════════════════════════════════════════════════
   CHAT WIDGET COMPONENT
   ═══════════════════════════════════════════════════════ */

type Message = {
  id: string
  role: "user" | "bot"
  text: string
}

export function ChatWidget() {
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      role: "bot",
      text: "Welcome to CrystaSkill! 👋 I'm your enrollment assistant. How can I help you today?",
    },
  ])
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const addBotReply = React.useCallback((text: string) => {
    // small delay to feel natural
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "bot", text },
      ])
    }, 300 + Math.random() * 400)
  }, [])

  const handleSend = React.useCallback(
    (text?: string) => {
      const q = (text || input).trim()
      if (!q) return
      const userMsg: Message = { id: Date.now().toString(), role: "user", text: q }
      setMessages((prev) => [...prev, userMsg])
      setInput("")
      addBotReply(findAnswer(q))
    },
    [input, addBotReply]
  )

  React.useEffect(() => {
    if (scrollRef.current && isOpen) {
      const viewport = scrollRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (viewport) viewport.scrollTop = viewport.scrollHeight
    }
  }, [messages, isOpen])

  if (!mounted) return null

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl sm:rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center text-white z-[60] hover:scale-105 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.25)] transition-all duration-300 group"
        aria-label="Open support chat"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </span>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[70] sm:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full sm:w-[380px] h-[85vh] sm:h-[560px] bg-white sm:rounded-3xl shadow-[0_24px_80px_-16px_rgba(0,0,0,0.15)] z-[80] flex flex-col overflow-hidden border border-black/[0.06] sm:border"
            >
              {/* Header */}
              <div className="px-5 py-4 flex items-center justify-between bg-white border-b border-black/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-amber-500 rounded-xl flex items-center justify-center text-white shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-primary">CrystaSkill Support</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[11px] text-muted-foreground/50 font-medium">
                        Always available
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-black/[0.03] hover:bg-black/[0.06] flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-primary/40" />
                </button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 px-5 py-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "bot" && (
                        <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="w-3.5 h-3.5 text-accent" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-4 py-3 text-[13px] leading-[1.7] whitespace-pre-line ${
                          msg.role === "user"
                            ? "bg-primary text-white rounded-2xl rounded-br-lg shadow-sm"
                            : "bg-black/[0.03] text-primary rounded-2xl rounded-bl-lg"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === "user" && (
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-3.5 h-3.5 text-primary" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Quick suggestion buttons — shown only when there's just the welcome message */}
                  {messages.length === 1 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {QUICK_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSend(q)}
                          className="text-[11px] font-medium px-3 py-2 rounded-xl bg-accent/[0.06] text-accent hover:bg-accent/[0.12] transition-colors border border-accent/10"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="px-4 py-3 bg-white border-t border-black/[0.04]">
                <div className="flex items-center gap-2 bg-black/[0.02] rounded-xl p-1.5">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask anything about our programs..."
                    className="h-10 border-none bg-transparent focus-visible:ring-0 text-[13px] font-medium placeholder:text-muted-foreground/30"
                  />
                  <Button
                    onClick={() => handleSend()}
                    size="icon"
                    disabled={!input.trim()}
                    className="w-9 h-9 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all active:scale-95 disabled:opacity-30 shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-[10px] text-center text-muted-foreground/30 mt-2 font-medium">
                  Powered by CrystaSkill
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
