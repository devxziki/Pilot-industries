"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/shared/Container"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl dark:bg-gray-950/80 shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-bold font-heading tracking-tight">
              <span className={cn(
                "transition-colors duration-300",
                scrolled ? "text-[#0F3D5E] dark:text-white" : "text-white"
              )}>
                Pilot
              </span>
              <span className="text-[#F5A623]"> Industries</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  "after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  scrolled
                    ? "text-gray-700 hover:text-[#0F3D5E] dark:text-gray-300 dark:hover:text-white after:bg-[#0F3D5E] dark:after:bg-white"
                    : "text-white/90 hover:text-white after:bg-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle light={!scrolled} />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle light={!scrolled} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                scrolled
                  ? "border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "border border-white/20 text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-xl dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300",
          scrolled ? "top-14" : "top-16",
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0F3D5E] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  )
}
