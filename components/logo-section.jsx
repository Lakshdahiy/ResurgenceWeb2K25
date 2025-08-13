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
          {/* Resurgence Logo Space */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-2xl p-8 w-64 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <p className="text-white/80 font-semibold">RESURGENCE</p>
            </div>
          </div>

          {/* Hillfirar Logo Space */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-2xl p-8 w-64 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <p className="text-white/80 font-semibold">HILLFAIR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
