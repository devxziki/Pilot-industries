"use client"

import { Container } from "@/components/shared/Container"
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0F3D5E] text-white" id="contact">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">
              Pilot<span className="text-[#F5A623]"> Industries</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium quality Plaster of Paris manufacturer since 2015. Trusted by builders, contractors, and construction companies across India.
            </p>
          </div>

          <div>
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
                    <ChevronRight className="h-3 w-3 text-[#F5A623] transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F5A623]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919974636384"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0" />
                  <span>
                    <span className="block text-xs text-gray-400">Maheshbhai</span>
                    9974636384
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919974965225"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0" />
                  <span>
                    <span className="block text-xs text-gray-400">Jitubhai</span>
                    9974965225
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilotindustries9697@gmail.com"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#F5A623] shrink-0" />
                  pilotindustries9697@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
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
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pilot Industries. All rights reserved.</p>
            <p className="text-xs">
              Premium Plaster of Paris Manufacturer
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
