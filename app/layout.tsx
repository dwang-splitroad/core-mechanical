// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://coremechanical.com'),
  title: {
    default: 'Core Mechanical - Premier HVAC & Mechanical Services | Northern Indiana',
    template: '%s | Core Mechanical'
  },
  description: 'Core Mechanical provides expert HVAC, plumbing, refrigeration, and mechanical services throughout Northern Indiana. Serving commercial, industrial, and institutional facilities with 24/7 emergency service, preventive maintenance, and energy-efficient solutions.',
  keywords: ['HVAC services', 'mechanical contractor', 'plumbing services', 'refrigeration repair', 'boiler service', 'Northern Indiana', 'commercial HVAC', 'industrial mechanical', 'emergency repair', 'preventive maintenance'],
  authors: [{ name: 'Core Mechanical' }],
  creator: 'Core Mechanical',
  publisher: 'Core Mechanical',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coremechanical.com',
    siteName: 'Core Mechanical',
    title: 'Core Mechanical - Premier HVAC & Mechanical Services | Northern Indiana',
    description: 'Expert HVAC, plumbing, refrigeration, and mechanical services throughout Northern Indiana. 24/7 emergency service, preventive maintenance, and energy-efficient solutions.',
    images: [
      {
        url: '/core-logo-no-inc.svg',
        width: 300,
        height: 84,
        alt: 'Core Mechanical Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Core Mechanical - Premier HVAC & Mechanical Services | Northern Indiana',
    description: 'Expert HVAC, plumbing, refrigeration, and mechanical services throughout Northern Indiana. 24/7 emergency service and preventive maintenance.',
    images: ['/core-logo-no-inc.svg'],
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  icons: {
    icon: [
      { url: '/core-logo-no-inc.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/core-logo-no-inc.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/core-logo-no-inc.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: ['/core-logo-no-inc.svg'],
  },
  manifest: '/manifest.json',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Core Mechanical',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#1a365d',
    'theme-color': '#1a365d',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* <Header /> */}
        {children}
        <Analytics />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Core Mechanical',
              description: 'Premier HVAC, plumbing, refrigeration, and mechanical services throughout Northern Indiana. Serving commercial, industrial, and institutional facilities.',
              url: 'https://coremechanical.com',
              logo: 'https://coremechanical.com/core-logo-no-inc.svg',
              image: 'https://coremechanical.com/core-logo-no-inc.svg',
              telephone: '+1-574-555-0123',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Northern Indiana',
                addressRegion: 'IN',
                addressCountry: 'US'
              },
              areaServed: 'Northern Indiana',
              serviceType: ['HVAC Services', 'Plumbing Services', 'Refrigeration Services', 'Boiler Services', 'Mechanical Contracting', 'Emergency Repair Services'],
              sameAs: []
            })
          }}
        />
      </body>
    </html>
  )
}
