import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const values = 'left right none start end'.split(' ')

export const floatMap = values.reduce((acc, value) => {
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`float-${bp}-${value}`] = `${tailwindBreakpoints[i]}:float-${value}`
  }
  return acc
}, {} as Record<string, string>)
