"use client"

import { useEffect } from "react"

export function ChunkWarmer() {
  useEffect(() => {
    const warm = () => {
      const paths = [
        () => import("@/components/sections/Manufacturing"),
        () => import("@/components/sections/Industries"),
        () => import("@/components/sections/CTA"),
      ]
      for (const p of paths) {
        p().catch(() => {})
      }
    }
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback
    if (ric) {
      ric(warm, { timeout: 2000 })
    } else {
      setTimeout(warm, 2000)
    }
  }, [])
  return null
}
