import { sample } from 'effector'
import { getPaginatedClipsFx, getClipsFx } from 'models/search'
import { $clips } from '.'

sample({
  clock: getPaginatedClipsFx.doneData.map((data) => data?.data ?? []),
  source: $clips,
  fn: (clips, newClips) => [...clips, ...newClips],
  target: $clips,
})

sample({
  source: getClipsFx.doneData.map((data) => data?.data ?? []),
  target: $clips,
})
