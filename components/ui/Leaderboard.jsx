"use client";
import { useEffect, useState } from "react";

export default function LeaderboardPage(source) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${source}`)
      .then((res) => res.json())
      .then((data) => {
        // sort by total points before setting
        const sorted = data.sort((a, b) => b.total - a.total);
        setTeams(sorted);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Leaderboard</h1>
      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead className="bg-gray-100 text-red-600">
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
            <tr key={idx} className="border hover:bg-gray-50 transition">
              <td className="p-3 font-semibold">{team.rank}</td>
              <td className="p-3">{team.team}</td>
              <td className="p-3">{team.kill_points}</td>
              <td className="p-3">{team.position_points}</td>
              <td className="p-3 font-bold text-red-700">{team.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
