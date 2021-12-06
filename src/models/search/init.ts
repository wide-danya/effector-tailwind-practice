import { guard, sample } from 'effector'
import { debounce } from 'lodash'
import {
  $broadcasterId,
  $cursor,
  $gameId,
  bottomRiched,
  broadcasterIdChanged,
  gameIdChanged,
  getClipsFx,
  getPaginatedClipsFx,
  searchButtonClicked,
} from './'

sample({
  clock: broadcasterIdChanged,
  target: $broadcasterId,
})

sample({
  clock: gameIdChanged,
  target: $gameId,
})

sample({
  clock: searchButtonClicked,
  target: getClipsFx,
})

sample({
  source: getPaginatedClipsFx.doneData.map(
    (data) => data?.pagination?.cursor ?? ''
  ),
  target: $cursor,
})

sample({
  clock: getClipsFx.doneData.map((data) => data?.pagination?.cursor ?? ''),
  target: $cursor,
})

guard({
  clock: bottomRiched,
  filter: getPaginatedClipsFx.pending.map((s) => !s),
  target: getPaginatedClipsFx,
})

window.addEventListener(
  'scroll',
  debounce(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      bottomRiched()
    }
  }, 100)
)
