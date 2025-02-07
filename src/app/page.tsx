'use client'

import { useState } from 'react';
import { Cormorant_Garamond, Dancing_Script } from 'next/font/google'
import SpotlightGallery from '@/components/SpotlightGallery'
import { photosMelbourneOurs, photosMelbourneTristan, photosSydneyOurs, photosSydneyJames } from './constants'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

export default function Home() {
  const [activeCity, setActiveCity] = useState<'melbourne' | 'sydney'>('melbourne');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-20 animate-twinkle"></div>
      <main className={`relative container mx-auto px-4 py-8 ${cormorantGaramond.variable} ${dancingScript.variable} font-serif`}>
        <h1 className="text-5xl font-dancing text-center mb-4 text-gray-800">Leah & Chris' Engagement Celebration Photos</h1>
        <h2 className="text-2xl font-dancing text-center mb-8 text-gray-600">Thankyou for joining us</h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveCity('melbourne')}
            className={`px-4 py-2 rounded ${activeCity === 'melbourne' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
              }`}
          >
            Melbourne
          </button>
          <button
            onClick={() => setActiveCity('sydney')}
            className={`px-4 py-2 rounded ${activeCity === 'sydney' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
              }`}
          >
            Sydney
          </button>
        </div>

        <div style={{ display: activeCity === 'melbourne' ? 'block' : 'none' }}>
          <section className="mt-16">
            <h3 className="text-4xl font-bold text-center mb-6 text-gray-800">Melbourne - November 9th, 2024</h3>
            <p className="text-center mb-6 text-gray-600">Thanks for celebrating our engagement with us in Melbourne. It was a beautiful sunny day in Mount Waverley and we were so happy to share it with Chris' wonderful family and friends - now Leah's family too.</p>
            <p className="text-center mb-6 text-gray-600">Chris' mum Trish generously opened her home for us to enjoy an afternoon with you all. Thanks mum for your hospitality. Thanks also go to Kerry Collins for keeping us well fed on the day!</p>
            <p className="text-center mb-6 text-gray-600">To the delight of the nieces and nephew, Leah's sister Kate came down from Sydney to celebrate with us. Many others traveled to be there with us on the day and a great many old friends turned up including Leah's friend Meg.</p>
            <p className="text-center mb-6 text-gray-600">We won't call out everyone, but know that we love you and appreciate you very very much. It meant a lot to share the day with you.</p>
          </section>
          <section className="mt-16">
            <h4 className="text-center text-xl font-bold text-gray-800">Photos by Tristan Gulyas - thank you Tristan!</h4>
            <p className="text-center mb-6 text-gray-600">At the last minute we invited Tristan to take photos of the day. He was kind enough to do so and he did an amazing job. We're very grateful. Here's what he took of you all!</p>
            <p className="text-center mb-6 text-gray-600">Find Tristan on <a href="https://www.instagram.com/evilzardoz/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Instagram</a> and <a href="https://www.facebook.com/zardoz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Facebook</a>.</p>
            <SpotlightGallery images={photosMelbourneTristan} title="Melbourne - Tristan's Photos" />
          </section>
          <section className="mt-16">
            <h4 className="text-center text-xl font-bold text-gray-800">Phone Photos</h4>
            <p className="text-center mb-6 text-gray-600">Us and a few others took photos with their phones - thanks to everyone who sent pictures. We've put some below. Hopefully you'll be able to spot yourself.</p>
            <SpotlightGallery images={photosMelbourneOurs} title="Melbourne - Phone Camera Photos" />
          </section>
        </div>

        <div style={{ display: activeCity === 'sydney' ? 'block' : 'none' }}>
          <section className="mt-16">
            <h3 className="text-4xl font-bold text-center mb-6 text-gray-800">Sydney - November 23rd, 2024</h3>
            <p className="text-center mb-6 text-gray-600">Thanks for celebrating our engagement with us in Sydney. It was a beautiful sunny day in North Bondi and we were so happy to share it with Leah's parents, sister and extended family, as well as Chris' mum and all of you, our wonderful friends.</p>
            <p className="text-center mb-6 text-gray-600">The day was stunning - we even had a pod of dolphins show up offshore. It was a special sight for Chris' mum.</p>
            <p className="text-center mb-6 text-gray-600">We'd like to thank the amazing folks who supplied the spread - just look at those photos! As well thanks to the lovely staff at North Bondi Surf Lifesaving Club for your hospitality.</p>
            <p className="text-center mb-6 text-gray-600">We won't call out everyone, but know that we love you and appreciate you very very much. It meant a lot to share the day with you.</p>
          </section>
          <section className="mt-16">
            <h4 className="text-center text-xl font-bold text-gray-800">Photos by James Mason - thank you James!</h4>
            <p className="text-center mb-6 text-gray-600">James surprised us by showing up with his camera and taking some beautiful photos of the day. He was kind enough to do so and we're very grateful. Here's what he sent through'.</p>
            <p className="text-center mb-6 text-gray-600">Find James on <a href="https://www.instagram.com/_photographybyjames/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Instagram</a> and <a href="https://www.facebook.com/james.mason.18007" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Facebook</a>.</p>
            <SpotlightGallery images={photosSydneyJames} title="Sydney - James' Photos" />
          </section>
          <section className="mt-16">
            <h4 className="text-center text-xl font-bold text-gray-800">Phone Photos</h4>
            <p className="text-center mb-6 text-gray-600">Us and a few others took photos with their phones - thanks to everyone who sent pictures. We've put some below. Hopefully you'll be able to spot yourself.</p>
            <SpotlightGallery images={photosSydneyOurs} title="Sydney - Phone Camera Photos" />
          </section>
        </div>
      </main>
    </div>
  )
}

