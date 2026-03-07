"use client"

import * as React from "react"

interface StaggeredItemProps {
  children: React.ReactNode
  index: number
  baseDelay?: number
}

export function StaggeredItem({ children, index, baseDelay = 0.05 }: StaggeredItemProps) {
  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: `${baseDelay + index * 0.05}s`,
      }}
    >
      {children}
    </div>
  )
}
