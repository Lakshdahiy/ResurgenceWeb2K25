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
      {/* Added pt-20 to the content wrapper inside Hero */}
       <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="relative min-h-screen flex items-center py-20">
          {/* Left Content - Increased text size */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <div className="space-y-4">
              <p className="text-white/90 text-2xl font-medium"> We're a</p>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none text-shadow">
                Gaming
                <br />
                Powerhouse
              </h1>
            </div>
          </div>

          {/* Center Image - Custom gaming victory pose */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/Hero.png"
              alt="Gaming Champion Victory Pose"
              className="h-[700px] w-auto object-contain"
            />
          </div>

          {/* Right Content - Positioned like in reference, increased text size */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-xs z-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-white  mb-6 text-shadow ">
              Here gaming feels unstoppable.
            </h2>
            <p className="text-white/80 text-lg lg:text-lg leading-relaxed">
              From strategy to execution, we build teams that dominate and inspire.
            </p>
          </div>
        </div>

    
      </div>
    </section>
  )
}
