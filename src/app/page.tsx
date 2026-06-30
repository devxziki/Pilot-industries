import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Stats } from "@/components/sections/Stats"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Products } from "@/components/sections/Products"
import { Manufacturing } from "@/components/sections/Manufacturing"
import { Industries } from "@/components/sections/Industries"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <WhyChooseUs />
        <Products />
        <Manufacturing />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
