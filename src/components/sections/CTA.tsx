"use client"

import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0F3D5E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
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
              className="gap-2"
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
              className="gap-2"
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
