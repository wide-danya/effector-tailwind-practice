import { createEffect } from 'effector'

export const traceErrorFx = createEffect((err: Error) => {
  console.log('Error:', err)
})
