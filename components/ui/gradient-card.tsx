"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GradientCardProps {
  children: ReactNode
  className?: string
  delay?: number
  gradient?: string
}

export function GradientCard({
  children,
  className = "",
  delay = 0,
  gradient = "from-white/80 to-white/40",
}: GradientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}
        backdrop-blur-xl border border-white/20 shadow-xl
        hover:shadow-2xl transition-all duration-300
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
