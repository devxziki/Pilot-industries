"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/shared/Container"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { Button } from "@/components/ui/button"
import { useInquiry } from "@/components/dialogs/inquiry-dialog"
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
  const { openInquiry } = useInquiry()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-background/70 backdrop-blur-md border-b border-border",
        scrolled && "bg-background/90 shadow-sm"
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14 md:h-16" : "h-16 md:h-18"
          )}
        >
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <Image
              src="/pilotindustrieslogo.jpeg"
              alt="Pilot Industries Logo"
              width={140}
              height={44}
              className="h-9 w-auto dark:brightness-[1.1]"
              priority
              sizes="140px"
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  "text-muted-foreground hover:text-foreground",
                  "after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[2px] after:rounded-full",
                  "after:bg-accent after:scale-x-0 after:opacity-0",
                  "hover:after:scale-x-100 hover:after:opacity-100",
                  "after:transition-all after:duration-300"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 flex items-center gap-2">
              <Button variant="outline-accent" size="sm" onClick={openInquiry}>
                Inquire
              </Button>
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-surface/95 backdrop-blur-xl border-b border-border shadow-lg transition-all duration-300",
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
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-1">
              <Button variant="outline-accent" size="md" className="w-full" onClick={() => { setMobileOpen(false); openInquiry(); }}>
                Inquire
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
