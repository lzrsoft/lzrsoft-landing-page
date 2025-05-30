"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FloatingElement({ children, delay = 0, duration = 6 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
