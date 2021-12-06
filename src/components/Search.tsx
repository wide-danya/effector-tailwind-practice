import { useStore } from 'effector-react'
import {
  $broadcasterId,
  $gameId,
  broadcasterIdChanged,
  gameIdChanged,
  searchButtonClicked,
  getClipsFx,
} from 'models/search'
import { Spinner } from 'ui_kit'

export default function Search() {
  const gameId = useStore($gameId)
  const broadcasterId = useStore($broadcasterId)
  const pending = useStore(getClipsFx.pending)

  return (
    <div className="flex justify-center my-4 space-x-4">
      <input
        className="pl-2 py-1 rounded-md shadow"
        type="text"
        onChange={(e) => broadcasterIdChanged(e.target.value)}
        placeholder="Broadcaster ID"
        value={broadcasterId}
      />
      <input
        className="pl-2 py-1 rounded-md shadow"
        type="text"
        onChange={(e) => gameIdChanged(e.target.value)}
        placeholder="Game ID"
        value={gameId}
      />
      <button
        disabled={pending}
        className="items-center justify-center px-2 w-20 text-center rounded-md shadow"
        onClick={() => searchButtonClicked()}
      >
        {pending ? <Spinner /> : `Search`}
      </button>
    </div>
  )
}
