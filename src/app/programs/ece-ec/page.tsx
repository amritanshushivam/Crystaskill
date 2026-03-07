"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import {
  ArrowRight,
  ArrowLeft,
  Cpu,
  Radio,
  Wifi,
  Zap,
  CircuitBoard,
  Settings,
  Signal,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  ChevronDown,
  Microchip,
} from "lucide-react"

const courses = [
  {
    slug: "embedded-systems",
    title: "Embedded Systems",
    subtitle: "Hardware Meets Software",
    icon: Cpu,
    color: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageHint: "circuit board electronics",
    description: "Design and program embedded systems for real-world applications. From microcontrollers to real-time operating systems.",
    topics: ["ARM / AVR Microcontrollers", "RTOS (FreeRTOS)", "C / Embedded C", "Firmware Development", "Hardware Interfacing", "Debugging & Testing"],
    syllabus: [
      "Module 1: Introduction to Embedded Systems & Architecture",
      "Module 2: C & Embedded C Programming",
      "Module 3: ARM & AVR Microcontroller Programming",
      "Module 4: Peripheral Interfacing — GPIO, UART, SPI, I2C",
      "Module 5: RTOS — FreeRTOS Tasks, Queues & Semaphores",
      "Module 6: Firmware Development & Boot Loaders",
      "Module 7: Debugging, Testing & JTAG/SWD",
      "Module 8: Capstone — Real-World Embedded Project",
    ],
    duration: "14 Weeks",
    projects: "5+ Live Projects",
    students: "4k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "vlsi-design",
    title: "VLSI Design",
    subtitle: "Chip Architecture",
    icon: CircuitBoard,
    color: "from-violet-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?auto=format&fit=crop&w=800&q=80",
    imageHint: "microchip semiconductor",
    description: "Master VLSI chip design from RTL to GDSII. Learn digital & analog design, verification, and physical design flows.",
    topics: ["Verilog / VHDL", "Digital Design", "RTL Design & Synthesis", "Physical Design (PnR)", "DFT & Verification", "Cadence / Synopsys Tools"],
    syllabus: [
      "Module 1: Digital Electronics & Logic Design",
      "Module 2: Verilog HDL — Combinational & Sequential",
      "Module 3: VHDL — Syntax, Testbenches & Simulation",
      "Module 4: RTL Design & Synthesis with Synopsys DC",
      "Module 5: Static Timing Analysis & Constraints",
      "Module 6: Physical Design — Floorplan, PnR & CTS",
      "Module 7: DFT — Scan Chain, ATPG & BIST",
      "Module 8: Verification — UVM & SystemVerilog",
    ],
    duration: "16 Weeks",
    projects: "4+ Design Projects",
    students: "3k+ Trained",
    level: "Intermediate to Advanced",
  },
  {
    slug: "iot-robotics",
    title: "IoT & Robotics",
    subtitle: "Connected Machines",
    icon: Wifi,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    imageHint: "robot automation iot",
    description: "Build smart connected devices and robotic systems. From sensor networks to autonomous navigation and cloud integration.",
    topics: ["Arduino / Raspberry Pi", "Sensor Networks", "MQTT & CoAP", "ROS (Robot OS)", "Edge Computing", "Cloud IoT Platforms"],
    syllabus: [
      "Module 1: IoT Architecture & Protocols",
      "Module 2: Arduino Programming & Sensor Interfacing",
      "Module 3: Raspberry Pi — Linux, GPIO & Camera",
      "Module 4: Wireless Protocols — MQTT, CoAP, BLE & LoRa",
      "Module 5: Edge Computing & Gateway Design",
      "Module 6: Cloud IoT — AWS IoT Core & Azure IoT Hub",
      "Module 7: ROS — Navigation, SLAM & Motion Planning",
      "Module 8: Capstone — Smart IoT/Robotics Project",
    ],
    duration: "14 Weeks",
    projects: "5+ Live Projects",
    students: "3k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "signal-processing",
    title: "Signal Processing",
    subtitle: "DSP & Communications",
    icon: Signal,
    color: "from-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    imageHint: "signal processing waveform",
    description: "Master digital signal processing, image processing, and communication systems. From theory to MATLAB/Python implementation.",
    topics: ["DSP Fundamentals", "MATLAB / Python DSP", "Image Processing", "Filter Design", "Communication Systems", "Radar & Antenna"],
    syllabus: [
      "Module 1: Signals & Systems — Continuous & Discrete",
      "Module 2: Fourier Transform, DFT & FFT",
      "Module 3: FIR & IIR Filter Design",
      "Module 4: MATLAB for DSP & Simulation",
      "Module 5: Image Processing — Filtering & Segmentation",
      "Module 6: Adaptive Filters & Statistical DSP",
      "Module 7: Communication Systems — Modulation & Coding",
      "Module 8: Radar Signal Processing & Applications",
    ],
    duration: "12 Weeks",
    projects: "4+ Lab Projects",
    students: "2k+ Trained",
    level: "Intermediate to Advanced",
  },
  {
    slug: "pcb-design",
    title: "PCB Design",
    subtitle: "Board Level Engineering",
    icon: Settings,
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80",
    imageHint: "pcb printed circuit board",
    description: "Design professional-grade PCBs from schematic capture to manufacturing. Multi-layer, high-speed, and RF board design.",
    topics: ["Altium / KiCad / Eagle", "Schematic Capture", "Multi-layer PCB Layout", "High-Speed Design", "DFM & DFT", "Prototyping & Assembly"],
    syllabus: [
      "Module 1: PCB Design Fundamentals & EDA Tools",
      "Module 2: Schematic Capture in Altium / KiCad",
      "Module 3: Component Libraries & Footprints",
      "Module 4: Single & Multi-Layer PCB Layout",
      "Module 5: High-Speed Design — Impedance & Signal Integrity",
      "Module 6: Power Integrity & Thermal Management",
      "Module 7: DFM, DFT & Gerber Generation",
      "Module 8: Prototyping, Assembly & Testing",
    ],
    duration: "10 Weeks",
    projects: "4+ Board Designs",
    students: "2k+ Trained",
    level: "Beginner to Advanced",
  },
  {
    slug: "power-electronics",
    title: "Power Electronics",
    subtitle: "Energy & Drives",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=800&q=80",
    imageHint: "power electronics transformer",
    description: "Design power converters, motor drives, and renewable energy systems. From basic converters to advanced grid-tied inverters.",
    topics: ["DC-DC Converters", "Inverters & Rectifiers", "Motor Drives", "PV / Solar Systems", "EV Charging", "Simulation (PSIM / PLECS)"],
    syllabus: [
      "Module 1: Power Semiconductor Devices & Characteristics",
      "Module 2: DC-DC Converters — Buck, Boost & Buck-Boost",
      "Module 3: Rectifiers & Controlled Converters",
      "Module 4: Inverters — Single & Three Phase",
      "Module 5: AC & DC Motor Drives",
      "Module 6: PV Systems & Solar Inverters",
      "Module 7: EV Charging Infrastructure & BMS",
      "Module 8: Simulation with PSIM, PLECS & MATLAB",
    ],
    duration: "12 Weeks",
    projects: "3+ Live Projects",
    students: "2k+ Trained",
    level: "Intermediate to Advanced",
  },
  {
    slug: "communication-systems",
    title: "Communication Systems",
    subtitle: "Wireless & Networks",
    icon: Radio,
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&q=80",
    imageHint: "wireless communication antenna",
    description: "Master wireless communication, 5G, satellite systems, and network protocols. From modulation to full system architecture.",
    topics: ["Digital Communication", "5G / LTE", "Antenna Design", "RF Engineering", "Satellite Systems", "Network Protocols"],
    syllabus: [
      "Module 1: Communication Systems Fundamentals",
      "Module 2: Analog & Digital Modulation Techniques",
      "Module 3: Information Theory & Channel Coding",
      "Module 4: Wireless Communication — 4G LTE & 5G NR",
      "Module 5: Antenna Design & RF Engineering",
      "Module 6: Satellite Communication Systems",
      "Module 7: Optical Fiber Communication",
      "Module 8: Network Protocols & System Design",
    ],
    duration: "12 Weeks",
    projects: "3+ Lab Projects",
    students: "2k+ Trained",
    level: "Intermediate to Advanced",
  },
]

