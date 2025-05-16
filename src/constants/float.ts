import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const floatOptions = 'left right none start end'.split(' ')

export const floatMap = floatOptions.reduce((acc, option) => {
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`float-${bp}-${option}`] = `${tailwindBreakpoints[i]}:float-${option}`
  }
  return acc
}, {} as Record<string, string>)
