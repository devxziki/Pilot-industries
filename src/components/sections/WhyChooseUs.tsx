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
    <section className="relative py-20 md:py-28 bg-gray-50 dark:bg-gray-950 overflow-hidden" id="quality">
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-[#0F3D5E]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We deliver quality you can trust, consistency you can rely on."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group perspective-[800px]"
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden transition-all duration-500",
          "before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500",
          "before:bg-gradient-to-br before:from-[#F5A623]/5 before:via-transparent before:to-[#0F3D5E]/5",
          "hover:before:opacity-100 group-hover:shadow-xl group-hover:-translate-y-1",
          "border-gray-100 dark:border-gray-800",
          "hover:border-[#F5A623]/20 dark:hover:border-[#F5A623]/20"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <CardContent className="relative z-10 p-6">
          <div
            className={cn(
              "relative h-12 w-12 rounded-xl flex items-center justify-center mb-4",
              "transition-all duration-500",
              "bg-[#0F3D5E]/5 dark:bg-[#0F3D5E]/20",
              "group-hover:bg-[#0F3D5E] dark:group-hover:bg-[#0F3D5E]",
              "group-hover:shadow-lg group-hover:shadow-[#0F3D5E]/20"
            )}
          >
            <div className="absolute inset-0 rounded-xl bg-[#F5A623]/0 group-hover:bg-[#F5A623]/10 transition-colors duration-500" />
            <feature.icon
              className={cn(
                "h-6 w-6 transition-all duration-500",
                "text-[#0F3D5E] dark:text-[#F5A623]",
                "group-hover:text-white dark:group-hover:text-white",
                "group-hover:scale-110"
              )}
            />
          </div>
          <h3 className="font-semibold text-[#0F3D5E] dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {feature.description}
          </p>
        </CardContent>

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[2px] rounded-full",
            "bg-gradient-to-r from-transparent via-[#F5A623]/0 to-transparent",
            "group-hover:via-[#F5A623]/40 transition-all duration-500"
          )}
        />
      </Card>
    </motion.div>
  )
}

import { cn } from "@/lib/utils"
