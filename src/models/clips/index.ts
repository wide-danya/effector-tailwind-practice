import { createEvent, restore } from 'effector'

interface ClipData {
  thumbnail_url: string
  url: string
  title: string
  broadcaster_name: string
}

export const setClips = createEvent<ClipData[]>()
export const $clips = restore(setClips, [])
