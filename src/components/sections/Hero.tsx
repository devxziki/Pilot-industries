"use client"

import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronDown } from "lucide-react"
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
      <FloatingOrb className="w-96 h-96 -bottom-32 -left-32 bg-accent-secondary/10 dark:bg-accent-secondary/15 blur-3xl" delay={2} />
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-6"
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
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="accent" size="lg" className="gap-2 shadow-lg shadow-accent/20" asChild>
                <a href="tel:+919974636384">
                  <Phone className="h-4 w-4" />
                  Call Maheshbhai
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://wa.me/919974636384" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#products">Get Quote</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative group perspective-[1000px]">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-surface p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 dark:from-accent/3 dark:to-accent-secondary/10 pointer-events-none" />

                <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-accent-secondary to-accent-secondary-hover flex items-center justify-center border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="text-center p-8 relative z-10">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 backdrop-blur-sm">
                      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <p className="text-white/70 text-sm font-medium tracking-wide">Premium POP Gypsum</p>
                    <p className="text-white/40 text-xs mt-1">Manufacturing Excellence</p>
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                <div className="absolute -top-1 -left-1 w-40 h-40 bg-accent-secondary/10 rounded-full blur-2xl" />
              </div>

              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
