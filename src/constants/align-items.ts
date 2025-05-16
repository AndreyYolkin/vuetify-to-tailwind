import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const values = ['start', 'end', 'center', 'baseline', 'stretch']

export const alignItemsMap = values.reduce((acc, value) => {
  acc[`align-${value}`] = `items-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`align-${bp}-${value}`] = `${tailwindBreakpoints[i]}:items-${value}`
  }
  return acc
}, {} as Record<string, string>)
