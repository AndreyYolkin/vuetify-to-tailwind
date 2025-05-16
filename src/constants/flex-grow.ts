import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const values = [0, 1]

export const flexGrowMap = values.reduce((acc, value) => {
  acc[`flex-grow-${value}`] = `flex-grow-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-${bp}-grow-${value}`] = `${tailwindBreakpoints[i]}:flex-grow-${value}`
  }
  return acc
}, {} as Record<string, string>)
