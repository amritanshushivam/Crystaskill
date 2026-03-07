"use client"

import * as React from "react"

interface AnimatedCounterProps {
  value: string
  label: string
  delay?: number
}

export function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = React.useState("0")
  const [hasAnimated, setHasAnimated] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setDisplayValue(value)
            setHasAnimated(true)
          }, delay * 1000)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.5 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [value, delay, hasAnimated])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-2xl sm:text-3xl font-bold text-primary transition-all duration-700">
        {displayValue}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  )
}
