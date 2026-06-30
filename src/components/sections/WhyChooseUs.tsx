"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
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
    <section className="relative py-20 md:py-28 overflow-hidden" id="quality">
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

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
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden transition-all duration-500",
          "before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500",
          "before:bg-gradient-to-br before:from-accent/5 before:via-transparent before:to-accent-secondary/5",
          "hover:before:opacity-100 group-hover:shadow-xl group-hover:-translate-y-1",
          "hover:border-accent/20"
        )}
      >
        <CardContent className="relative z-10 p-6">
          <div
            className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center mb-4",
              "transition-all duration-500",
              "bg-accent-secondary/10 dark:bg-accent-secondary/15",
              "group-hover:bg-accent-secondary dark:group-hover:bg-accent-secondary",
              "group-hover:shadow-lg group-hover:shadow-accent-secondary/20"
            )}
          >
            <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            <Icon
              className={cn(
                "h-6 w-6 transition-all duration-500",
                "text-accent-secondary",
                "group-hover:text-white",
                "group-hover:scale-110"
              )}
            />
          </div>
          <h3 className="font-semibold text-foreground mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </CardContent>

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[2px] rounded-full",
            "bg-gradient-to-r from-transparent via-accent/0 to-transparent",
            "group-hover:via-accent/40 transition-all duration-500"
          )}
        />
      </Card>
    </motion.div>
  )
}
