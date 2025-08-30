'use client'

import { Shield, Cpu, Headphones, Monitor } from "lucide-react"
import { useRouter } from "next/navigation"
export default function Sponsors() {
  const sponsors = [
    {
      name: "TechGear Pro",
      category: "Gaming Hardware",
      icon: Monitor,
      description: "Premium gaming monitors and displays",
    },
   
  ]
const router = useRouter()
  return (
    <section id="sponsors" className="py-20 bg-black">
      {" "}
      {/* Changed to bg-black */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-shadow">Our Sponsors</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Proud to be supported by the best brands in gaming technology and equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30 group-hover:bg-white/30 transition-colors duration-300">
                <sponsor.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h3>
              <p className="text-white/80 text-sm mb-3 font-medium">{sponsor.category}</p>
              <p className="text-white/70 text-sm leading-relaxed">{sponsor.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => router.push("#footer")} className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  )
}
