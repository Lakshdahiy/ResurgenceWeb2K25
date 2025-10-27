'use client';

import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import LeaderboardPage from "../../components/ui/Leaderboard";

export default function App() {
  const eventsData = [
    {
      id: 1,
      title: 'Resurgence BGMI KickOff',
      type: 'TOURNAMENT',
      description: 'The ultimate showdown between the best gaming teams in campus.',
      date: '5-6-7 September',
      time: '7:00 PM IST',
      location: 'Online mode',
      participants: '20 Teams (can be updated)',
      prizePool: 'Yet to be Revealed',
      image: 'https://i.pinimg.com/736x/9c/eb/61/9ceb61e3b21e0f6316b72685c9248e77.jpg',
      label: 'Completed',
      status: 'Completed',
      leaderBoard:'../leaderboards/BGMI-kickoff.json',
      pastDetails: {
        winners: ["The TALISMANS "],
        highlights:
          ''
      }
    },
    {
      id: 2,
      title: 'Squid Game Challenge',
      type: 'Game',
      description: '',
      date: '8 November',
      time: '3-5 PM',
      location: 'Ground',
      participants: '(Limited)',
      prizePool: 'N/A',
      image: '/Squid.jpg',
      label: 'Completed',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Orbeez Odyssey',
      type: 'COMPETITION',
      description: '',
      date: '8 November',
      time: '2:00 PM IST',
      location: 'Groound',
      participants: 'Limited',
      prizePool: 'Null',
      image: 'Orbeez.jpg',
      label: 'Completed',
      status: 'past',
      pastDetails: {
        winners: [],
        highlights:
          'This event was based on Tactical shooting through gel blasters in Real-world , Two teams Unlimited action'
      }
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const OrangeIcons = ({ iconName, size = 'w-5 h-5', color = 'text-orange-400' }) => {
    switch (iconName) {
      case 'calendar':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case 'mapPin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="3" />
          </svg>
        );
      case 'dollarSign':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H15a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      default:
        return null;
    }
  };

  const EventCard = ({ event, onLearnMoreClick }) => (
    <div className="bg-black rounded-xl border border-orange-600/30 shadow-lg shadow-orange-500/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col md:flex-row w-full mx-auto">
      <div className="relative w-full md:w-1/2 flex-shrink-0">
        <img className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" src={event.image} alt={event.title} />
        {event.label && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {event.label}
          </span>
        )}
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between font-mono relative">
        <div className="absolute inset-0 z-0 opacity-5 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/resurgenceIcon.png')` }}></div>
        <div className="relative z-10">
          <div>
            <h4 className="text-orange-400 font-bold uppercase text-sm mb-2">{event.type}</h4>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-100 mb-2 leading-tight">{event.title}</h2>
            <p className="text-gray-400 text-base mb-4">{event.description}</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <OrangeIcons iconName="calendar" />
                <div className="ml-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Date & Time</p>
                  <p className="text-gray-200 font-medium">{event.date}</p>
                  <p className="text-gray-400 text-sm">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start">
                <OrangeIcons iconName="mapPin" />
                <div className="ml-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Location</p>
                  <p className="text-gray-200 font-medium">{event.location}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <OrangeIcons iconName="dollarSign" />
                <div className="ml-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Prize Pool</p>
                  <p className="text-gray-200 font-medium">{event.prizePool}</p>
                </div>
              </div>
              <div className="flex items-start">
                <OrangeIcons iconName="users" />
                <div className="ml-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Participants</p>
                  <p className="text-gray-200 font-medium">{event.participants}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="mt-6 font-bold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50
              disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
              bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80 hover:scale-105 focus:ring-orange-500"
            onClick={() => onLearnMoreClick(event)}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  

const EventDetailsModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <div className="bg-black text-gray-100 rounded-xl p-8 w-full max-w-2xl font-mono relative border border-orange-600/50 shadow-lg shadow-orange-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-extrabold text-orange-400 mb-4">
          {event.title}
        </h2>
        <p className="text-lg text-gray-300 mb-6">{event.description}</p>

        {event.status === "past" && event.pastDetails && (
          <div className="mt-4 pt-4 border-t border-gray-700 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">Winners</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {event.pastDetails.winners.map((winner, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 22h20L12 2zm0 17L5 12h14l-7 7z" />
                    </svg>
                    {winner}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Highlights
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {event.pastDetails.highlights}
              </p>
            </div>

            {/* 👇 Leaderboard Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Leaderboard
              </h3>
              <div className="border border-gray-700 rounded-lg overflow-hidden shadow-inner">
                <LeaderboardPage />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};




  return (
    <>
      <Header />
      <main className="pt-15 bg-black">
        <div className="font-sans min-h-screen bg-black text-gray-100 p-4 sm:p-8 pt-32 flex flex-col items-center">
          <div className="w-full max-w-6xl space-y-8">
            {eventsData.map(event => (
              <EventCard key={event.id} event={event} onLearnMoreClick={setSelectedEvent} />
            ))}
          </div>
          <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </div>
      </main>
      <Footer />
    </>
  );
}
