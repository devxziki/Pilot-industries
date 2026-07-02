import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { FadeInView } from "@/components/shared/FadeInView"
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 99746 36384", href: "tel:+919974636384" },
  { icon: Mail, label: "Email", value: "pilotindustries9697@gmail.com", href: "mailto:pilotindustries9697@gmail.com" },
  { icon: MapPin, label: "Address", value: "B/h. Jay Jalaram Complex, Near Amber Cinema, N.H. 27, Morbi - 363642, Gujarat" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 7:00 AM - 7:00 PM" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-primary-dark/95 text-white/80">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <FadeInView duration={400} className="lg:col-span-4" y={20}>
            <Image
              src="/pilotindustrieslogo.jpeg"
              alt="Pilot Industries Logo"
              width={160}
              height={50}
              className="h-10 w-auto mb-5 dark:brightness-[1.1]"
              sizes="160px"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium Plaster of Paris (POP Gypsum) manufacturer since 2015. Quality-tested, consistent, and reliably delivered across India.
            </p>
          </FadeInView>

          <FadeInView duration={400} delay={100} className="lg:col-span-2" y={20}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    <ChevronRight className="h-3 w-3 text-accent/60 group-hover:text-accent transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView duration={400} delay={200} className="lg:col-span-3" y={20}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400 leading-relaxed">
                      {item.href ? (
                        <a href={item.href} className="hover:text-accent transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          </FadeInView>

          <FadeInView duration={400} delay={300} className="lg:col-span-3" y={20}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Have a question or want to place a bulk order? We&apos;re here to help.
            </p>
            <a
              href="tel:+919974636384"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/20"
            >
              <Phone className="h-4 w-4" />
              Call +91 99746 36384
            </a>
          </FadeInView>
        </div>
      </Container>

      <div className="relative border-t border-white/5">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500">
              &copy; {currentYear} Pilot Industries. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Premium Plaster of Paris (POP Gypsum) Manufacturer in Morbi, Gujarat.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
