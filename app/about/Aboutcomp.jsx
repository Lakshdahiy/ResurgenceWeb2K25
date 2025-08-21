'use client';
import React from 'react';

// Main component for the About page
export default function AboutPage() {
  return (
    <div className="bg-[#0d1222] text-white font-inter min-h-screen p-4 sm:p-8 md:p-12 pt-20">
      {/* Page Header with Gradient Text */}
      <header className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            Resurgence: About Us
          </span>
        </h1>
        <p className="text-lg text-gray-400">Forging legends, one game at a time.</p>
      </header>

      {/* Main content sections container */}
      <main className="max-w-6xl mx-auto space-y-16">

        {/* The Origin Story Section */}
        <section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">The Origin Story</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Resurgence was founded by a group of seniors who recognized the growing wave of esports on campus. While still students, they stepped out of existing clubs to create a dedicated space for competitive gaming — a place built by gamers, for gamers. What started as their initiative soon became a movement. After graduating, those seniors passed on the legacy, leaving behind a club that continues to grow stronger each year. Today, Resurgence stands as the heart of gaming in our college — a community where passion meets competition, and every player has a place to rise.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Our Mission</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            We're not just another gaming club. Our mission is to forge a new standard for collegiate esports and gaming culture. We are building:
          </p>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">A Training Ground</h3>
              <p className="text-gray-400">A supportive environment for competitive gamers to sharpen their skills and a welcoming space for casual players to have fun.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">An Esports Incubator</h3>
              <p className="text-gray-400">A launchpad for aspiring esports talent, providing them with the resources, coaching, and exposure they need to go pro.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">A Unified Community</h3>
              <p className="text-gray-400">A place where teamwork, sportsmanship, and creativity are celebrated above all else.</p>
            </li>
          </ul>
        </section>

        {/* The Guild Roster Section */}
        <section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">The Guild Roster</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Meet the champions who lead our charge into battle. This is our roster, from the veterans who paved the way to the new recruits ready to make their mark.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <RosterItem title="Super Final Year: The Elders" description="The ancient ones who hold the secrets of victory." />
            <RosterItem title="Final Year: The Legends" description="Those who have earned their titles and are ready for their final campaign." />
            <RosterItem title="PreFinal Year: The Vanguards" description="The core of our forces, leading the charge with skill and strategy." />
            <RosterItem title="The Sophomores: The Rising Storm" description="The next generation of prodigies, showing immense promise." />
            <RosterItem title="The Freshmen: The New Challengers" description="The latest recruits, full of raw talent and fire." />
          </ul>
        </section>

        {/* Our Games / Arenas Section */}
        <section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-500">Our Games / Arenas</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            These are the battlefields where our legends are made. From tactical shooters to high-stakes battle royales, our warriors are active in a wide array of titles.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <GameCard title="VALORANT" squad="Aim & Strategy" />
            <GameCard title="BGMI" squad="Primary Competitive" />
            <GameCard title="FIFA" squad="Football, Redefined" />
            <GameCard title="CS2" squad="Aim & Strategy" />
            <GameCard title="Tekken 7,8" squad="Combos & Control" />
            
          </ul>
        </section>

        {/* Achievements Section */}
        {/*<section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">Achievements / Leaderboards</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            We don't just play; we conquer. Here are some of our notable victories and milestones.
          </p>
          <ul className="space-y-4">
            <AchievementItem text="Inter-college Valorant Tournament: Champions, Fall 2024" />
            <AchievementItem text="Campus LAN Event: BGMI: Winner, Spring 2024" />
            <AchievementItem text="Game Jam 2024: Hosted the largest game development workshop in our college's history." />
            <AchievementItem text="Streaming Success: Several of our members have launched successful streaming careers." />
          </ul>
        </section>*/}

        {/* Events & Culture Section */}
        <section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Events & Culture</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Our culture is built around competition and camaraderie.
          </p>
          <ul className="space-y-4">
            <EventItem text="Weekly Scrims & Drills: Tactical training sessions for our competitive teams." />
            <EventItem text="Community Game Nights: Casual events where everyone can play and socialize." />
            <EventItem text="LAN Setups: Hosted events to bring the offline gaming experience to life." />
            <EventItem text="Workshops: Guest speakers and skill-building sessions on game strategy, streaming, and content creation." />
          </ul>
        </section>

        {/* Join the Squad Section */}
        <section className="bg-gray-900 bg-opacity-50 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">Join the Squad</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            New challenger approaching—are you ready to join Resurgence? Whether you're a seasoned veteran or just starting your journey, we have a place for you.
          </p>
          <a
            href="#" // Replace with your Discord link
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Sign your gamer tag, grab your controller, and let's drop in.
          </a>
        </section>
      </main>
    </div>
  );
}

// Reusable component for the Roster section
const RosterItem = ({ title, description }) => (
  <li className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:scale-105 transition duration-300 shadow-md">
    <h3 className="text-xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </li>
);

// Reusable component for the Games section
const GameCard = ({ title, squad }) => (
  <li className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center hover:scale-105 transition duration-300 shadow-md">
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <p className="text-gray-400 text-xs">{squad}</p>
  </li>
);

// Reusable component for Achievements
const AchievementItem = ({ text }) => (
  <li className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-sm sm:text-base hover:scale-105 transition duration-300 shadow-md">
    <p className="text-gray-300">{text}</p>
  </li>
);

// Reusable component for Events
const EventItem = ({ text }) => (
  <li className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-sm sm:text-base hover:scale-105 transition duration-300 shadow-md">
    <p className="text-gray-300">{text}</p>
  </li>
);
