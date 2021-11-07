import axios from 'axios'
import { TWITCH_BEARER, TWITCH_CLIENT_ID } from 'consts'
import {
  attach,
  combine,
  createEffect,
  createEvent,
  forward,
  restore,
} from 'effector'

export const setBroadcasterId = createEvent<string>()
export const $broadcasterId = restore(setBroadcasterId, '')

export const setGameId = createEvent<string>()
export const $gameId = restore(setGameId, '509663')

const $searchParams = combine($broadcasterId, $gameId)

export const searchFx = attach({
  source: $searchParams,
  async effect([broadcasterId, gameId]) {
    if (!(broadcasterId || gameId)) {
      throw new Error('set at least one parameter')
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
      traceError(err)
      throw err
    }
  },
})

type ClipData = {
  thumbnail_url: string
  url: string
  title: string
  broadcaster_name: string
}

const setClips = createEvent<ClipData[]>()
export const $clips = restore(setClips, [])

forward({
  from: searchFx.doneData,
  to: setClips,
})

const traceErrorFx = createEffect((err: Error) => {
  console.log('Error:', err)
})

forward({
  from: searchFx.failData,
  to: traceErrorFx,
})

function traceError(err: unknown) {
  console.log('Error:', err)
}
