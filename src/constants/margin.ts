import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

import { spacers } from './_spacers'

const values = spacers.concat(['auto'])

const prefixes = ['ma', 'mx', 'my', 'mt', 'mb', 'ml', 'ms', 'me'] as const

export const marginMap = values.reduce((acc, value) => {
  if (value !== 0) {
    for (const prefix of prefixes) {
      acc[`${prefix}-n${value}`] = `${prefix}--${value}`
    }
  }
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    for (const prefix of prefixes) {
      acc[`${prefix}-${bp}-${value}`] = `${tailwindBreakpoints[i]}:${prefix}-${value}`
      acc[`${prefix}-${bp}-n${value}`] = `${tailwindBreakpoints[i]}:${prefix}--${value}`
    }
  }
  return acc
}, {} as Record<string, string>)
