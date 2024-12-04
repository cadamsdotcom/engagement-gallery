import { Cormorant_Garamond, Dancing_Script } from 'next/font/google'
import SpotlightGallery from '@/components/SpotlightGallery'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

const melbourneImages = [
  { src: 'https://picsum.photos/seed/melb1/800/600', alt: 'Melbourne engagement party 1' },
  { src: 'https://picsum.photos/seed/melb2/600/800', alt: 'Melbourne engagement party 2' },
  { src: 'https://picsum.photos/seed/melb3/800/800', alt: 'Melbourne engagement party 3' },
  { src: 'https://picsum.photos/seed/melb4/900/600', alt: 'Melbourne engagement party 4' },
  { src: 'https://picsum.photos/seed/melb5/600/900', alt: 'Melbourne engagement party 5' },
]

const sydneyImages = [
  { src: 'https://picsum.photos/seed/syd1/800/600', alt: 'Sydney engagement party 1' },
  { src: 'https://picsum.photos/seed/syd2/600/800', alt: 'Sydney engagement party 2' },
  { src: 'https://picsum.photos/seed/syd3/900/600', alt: 'Sydney engagement party 3' },
  { src: 'https://picsum.photos/seed/syd4/800/800', alt: 'Sydney engagement party 4' },
  { src: 'https://picsum.photos/seed/syd5/600/900', alt: 'Sydney engagement party 5' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-20 animate-twinkle"></div>
      <main className={`relative container mx-auto px-4 py-8 ${cormorantGaramond.variable} ${dancingScript.variable} font-serif`}>
        <h1 className="text-5xl font-dancing text-center mb-4 text-gray-800">Chris & Leah</h1>
        <h2 className="text-3xl text-center mb-8 text-gray-600">Thank you for joining us</h2>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">Melbourne - November 9th, 2024</h3>
          <p className="text-center mb-6 text-gray-600">Thanks for celebrating our engagement with us in Melbourne</p>
          <SpotlightGallery images={melbourneImages} title="Melbourne Engagement Party" />
        </section>

        <section>
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">Sydney - November 23rd, 2024</h3>
          <p className="text-center mb-6 text-gray-600">Thanks for celebrating our engagement with us in Sydney</p>
          <SpotlightGallery images={sydneyImages} title="Sydney Engagement Party" />
        </section>
      </main>
    </div>
  )
}

