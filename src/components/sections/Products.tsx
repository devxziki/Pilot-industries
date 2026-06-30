"use client"

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
    <section className="relative py-20 md:py-28 bg-gray-50 dark:bg-gray-900 overflow-hidden" id="products">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />

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
            className="grid md:grid-cols-2 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm bg-white dark:bg-gray-950 group"
          >
            <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0F3D5E]/5 dark:bg-[#F5A623]/10 px-3 py-1 text-xs font-medium text-[#0F3D5E] dark:text-[#F5A623] mb-4 w-fit border border-[#0F3D5E]/10 dark:border-[#F5A623]/10">
                <Package className="h-3 w-3" />
                Best Seller
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#0F3D5E] dark:text-white">
                POP Gypsum
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Our flagship product. Manufactured with precision, tested for quality, and trusted by thousands of professionals across India.
              </p>

              <ul className="mt-6 space-y-3">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5A623]/10 mt-0.5 shrink-0">
                      <Check className="h-3 w-3 text-[#F5A623]" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="primary" size="md" className="gap-2 shadow-lg shadow-[#0F3D5E]/15" asChild>
                  <a href="tel:+919974636384">
                    <Phone className="h-4 w-4" />
                    Get Quote
                  </a>
                </Button>
                <Button variant="outline" size="md" className="gap-2" asChild>
                  <a href="#contact">
                    <FileText className="h-4 w-4" />
                    Inquiry
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative order-1 md:order-2 overflow-hidden">
              <div className="aspect-[4/3] md:aspect-auto md:h-full bg-gradient-to-br from-[#0F3D5E] to-[#0a2d45] flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center border border-[#F5A623]/20 backdrop-blur-sm">
                    <Package className="w-10 h-10 text-[#F5A623]" />
                  </div>
                  <p className="text-white/80 font-semibold tracking-wide">POP Gypsum</p>
                  <p className="text-white/40 text-sm mt-1">Premium Grade</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
