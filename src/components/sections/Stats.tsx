"use client"

import { useRef } from "react"
import { Container } from "@/components/shared/Container"
import { motion, useInView } from "framer-motion"
import { Counter } from "@/components/shared/Counter"

const stats = [
  { value: 11, suffix: "+", label: "Years Experience", prefix: "" },
  { value: 100, suffix: "%", label: "Quality Tested", prefix: "" },
  { value: 0, suffix: "", label: "India Supply", prefix: "Pan" },
  { value: 0, suffix: "+", label: "Bulk Orders", prefix: "", staticText: "1000+" },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-[#0F3D5E]">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-[#F5A623]">
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
              <p className="mt-2 text-sm md:text-base text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
