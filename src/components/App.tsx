import { Search, ClipCards, TopGames } from 'components'
import { fetchTopGamesFx } from 'models/top_games'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    fetchTopGamesFx()
  }, [])

  return (
    <div className="w-full">
      <h1 className="my-2 text-center text-gray-800 text-3xl font-bold">
        Search Twitch Clips
      </h1>
      <Search />
      <TopGames />
      <ClipCards />
    </div>
  )
}
