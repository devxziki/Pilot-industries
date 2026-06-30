"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { HardHat, Construction, Building2, Handshake } from "lucide-react"

const industries = [
  {
    icon: HardHat,
    title: "Builders",
    description: "Reliable POP supply for residential & commercial projects.",
  },
  {
    icon: Construction,
    title: "Contractors",
    description: "Consistent quality batch after batch for your workforce.",
  },
  {
    icon: Building2,
    title: "Construction Companies",
    description: "Bulk orders with dependable delivery schedules.",
  },
  {
    icon: Handshake,
    title: "Dealers",
    description: "Competitive pricing and strong distribution support.",
  },
]

const areas = [
  { name: "Gujarat", description: "Our home state — fast delivery across all districts." },
  { name: "Mumbai", description: "Reliable supply to Maharashtra's largest market." },
  { name: "All Over India", description: "Pan-India delivery network for bulk orders." },
]

export function Industries() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Trusted by professionals across the construction ecosystem."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-accent/20">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent-secondary/0 group-hover:from-accent/5 group-hover:to-accent-secondary/5 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 mx-auto h-14 w-14 rounded-xl bg-accent-secondary/10 dark:bg-accent-secondary/15 flex items-center justify-center mb-5 group-hover:bg-accent-secondary transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent-secondary/20">
                    <item.icon className="h-7 w-7 text-accent-secondary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="relative z-10 font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Service Area
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {areas.map((area) => (
              <motion.div
                key={area.name}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-border bg-surface p-5 text-center hover:shadow-lg transition-all duration-300 hover:border-accent/20"
              >
                <p className="font-semibold text-foreground text-sm">{area.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
