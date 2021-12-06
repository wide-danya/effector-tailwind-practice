import { DEFAULT_BROADCASTER_ID, DEFAULT_CURSOR, DEFAULT_GAME_ID } from 'consts'
import { attach, combine, createEvent, createStore } from 'effector'
import { buildUrl, query } from 'utils'

export const searchButtonClicked = createEvent()
export const gameIdChanged = createEvent<string>()
export const broadcasterIdChanged = createEvent<string>()
export const bottomRiched = createEvent()

export const $broadcasterId = createStore(DEFAULT_BROADCASTER_ID)
export const $gameId = createStore(DEFAULT_GAME_ID)
export const $cursor = createStore(DEFAULT_CURSOR)

export const $searchParams = combine({
  broadcasterId: $broadcasterId,
  gameId: $gameId,
  cursor: $cursor,
})

export const getClipsFx = attach({
  source: $searchParams,
  async effect({ broadcasterId, gameId }) {
    const url = buildUrl(broadcasterId, gameId)
    const result = await query(url)

    return result
  },
})

export const getPaginatedClipsFx = attach({
  source: $searchParams,
  async effect({ broadcasterId, gameId, cursor }) {
    const url = buildUrl(broadcasterId, gameId, cursor)
    const result = await query(url)

    return result
  },
})
