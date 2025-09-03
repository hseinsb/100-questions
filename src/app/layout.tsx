import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { HeaderSticky } from '@/components/HeaderSticky'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Analytics } from './analytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const sora = Sora({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
  variable: '--font-sora'
})

export const metadata: Metadata = {
  title: '100 Questions for Relationship Compatibility — Ask what matters before you commit',
  description: 'Not just 100 questions—each includes 3 expert interpretations so you can decode answers, spot values and red flags, and choose with clarity.',
  keywords: 'relationship compatibility, dating questions, marriage preparation, relationship guide, compatibility test',
  authors: [{ name: 'Hussein Sbeiti' }],
  creator: 'Hussein Sbeiti',
  publisher: 'Hussein Sbeiti',
  openGraph: {
    title: '100 Questions for Relationship Compatibility',
    description: 'Ask what matters before you commit. Get expert interpretations to decode answers and spot red flags.',
    type: 'website',
    locale: 'en_US',
    siteName: '100 Questions for Relationship Compatibility',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '100 Questions for Relationship Compatibility Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100 Questions for Relationship Compatibility',
    description: 'Ask what matters before you commit. Get expert interpretations to decode answers and spot red flags.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "100 Questions for Relationship Compatibility",
              "description": "Not just 100 questions—each includes 3 expert interpretations so you can decode answers, spot values and red flags, and choose with clarity.",
              "brand": {
                "@type": "Brand",
                "name": "Hussein Sbeiti"
              },
              "offers": {
                "@type": "Offer",
                "price": "9.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Person",
                  "name": "Hussein Sbeiti"
                }
              },
              "image": "/product-image.jpg"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        <HeaderSticky />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
