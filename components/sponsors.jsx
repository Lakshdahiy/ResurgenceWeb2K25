'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Sponsors() {
const router = useRouter()
  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title and description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-shadow">Our Past Sponsors</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Proud to be supported by the best brands in gaming technology and equipment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-32 md:space-y-0 md:space-x-16">
          <div className="w-64 h-40 flex items-center justify-center">
            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="/fanClash.png"
                alt="fanclash"
              />
            </div>
          </div>


          <div className="w-64 h-40 flex items-center justify-center">
            <div className="w-60 h-60 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="/igdc.png"
                alt="igdc Logo"
              />
            </div>
          </div>
          <div className="w-64 h-40 flex items-center justify-center">
            <div className="w-60 h-60 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="/msiLogo.png"
                alt="msi Logo"
              />
            </div>
          </div>
        </div>
      </div>

        {/* Become a Sponsor button */}
        <div className="text-center mt-10">
          <button
            onClick={() => router.push("#footer")}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  )
}
