"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { ArrowLeft, ArrowRight, Calendar, Clock, BookOpen, Share2 } from "lucide-react"

const posts: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  imageHint: string
  content: string[]
}> = {
  "future-of-corporate-training-2026": {
    title: "The Future of Corporate Training in 2026",
    excerpt: "How AI-powered learning paths, micro-credentials, and immersive simulations are reshaping workforce development across industries.",
    category: "Industry Trends",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    imageHint: "corporate training seminar",
    content: [
      "The corporate training landscape is undergoing a radical transformation in 2026. With the rapid adoption of AI-powered learning platforms, organizations are moving away from one-size-fits-all training programs toward hyper-personalized learning experiences.",
      "AI algorithms now analyze individual skill gaps, learning patterns, and career trajectories to create custom curricula for each employee. This shift has resulted in a 3x improvement in knowledge retention compared to traditional classroom-based training.",
      "Micro-credentials are replacing lengthy certification programs. Professionals can now earn stackable digital badges that validate specific competencies, making it easier for employers to verify skills and for employees to showcase their expertise.",
      "Immersive simulations powered by VR and AR technologies are enabling hands-on learning in risk-free environments. From cybersecurity incident response to complex engineering scenarios, learners can practice real-world challenges without real-world consequences.",
      "At CrystaSkill, we've been at the forefront of this transformation. Our AI-driven learning engine personalizes every aspect of the training journey — from content sequencing to assessment difficulty — ensuring that each professional gets exactly what they need to excel.",
      "The future of corporate training is here, and it's more engaging, more effective, and more accessible than ever before. Organizations that embrace these innovations will have a significant competitive advantage in attracting and retaining top talent."
    ]
  },
  "why-placement-rate-matters": {
    title: "Why Your Training Provider's Placement Rate Matters More Than You Think",
    excerpt: "A deep dive into how CrystaSkill maintains a 94% career-transition success rate and what to look for in a training partner.",
    category: "Career Advice",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    imageHint: "job interview professional",
    content: [
      "When choosing a professional training program, most people focus on curriculum content and instructor credentials. While these are important, there's one metric that matters more than any other: the placement rate.",
      "A high placement rate isn't just a marketing number — it reflects the entire ecosystem of support that a training provider offers. From curriculum relevance to industry connections, from resume optimization to interview preparation, every aspect contributes to this single metric.",
      "At CrystaSkill, our 94% career-transition success rate is the result of a holistic approach. Our curriculum is reverse-engineered from actual job requirements at top companies. Every module, project, and assessment is designed to build skills that employers actively seek.",
      "Our industry partnership network of 50+ companies provides direct referral pathways for our graduates. This isn't just about posting jobs — it's about building relationships with hiring managers who trust our training quality.",
      "We also invest heavily in career coaching. Every learner gets personalized guidance on portfolio building, LinkedIn optimization, interview preparation, and salary negotiation. This comprehensive support system is what drives our exceptional outcomes.",
      "When evaluating training providers, always ask for verified placement data. Look for transparency in methodology, actual company names where graduates are placed, and the timeframe within which placements happen. These details separate genuine training programs from marketing hype."
    ]
  },
  "ai-ml-skills-demand": {
    title: "Top 10 AI & ML Skills Every Engineer Needs in 2026",
    excerpt: "From prompt engineering to MLOps — the most in-demand AI skills and how to learn them systematically.",
    category: "Technology",
    date: "Feb 12, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    imageHint: "artificial intelligence robot",
    content: [
      "The AI revolution has fundamentally changed what it means to be a software engineer in 2026. Whether you're a frontend developer, backend engineer, or systems architect, AI skills are no longer optional — they're essential.",
      "1. Prompt Engineering & LLM Integration: Understanding how to effectively interact with large language models and integrate them into applications is now a core skill for every developer.",
      "2. MLOps & Model Deployment: Building ML models is only half the battle. Deploying, monitoring, and maintaining them in production requires expertise in tools like Kubernetes, MLflow, and cloud-native ML services.",
      "3. RAG (Retrieval-Augmented Generation): Combining search and generation for more accurate AI outputs is one of the most sought-after skills in enterprise AI development.",
      "4. Computer Vision: With the proliferation of visual AI applications, skills in image recognition, object detection, and video analysis are increasingly valuable across industries.",
      "5. Natural Language Processing: From chatbots to content analysis, NLP remains one of the most practical AI applications. Understanding transformer architectures and fine-tuning techniques is essential.",
      "6. Responsible AI & Ethics: As AI systems impact more decisions, understanding bias detection, fairness metrics, and ethical AI development practices is critical.",
      "CrystaSkill's AI & ML training track covers all these skills and more, with hands-on projects using real datasets and industry-standard tools. Our graduates are working at companies like Google, Microsoft, Amazon, and leading Indian tech firms."
    ]
  },
  "embedded-systems-career-path": {
    title: "A Complete Career Roadmap for Embedded Systems Engineers",
    excerpt: "From microcontrollers to RTOS — how to build a successful embedded systems career in the IoT era.",
    category: "ECE / EC",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageHint: "circuit board electronics",
    content: [
      "Embedded systems engineering is experiencing a renaissance thanks to the IoT revolution, electric vehicles, and smart infrastructure. If you're an ECE graduate, this is one of the most rewarding career paths you can pursue.",
      "The journey typically begins with mastering microcontrollers — starting with Arduino and ESP32 for hobbyist projects, then moving to professional platforms like STM32 and NXP. Understanding hardware-software interaction at this level is fundamental.",
      "Real-Time Operating Systems (RTOS) like FreeRTOS and Zephyr are essential for building reliable embedded applications. Learning task scheduling, inter-process communication, and resource management will set you apart from other candidates.",
      "The IoT stack extends beyond hardware. Understanding communication protocols (MQTT, BLE, LoRa), cloud integration (AWS IoT, Azure IoT Hub), and edge computing frameworks is increasingly important for modern embedded roles.",
      "VLSI design and PCB layout are specialized but highly rewarding career tracks. Companies like Bosch, Texas Instruments, Intel, and Qualcomm actively recruit engineers with these skills, offering some of the highest packages in the industry.",
      "At CrystaSkill, our ECE/EC training track provides hands-on experience with industry-standard tools and real hardware. From basic microcontroller programming to advanced VLSI design, we prepare you for the most demanding roles in the embedded systems industry."
    ]
  },
  "management-skills-digital-age": {
    title: "5 Management Skills That Matter Most in the Digital Age",
    excerpt: "Digital marketing, data-driven decision making, and agile leadership — the management skills redefining corporate success.",
    category: "Management",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imageHint: "business team meeting",
    content: [
      "The definition of effective management has changed dramatically in the digital age. Traditional management skills like planning and organizing remain important, but they're no longer sufficient on their own.",
      "1. Data-Driven Decision Making: Modern managers must be comfortable with data analytics. Understanding dashboards, KPIs, A/B testing, and statistical reasoning helps make better decisions faster.",
      "2. Digital Marketing & Growth: Every manager needs to understand digital channels — SEO, social media, paid advertising, and content marketing. Even if you're not in marketing, understanding these channels helps you collaborate more effectively.",
      "3. Agile Leadership: The ability to lead cross-functional teams, facilitate sprints, and adapt quickly to changing priorities is essential in today's fast-paced business environment.",
      "4. Financial Literacy & Crypto Awareness: Understanding financial statements, investment principles, and emerging financial technologies like cryptocurrency and DeFi gives managers a broader perspective on business strategy.",
      "5. Emotional Intelligence & Remote Team Management: With distributed workforces becoming the norm, the ability to build trust, manage conflicts, and maintain team morale across time zones is more valuable than ever.",
      "CrystaSkill's Management training track covers all these modern skills, combining theoretical frameworks with practical case studies from real Indian and global companies."
    ]
  },
  "how-crystaskill-trains-50k": {
    title: "How CrystaSkill Trained 50,000+ Professionals — Behind the Scenes",
    excerpt: "An inside look at our AI-driven learning engine, mentor matching algorithm, and the infrastructure powering our global programs.",
    category: "Company",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    imageHint: "students learning together",
    content: [
      "Training 50,000+ professionals isn't just about creating good content — it's about building systems that scale while maintaining quality. Here's a behind-the-scenes look at how CrystaSkill makes it happen.",
      "Our AI-driven learning engine is at the heart of everything we do. When a new learner joins, our system analyzes their background, goals, and learning style to create a personalized curriculum path. This isn't just shuffling content around — it's dynamically adjusting difficulty, pacing, and project complexity.",
      "Mentor matching is another critical component. We use a proprietary algorithm that considers expertise overlap, communication style, timezone compatibility, and availability to pair each learner with their ideal mentor. This has resulted in a 98% mentor satisfaction rate.",
      "Our assessment system goes beyond traditional quizzes. We use AI-powered code review, project evaluation rubrics, and peer assessment to provide comprehensive feedback. Every submission is evaluated on multiple dimensions — correctness, code quality, problem-solving approach, and communication.",
      "Infrastructure-wise, we run on a cloud-native architecture that auto-scales to handle thousands of concurrent learners. Our custom LMS (Learning Management System) is built with React and Node.js, powered by MongoDB for flexible data modeling and Redis for real-time features.",
      "The human element remains our biggest differentiator. Despite all the technology, our success comes from passionate educators, dedicated success managers, and a community of learners who support each other. Technology amplifies human potential — that's the CrystaSkill philosophy."
    ]
  },
}

