export default function LogoSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-32 md:space-y-0 md:space-x-16">
          {/* Resurgence Logo */}
          <div className="w-64 h-40 flex items-center justify-center">
            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="/res.png"
                alt="Resurgence Logo"
              />
            </div>
          </div>

          {/* Hillfair Logo */}
          <div className="w-64 h-40 flex items-center justify-center">
            <div className="w-60 h-60 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="/Hill’ffair .png"
                alt="Hillfair Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
