"use client"

export default function Hero() {
  const services = [
    { number: "01", title: "Team Management", color: "text-orange-300" },
    { number: "02", title: "Tournament Strategy", color: "text-yellow-300" },
    { number: "03", title: "Brand Partnerships", color: "text-orange-200" },
    { number: "04", title: "Content Creation", color: "text-red-200" },
  ]

  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:py-20">
          
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left mb-8 lg:mb-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <p className="text-white/90 text-xl sm:text-2xl font-medium">We're a</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight text-shadow">
              Gaming
              <br />
              Powerhouse
            </h1>
          </div>

          {/* Center Image */}
          <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <img
              src="/Hero.png"
              alt="Gaming Champion Victory Pose"
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="relative z-10 text-center lg:text-right mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 max-w-sm">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 text-shadow">
              Here gaming feels unstoppable.
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed hidden sm:block">
              From strategy to execution, we build teams that dominate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
