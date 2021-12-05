import { forward } from 'effector'
import { searchFx, setCursor } from './'

forward({
  from: searchFx.doneData.map((data) => data?.pagination?.cursor ?? ''),
  to: setCursor,
})
