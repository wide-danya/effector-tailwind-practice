import { gameCardClicked } from 'models/top_games'

interface Props {
  gameId: string
  gameName: string
  gamePreviewUrl: string
}

export default function GameCard({ gameId, gameName, gamePreviewUrl }: Props) {
  return (
    <div className="px-2 w-20 h-20" onClick={() => gameCardClicked(gameId)}>
      <img className="rounded-t-lg" src={gamePreviewUrl} alt="" />
      <div className="pt-2 bg-white rounded-lg">
        <h1 className="text-gray-700 hover:text-gray-900 text-sm">
          {gameName}
        </h1>
      </div>
    </div>
  )
}
