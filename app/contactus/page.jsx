"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Instagram } from "lucide-react"
import ContactPopup from "@/components/ContactPopup"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <ContactPopup open={true} onClose={() => {}} />
    </div>
  )
}

function ContactPopup({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-96 shadow-2xl text-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">🌟 Connect With Us</h2>

            <div className="flex flex-col gap-6 items-center">
              <a
                href="https://discord.gg/yourlink"
                target="_blank"
                className="flex items-center gap-3 text-blue-400 hover:scale-105 transition-transform"
              >
                <MessageCircle size={28} />
                <span className="text-lg font-semibold">Join Discord</span>
              </a>

              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                className="flex items-center gap-3 text-pink-400 hover:scale-105 transition-transform"
              >
                <Instagram size={28} />
                <span className="text-lg font-semibold">Follow Instagram</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
