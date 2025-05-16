import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'
import { spacers as values } from './_spacers'

export const gapMap = values.reduce((acc, value) => {
  acc[`ga-${value}`] = `gap-${value}`
  acc[`gc-${value}`] = `gap-x-${value}`
  acc[`gr-${value}`] = `gap-y-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`ga-${bp}-${value}`] = `${tailwindBreakpoints[i]}:gap-${value}`
    acc[`gc-${bp}-${value}`] = `${tailwindBreakpoints[i]}:gap-x-${value}`
    acc[`gr-${bp}-${value}`] = `${tailwindBreakpoints[i]}:gap-y-${value}`
  }
  return acc
}, {} as Record<string, string>)
