"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading",
          light ? "text-white" : "text-[#0F3D5E] dark:text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light
              ? "text-gray-300"
              : "text-gray-600 dark:text-gray-300"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className="relative mt-6 flex items-center justify-center gap-1.5">
        <span className={cn("h-1 w-3 rounded-full", light ? "bg-white/20" : "bg-gray-300 dark:bg-gray-700")} />
        <span className={cn("h-1 w-10 rounded-full bg-[#F5A623]", centered && "mx-auto")} />
        <span className={cn("h-1 w-3 rounded-full", light ? "bg-white/20" : "bg-gray-300 dark:bg-gray-700")} />
      </div>
    </motion.div>
  )
}
