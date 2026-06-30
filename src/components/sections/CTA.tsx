"use client"

import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D5E] via-[#0a2d45] to-[#061f30]" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(245, 166, 35, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(245, 166, 35, 0.06) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
          animation: "gradient-shift 10s ease-in-out infinite alternate",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-3xl animate-pulse-glow" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-gray-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#F5A623]" />
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-[1.1]">
            Need Premium Quality{" "}
            <span className="text-[#F5A623]">Plaster of Paris</span>?
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            Get in touch with us today. We&apos;re ready to serve you with the best quality POP Gypsum at competitive prices.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="accent"
              size="xl"
              className="gap-2 shadow-lg shadow-[#F5A623]/20 hover:shadow-xl hover:shadow-[#F5A623]/30"
              asChild
            >
              <a href="tel:+919974636384">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              variant="white"
              size="xl"
              className="gap-2 shadow-lg shadow-black/10"
              asChild
            >
              <a
                href="https://wa.me/919974636384"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Or call Maheshbhai directly at{" "}
            <a href="tel:+919974636384" className="text-white font-medium hover:text-[#F5A623] transition-colors">
              +91 99746 36384
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
