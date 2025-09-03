'use client';
import React from 'react';

// Main component for the About page
export default function AboutPage() {
  return (
    <div className="bg-black text-white font-inter min-h-screen p-4 sm:p-8 md:p-12 pt-20">
      {/* Page Header with Gradient Text */}
      <header className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            Resurgence: About Us
          </span>
        </h1>
        <p className="text-lg text-orange-300/80">Forging legends, one game at a time.</p>
      </header>

      {/* Main content sections container */}
      <main className="max-w-6xl mx-auto space-y-16">

        {/* The Origin Story Section */}
        <Section title="The Origin Story" gradient="from-orange-400 to-red-500">
          Resurgence was founded by a group of seniors who recognized the growing wave of esports on campus. While still students, they stepped out of existing clubs to create a dedicated space for competitive gaming — a place built by gamers, for gamers. What started as their initiative soon became a movement. After graduating, those seniors passed on the legacy, leaving behind a club that continues to grow stronger each year. Today, Resurgence stands as the heart of gaming in our college — a community where passion meets competition, and every player has a place to rise.
        </Section>

        {/* Our Mission Section */}
        <Section title="Our Mission" gradient="from-yellow-400 to-orange-500">
          <p className="text-orange-100 mb-6 text-base sm:text-lg">
            We're not just another gaming club. Our mission is to forge a new standard for collegiate esports and gaming culture. We are building:
          </p>
          <ul className="space-y-4">
            <RosterItem title="A Training Ground" description="A supportive environment for competitive gamers to sharpen their skills and a welcoming space for casual players to have fun." gradient="from-green-400 to-green-600" />
            <RosterItem title="An Esports Incubator" description="A launchpad for aspiring esports talent, providing them with the resources, coaching, and exposure they need to go pro." gradient="from-yellow-400 to-orange-500" />
            <RosterItem title="A Unified Community" description="A place where teamwork, sportsmanship, and creativity are celebrated above all else." gradient="from-red-400 to-orange-600" />
          </ul>
        </Section>

        {/* The Guild Roster Section */}
        <Section title="The Guild Roster" gradient="from-orange-500 to-red-600">
          <p className="text-orange-100 mb-6 text-base sm:text-lg">
            Meet the champions who lead our charge into battle. This is our roster, from the veterans who paved the way to the new recruits ready to make their mark.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <RosterItem title="Super Final Year: The Elders" description="The ancient ones who hold the secrets of victory." />
            <RosterItem title="Final Year: The Legends" description="Those who have earned their titles and are ready for their final campaign." />
            <RosterItem title="PreFinal Year: The Vanguards" description="The core of our forces, leading the charge with skill and strategy." />
            <RosterItem title="The Sophomores: The Rising Storm" description="The next generation of prodigies, showing immense promise." />
            <RosterItem title="The Freshmen: The New Challengers" description="The latest recruits, full of raw talent and fire." />
          </ul>
        </Section>

        {/* Our Games / Arenas Section */}
        <Section title="Our Games / Arenas" gradient="from-orange-400 to-yellow-500">
          <p className="text-orange-100 mb-6 text-base sm:text-lg">
            These are the battlefields where our legends are made. From tactical shooters to high-stakes battle royales, our warriors are active in a wide array of titles.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <GameCard title="VALORANT" squad="Aim & Strategy" />
            <GameCard title="BGMI" squad="Primary Competitive" />
            <GameCard title="FIFA" squad="Football, Redefined" />
            <GameCard title="CS2" squad="Aim & Strategy" />
            <GameCard title="Tekken 7,8" squad="Combos & Control" />
          </ul>
        </Section>

        {/* Events & Culture Section */}
        <Section title="Events & Culture" gradient="from-red-400 to-orange-600">
          <ul className="space-y-4">
            <EventItem text="Weekly Scrims & Drills: Tactical training sessions for our competitive teams." />
            <EventItem text="Community Game Nights: Casual events where everyone can play and socialize." />
            <EventItem text="LAN Setups: Hosted events to bring the offline gaming experience to life." />
            <EventItem text="Workshops: Guest speakers and skill-building sessions on game strategy, streaming, and content creation." />
          </ul>
        </Section>

        {/* Join the Squad Section */}
        <section className="bg-black border border-orange-500/50 bg-opacity-70 p-6 sm:p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">Join the Squad</h2>
          <p className="text-orange-100 mb-6 text-base sm:text-lg">
            New challenger approaching—are you ready to join Resurgence? Whether you're a seasoned veteran or just starting your journey, we have a place for you.
          </p>
          <a
            href="https://discord.gg/s7dC67Mwse"
            target='_blank'
            className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-500/50"
          >
            Sign your gamer tag, grab your controller, and let's drop in.
          </a>
        </section>
      </main>
    </div>
  );
}

/* Reusable Section Wrapper */
const Section = ({ title, gradient, children }) => (
  <section className="bg-black border border-orange-600/40 p-6 sm:p-8 rounded-2xl shadow-lg">
    <h2 className={`text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

/* Roster Cards */
const RosterItem = ({ title, description, gradient }) => (
  <li className="bg-black border border-orange-500/40 p-4 rounded-xl hover:scale-105 transition duration-300 shadow-md hover:shadow-orange-500/40">
    <h3 className={`text-xl font-semibold mb-1 bg-clip-text text-transparent ${gradient ? `bg-gradient-to-r ${gradient}` : "bg-gradient-to-r from-orange-300 to-red-400"}`}>
      {title}
    </h3>
    <p className="text-orange-200 text-sm">{description}</p>
  </li>
);

/* Games Cards */
const GameCard = ({ title, squad }) => (
  <li className="bg-black border border-orange-500/40 p-4 rounded-xl text-center hover:scale-105 transition duration-300 shadow-md hover:shadow-orange-500/40">
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <p className="text-orange-200 text-xs">{squad}</p>
  </li>
);

/* Events */
const EventItem = ({ text }) => (
  <li className="bg-black border border-orange-500/40 p-4 rounded-xl text-sm sm:text-base hover:scale-105 transition duration-300 shadow-md hover:shadow-orange-500/40">
    <p className="text-orange-100">{text}</p>
  </li>
);
