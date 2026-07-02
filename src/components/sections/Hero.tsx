"use client"

import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const headlineWords = [
  { text: "Premium", className: "text-foreground" },
  { text: "Quality", className: "text-foreground" },
  { text: "Plaster of Paris", className: "text-accent" },
  { text: "Manufacturer", className: "text-foreground" },
  { text: "Since 2015", className: "text-muted-foreground" },
]

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={cn("absolute rounded-full pointer-events-none", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.1, 1] }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <FloatingOrb className="w-64 h-64 -top-20 -right-20 bg-accent/15 dark:bg-accent/10 blur-3xl" delay={0} />
      <FloatingOrb className="w-96 h-96 -bottom-32 -left-32 bg-primary/10 dark:bg-primary/15 blur-3xl" delay={2} />
      <FloatingOrb className="w-48 h-48 top-1/3 right-1/4 bg-accent/8 dark:bg-accent/5 blur-3xl" delay={4} />

      <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Established 2015 &middot; 11+ Years Experience
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.1] tracking-tight">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`inline-block mr-[0.3em] last:mr-0 ${word.className}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Delivering high-quality POP Gypsum with strict quality control, reliable manufacturing, and dependable supply across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button variant="accent" size="lg" className="gap-2 shadow-lg shadow-accent/20" asChild>
                <a href="tel:+919974636384">
                  <Phone className="h-5 w-5" />
                  Call Maheshbhai
                </a>
              </Button>
              <Button variant="outline-accent" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/919974636384" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="primary" size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
                <a href="#products">
                  <FileText className="h-5 w-5" />
                  Request Quote
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-surface bg-muted ring-2 ring-border"
                    />
                  ))}
                </div>
                <span>Serving <strong className="text-foreground">Pan India</strong></span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-surface shadow-2xl">
                <Image
                  src="/pilotindustriesproduct1.jpeg"
                  alt="Pilot Industries - Premium POP Gypsum Manufacturing"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Premium POP Gypsum</p>
                  <p className="text-white/70 text-sm">Manufacturing Excellence Since 2015</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
