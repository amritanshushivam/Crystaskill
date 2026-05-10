"use client"

import { useParams } from "next/navigation"
import { CourseDetailPage } from "@/components/course-detail-page"
import { notFound } from "next/navigation"

const courses = [
  {
    slug: "embedded-systems",
    title: "Embedded Systems",
    subtitle: "Hardware Meets Software",
    color: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    imageHint: "circuit board electronics",
    description: "Design and program embedded systems for real-world applications. From microcontrollers to real-time operating systems.",
    topics: ["ARM / AVR Microcontrollers", "RTOS (FreeRTOS)", "C / Embedded C", "Firmware Development", "Hardware Interfacing", "Debugging & Testing"],
    syllabus: ["Module 1: Introduction to Embedded Systems & Architecture", "Module 2: C & Embedded C Programming", "Module 3: ARM & AVR Microcontroller Programming", "Module 4: Peripheral Interfacing — GPIO, UART, SPI, I2C", "Module 5: RTOS — FreeRTOS Tasks, Queues & Semaphores", "Module 6: Firmware Development & Boot Loaders", "Module 7: Debugging, Testing & JTAG/SWD", "Module 8: Capstone — Real-World Embedded Project"],
    duration: "14 Weeks", projects: "5+ Live Projects", students: "4k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "vlsi-design",
    title: "VLSI Design",
    subtitle: "Chip Architecture",
    color: "from-violet-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?auto=format&fit=crop&w=800&q=80",
    imageHint: "microchip semiconductor",
    description: "Master VLSI chip design from RTL to GDSII. Learn digital & analog design, verification, and physical design flows.",
    topics: ["Verilog / VHDL", "Digital Design", "RTL Design & Synthesis", "Physical Design (PnR)", "DFT & Verification", "Cadence / Synopsys Tools"],
    syllabus: ["Module 1: Digital Electronics & Logic Design", "Module 2: Verilog HDL — Combinational & Sequential", "Module 3: VHDL — Syntax, Testbenches & Simulation", "Module 4: RTL Design & Synthesis with Synopsys DC", "Module 5: Static Timing Analysis & Constraints", "Module 6: Physical Design — Floorplan, PnR & CTS", "Module 7: DFT — Scan Chain, ATPG & BIST", "Module 8: Verification — UVM & SystemVerilog"],
    duration: "16 Weeks", projects: "4+ Design Projects", students: "3k+ Trained", level: "Intermediate to Advanced",
  },
  {
    slug: "iot-robotics",
    title: "IoT & Robotics",
    subtitle: "Connected Machines",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    imageHint: "robot automation iot",
    description: "Build smart connected devices and robotic systems. From sensor networks to autonomous navigation and cloud integration.",
    topics: ["Arduino / Raspberry Pi", "Sensor Networks", "MQTT & CoAP", "ROS (Robot OS)", "Edge Computing", "Cloud IoT Platforms"],
    syllabus: ["Module 1: IoT Architecture & Protocols", "Module 2: Arduino Programming & Sensor Interfacing", "Module 3: Raspberry Pi — Linux, GPIO & Camera", "Module 4: Wireless Protocols — MQTT, CoAP, BLE & LoRa", "Module 5: Edge Computing & Gateway Design", "Module 6: Cloud IoT — AWS IoT Core & Azure IoT Hub", "Module 7: ROS — Navigation, SLAM & Motion Planning", "Module 8: Capstone — Smart IoT/Robotics Project"],
    duration: "14 Weeks", projects: "5+ Live Projects", students: "3k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "signal-processing",
    title: "Signal Processing",
    subtitle: "DSP & Communications",
    color: "from-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    imageHint: "signal processing waveform",
    description: "Master digital signal processing, image processing, and communication systems. From theory to MATLAB/Python implementation.",
    topics: ["DSP Fundamentals", "MATLAB / Python DSP", "Image Processing", "Filter Design", "Communication Systems", "Radar & Antenna"],
    syllabus: ["Module 1: Signals & Systems — Continuous & Discrete", "Module 2: Fourier Transform, DFT & FFT", "Module 3: FIR & IIR Filter Design", "Module 4: MATLAB for DSP & Simulation", "Module 5: Image Processing — Filtering & Segmentation", "Module 6: Adaptive Filters & Statistical DSP", "Module 7: Communication Systems — Modulation & Coding", "Module 8: Radar Signal Processing & Applications"],
    duration: "12 Weeks", projects: "4+ Lab Projects", students: "2k+ Trained", level: "Intermediate to Advanced",
  },
  {
    slug: "pcb-design",
    title: "PCB Design",
    subtitle: "Board Level Engineering",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80",
    imageHint: "pcb printed circuit board",
    description: "Design professional-grade PCBs from schematic capture to manufacturing. Multi-layer, high-speed, and RF board design.",
    topics: ["Altium / KiCad / Eagle", "Schematic Capture", "Multi-layer PCB Layout", "High-Speed Design", "DFM & DFT", "Prototyping & Assembly"],
    syllabus: ["Module 1: PCB Design Fundamentals & EDA Tools", "Module 2: Schematic Capture in Altium / KiCad", "Module 3: Component Libraries & Footprints", "Module 4: Single & Multi-Layer PCB Layout", "Module 5: High-Speed Design — Impedance & Signal Integrity", "Module 6: Power Integrity & Thermal Management", "Module 7: DFM, DFT & Gerber Generation", "Module 8: Prototyping, Assembly & Testing"],
    duration: "10 Weeks", projects: "4+ Board Designs", students: "2k+ Trained", level: "Beginner to Advanced",
  },
  {
    slug: "power-electronics",
    title: "Power Electronics",
    subtitle: "Energy & Drives",
    color: "from-yellow-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=800&q=80",
    imageHint: "power electronics transformer",
    description: "Design power converters, motor drives, and renewable energy systems. From basic converters to advanced grid-tied inverters.",
    topics: ["DC-DC Converters", "Inverters & Rectifiers", "Motor Drives", "PV / Solar Systems", "EV Charging", "Simulation (PSIM / PLECS)"],
    syllabus: ["Module 1: Power Semiconductor Devices & Characteristics", "Module 2: DC-DC Converters — Buck, Boost & Buck-Boost", "Module 3: Rectifiers & Controlled Converters", "Module 4: Inverters — Single & Three Phase", "Module 5: AC & DC Motor Drives", "Module 6: PV Systems & Solar Inverters", "Module 7: EV Charging Infrastructure & BMS", "Module 8: Simulation with PSIM, PLECS & MATLAB"],
    duration: "12 Weeks", projects: "3+ Live Projects", students: "2k+ Trained", level: "Intermediate to Advanced",
  },
  {
    slug: "communication-systems",
    title: "Communication Systems",
    subtitle: "Wireless & Networks",
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&q=80",
    imageHint: "wireless communication antenna",
    description: "Master wireless communication, 5G, satellite systems, and network protocols. From modulation to full system architecture.",
    topics: ["Digital Communication", "5G / LTE", "Antenna Design", "RF Engineering", "Satellite Systems", "Network Protocols"],
    syllabus: ["Module 1: Communication Systems Fundamentals", "Module 2: Analog & Digital Modulation Techniques", "Module 3: Information Theory & Channel Coding", "Module 4: Wireless Communication — 4G LTE & 5G NR", "Module 5: Antenna Design & RF Engineering", "Module 6: Satellite Communication Systems", "Module 7: Optical Fiber Communication", "Module 8: Network Protocols & System Design"],
    duration: "12 Weeks", projects: "3+ Lab Projects", students: "2k+ Trained", level: "Intermediate to Advanced",
  },
]

export default function ECEECCoursePage() {
  const params = useParams()
  const courseSlug = params.course as string
  const course = courses.find((c) => c.slug === courseSlug)

  if (!course) {
    notFound()
  }

  return (
    <CourseDetailPage
      course={course}
      category="ece-ec"
      categoryLabel="ECE / EC Programs"
      categoryColor="from-teal-600 to-emerald-600"
    />
  )
}
