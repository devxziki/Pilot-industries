import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { InquiryProvider } from "@/components/dialogs/inquiry-dialog"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Pilot Industries | Premium Plaster of Paris Manufacturer Since 2015",
    template: "%s | Pilot Industries",
  },
  description:
    "Pilot Industries is a trusted Plaster of Paris (POP) manufacturer in Gujarat since 2015. Premium quality POP Gypsum for builders, contractors, and construction companies across India.",
  keywords: [
    "Plaster of Paris manufacturer",
    "POP Gypsum",
    "POP supplier Gujarat",
    "construction material manufacturer",
    "POP Bharuch",
    "Pilot Industries",
    "Plaster of Paris India",
    "building material supplier",
  ],
  authors: [{ name: "Pilot Industries" }],
  openGraph: {
    title: "Pilot Industries | Premium Plaster of Paris Manufacturer",
    description:
      "Premium quality Plaster of Paris manufacturer since 2015. Serving Gujarat, Mumbai, and all over India.",
    url: "https://pilotindustries.com",
    siteName: "Pilot Industries",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/pilotindustrieslogo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ManufacturingOrganization",
      name: "Pilot Industries",
      url: "https://pilotindustries.com",
      logo: "https://pilotindustries.com/pilotindustrieslogo.jpeg",
      description:
        "Premium quality Plaster of Paris (POP) manufacturer since 2015. Serving Gujarat, Mumbai, and all over India.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Survey No. 550, N.H. 8, Opp. Tulsi Hotel, Varediya",
        addressLocality: "Bharuch",
        addressRegion: "Gujarat",
        postalCode: "392015",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9974636384",
          contactType: "sales",
          name: "Maheshbhai",
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9974965225",
          contactType: "sales",
          name: "Jitubhai",
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9724584695",
          contactType: "sales",
          name: "Deep Bhai",
        },
      ],
      foundingDate: "2015",
      areaServed: ["Gujarat", "Maharashtra", "India"],
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('pilot-theme');
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <InquiryProvider>
            {children}
          </InquiryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
