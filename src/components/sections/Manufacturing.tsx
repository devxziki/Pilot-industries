"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { motion } from "framer-motion"
import { ShieldCheck, FlaskConical, Package, Truck } from "lucide-react"

const steps = [
  {
    icon: ShieldCheck,
    title: "Raw Material",
    description: "Sourcing premium-grade gypsum from trusted suppliers.",
  },
  {
    icon: FlaskConical,
    title: "Quality Testing",
    description: "Every batch undergoes rigorous laboratory testing.",
  },
  {
    icon: Package,
    title: "Manufacturing",
    description: "State-of-the-art processing for consistent quality.",
  },
  {
    icon: Truck,
    title: "Packaging & Dispatch",
    description: "Strong packaging and timely dispatch across India.",
  },
]

export function Manufacturing() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          title="Our Manufacturing Process"
          subtitle="From raw material to finished product — quality at every step."
        />

        <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-accent via-accent/60 to-accent origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto h-24 w-24 rounded-2xl bg-accent-secondary/5 dark:bg-accent-secondary/10 flex items-center justify-center mb-6 border border-surface shadow-lg shadow-accent-secondary/5 dark:shadow-accent-secondary/10 transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-accent/30">
                  {index + 1}
                </div>
                <step.icon className="h-10 w-10 text-accent-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
