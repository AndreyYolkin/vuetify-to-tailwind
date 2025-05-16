import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = {
  0: '0',
  1: '1',
}

export const flexGrowMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`flex-grow-${key}`] = `flex-grow-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-grow-${bp}-${key}`] = `${tailwindBreakpoints[i]}:flex-grow-${value}`
  }
  return acc
}, {} as Record<string, string>)
