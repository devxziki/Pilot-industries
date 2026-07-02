"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

interface ThemeToggleProps {
  className?: string
  light?: boolean
}

export function ThemeToggle({ className, light }: ThemeToggleProps) {
  const mounted = useHydrated()
  const { theme, setTheme } = useTheme()

  if (!mounted) {
    return (
      <div className={cn("h-9 w-9 rounded-lg", light ? "border border-white/20" : "border border-border", className)} />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200",
        light
          ? "border border-white/20 text-white hover:bg-white/10"
          : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted",
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
