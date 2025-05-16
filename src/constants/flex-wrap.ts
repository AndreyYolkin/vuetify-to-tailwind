import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const values = ['wrap', 'nowrap', 'wrap-reverse']

export const flexWrapMap = values.reduce((acc, value) => {
  acc[`flex-${value}`] = `flex-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-${bp}-${value}`] = `${tailwindBreakpoints[i]}:flex-${value}`
  }
  return acc
}, {} as Record<string, string>)
