import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const values = [0, 1]

export const flexShrinkMap = values.reduce((acc, value) => {
  acc[`flex-shrink-${value}`] = `flex-shrink-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-${bp}-shrink-${value}`] = `${tailwindBreakpoints[i]}:flex-shrink-${value}`
  }
  return acc
}, {} as Record<string, string>)
