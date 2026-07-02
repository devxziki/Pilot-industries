"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  margin?: string
  y?: number
  x?: number
}

export function FadeInView({
  children,
  className,
  delay = 0,
  duration = 500,
  once = true,
  margin = "0px 0px 200px 0px",
  y = 20,
  x = 0,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { rootMargin: margin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, margin])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isVisible ? undefined : `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  )
}
