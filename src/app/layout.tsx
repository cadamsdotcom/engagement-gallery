import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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
      <head>
        <link
          rel="stylesheet"
          href="https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/css/spotlight.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/js/spotlight.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}