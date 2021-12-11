import { forward } from 'effector'
import { gameCardClicked } from 'models/top_games'
import { $gameId, searchFx, setCursor } from './'

forward({
  from: searchFx.doneData.map((data) => data?.pagination?.cursor ?? ''),
  to: setCursor,
})

forward({
  from: gameCardClicked,
  to: $gameId,
})