const categoryColors: Record<string, string> = {
  "Industry Trends": "bg-violet-100 text-violet-700",
  "Career Advice": "bg-emerald-100 text-emerald-700",
  "Technology": "bg-blue-100 text-blue-700",
  "ECE / EC": "bg-teal-100 text-teal-700",
  "Management": "bg-amber-100 text-amber-700",
  "Company": "bg-rose-100 text-rose-700",
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = posts[slug]
  const [contactOpen, setContactOpen] = React.useState(false)

  if (!post) {
    return (
      <div className="relative min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 sm:pt-36 pb-14 sm:pb-20">
          <div className="section-container text-center">
            <h1 className="text-primary mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="rounded-full">← Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-violet-500/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4 ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                {post.category}
              </span>
              <h1 className="text-primary mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">{post.title}</h1>
              <div className="flex items-center gap-4 text-[13px] text-muted-foreground/60 font-medium">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8 sm:pb-12">
          <div className="section-container max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/8] shadow-lg">
              <Image src={post.image} alt={post.title} fill className="object-cover" data-ai-hint={post.imageHint} priority />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-14 sm:pb-20">
          <div className="section-container max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
              {post.content.map((para, i) => (
                <p key={i} className="text-[15px] sm:text-[16px] text-primary/80 leading-[1.9]">{para}</p>
              ))}
            </motion.div>

            {/* Share & CTA */}
            <div className="mt-12 pt-8 border-t border-black/[0.06]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Share2 className="w-4 h-4 text-muted-foreground/50" />
                  <span className="text-[13px] text-muted-foreground/50 font-medium">Share this article</span>
                </div>
                <Button onClick={() => setContactOpen(true)} className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 px-7 text-[13px] group">
                  Start Learning <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
