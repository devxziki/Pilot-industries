"use client"

import { useRef, useState, useEffect } from "react"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { ShieldCheck, FlaskConical, Package, Truck } from "lucide-react"

const steps = [
  {
    icon: ShieldCheck,
    title: "Raw Material",
    description: "Sourcing premium-grade gypsum from trusted suppliers.",
  },
  {
    icon: FlaskConical,
    title: "Quality Testing",
    description: "Every batch undergoes rigorous laboratory testing.",
  },
  {
    icon: Package,
    title: "Manufacturing",
    description: "State-of-the-art processing for consistent quality.",
  },
  {
    icon: Truck,
    title: "Packaging & Dispatch",
    description: "Strong packaging and timely dispatch across India.",
  },
]

function ProgressLine() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px]">
      <div
        ref={ref}
        className="h-full w-full bg-gradient-to-r from-accent via-accent/60 to-accent origin-left transition-all duration-1500 ease-in-out"
        style={{
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transitionDuration: "1.5s",
          transitionDelay: "0.3s",
        }}
      />
    </div>
  )
}

export function Manufacturing() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      <Container className="relative z-10">
        <SectionHeading
          title="Our Manufacturing Process"
          subtitle="From raw material to finished product — quality at every step."
        />

        <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
          <ProgressLine />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <FadeInView
                key={step.title}
                delay={index * 200}
                duration={500}
                y={30}
                className="relative text-center group"
              >
                <div className="relative z-10 mx-auto h-24 w-24 rounded-2xl bg-surface flex items-center justify-center mb-6 border border-border shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-accent/30 group-hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-accent/30">
                    {index + 1}
                  </div>
                  <Icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </FadeInView>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
