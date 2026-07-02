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
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading leading-[1.15]",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed max-w-xl",
            centered && "mx-auto",
            light
              ? "text-gray-300"
              : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={cn("relative mt-8 flex items-center gap-2", centered && "justify-center")}>
        <span className={cn("h-0.5 w-8 rounded-full", light ? "bg-white/20" : "bg-border")} />
        <span className={cn("h-0.5 w-12 rounded-full bg-accent")} />
        <span className={cn("h-0.5 w-8 rounded-full", light ? "bg-white/20" : "bg-border")} />
      </div>
    </motion.div>
  )
}
