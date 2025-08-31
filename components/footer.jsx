import { Facebook, Twitter, Instagram, Youtube, Twitch, DiscIcon as Discord, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/resurgenceesports_nith?utm_source=ig_web_button_share_sheet&igsh=eWthNDg5dG40Y3l3", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@resurgenceesportsnith7295", label: "YouTube" },
    
    { icon: Discord, href: "https://discord.gg/s7dC67Mwse", label: "Discord" },
  ]

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Team", href: "team" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Events", href: "#events" },
    
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Code of Conduct", href: "#" },
  ]

  return (
    <footer id="footer" className="bg-black border-t border-white/20">
      {" "}
      {/* Changed to bg-black */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <img
                className="w-full h-full object-cover"
                src="/res.png"
                alt="Resurgence Logo"
              />
              </div>
              <span className="text-2xl font-bold text-white">RESURGENCE</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Rising from the ashes to dominate the gaming world. Join us on our journey to championship glory.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/80">resurgence@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/80">+91 9896096559</span>
              </div>
              <div className="flex items-center space-x-3">
               
                
              </div>
            </div>
          </div>

          {/* Newsletter */}
          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
