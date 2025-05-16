import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = {
  0: '0',
  1: '1',
}

export const flexShrinkMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`flex-shrink-${key}`] = `flex-shrink-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-shrink-${bp}-${key}`] = `${tailwindBreakpoints[i]}:flex-shrink-${value}`
  }
  return acc
}, {} as Record<string, string>)
