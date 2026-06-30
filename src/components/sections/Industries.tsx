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
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <Container>
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
            >
              <Card className="h-full text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-gray-100 dark:border-gray-800">
                <CardContent className="p-8">
                  <div className="mx-auto h-14 w-14 rounded-xl bg-[#0F3D5E]/5 dark:bg-[#0F3D5E]/20 flex items-center justify-center mb-5 group-hover:bg-[#0F3D5E] transition-colors duration-300">
                    <item.icon className="h-7 w-7 text-[#0F3D5E] dark:text-[#F5A623] group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#0F3D5E] dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
          <h3 className="text-center text-lg font-semibold text-[#0F3D5E] dark:text-white mb-8">
            Service Area
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {areas.map((area) => (
              <div
                key={area.name}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 text-center hover:shadow-sm transition-shadow"
              >
                <p className="font-semibold text-[#0F3D5E] dark:text-white text-sm">{area.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{area.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
