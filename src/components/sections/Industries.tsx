"use client"

import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { Card, CardContent } from "@/components/ui/card"
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
            <FadeInView key={item.title} delay={index * 100} duration={400} y={20}>
              <Card className="h-full text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/20 group/card">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-primary/0 group-hover/card:from-accent/5 group-hover/card:to-primary/5 transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 mx-auto h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover/card:bg-accent transition-all duration-500 group-hover/card:shadow-lg group-hover/card:shadow-accent/20">
                    <item.icon className="h-7 w-7 text-accent group-hover/card:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="relative z-10 font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInView>
          ))}
        </div>

        <FadeInView duration={400} className="mt-16">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Service Area
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {areas.map((area) => (
              <div
                key={area.name}
                className="rounded-xl border border-border bg-surface p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/20"
              >
                <p className="font-semibold text-foreground">{area.name}</p>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </Container>
    </section>
  )
}
