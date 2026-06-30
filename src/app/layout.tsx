import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
  robots: {
    index: true,
    follow: true,
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
