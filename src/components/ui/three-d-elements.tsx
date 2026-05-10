"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

/* ─── 3D Tilt Card ─────────────────────────────────────────
   Wraps any content. Tilts on mouse hover with 3D perspective.
   Glare disabled by default for perf. Mousemove throttled via rAF. */
export function TiltCard({
  children,
  className = "",
  tiltAmount = 8,
  glare = false,
}: {
  children: React.ReactNode
  className?: string
  tiltAmount?: number
  glare?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef(0)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), {
    stiffness: 300,
    damping: 30,
  })

  const glareX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100])

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) { rafRef.current = 0; return }
      const rect = ref.current.getBoundingClientRect()
      x.set((e.clientX - rect.left) / rect.width - 0.5)
      y.set((e.clientY - rect.top) / rect.height - 0.5)
      rafRef.current = 0
    })
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
            ),
          }}
        />
      )}
    </motion.div>
  )
}

/* ─── Floating 3D Orb ──────────────────────────────────────
   Pure CSS animation — no JS overhead */
export function FloatingOrb({
  size = 120,
  color = "from-accent/30 to-amber-400/20",
  blur = 40,
  delay = 0,
  duration = 8,
  className = "",
  x = 0,
  y = 0,
}: {
  size?: number
  color?: string
  blur?: number
  delay?: number
  duration?: number
  className?: string
  x?: number | string
  y?: number | string
}) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        willChange: "transform, opacity",
        animation: `floatOrb ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      <div
        className={`w-full h-full rounded-full bg-gradient-to-br ${color}`}
        style={{ filter: `blur(${blur}px)` }}
      />
    </div>
  )
}

/* ─── 3D Rotating Ring ─────────────────────────────────────
   Pure CSS rotation — GPU composited */
export function RotatingRing({
  size = 200,
  color = "border-accent/10",
  duration = 20,
  delay = 0,
  className = "",
}: {
  size?: number
  color?: string
  duration?: number
  delay?: number
  className?: string
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size, perspective: 800 }}
    >
      <div
        className={`w-full h-full rounded-full border-2 ${color}`}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          animation: `spin3d ${duration}s linear ${delay}s infinite`,
        }}
      />
      <div
        className={`absolute inset-2 rounded-full border ${color}`}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          animation: `spin3dReverse ${duration * 0.8}s linear ${delay}s infinite`,
        }}
      />
    </div>
  )
}

/* ─── Floating Particles ──────────────────────────────────
   Pure CSS — reduced count for perf */
export function FloatingParticles({
  count = 10,
  className = "",
}: {
  count?: number
  className?: string
}) {
  const particles = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-accent/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            willChange: "transform",
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Animated Grid Background ─────────────────────────────
   Pure CSS animation */
export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.06) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          animation: "gridScroll 20s linear infinite",
        }}
      />
      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  )
}

/* ─── 3D Morphing Blob ─────────────────────────────────────
   Pure CSS morphing — no JS, reduced blur */
export function MorphBlob({
  size = 400,
  className = "",
  color = "bg-gradient-to-br from-accent/8 via-blue-500/5 to-violet-500/8",
}: {
  size?: number
  className?: string
  color?: string
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        willChange: "transform, border-radius",
        animation: "morphBlob 20s ease-in-out infinite",
      }}
    >
      <div className={`w-full h-full ${color} rounded-[inherit] blur-2xl`} />
    </div>
  )
}

/* ─── Glowing Line ─────────────────────────────────────────
   Pure CSS animated glowing line divider */
export function GlowingLine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-px overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div
        className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        style={{ animation: "glowSlide 5s ease-in-out infinite" }}
      />
    </div>
  )
}

/* ─── 3D Perspective Wrapper ───────────────────────────────
   Adds scroll-based 3D rotation to any section (keeps Framer — scroll-triggered, runs once) */
export function Perspective3D({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 8, y: 60 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
