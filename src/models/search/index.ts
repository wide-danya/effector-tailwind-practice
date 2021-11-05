import axios from 'axios'
import { attach, combine, createEvent, restore } from 'effector'

export const setTerm = createEvent<string>()
export const $term = restore(setTerm, '')

export const setLocation = createEvent<string>()
export const $location = restore(setLocation, '')

export const toggleIsFullTime = createEvent<boolean>()
export const $isFullTime = restore(toggleIsFullTime, false)

export const setPage = createEvent<number>()
export const $page = restore(setPage, 0)

const $searchParams = combine($term, $location, $isFullTime, $page)

export const searchFx = attach({
  source: $searchParams,
  async effect([term, location, isFullTime, page]) {
    const url = `https://jobs.github.com/positions.json?description=${term}&location=${location}&full_time=${isFullTime}&page=${page}`

    try {
      const res = await axios({ url: url })
      return res.data as string
    } catch (err) {
      traceError(err)
    }
  },
})

function traceError(err: unknown) {
  console.log('Error:', err)
}
