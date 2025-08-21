"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Trophy, Users } from "lucide-react"

export default function UpcomingEvents() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const events = [
    {
      id: 1,
      title: "Championship Finals 2024",
      date: "March 15, 2024",
      time: "7:00 PM EST",
      location: "Gaming Arena, Los Angeles",
      prize: "$50,000",
      participants: "32 Teams",
      description: "The ultimate showdown between the best gaming teams worldwide.",
      image: "/placeholder.svg?height=300&width=500&text=Championship+Finals",
      status: "Featured",
      category: "Tournament",
    },
    {
      id: 2,
      title: "Spring Qualifier Series",
      date: "March 22, 2024",
      time: "6:00 PM EST",
      location: "Online Tournament",
      prize: "$15,000",
      participants: "64 Teams",
      description: "Qualify for the major league championships in this intense competition.",
      image: "/placeholder.svg?height=300&width=500&text=Spring+Qualifier",
      status: "Open Registration",
      category: "Qualifier",
    },
    {
      id: 3,
      title: "Community Gaming Night",
      date: "March 28, 2024",
      time: "8:00 PM EST",
      location: "Resurgence Gaming Hub",
      prize: "Prizes & Giveaways",
      participants: "Open to All",
      description: "Join us for a fun community event with games, prizes, and networking.",
      image: "/placeholder.svg?height=300&width=500&text=Community+Night",
      status: "Free Entry",
      category: "Community",
    },
    {
      id: 4,
      title: "Pro League Season 2",
      date: "April 5, 2024",
      time: "5:00 PM EST",
      location: "Multiple Venues",
      prize: "$100,000",
      participants: "16 Pro Teams",
      description: "The second season of our professional league with the biggest prize pool yet.",
      image: "/placeholder.svg?height=300&width=500&text=Pro+League+S2",
      status: "Invitation Only",
      category: "Pro League",
    },
    {
      id: 5,
      title: "Pro League Season 2",
      date: "April 5, 2024",
      time: "5:00 PM EST",
      location: "Multiple Venues",
      prize: "$100,000",
      participants: "16 Pro Teams",
      description: "The second season of our professional league with the biggest prize pool yet.",
      image: "/placeholder.svg?height=300&width=500&text=Pro+League+S2",
      status: "Invitation Only",
      category: "Pro League",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Featured":
        return "bg-red-600 text-white"
      case "Open Registration":
        return "bg-green-600 text-white"
      case "Free Entry":
        return "bg-blue-600 text-white"
      case "Invitation Only":
        return "bg-purple-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-shadow">Upcoming Events</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Don't miss out on our exciting tournaments, competitions, and community events.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={event.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Event Image */}
                      <div className="relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-64 lg:h-full object-cover"
                          query={`${event.category} gaming tournament event poster with dramatic lighting and gaming elements`}
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}
                          >
                            {event.status}
                          </span>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                            {event.category}
                          </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">{event.title}</h3>

                        <p className="text-white/80 text-lg mb-6 leading-relaxed">{event.description}</p>

                        {/* Event Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <div>
                              <p className="text-white font-semibold">{event.date}</p>
                              <p className="text-white/70 text-sm">{event.time}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <div>
                              <p className="text-white font-semibold">Location</p>
                              <p className="text-white/70 text-sm">{event.location}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <Trophy className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <div>
                              <p className="text-white font-semibold">Prize Pool</p>
                              <p className="text-white/70 text-sm">{event.prize}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <div>
                              <p className="text-white font-semibold">Participants</p>
                              <p className="text-white/70 text-sm">{event.participants}</p>
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-red-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-900 transition-colors duration-300 w-fit">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Next event"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-red-600 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-red-800 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}
