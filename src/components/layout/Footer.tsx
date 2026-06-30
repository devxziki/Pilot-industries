"use client"

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
    <footer className="relative bg-[#0F3D5E] text-white overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,166,35,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,61,94,0.3)_0%,transparent_50%)]" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-bold font-heading mb-4 tracking-tight">
              Pilot<span className="text-[#F5A623]"> Industries</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium quality Plaster of Paris manufacturer since 2015. Trusted by builders, contractors, and construction companies across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F5A623]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="h-3 w-3 text-[#F5A623] transition-all duration-300 group-hover:translate-x-1" />
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
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F5A623]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919974636384"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>
                    <span className="block text-xs text-gray-400">Maheshbhai</span>
                    9974636384
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919974965225"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>
                    <span className="block text-xs text-gray-400">Jitubhai</span>
                    9974965225
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilotindustries9697@gmail.com"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0 transition-transform duration-300 group-hover:scale-110" />
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
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F5A623]">
              Address
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0" />
                <span>
                  Survey No. 550, N.H. 8,
                  <br />
                  Opp. Tulsi Hotel, Varediya,
                  <br />
                  Bharuch - 392015, Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Clock className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0" />
                <span>
                  <span className="block text-xs text-gray-400">Working Hours</span>
                  7:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pilot Industries. All rights reserved.</p>
            <p className="text-xs">Premium Plaster of Paris Manufacturer</p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
