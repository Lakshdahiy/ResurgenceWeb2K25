export default function LogoSection() {
  return (
    <section className="py-16 bg-black">
      {" "}
      {/* Changed to bg-black */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-shadow">Our Partners</h2>
          <p className="text-white/80">Powered by industry leaders</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-64 h-40 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
  <div className="text-center">
    {/* Profile/Logo Container */}
    <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center overflow-hidden shadow-md">
      <img
        className="w-full h-full object-cover"
        src="/res.png"
        alt="Hillfair Logo"
      />
    </div>

    {/* Title */}
    <p className="text-white font-semibold text-lg tracking-wide">
      Resurgence
    </p>
  </div>
</div>

          {/* Hillfirar Logo Space */}
         <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-64 h-40 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-center">
          {/* Profile/Logo Container */}
           <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center overflow-hidden shadow-md">
            <img
             className="w-full h-full object-cover"
             src="/res.png"
              alt="Hillfair Logo"
             />
              </div>

             {/* Title */}
              <p className="text-white font-semibold text-lg tracking-wide">
                HILLFAIR
              </p>
              </div>
</div>
        </div>
      </div>
    </section>
  )
}
