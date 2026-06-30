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
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          title="Our Manufacturing Process"
          subtitle="From raw material to finished product — quality at every step."
        />

        <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#F5A623] via-[#F5A623]/50 to-[#F5A623]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto h-24 w-24 rounded-2xl bg-[#0F3D5E]/5 dark:bg-[#0F3D5E]/20 flex items-center justify-center mb-6 border-2 border-white dark:border-gray-950 shadow-sm">
                <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[#F5A623] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>
                <step.icon className="h-10 w-10 text-[#0F3D5E] dark:text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-[#0F3D5E] dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
