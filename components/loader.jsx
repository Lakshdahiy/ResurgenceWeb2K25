"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.floor(Math.random() * 5) + 2 // speed variation
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 text-white">
      {/* Neon glitch title */}
      <h1 className="relative text-6xl font-extrabold mb-6">
        RESURGENCE
      </h1>

      {/* Subtitle */}
      <p className="mb-8 text-gray-300 animate-pulse text-lg tracking-widest">
        Loading Gaming Experience...
      </p>

      {/* Circular spinner */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-4 border-orange-500 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-orange-500 rounded-full animate-spin"></div>
      </div>


      {/* % Counter */}
      <div className="mt-3 font-mono text-orange-400">{progress}%</div>
    </div>
  )
}

