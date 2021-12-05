import { useStore } from 'effector-react'
import {
  $broadcasterId,
  $gameId,
  searchFx,
  setBroadcasterId,
  setCursor,
  setGameId,
} from 'models/search'

export default function Search() {
  const gameId = useStore($gameId)
  const broadcasterId = useStore($broadcasterId)

  const handleChangeBoradcasterId = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBroadcasterId(e.target.value)
    setCursor('')
  }
  const handleChangeGameId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value)
    setCursor('')
  }
  const handleSearchClick = () => {
    searchFx()
  }

  return (
    <div className="flex justify-center my-4 space-x-4">
      <input
        className="pl-2 py-1 rounded-md shadow"
        type="text"
        onChange={handleChangeBoradcasterId}
        placeholder="Broadcaster ID"
        value={broadcasterId}
      />
      <input
        className="pl-2 py-1 rounded-md shadow"
        type="text"
        onChange={handleChangeGameId}
        placeholder="Game ID"
        value={gameId}
      />
      <button className="px-2 rounded-md shadow" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  )
}
