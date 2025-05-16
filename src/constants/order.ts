import { tailwindBreakpoints, vuetifyBreakpoints } from './_breakpoints'

const suffixes = Object.fromEntries(Array.from({ length: 13 }).map((_, i) => [i.toString(), i]).concat([['first', -1], ['last', 13]]))

export const orderMap = Object.entries(suffixes).reduce((acc, [key, value]) => {
  acc[`order-${key}`] = `order-${value}`
  for (const [i, bp] of vuetifyBreakpoints.entries()) {
    acc[`order-${bp}-${key}`] = `${tailwindBreakpoints[i]}:order-${value}`
  }
  return acc
}, {} as Record<string, string>)
