"use client"

import { useRef } from "react"
import { Container } from "@/components/shared/Container"
import { motion, useInView } from "framer-motion"
import { Counter } from "@/components/shared/Counter"

const stats = [
  { value: 11, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Quality Tested" },
  { value: 0, suffix: "", label: "India Supply", prefix: "Pan" },
  { value: 0, suffix: "+", label: "Bulk Orders", staticText: "1000+" },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" })

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <Container>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-surface to-accent/5 p-8 md:p-12 shadow-lg">
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-center md:px-8"
              >
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16">
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent">
                  {stat.staticText ? (
                    <span>{stat.staticText}</span>
                  ) : (
                    <>
                      {stat.prefix && <span>{stat.prefix} </span>}
                      {stat.value > 0 && <Counter from={0} to={stat.value} isInView={isInView} />}
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </>
                  )}
                </div>
                <p className="mt-3 text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
