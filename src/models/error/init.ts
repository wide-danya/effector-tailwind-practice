import { forward } from 'effector'
import { searchFx } from 'models/search'
import { traceErrorFx } from '.'

forward({
  from: searchFx.failData,
  to: traceErrorFx,
})
