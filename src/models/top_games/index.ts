import axios from 'axios'
import { TWITCH_BEARER, TWITCH_CLIENT_ID } from 'consts'
import { createEffect, createEvent, createStore } from 'effector'

export const fetchTopGamesFx = createEffect(async () => {
  const url = new URL('https://api.twitch.tv/helix/games/top')

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
})

interface TopGame {
  id: string
  name: string
  box_art_url: string
}

export const $topGames = createStore<TopGame[]>([])
export const $processedTopGames = $topGames.map((topGames) =>
  topGames.map((game) => ({
    ...game,
    box_art_url: game.box_art_url.replace(/-\{width\}x\{height\}/gi, ''),
  }))
)

export const gameCardClicked = createEvent<string>()
