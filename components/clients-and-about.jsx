"use client"
import { useState } from "react"
import { Circle, X, Frame, Infinity, ArrowRight } from "lucide-react"
import ContactPopup from "../components/ContactPopup"

export default function ClientsAndAbout() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-black py-20 rounded-t-[40px] -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Behind the Scenes / Shaping Experiences Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-10">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-orange-500 text-lg font-medium">Behind the Victories</p>
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow">
              Shaping
              <br />
              Experiences That
              <br />
              Dominate the Game
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-white text-lg leading-relaxed">
              We are a collective of strategists, players, and innovators focused on building winning teams and
              intuitive platforms that solve real-world gaming challenges.
            </p>
            <div className="space-y-2">
              <p className="text-white/70 text-base">Let's Conquer Something</p>
              <p className="text-white/70 text-base">Meaningful Together</p>
            </div>

            {/* Get in Touch button */}
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-orange-700 transition-colors duration-300"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Popup Component */}
      <ContactPopup open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
