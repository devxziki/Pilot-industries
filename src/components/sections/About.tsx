"use client"

import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { motion } from "framer-motion"
import { Award, Eye, Users } from "lucide-react"

export function About() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="about">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="About Pilot Industries"
          subtitle="A trusted name in Plaster of Paris manufacturing since 2015."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <Image
                  src="/pilotindustriesproduct1.jpeg"
                  alt="Pilot Industries Manufacturing Facility"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white mb-2">
                    <Award className="h-3 w-3" />
                    11+ Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded in <strong className="text-foreground">2015</strong> by <strong className="text-foreground">Maheshbhai</strong>, Pilot Industries has grown into a trusted manufacturer of high-quality Plaster of Paris products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience, we combine traditional craftsmanship with modern manufacturing techniques to deliver consistent, premium-quality POP Gypsum to builders, contractors, and construction companies across India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/20"
              >
                <div className="mt-0.5 h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Customer First</p>
                  <p className="text-xs text-muted-foreground mt-0.5">We prioritize satisfaction</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/20"
              >
                <div className="mt-0.5 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Our Vision</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Leading Import & Export manufacturer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
