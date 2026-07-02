"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { Card, CardContent } from "@/components/ui/card"
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
    <FadeInView delay={index * 50} duration={400} y={20}>
      <Card
        className={cn(
          "relative h-full overflow-hidden transition-all duration-500 group/card",
          "before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500",
          "before:bg-gradient-to-br before:from-accent/5 before:via-transparent before:to-primary/5",
          "hover:before:opacity-100",
          "hover:shadow-xl hover:-translate-y-1.5",
          "hover:border-accent/20"
        )}
      >
        <CardContent className="relative z-10 p-6">
          <div
            className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center mb-5",
              "transition-all duration-500",
              "bg-accent/10",
              "group-hover/card:bg-accent",
              "group-hover/card:shadow-lg group-hover/card:shadow-accent/25"
            )}
          >
            <Icon
              className={cn(
                "h-6 w-6 transition-all duration-500",
                "text-accent",
                "group-hover/card:text-white",
                "group-hover/card:scale-110"
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
            "group-hover/card:via-accent/40 transition-all duration-500"
          )}
        />
      </Card>
    </FadeInView>
  )
}
