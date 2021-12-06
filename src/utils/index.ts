import axios from 'axios'
import { AXIOS_CONFIG } from 'consts'

export async function query(url: string) {
  try {
    const res = await axios(url, AXIOS_CONFIG)
    return res.data
  } catch (err) {
    throw err
  }
}

export function buildUrl(
  broadcasterId: string,
  gameId: string,
  cursor?: string
) {
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

  return url.toString()
}
