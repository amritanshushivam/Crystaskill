"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { Button } from "@/components/ui/button"
import { EnrollmentDialog } from "@/components/enrollment-dialog"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Star,
  Shield,
  Zap,
  Crown,
} from "lucide-react"

interface CourseData {
  slug: string
  title: string
  subtitle: string
  color: string
  image: string
  imageHint: string
  description: string
  topics: string[]
  syllabus: string[]
  duration: string
  projects: string
  students: string
  level: string
}

const pricingPlans = [
  {
    name: "Basic",
    price: "₹5,000",
    priceNote: "one-time payment",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200",
    bgAccent: "bg-blue-50",
    features: [
      "Access to all training modules",
      "Recorded video lectures",
      "Training completion certificate",
      "Community forum access",
      "Self-paced learning",
      "Email support",
    ],
  },
  {
    name: "Standard",
    price: "₹10,000",
    priceNote: "one-time payment",
    icon: Star,
    color: "from-accent to-amber-500",
    borderColor: "border-accent/30",
    bgAccent: "bg-accent/5",
    popular: true,
    features: [
      "Everything in Basic",
      "Live instructor-led sessions",
      "1-on-1 doubt clearing sessions",
      "Real-world project guidance",
      "Resume & LinkedIn review",
      "Priority email & chat support",
      "Interview preparation kit",
    ],
  },
  {
    name: "Premium",
    price: "₹18,000",
    priceNote: "one-time payment",
    icon: Crown,
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-200",
    bgAccent: "bg-violet-50",
    features: [
      "Everything in Standard",
      "Dedicated personal mentor",
      "Guaranteed internship/placement assistance",
      "Industry expert masterclasses",
      "Capstone project with certificate",
      "Lifetime access & updates",
      "24/7 priority support",
      "Networking with hiring partners",
    ],
  },
]

export function CourseDetailPage({
  course,
  category,
  categoryLabel,
  categoryColor,
}: {
  course: CourseData
  category: string
  categoryLabel: string
  categoryColor: string
}) {
  const [enrollOpen, setEnrollOpen] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState({ plan: "", amount: 0 })

  const handleEnroll = (planName: string, price: string) => {
    const amount = parseInt(price.replace(/[₹,]/g, ''))
    setSelectedPlan({ plan: planName.toLowerCase(), amount })
    setEnrollOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      {/* Enrollment Dialog */}
      <EnrollmentDialog
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        courseName={course.title}
        program={category}
        plan={selectedPlan.plan}
        amount={selectedPlan.amount}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/[0.04] via-transparent to-transparent rounded-full blur-3xl" />
          </div>

          <div className="section-container relative z-10">
            <Link
              href={`/programs/${category}`}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to {categoryLabel}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${course.color} bg-clip-padding rounded-full mb-4`}>
                  <span className="text-[12px] font-semibold text-white tracking-wide">
                    {course.subtitle}
                  </span>
                </div>

                <h1 className="text-primary mb-4">{course.title}</h1>

                <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-6">
                  {course.description}
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary/70">
                    <Clock className="w-4 h-4 text-accent" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary/70">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    {course.projects}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary/70">
                    <Users className="w-4 h-4 text-emerald-500" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary/70">
                    <Shield className="w-4 h-4 text-violet-500" />
                    {course.level}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  data-ai-hint={course.imageHint}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                What You&apos;ll Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {course.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-gray-50/80 rounded-xl border border-black/[0.04] hover:border-accent/20 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-[14px] font-medium text-primary/80">{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="py-10 sm:py-14">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Training Syllabus
              </h2>
              <p className="text-muted-foreground text-[14px] mb-8">
                Detailed module-wise breakdown of the complete curriculum.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.syllabus.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-black/[0.04] hover:border-accent/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white font-bold text-[13px] shrink-0 shadow-lg`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-primary/80 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 sm:py-14 bg-white">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10"
            >
              <h2 className="text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                  Plan
                </span>
              </h2>
              <p className="text-muted-foreground text-[14px] sm:text-[15px] max-w-lg mx-auto">
                Select the plan that best fits your learning goals. All plans include full training access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`relative bg-white rounded-2xl border-2 ${
                    plan.popular
                      ? "border-accent shadow-[0_20px_60px_-12px_hsl(32,95%,52%,0.2)] scale-[1.02]"
                      : "border-black/[0.06] hover:border-black/[0.12]"
                  } p-6 sm:p-8 flex flex-col transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-amber-500 text-white text-[11px] font-bold px-5 py-1.5 rounded-full shadow-lg shadow-accent/20 uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-lg`}>
                      <plan.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-primary">{plan.name}</h3>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[12px] text-muted-foreground/60 ml-2">
                      {plan.priceNote}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-[13px] text-primary/70 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleEnroll(plan.name, plan.price)}
                    className={`w-full h-12 rounded-xl font-semibold text-[14px] transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-accent to-amber-500 hover:from-accent/90 hover:to-amber-500/90 text-white shadow-lg shadow-accent/20 hover:shadow-xl"
                        : "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/10 hover:shadow-xl"
                    }`}
                  >
                    Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
