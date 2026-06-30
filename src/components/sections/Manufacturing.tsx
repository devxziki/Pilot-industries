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
    <section className="relative py-20 md:py-28 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,61,94,0.03)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.02)_0%,transparent_60%)]" />

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
              className="h-full w-full bg-gradient-to-r from-[#F5A623] via-[#F5A623]/60 to-[#F5A623] origin-left"
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
              <div className="relative z-10 mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-[#0F3D5E]/5 to-[#0F3D5E]/10 dark:from-[#0F3D5E]/20 dark:to-[#0F3D5E]/30 flex items-center justify-center mb-6 border border-white dark:border-gray-950 shadow-lg shadow-[#0F3D5E]/5 dark:shadow-[#0F3D5E]/10 transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[#F5A623] text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-[#F5A623]/30">
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
