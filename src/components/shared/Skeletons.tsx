import { cn } from "@/lib/utils"

interface SkeletonBlockProps {
  className?: string
}

function SkeletonBlock({ className }: SkeletonBlockProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-muted dark:bg-muted/50",
        className
      )}
    />
  )
}

export function WhyChooseUsSkeleton() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <SkeletonBlock className="h-10 w-56 mx-auto mb-4" />
          <SkeletonBlock className="h-5 w-80 mx-auto" />
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-6">
              <SkeletonBlock className="h-12 w-12 rounded-xl mb-4" />
              <SkeletonBlock className="h-5 w-28 mb-2" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-3/4 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductsSkeleton() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <SkeletonBlock className="h-10 w-48 mx-auto mb-4" />
          <SkeletonBlock className="h-5 w-72 mx-auto" />
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 rounded-2xl border border-border overflow-hidden">
            <div className="p-8 md:p-12">
              <SkeletonBlock className="h-5 w-24 mb-4" />
              <SkeletonBlock className="h-8 w-48 mb-3" />
              <SkeletonBlock className="h-4 w-full mb-1" />
              <SkeletonBlock className="h-4 w-3/4 mb-6" />
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonBlock key={i} className="h-5 w-full mb-2" />
              ))}
            </div>
            <SkeletonBlock className="aspect-[4/3] md:aspect-auto md:h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ManufacturingSkeleton() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <SkeletonBlock className="h-10 w-72 mx-auto mb-4" />
          <SkeletonBlock className="h-5 w-80 mx-auto" />
        </div>
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-6">
                <SkeletonBlock className="h-24 w-24 rounded-2xl mx-auto" />
              </div>
              <SkeletonBlock className="h-5 w-28 mx-auto mb-2" />
              <SkeletonBlock className="h-4 w-40 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function IndustriesSkeleton() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <SkeletonBlock className="h-10 w-64 mx-auto mb-4" />
          <SkeletonBlock className="h-5 w-80 mx-auto" />
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-8 text-center">
              <SkeletonBlock className="h-14 w-14 rounded-xl mx-auto mb-5" />
              <SkeletonBlock className="h-5 w-24 mx-auto mb-2" />
              <SkeletonBlock className="h-4 w-40 mx-auto" />
            </div>
          ))}
        </div>
        <div className="mt-16">
          <SkeletonBlock className="h-5 w-28 mx-auto mb-8" />
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <SkeletonBlock key={i} className="h-20 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTASkeleton() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <SkeletonBlock className="h-5 w-28 mx-auto mb-6" />
          <SkeletonBlock className="h-12 w-full max-w-lg mx-auto mb-4" />
          <SkeletonBlock className="h-12 w-3/4 mx-auto mb-6" />
          <SkeletonBlock className="h-5 w-64 mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-4">
            <SkeletonBlock className="h-14 w-36 rounded-lg" />
            <SkeletonBlock className="h-14 w-36 rounded-lg" />
            <SkeletonBlock className="h-14 w-40 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
