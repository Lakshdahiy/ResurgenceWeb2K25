"use client"

import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Sponsors", href: "#sponsors" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      {" "}
      {/* Removed bg-black/50 and backdrop-blur-sm */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Resurgence</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Get in touch button */}
          <div className="hidden md:block">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-orange-700 transition-colors duration-300">
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-black/80 backdrop-blur-md rounded-lg mt-2">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-orange-700 transition-colors duration-300 mt-4">
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
