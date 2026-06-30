"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { motion } from "framer-motion"
import { Award, Eye, Users } from "lucide-react"

export function About() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900" id="about">
      <Container>
        <SectionHeading
          title="About Pilot Industries"
          subtitle="A trusted name in Plaster of Paris manufacturing since 2015."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0F3D5E] to-[#0a2d45] flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#F5A623]/20 flex items-center justify-center border border-[#F5A623]/30">
                  <Award className="w-10 h-10 text-[#F5A623]" />
                </div>
                <p className="text-white/60 text-sm">11+ Years of Manufacturing Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Founded in <strong>2015</strong> by <strong>Maheshbhai</strong>, Pilot Industries has grown into a trusted manufacturer of high-quality Plaster of Paris products.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over a decade of experience, we combine traditional craftsmanship with modern manufacturing techniques to deliver consistent, premium-quality POP Gypsum to builders, contractors, and construction companies across India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-[#0F3D5E]/10 dark:bg-[#F5A623]/20 flex items-center justify-center shrink-0">
                  <Users className="h-3 w-3 text-[#0F3D5E] dark:text-[#F5A623]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0F3D5E] dark:text-white">Customer First</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">We prioritize satisfaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-[#0F3D5E]/10 dark:bg-[#F5A623]/20 flex items-center justify-center shrink-0">
                  <Eye className="h-3 w-3 text-[#0F3D5E] dark:text-[#F5A623]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0F3D5E] dark:text-white">Our Vision</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Leading Import & Export manufacturer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
