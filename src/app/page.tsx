import dynamic from "next/dynamic"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Stats } from "@/components/sections/Stats"
import { ChunkWarmer } from "@/components/layout/ChunkWarmer"
import {
  WhyChooseUsSkeleton,
  ProductsSkeleton,
  ManufacturingSkeleton,
  IndustriesSkeleton,
  CTASkeleton,
} from "@/components/shared/Skeletons"

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then((m) => ({ default: m.WhyChooseUs })), {
  loading: () => <WhyChooseUsSkeleton />,
})

const Products = dynamic(() => import("@/components/sections/Products").then((m) => ({ default: m.Products })), {
  loading: () => <ProductsSkeleton />,
})

const Manufacturing = dynamic(() => import("@/components/sections/Manufacturing").then((m) => ({ default: m.Manufacturing })), {
  loading: () => <ManufacturingSkeleton />,
})

const Industries = dynamic(() => import("@/components/sections/Industries").then((m) => ({ default: m.Industries })), {
  loading: () => <IndustriesSkeleton />,
})

const CTA = dynamic(() => import("@/components/sections/CTA").then((m) => ({ default: m.CTA })), {
  loading: () => <CTASkeleton />,
})

export default function Home() {
  return (
    <>
      <Navbar />
      <ChunkWarmer />
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
