"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Truck,
  BadgePercent,
  Sparkles,
  Package,
  Star,
  FlaskConical,
} from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "High Quality",
    description: "Premium-grade POP Gypsum manufactured to industry standards.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable and timely delivery across Gujarat, Mumbai, and all over India.",
  },
  {
    icon: BadgePercent,
    title: "Affordable Pricing",
    description: "Competitive prices without compromising on quality.",
  },
  {
    icon: Sparkles,
    title: "Fine Finish",
    description: "Smooth, consistent texture for professional results every time.",
  },
  {
    icon: Package,
    title: "Strong Packaging",
    description: "Durable packaging ensures product safety during transit.",
  },
  {
    icon: Star,
    title: "Trusted Brand",
    description: "Preferred by builders, contractors, and dealers across India.",
  },
  {
    icon: FlaskConical,
    title: "Daily Quality Testing",
    description: "Every batch is tested in-house to maintain consistent quality.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-950" id="quality">
      <Container>
        <SectionHeading
          title="Why Choose Us"
          subtitle="We deliver quality you can trust, consistency you can rely on."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-gray-100 dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-[#0F3D5E]/5 dark:bg-[#0F3D5E]/20 flex items-center justify-center mb-4 group-hover:bg-[#0F3D5E] transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-[#0F3D5E] dark:text-[#F5A623] group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-[#0F3D5E] dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
