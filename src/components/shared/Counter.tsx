"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  from: number
  to: number
  duration?: number
  isInView: boolean
}

export function Counter({ from, to, duration = 2, isInView }: CounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [from, to, duration, isInView])

  return <span>{count}</span>
}
