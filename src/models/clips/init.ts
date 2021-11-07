import { forward } from 'effector'
import { searchFx } from 'models/search'
import { setClips } from '.'

forward({
  from: searchFx.doneData,
  to: setClips,
})
