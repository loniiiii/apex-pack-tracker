'use client'

import { useState } from 'react'

export default function Home() {
  const [player, setPlayer] = useState('')
  const [data, setData] = useState<any>(null)

  const database: any = {
    ImperialHal: {
      level: 500,
      kills: 12000,
      wins: 850,
      rank: 'Predator',
      rp: 150000,
      main: 'Wraith',
      weapon: 'R-301',
    },
    YoloPro: {
      level: 220,
      kills: 3400,
      wins: 120,
      rank: 'Diamond',
      rp: 7200,
      main: 'Octane',
      weapon: 'Flatline',
    },
  }

  const search = () => {
    const result = database[player]
    if (!result) {
      setData({ error: 'Player not found' })
      return
    }
    setData(result)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-10 flex flex-col items-center">
      
      <h1 className="text-4xl font-bold text-red-500 mb-8">
        Apex Legends Tracker
      </h1>

      <div className="w-full max-w-md flex gap-2">
        <input
          className="flex-1 p-3 rounded bg-zinc-800 outline-none"
          placeholder="Enter player name..."
          onChange={(e) => setPlayer(e.target.value)}
        />

        <button
          onClick={search}
          className="bg-red-600 px-5 rounded font-bold hover:bg-red-700"
        >
          Search
        </button>
      </div>

      {data && !data.error && (
        <div className="mt-10 w-full max-w-lg bg-zinc-800 p-6 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-4">
            {player}
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black p-3 rounded">Level: {data.level}</div>
            <div className="bg-black p-3 rounded">Kills: {data.kills}</div>
            <div className="bg-black p-3 rounded">Wins: {data.wins}</div>
            <div className="bg-black p-3 rounded">RP: {data.rp}</div>
            <div className="bg-black p-3 rounded">Rank: {data.rank}</div>
            <div className="bg-black p-3 rounded">Main: {data.main}</div>
            <div className="bg-black p-3 rounded col-span-2">
              Favorite Weapon: {data.weapon}
            </div>
          </div>

          <div className="mt-4 text-center text-red-400 font-bold">
            🔥 Apex Tracker Pro
          </div>
        </div>
      )}

      {data?.error && (
        <div className="mt-6 text-red-500">
          {data.error}
        </div>
      )}

    </main>
  )
}