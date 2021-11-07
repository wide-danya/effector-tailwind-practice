import { Search, ClipCards } from 'components'

export default function App() {
  return (
    <div className="w-full">
      <h1 className="my-2 text-center text-gray-800 text-3xl font-bold">
        Search Twitch Clips
      </h1>
      <Search />
      <ClipCards />
    </div>
  )
}
