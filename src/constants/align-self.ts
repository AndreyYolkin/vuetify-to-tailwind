import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const values = ['auto', 'start', 'end', 'center', 'baseline', 'stretch']

export const alignSelfMap = values.reduce((acc, value) => {
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`self-${bp}-${value}`] = `${tailwindBreakpoints[i]}:self-${value}`
  }
  return acc
}, {} as Record<string, string>)
