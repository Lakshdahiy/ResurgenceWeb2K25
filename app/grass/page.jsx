"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export default function GetInTouch() {
  const [showGrass, setShowGrass] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [showPopup, setShowPopup] = useState(false)

  const totalClicks = 8 // clicks needed to reveal

  const handleGrassClick = () => {
    setClicks((prev) => {
      const newCount = prev + 1
      if (newCount >= totalClicks) {
        setShowPopup(true)
      }
      return newCount
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Trigger button */}
      {!showGrass && (
        <button
          onClick={() => setShowGrass(true)}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700"
        >
          Get in Touch
        </button>
      )}

      {/* Grass field */}
      {showGrass && !showPopup && (
  <div className="flex flex-col items-center mt-10">
    <h2 className="text-2xl font-bold text-green-700 mb-4">
      🌱 Touch Some Grass
    </h2>

    <div className="flex gap-1 cursor-pointer">
      {[...Array(totalClicks)].map((_, i) => (
        <motion.div
          key={i}
          onClick={handleGrassClick}
          animate={{
            height: clicks > i ? 10 : 60,
            opacity: clicks > i ? 0.3 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-3 bg-green-500 rounded-t-full"
        />
      ))}
    </div>
  </div>
)}

      {/* Popup with links */}
      {showPopup && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mt-10 p-6 bg-white rounded-2xl shadow-xl text-center space-y-4"
        >
          <h2 className="text-xl font-bold">Let’s Connect 🌍</h2>
          <div className="flex gap-6 justify-center">
            <a
              href="https://discord.gg/s7dC67Mwse"
              target="_blank"
              className="flex flex-col items-center text-blue-600"
            >
              <MessageCircle size={28} />
              Discord
            </a>
            <a
              href="https://chat.whatsapp.com/HcvmWIpfiFMKvobhxFtHRE?mode=ems_wa_t"
              target="_blank"
              className="flex flex-col items-center text-green-600"
            >
              <Phone size={28} />
              Whatsapp
            </a>
          </div>
        </motion.div>
      )}
    </div>
  )
}
