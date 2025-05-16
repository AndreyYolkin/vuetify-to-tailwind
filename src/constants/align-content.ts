import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = {
  'start': 'start',
  'end': 'end',
  'center': 'center',
  'space-between': 'between',
  'space-around': 'around',
  'space-evenly': 'evenly',
  'stretch': 'stretch',
}
export const alignContentMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`align-content-${key}`] = `content-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`align-content-${bp}-${key}`] = `${tailwindBreakpoints[i]}:content-${value}`
  }
  return acc
}, {} as Record<string, string>)
