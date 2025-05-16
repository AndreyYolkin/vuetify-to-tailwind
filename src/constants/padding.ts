import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

import { spacers as values } from './_spacers'

const prefixes = ['px', 'py', 'pt', 'pb', 'pl', 'ps', 'pe'] as const

export const paddingMap = values.reduce((acc, value) => {
  acc[`pa-${value}`] = `p-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    for (const prefix of prefixes) {
      acc[`${prefix}-${bp}-${value}`] = `${tailwindBreakpoints[i]}:${prefix}-${value}`
    }
    acc[`pa-${bp}-${value}`] = `${tailwindBreakpoints[i]}:p-${value}`
  }
  return acc
}, {} as Record<string, string>)
