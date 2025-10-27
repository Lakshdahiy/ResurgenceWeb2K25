"use client";
import { useEffect, useState } from "react";

export default function LeaderboardPage({source}) {
  const [teams, setTeams] = useState([]);

 useEffect(() => {
    if (!source) return; // wait until prop is available

    fetch(source)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.total - a.total);
        setTeams(sorted);
      })
      .catch((err) => console.error("Error loading leaderboard:", err));
  }, [source]);

  return (
    <div className="p-8 overflow-x-scroll scollbar-hidden ">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Leaderboard</h1>
      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead className="bg-orange-700 text-[#fff]">
          <tr>
            <th className="border p-3">Rank</th>
            <th className="border p-3">Team</th>
            <th className="border p-3">Kill Points</th>
            <th className="border p-3">Position Points</th>
            <th className="border p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={idx} className="border hover:bg-orange-400 transition">
              <td className="p-3 font-semibold">{team.rank}</td>
              <td className="p-3">{team.team}</td>
              <td className="p-3">{team.kill_points}</td>
              <td className="p-3">{team.position_points}</td>
              <td className="p-3 font-bold text-black-600">{team.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
