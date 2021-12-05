import axios from 'axios'
import { TWITCH_BEARER, TWITCH_CLIENT_ID } from 'consts'
import { attach, combine, createEvent, restore } from 'effector'

export const setBroadcasterId = createEvent<string>()
export const $broadcasterId = restore(setBroadcasterId, '')

export const setGameId = createEvent<string>()
export const $gameId = restore(setGameId, '509663')

export const setCursor = createEvent<string>()
export const $cursor = restore(setCursor, '')
$cursor.watch((s) => console.log('$cursor', s))

const $searchParams = combine($broadcasterId, $gameId, $cursor)

export const searchFx = attach({
  source: $searchParams,
  async effect([broadcasterId, gameId, cursor]) {
    if (!(broadcasterId || gameId)) {
      throw Error('set at least one parameter')
    }

    const url = new URL('https://api.twitch.tv/helix/clips')

    if (!!broadcasterId) {
      url.searchParams.set('broadcaster_id', broadcasterId)
    }
    if (!!gameId) {
      url.searchParams.set('game_id', gameId)
    }
    if (!!cursor) {
      url.searchParams.set('after', cursor)
    }

    const config = {
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        Authorization: TWITCH_BEARER,
      },
    }

    try {
      const res = await axios(url.toString(), config)
      return res.data
    } catch (err) {
      throw err
    }
  },
})
