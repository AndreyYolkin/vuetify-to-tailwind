import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const displayOptions = 'inline inline-block block table table-row table-cell flex inline-flex'.split(' ')

const commonDisplayMap = displayOptions.reduce((acc, option) => {
  acc[`d-${option}`] = option
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`d-${bp}-${option}`] = `${tailwindBreakpoints[i]}:${option}`
  }
  return acc
}, {} as Record<string, string>)

const hiddenDisplayMap = ['none'].reduce(acc => {
  acc[`d-none`] = 'hidden'
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`d-${bp}-none`] = `${tailwindBreakpoints[i]}:hidden`
  }
  return acc
}, {} as Record<string, string>)

export const displayMap: Record<string, string> = {
  ...commonDisplayMap,
  ...hiddenDisplayMap,
}
