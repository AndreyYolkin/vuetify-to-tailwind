import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

import { spacers as values } from './_spacers'

const prefixes = ['pa', 'px', 'py', 'pt', 'pb', 'pl', 'ps', 'pe'] as const

export const paddingMap = values.reduce((acc, value) => {
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    for (const prefix of prefixes) {
      acc[`${prefix}-${bp}-${value}`] = `${tailwindBreakpoints[i]}:${prefix}-${value}`
    }
  }
  return acc
}, {} as Record<string, string>)
