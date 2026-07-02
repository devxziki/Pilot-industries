"use client"

import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Package, Phone, FileText } from "lucide-react"

const features = [
  "Premium quality POP Gypsum",
  "Consistent setting time",
  "Superior whiteness & purity",
  "Fine & smooth finish",
  "Ideal for construction & decoration",
  "Available in bulk quantities",
]

export function Products() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="products">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Our Product"
          subtitle="Premium POP Gypsum — the backbone of quality construction."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 rounded-2xl border border-border overflow-hidden shadow-lg bg-surface group"
          >
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4 w-fit">
                <Package className="h-3 w-3" />
                Best Seller
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                POP Gypsum
              </h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Our flagship product. Manufactured with precision, tested for quality, and trusted by thousands of professionals across India.
              </p>

              <ul className="mt-6 space-y-3">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 mt-0.5 shrink-0">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="accent" size="md" className="gap-2 shadow-lg shadow-accent/15" asChild>
                  <a href="tel:+919974636384">
                    <Phone className="h-4 w-4" />
                    Request Call
                  </a>
                </Button>
                <Button variant="primary" size="md" className="gap-2" asChild>
                  <a href="#contact">
                    <FileText className="h-4 w-4" />
                    Inquiry
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative order-1 md:order-2 overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl blur-xl opacity-60" />
              <div className="relative h-full">
                <Image
                  src="/pilotindustriesproduct2.jpeg"
                  alt="Premium POP Gypsum Product"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold tracking-wide">POP Gypsum</p>
                  <p className="text-white/60 text-sm">Premium Grade</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
