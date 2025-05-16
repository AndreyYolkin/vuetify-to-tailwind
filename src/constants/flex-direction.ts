import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = {
  'column': 'col',
  'row': 'row',
  'column-reverse': 'col-reverse',
  'row-reverse': 'row-reverse',
}

export const flexDirectionMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`flex-${key}`] = `flex-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-${bp}-${key}`] = `${tailwindBreakpoints[i]}:flex-${value}`
  }
  return acc
}, {} as Record<string, string>)
