import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/spotlight-pr-93.min.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chris & Leah Engagement Party',
  description: 'Celebrating our engagement in Melbourne and Sydney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src="/spotlight-pr-93.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}