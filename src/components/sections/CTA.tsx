"use client"

import { Container } from "@/components/shared/Container"
import { FadeInView } from "@/components/shared/FadeInView"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, ShieldCheck, FileText } from "lucide-react"
import { useInquiry } from "@/components/dialogs/inquiry-dialog"

export function CTA() {
  const { openInquiry } = useInquiry()
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <Container className="relative z-10">
        <FadeInView
          duration={500}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground leading-[1.1]">
            Ready to Order{" "}
            <span className="text-accent">Premium POP Gypsum</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get in touch with us today. We&apos;re ready to serve you with the best quality POP Gypsum at competitive prices with reliable delivery.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" /> Quality Assured
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" /> 7:00 AM - 7:00 PM
            </span>
          </div>

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
              variant="outline-accent"
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
            <Button
              variant="primary"
              size="xl"
              className="gap-2 shadow-lg shadow-primary/20"
              onClick={openInquiry}
            >
              <FileText className="h-5 w-5" />
              Request a Quote
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Call Maheshbhai{" "}
            <a href="tel:+919974636384" className="text-foreground font-semibold hover:text-accent transition-colors">
              +91 99746 36384
            </a>
            {" / "}Deep Bhai{" "}
            <a href="tel:+919724584695" className="text-foreground font-semibold hover:text-accent transition-colors">
              +91 97245 84695
            </a>
          </p>
        </FadeInView>
      </Container>
    </section>
  )
}
