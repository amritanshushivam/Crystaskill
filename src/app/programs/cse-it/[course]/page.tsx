"use client"

import { useParams } from "next/navigation"
import { CourseDetailPage } from "@/components/course-detail-page"
import { notFound } from "next/navigation"

const courses = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Full Stack Mastery",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    imageHint: "web development code on screen",
    description: "Build production-grade web applications with modern frameworks. From responsive frontends to scalable backend APIs.",
    topics: ["React / Next.js", "Node.js / Express", "TypeScript", "REST & GraphQL APIs", "Database Design", "Cloud Deployment"],
    syllabus: ["Module 1: HTML5, CSS3 & Responsive Design", "Module 2: JavaScript ES6+ & DOM Manipulation", "Module 3: React.js — Components, Hooks & State", "Module 4: Next.js — SSR, Routing & API Routes", "Module 5: Node.js & Express — RESTful APIs", "Module 6: Databases — MongoDB, PostgreSQL & Prisma", "Module 7: TypeScript & GraphQL", "Module 8: Authentication, Testing & Cloud Deployment"],
    duration: "16 Weeks", projects: "6+ Live Projects", students: "8k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "data-science",
    title: "Data Science",
    subtitle: "Analytics & Insights",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageHint: "data analytics dashboard",
    description: "Master data analysis, statistical modeling, and business intelligence. Transform raw data into strategic decisions.",
    topics: ["Python & Pandas", "SQL & Data Pipelines", "Statistical Analysis", "Data Visualization", "Power BI / Tableau", "Big Data (Spark)"],
    syllabus: ["Module 1: Python for Data Science — NumPy & Pandas", "Module 2: SQL & Relational Databases", "Module 3: Exploratory Data Analysis & Statistics", "Module 4: Data Visualization — Matplotlib, Seaborn, Plotly", "Module 5: Power BI & Tableau Dashboards", "Module 6: Feature Engineering & Data Pipelines", "Module 7: Big Data with Apache Spark", "Module 8: Capstone — End-to-End Analytics Project"],
    duration: "14 Weeks", projects: "5+ Live Projects", students: "6k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems",
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    imageHint: "artificial intelligence neural network",
    description: "Build intelligent systems with deep learning, NLP, and computer vision. From theory to production-ready AI models.",
    topics: ["Machine Learning", "Deep Learning (TensorFlow / PyTorch)", "NLP & LLMs", "Computer Vision", "Generative AI", "Model Deployment"],
    syllabus: ["Module 1: Python for ML — Math, Stats & Libraries", "Module 2: Supervised Learning — Regression & Classification", "Module 3: Unsupervised Learning & Clustering", "Module 4: Deep Learning — Neural Networks & CNNs", "Module 5: NLP — Text Processing, Transformers & LLMs", "Module 6: Computer Vision — Object Detection & Segmentation", "Module 7: Generative AI — GANs, Diffusion & Prompt Engineering", "Module 8: Model Deployment & MLOps Pipelines"],
    duration: "18 Weeks", projects: "5+ Live Projects", students: "5k+ Trained", level: "Intermediate to Advanced",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    subtitle: "Defense & Protection",
    color: "from-red-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    imageHint: "cyber security lock digital",
    description: "Protect organizations from cyber threats. Learn ethical hacking, network security, incident response and compliance.",
    topics: ["Ethical Hacking", "Network Security", "Penetration Testing", "SOC & SIEM", "Cloud Security", "Compliance & GRC"],
    syllabus: ["Module 1: Networking Fundamentals & Protocols", "Module 2: Linux Administration & Scripting", "Module 3: Ethical Hacking & Reconnaissance", "Module 4: Penetration Testing — Web & Network", "Module 5: SOC Operations & SIEM Tools", "Module 6: Cloud Security — AWS, Azure & GCP", "Module 7: Incident Response & Digital Forensics", "Module 8: Compliance, GRC & Risk Management"],
    duration: "14 Weeks", projects: "4+ Live Labs", students: "3k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    color: "from-pink-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    imageHint: "mobile app smartphone",
    description: "Create native and cross-platform mobile applications. Ship production apps to App Store and Google Play.",
    topics: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Mobile UI/UX", "App Store Deployment"],
    syllabus: ["Module 1: Mobile UI/UX Principles & Design Systems", "Module 2: React Native — Core Components & Navigation", "Module 3: Flutter — Widgets, State & Dart Fundamentals", "Module 4: iOS Development with Swift & SwiftUI", "Module 5: Android Development with Kotlin & Jetpack", "Module 6: APIs, Authentication & Push Notifications", "Module 7: App Performance, Testing & Debugging", "Module 8: App Store & Play Store Deployment"],
    duration: "14 Weeks", projects: "4+ Live Apps", students: "3k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "devops",
    title: "DevOps",
    subtitle: "CI/CD & Infrastructure",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageHint: "server infrastructure cloud",
    description: "Automate infrastructure, build CI/CD pipelines, and manage cloud-native deployments at enterprise scale.",
    topics: ["Docker & Kubernetes", "CI/CD Pipelines", "AWS / Azure / GCP", "Terraform & IaC", "Monitoring & Logging", "Linux Administration"],
    syllabus: ["Module 1: Linux Administration & Shell Scripting", "Module 2: Git, GitHub & Version Control Workflows", "Module 3: Docker — Containerization & Multi-Stage Builds", "Module 4: Kubernetes — Orchestration & Helm Charts", "Module 5: CI/CD Pipelines — Jenkins, GitHub Actions & GitLab CI", "Module 6: Infrastructure as Code — Terraform & Ansible", "Module 7: Cloud Platforms — AWS, Azure & GCP", "Module 8: Monitoring — Prometheus, Grafana & ELK Stack"],
    duration: "12 Weeks", projects: "5+ Live Projects", students: "4k+ Trained", level: "Intermediate to Advanced",
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    subtitle: "Cloud Architecture",
    color: "from-sky-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    imageHint: "cloud computing data center",
    description: "Master cloud platforms, architecture, and services. Design scalable, secure, and cost-efficient cloud-native solutions.",
    topics: ["AWS Solutions Architect", "Azure Fundamentals", "GCP Cloud Engineer", "Serverless & Microservices", "Cloud Security", "Cost Optimization"],
    syllabus: ["Module 1: Cloud Fundamentals & Service Models (IaaS, PaaS, SaaS)", "Module 2: AWS — EC2, S3, Lambda, RDS & VPC", "Module 3: Azure — VMs, App Services, Functions & AKS", "Module 4: GCP — Compute Engine, Cloud Run & BigQuery", "Module 5: Serverless Architecture & Microservices", "Module 6: Cloud Security — IAM, Encryption & Compliance", "Module 7: Cloud Networking & Load Balancing", "Module 8: Cost Optimization & Multi-Cloud Strategies"],
    duration: "12 Weeks", projects: "4+ Live Projects", students: "3k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Design & Experience",
    color: "from-fuchsia-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    imageHint: "ui ux design interface",
    description: "Design intuitive and beautiful digital products. From user research to interactive prototypes and design systems.",
    topics: ["Figma & Adobe XD", "User Research", "Wireframing & Prototyping", "Design Systems", "Interaction Design", "Usability Testing"],
    syllabus: ["Module 1: Design Thinking & UX Research Methods", "Module 2: Information Architecture & User Flows", "Module 3: Wireframing & Low-Fidelity Prototyping", "Module 4: Visual Design — Typography, Color & Layout", "Module 5: Figma Mastery — Components & Auto Layout", "Module 6: Interactive Prototyping & Micro-Interactions", "Module 7: Design Systems & Component Libraries", "Module 8: Usability Testing, Handoff & Portfolio Project"],
    duration: "12 Weeks", projects: "5+ Design Projects", students: "2k+ Trained", level: "Beginner to Advanced",
  },
]

export default function CSEITCoursePage() {
  const params = useParams()
  const courseSlug = params.course as string
  const course = courses.find((c) => c.slug === courseSlug)

  if (!course) {
    notFound()
  }

  return (
    <CourseDetailPage
      course={course}
      category="cse-it"
      categoryLabel="CSE / IT Programs"
      categoryColor="from-blue-600 to-violet-600"
    />
  )
}
