import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = {
  'start': 'start',
  'end': 'end',
  'center': 'center',
  'space-between': 'between',
  'space-around': 'around',
  'space-evenly': 'evenly',
}

export const justifyContentMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`justify-${key}`] = `justify-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`justify-${bp}-${key}`] = `${tailwindBreakpoints[i]}:justify-${value}`
  }
  return acc
}, {} as Record<string, string>)
