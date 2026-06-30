"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { motion } from "framer-motion"
import { Award, Eye, Users } from "lucide-react"

export function About() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="about">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent-secondary to-accent-secondary-hover flex items-center justify-center border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="text-center p-8 relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <p className="text-white/60 text-sm font-medium tracking-wide">11+ Years of Manufacturing Excellence</p>
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
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded in <strong className="text-foreground">2015</strong> by <strong className="text-foreground">Maheshbhai</strong>, Pilot Industries has grown into a trusted manufacturer of high-quality Plaster of Paris products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience, we combine traditional craftsmanship with modern manufacturing techniques to deliver consistent, premium-quality POP Gypsum to builders, contractors, and construction companies across India.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-border transition-all duration-300 hover:shadow-md hover:border-accent/20"
              >
                <div className="mt-1 h-8 w-8 rounded-lg bg-accent-secondary/10 dark:bg-accent-secondary/15 flex items-center justify-center shrink-0">
                  <Users className="h-4 w-4 text-accent-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Customer First</p>
                  <p className="text-xs text-muted-foreground">We prioritize satisfaction</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-border transition-all duration-300 hover:shadow-md hover:border-accent/20"
              >
                <div className="mt-1 h-8 w-8 rounded-lg bg-accent-secondary/10 dark:bg-accent-secondary/15 flex items-center justify-center shrink-0">
                  <Eye className="h-4 w-4 text-accent-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Our Vision</p>
                  <p className="text-xs text-muted-foreground">Leading Import & Export manufacturer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
