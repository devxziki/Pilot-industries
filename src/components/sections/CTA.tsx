"use client"

import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground leading-[1.1]">
            Need Premium Quality{" "}
            <span className="text-accent">Plaster of Paris</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Get in touch with us today. We&apos;re ready to serve you with the best quality POP Gypsum at competitive prices.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="accent"
              size="xl"
              className="gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              asChild
            >
              <a href="tel:+919974636384">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              variant="outline"
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

          <p className="mt-6 text-sm text-muted-foreground">
            Or call Maheshbhai directly at{" "}
            <a href="tel:+919974636384" className="text-foreground font-medium hover:text-accent transition-colors">
              +91 99746 36384
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
