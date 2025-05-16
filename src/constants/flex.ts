import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = {
  'fill': 'auto',
  '1-1': 'auto',
  '1-0': '[1_0_auto]',
  '0-1': 'initial',
  '0-0': 'none',
  '1-1-100': '[1_1_100%]',
  '1-0-100': '[1_0_100%]',
  '0-1-100': '[0_1_100%]',
  '0-0-100': '[0_0_100%]',
  '1-1-0': '[1_1_0]',
  '1-0-0': '[1_0_0]',
  '0-1-0': '[0_1_0]',
  '0-0-0': '[0_0_0]',
}

export const flexMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`flex-${key}`] = `flex-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`flex-${bp}-${key}`] = `${tailwindBreakpoints[i]}:flex-${value}`
  }
  return acc
}, {} as Record<string, string>)
