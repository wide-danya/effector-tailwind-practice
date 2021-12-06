import { sample } from 'effector'
import { getClipsFx, getPaginatedClipsFx } from 'models/search'
import { traceErrorFx } from '.'

sample({
  clock: [getClipsFx.failData, getPaginatedClipsFx.failData],
  target: traceErrorFx,
})
