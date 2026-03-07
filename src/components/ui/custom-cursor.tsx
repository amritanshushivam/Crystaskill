"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  
  const mouseX = useSpring(0, { damping: 25, stiffness: 300 })
  const mouseY = useSpring(0, { damping: 25, stiffness: 300 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] drop-shadow-xl"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transform -translate-x-1 -translate-y-1"
      >
        <path 
          d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
          fill="black" 
          stroke="white" 
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}
