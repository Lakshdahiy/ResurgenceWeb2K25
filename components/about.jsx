export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      {" "}
      {/* Changed to bg-black */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-shadow">About Resurgence</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Born from the ashes of defeat, forged in the fires of competition. We are more than a team - we are a
            movement, a resurgence of what gaming can be when passion meets precision.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-shadow">Our Mission</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            To redefine competitive gaming through innovation, teamwork, and an unwavering commitment to excellence. We
            don't just play games - we create legends, inspire communities, and push the boundaries of what's possible
            in the digital arena.
          </p>
        </div>
      </div>
    </section>
  )
}
