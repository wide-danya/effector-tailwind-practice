import axios from 'axios'
import { TWITCH_BEARER, TWITCH_CLIENT_ID } from 'consts'
import { attach, combine, createEvent, restore } from 'effector'

export const setBroadcasterId = createEvent<string>()
export const $broadcasterId = restore(setBroadcasterId, '')

export const setGameId = createEvent<string>()
export const $gameId = restore(setGameId, '509663')

const $searchParams = combine($broadcasterId, $gameId)

export const searchFx = attach({
  source: $searchParams,
  async effect([broadcasterId, gameId]) {
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

    const config = {
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        Authorization: TWITCH_BEARER,
      },
    }

    try {
      const res = await axios(url.toString(), config)
      return res.data.data
    } catch (err) {
      throw err
    }
  },
})
