export const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID ?? ''
export const TWITCH_BEARER = process.env.REACT_APP_TWITCH_BEARER ?? ''

export const DEFAULT_BROADCASTER_ID = ''
export const DEFAULT_GAME_ID = '509663'
export const DEFAULT_CURSOR = ''

export const AXIOS_CONFIG = {
  headers: {
    'Client-ID': TWITCH_CLIENT_ID,
    Authorization: TWITCH_BEARER,
  },
}