const stats = [
  { value: "15K+", label: "Engineers Trained" },
  { value: "7", label: "Specialized Tracks" },
  { value: "92%", label: "Completion Rate" },
  { value: "50+", label: "Corporate Partners" },
]

function CourseCard({ course, idx, category }: { course: typeof courses[0]; idx: number; category: string }) {
  const [syllabusOpen, setSyllabusOpen] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      className="group relative bg-white rounded-2xl border border-black/[0.04] hover:border-black/[0.08] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgb(0,0,0,0.08)] flex flex-col"
    >
      <div className="relative h-40 sm:h-52 w-full overflow-hidden">
        <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={course.imageHint} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-xl ring-2 ring-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <course.icon className="w-[22px] h-[22px] drop-shadow-sm" />
        </div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-primary/80 shadow-lg ring-1 ring-black/[0.04]">{course.level}</div>
        <div className="absolute bottom-0 left-0 right-0 p-5 pb-4">
          <h3 className="text-[20px] font-bold text-white tracking-tight leading-tight drop-shadow-lg">{course.title}</h3>
          <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider mt-0.5">{course.subtitle}</p>
        </div>
      </div>

      <div className="p-4 sm:p-7 flex flex-col flex-1">
        <p className="text-muted-foreground text-[13px] leading-[1.7] mb-5">{course.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.topics.map((topic, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary/70 bg-gradient-to-r from-gray-50 to-white border border-black/[0.05] px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-3 h-3 text-accent drop-shadow-sm" />
              {topic}
            </span>
          ))}
        </div>

        <button onClick={() => setSyllabusOpen(!syllabusOpen)} className="flex items-center gap-2 text-[12px] font-semibold text-accent hover:text-accent/80 transition-colors mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          {syllabusOpen ? "Hide" : "View"} Syllabus
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${syllabusOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {syllabusOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden mb-4">
              <div className="bg-gray-50/80 rounded-xl p-4 border border-black/[0.04] space-y-2">
                {course.syllabus.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[12px] text-primary/70 leading-relaxed">
                    <span className="text-accent font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 pt-4 sm:pt-5 border-t border-black/[0.04] mt-auto">
          <div className="flex items-center gap-3 sm:gap-5 text-muted-foreground/60 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1"><Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent/60" />{course.duration}</div>
            <div className="flex items-center gap-1"><BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />{course.projects}</div>
            <div className="flex items-center gap-1"><Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />{course.students}</div>
          </div>
          <Link href={`/programs/${category}/${course.slug}`} className="block w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold h-9 px-6 text-[12px] shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto group/btn cursor-pointer">
              Enquire <ArrowRight className="ml-1.5 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ECEECPage() {
  const [contactOpen, setContactOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-500/[0.04] via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground/60 hover:text-accent transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/[0.08] rounded-full mb-4">
                <CircuitBoard className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-[12px] font-semibold text-teal-600 tracking-wide">ECE / EC Programs</span>
              </div>
              <h1 className="text-primary mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">ECE / EC</span>{" "}
                Training Programs
              </h1>
              <p className="text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                Industry-validated training tracks covering every major domain in Electronics &amp; Communication Engineering. From Embedded Systems to 5G Communications — upskill your engineering workforce.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 sm:mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/[0.04] p-4 sm:p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                  <p className="text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, idx) => (
                <CourseCard key={course.slug} course={course} idx={idx} category="ece-ec" />
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 sm:mt-14 bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-teal-500/10 rounded-full blur-[60px] -ml-16 -mb-16" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Need a{" "}
                  <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">custom ECE training program</span>{" "}
                  for your team?
                </h2>
                <p className="text-white/50 text-[14px] sm:text-[15px] mb-6 max-w-lg mx-auto">We design tailored electronics &amp; communication training tracks for organizations. Get a dedicated success manager and lab-equipped sessions.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setContactOpen(true)} className="rounded-full h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg shadow-accent/20 hover:shadow-xl transition-all group">
                    Get in Touch <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button onClick={() => setContactOpen(true)} variant="outline" className="rounded-full h-12 px-8 bg-white/[0.06] border-white/[0.1] text-white font-semibold text-[14px] hover:bg-white/[0.1] transition-all">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
      <ChatWidget />
    </div>
  )
}
