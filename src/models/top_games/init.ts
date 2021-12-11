import { forward } from 'effector'
import { $topGames, fetchTopGamesFx } from '.'

forward({
  from: fetchTopGamesFx.doneData,
  to: $topGames,
})
