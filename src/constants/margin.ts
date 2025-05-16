import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

import { spacers } from './_spacers'

const values = spacers.concat(['auto'])

const prefixes = ['mx', 'my', 'mt', 'mb', 'ml', 'ms', 'me'] as const

export const marginMap = values.reduce((acc, value) => {
  acc[`ma-${value}`] = `m-${value}`
  if (value !== 0) {
    for (const prefix of prefixes) {
      acc[`${prefix}-n${value}`] = `${prefix}--${value}`
    }
    acc[`ma-n${value}`] = `m--${value}`
  }
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    for (const prefix of prefixes) {
      acc[`${prefix}-${bp}-${value}`] = `${tailwindBreakpoints[i]}:${prefix}-${value}`
      acc[`${prefix}-${bp}-n${value}`] = `${tailwindBreakpoints[i]}:${prefix}--${value}`
    }
    acc[`ma-${bp}-${value}`] = `${tailwindBreakpoints[i]}:m-${value}`
    acc[`ma-${bp}-n${value}`] = `${tailwindBreakpoints[i]}:m--${value}`
  }
  return acc
}, {} as Record<string, string>)
