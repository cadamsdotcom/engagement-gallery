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
  const [sydneyToggle, setSydneyToggle] = useState<'james' | 'ours'>('james');
  const [melbourneToggle, setMelbourneToggle] = useState<'tristan' | 'ours'>('tristan');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-20 animate-twinkle"></div>
      <main className={`relative container mx-auto px-4 py-8 ${cormorantGaramond.variable} ${dancingScript.variable} font-serif`}>
        <h1 className="text-5xl font-dancing text-center mb-4 text-gray-800">Leah & Chris&apos; Engagement Photos</h1>
        <h2 className="text-2xl font-dancing text-center mb-8 text-gray-600">Thankyou for joining us - select a city to view:</h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveCity('melbourne')}
            className={`px-4 py-2 rounded shadow-md ${activeCity === 'melbourne' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
              }`}
          >
            Melbourne
          </button>
          <button
            onClick={() => setActiveCity('sydney')}
            className={`px-4 py-2 rounded shadow-md ${activeCity === 'sydney' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
              }`}
          >
            Sydney
          </button>
        </div>

        <div style={{ display: activeCity === 'melbourne' ? 'block' : 'none' }}>
          <section className="mt-16">
            <h3 className="text-4xl font-bold text-center mb-6 text-gray-800">Melbourne - November 9th, 2024</h3>
            <p className="text-center mb-6 text-gray-600">Thank you for joining us to celebrate our engagement in Melbourne. It was a beautiful sunny day in Mount Waverley and we were so happy to share it with you all - our wonderful family and friends.</p>
            <p className="text-center mb-6 text-gray-600">Chris&apos; mum, Trish, generously opened her home for us to enjoy an afternoon with you all. Thank you mum for your hospitality. Thank you also to Kerry Collins for keeping us well fed on the day!</p>
            <p className="text-center mb-6 text-gray-600">To the delight of the nieces and nephew, Leah&apos;s sister, Kate, came down from Sydney to celebrate with us. Many others traveled to be there with us on the day and a great many old friends turned up, including Leah&apos;s dear high school friend, Meg!</p>
            <p className="text-center mb-6 text-gray-600">We won&apos;t call out everyone, but know that we love you and appreciate you all very, very much. It meant a lot to share the day with you.</p>
            <p className="text-center mb-6 text-gray-600">All our love,<br />Leah & Chris ✨💖</p>
          </section>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setMelbourneToggle('tristan')}
              className={`px-2 rounded-xl shadow-md ${melbourneToggle === 'tristan' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
                }`}
            >
              Show Professional Photos by Tristan Gulyas
            </button>
            <button
              onClick={() => setMelbourneToggle('ours')}
              className={`px-2 rounded-xl shadow-md ${melbourneToggle === 'ours' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
                }`}
            >
              Show Phone Photos
            </button>
          </div>

          <section className="mt-16" style={{ display: melbourneToggle === 'tristan' ? 'block' : 'none' }}>
            <h4 className="text-center mb-6 text-xl font-bold text-gray-800">Photos by Tristan Gulyas - thank you Tristan!</h4>
            <p className="text-center mb-6 text-gray-600">At the eleventh hour, we asked Tristan to capture the day for us, and he agreed. He did an incredible job, and we&apos;re so grateful! Here are some of the beautiful moments he captured of you all.</p>
            <p className="text-center mb-6 text-gray-600">Find Tristan on <a href="https://www.instagram.com/evilzardoz/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Instagram</a> and <a href="https://www.facebook.com/zardoz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Facebook</a>.</p>
            <SpotlightGallery images={photosMelbourneTristan} title="Melbourne - Tristan's Photos" />
          </section>

          <section className="mt-16" style={{ display: melbourneToggle === 'ours' ? 'block' : 'none' }}>
            <h4 className="text-center text-xl font-bold text-gray-800">Phone Photos</h4>
            <p className="text-center mb-6 text-gray-600">Us and a few others took photos with their phones - thanks to everyone who sent pictures. We&apos;ve put some below. Hopefully you spot yourself.</p>
            <SpotlightGallery images={photosMelbourneOurs} title="Melbourne - Phone Camera Photos" />
          </section>
        </div>

        <div style={{ display: activeCity === 'sydney' ? 'block' : 'none' }}>
          <section className="mt-16">
            <h3 className="text-4xl font-bold text-center mb-6 text-gray-800">Sydney - November 23rd, 2024</h3>
            <p className="text-center mb-6 text-gray-600">Thank you for shining with us to celebrate our engagement in Sydney. It was a beautiful sunny day in the bubble (North Bondi!)</p>
            <p className="text-center mb-6 text-gray-600">We were joined by Leah&apos;s parents Kathie and Warren (&quot;Wazza&quot;), her sister Kate, Leah&apos;s extended family, as well as Chris&apos; mum Trish, and of course all of you, our wonderful friends. Shout out to Keaton who journeyed from Melbourne to celebrate with us.</p>
            <p className="text-center mb-6 text-gray-600">The day was on fire. A balmy Sydney summer arvo, peaking with a pod of dolphins showing up offshore. It was a special sight for Chris&apos; mum.</p>
            <p className="text-center mb-6 text-gray-600">We&apos;d like to thank the amazing Brilee Wood of Goodie Gum Drops Cafe who supplied the spread and cake <i>with one week&apos;s notice!</i> Just look at those photos!</p>
            <p className="text-center mb-6 text-gray-600">Last but not least thank you to the staff at North Bondi Surf Lifesaving Club for your hospitality.</p>
            <p className="text-center mb-6 text-gray-600">We won&apos;t call out everyone, but know that we love you and appreciate you all very, very much. It meant a lot to share the day with you.</p>
            <p className="text-center mb-6 text-gray-600">All our love,<br />Leah & Chris ✨💖</p>
            <p className="text-center mb-6 text-gray-600">Find Brilee &amp; Goodie Gum Drops Cafe on <a href="https://www.instagram.com/goodiegumdropscafe" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Instagram</a>.</p>
          </section>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setSydneyToggle('james')}
              className={`px-2 rounded-xl shadow-md ${sydneyToggle === 'james' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
                }`}
            >
              Show Professional Photos by James Mason
            </button>
            <button
              onClick={() => setSydneyToggle('ours')}
              className={`px-2 rounded-xl shadow-md ${sydneyToggle === 'ours' ? 'bg-gradient-to-r from-amber-300 to-yellow-200 text-black' : 'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-800'
                }`}
            >
              Show Phone Photos
            </button>
          </div>

          <section className="mt-16" style={{ display: sydneyToggle === 'james' ? 'block' : 'none' }}>
            <h4 className="text-center mb-6 text-xl font-bold text-gray-800">Photos by James Mason - thank you James!</h4>
            <p className="text-center mb-6 text-gray-600">James surprised us by showing up with his camera and capturing some beautiful moments from the day. We're so grateful for his kindness! Here are some of the beautiful moments he captured of you all.</p>
            <p className="text-center mb-6 text-gray-600">Find James on <a href="https://www.instagram.com/_photographybyjames/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Instagram</a> and <a href="https://www.facebook.com/james.mason.18007" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Facebook</a>.</p>
            <SpotlightGallery images={photosSydneyJames} title="Sydney - James' Photos" />
          </section>
          <section className="mt-16" style={{ display: sydneyToggle === 'ours' ? 'block' : 'none' }}>
            <h4 className="text-center text-xl font-bold text-gray-800">Phone Photos</h4>
            <p className="text-center mb-6 text-gray-600">Us and a few others took photos with their phones - thanks to everyone who sent pictures. We&apos;ve put some below. Hopefully you spot yourself.</p>
            <SpotlightGallery images={photosSydneyOurs} title="Sydney - Phone Camera Photos" />
          </section>
        </div>
      </main>
    </div>
  )
}

