import { GameCard } from 'components'
import { useList } from 'effector-react'
import { $processedTopGames } from 'models/top_games'

export default function TopGames() {
  const topGames = useList($processedTopGames, (topGamesData) => (
    <GameCard
      gameId={topGamesData.id}
      gameName={topGamesData.name}
      gamePreviewUrl={topGamesData.box_art_url}
    />
  ))

  return <div className="flex">{topGames}</div>
}
