"use client"

import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const headlineWords = [
  { text: "Premium", className: "text-white" },
  { text: "Quality", className: "text-white" },
  { text: "Plaster of Paris", className: "text-[#F5A623]" },
  { text: "Manufacturer", className: "text-white" },
  { text: "Since 2015", className: "text-white/70" },
]

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={cn("absolute rounded-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D5E] via-[#0a2d45] to-[#061f30]" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(245, 166, 35, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 166, 35, 0.08) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(26, 90, 130, 0.15) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
          animation: "gradient-shift 12s ease-in-out infinite alternate",
        }}
      />

      <FloatingOrb className="w-64 h-64 -top-20 -right-20 bg-[#F5A623]/10 blur-3xl" delay={0} />
      <FloatingOrb className="w-96 h-96 -bottom-32 -left-32 bg-[#0F3D5E]/20 blur-3xl" delay={2} />
      <FloatingOrb className="w-48 h-48 top-1/3 right-1/4 bg-[#F5A623]/5 blur-3xl" delay={4} />

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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-gray-300 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A623] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F5A623]" />
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
              className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Delivering high-quality POP Gypsum with strict quality control, reliable manufacturing, and dependable supply across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="accent" size="lg" className="gap-2 shadow-lg shadow-[#F5A623]/20" asChild>
                <a href="tel:+919974636384">
                  <Phone className="h-4 w-4" />
                  Call Maheshbhai
                </a>
              </Button>
              <Button variant="white" size="lg" className="gap-2 shadow-lg shadow-black/5" asChild>
                <a href="https://wa.me/919974636384" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white hover:text-[#0F3D5E] shadow-lg shadow-black/5"
                asChild
              >
                <a href="#products">Get Quote</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-12 flex items-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[#0F3D5E] bg-gray-200 dark:bg-gray-700 ring-2 ring-[#0F3D5E]/20"
                    />
                  ))}
                </div>
                <span>Serving <strong className="text-white">Pan India</strong></span>
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
              <div
                className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl shadow-[#F5A623]/5"
                style={{
                  boxShadow: "0 0 80px -20px rgba(245, 166, 35, 0.15), inset 0 1px 0 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 via-transparent to-[#0F3D5E]/10 pointer-events-none" />

                <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-[#1a4a6e]/80 to-[#0a2d45]/80 flex items-center justify-center border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="text-center p-8 relative z-10">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center border border-[#F5A623]/20 backdrop-blur-sm">
                      <svg className="w-12 h-12 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <p className="text-white/70 text-sm font-medium tracking-wide">Premium POP Gypsum</p>
                    <p className="text-white/40 text-xs mt-1">Manufacturing Excellence</p>
                  </div>

                  <div className="absolute -inset-[50%] bg-gradient-conic from-[#F5A623]/0 via-[#F5A623]/5 to-[#F5A623]/0 animate-gradient-shift-slow pointer-events-none" />
                </div>

                <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-[#F5A623]/5 rounded-full blur-2xl" />
                <div className="absolute -top-1 -left-1 w-40 h-40 bg-[#0F3D5E]/20 rounded-full blur-2xl" />
              </div>

              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#F5A623]/20 via-transparent to-[#0F3D5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
          <ChevronDown className="h-6 w-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
