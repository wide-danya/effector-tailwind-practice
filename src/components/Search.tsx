import { useStore } from 'effector-react'
import {
  $broadcasterId,
  $gameId,
  searchFx,
  setBroadcasterId,
  setGameId,
} from 'models/search'

export default function Search() {
  const gameId = useStore($gameId)
  const broadcasterId = useStore($broadcasterId)

  return (
    <div className="flex justify-center my-4 space-x-4">
      <input
        className="pl-2 py-1 rounded-md shadow"
        type="text"
        onChange={(e) => setBroadcasterId(e.target.value)}
        placeholder="Broadcaster ID"
        value={broadcasterId}
      />
      <input
        className="pl-2 py-1 rounded-md shadow"
        type="text"
        onChange={(e) => setGameId(e.target.value)}
        placeholder="Game ID"
        value={gameId}
      />
      <button className="px-2 rounded-md shadow" onClick={() => searchFx()}>
        Search
      </button>
    </div>
  )
}
