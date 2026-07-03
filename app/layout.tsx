import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Say Tian Hng — Sacred Craft Since 1841',
  description: 'Singapore\'s premier sacred craft heritage house. Sacred Custodianship & Global Heritage Brand.',
  keywords: 'Say Tian Hng, Singapore heritage, Buddha statues, sacred craft, custodianship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
