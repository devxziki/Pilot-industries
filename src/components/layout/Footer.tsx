"use client"

import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden bg-muted/30" id="contact">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Image
              src="/pilotindustrieslogo.jpeg"
              alt="Pilot Industries Logo"
              width={160}
              height={50}
              className="h-10 w-auto mb-5 dark:brightness-[1.1]"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium quality Plaster of Paris manufacturer since 2015. Trusted by builders, contractors, and construction companies across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ChevronRight className="h-3 w-3 text-accent transition-all duration-300 group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-accent">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919974636384"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>
                    <span className="block text-xs text-muted-foreground/60">Maheshbhai</span>
                    9974636384
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919974965225"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>
                    <span className="block text-xs text-muted-foreground/60">Jitubhai</span>
                    9974965225
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilotindustries9697@gmail.com"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  pilotindustries9697@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-accent">
              Address
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>
                  Survey No. 550, N.H. 8,
                  <br />
                  Opp. Tulsi Hotel, Varediya,
                  <br />
                  Bharuch - 392015, Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>
                  <span className="block text-xs text-muted-foreground/60">Working Hours</span>
                  7:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Pilot Industries. All rights reserved.</p>
            <p className="text-xs">Premium Plaster of Paris Manufacturer</p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
