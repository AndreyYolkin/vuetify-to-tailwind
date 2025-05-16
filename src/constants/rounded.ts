const prefixes = ['rounded', 'rounded-t', 'rounded-b', 'rounded-l', 'rounded-r', 'rounded-s', 'rounded-e'] as const

const suffixes = {
  0: '0',
  sm: 'sm',
  lg: 'lg',
  xl: '3xl',
  pill: 'full',
  circle: '1/2',
}

const usualRoundedMpa = Object.entries(suffixes).reduce((acc, [key, value]) => {
  for (const prefix of prefixes) {
    acc[`${prefix}-${key}`] = `${prefix}-${value}`
  }
  acc[`rounded-ts-${key}`] = `rounded-ss-${key}`
  acc[`rounded-te-${key}`] = `rounded-se-${key}`
  acc[`rounded-bs-${key}`] = `rounded-es-${key}`
  acc[`rounded-be-${key}`] = `rounded-es-${key}`
  return acc
}, {} as Record<string, string>)

const shapedMap = {
  'rounded-shaped': 'rounded-ss-3xl rounded-ee-3xl',
  // TODO: other classes seems to be broken
}

export const roundedMap = Object.assign({}, usualRoundedMpa, shapedMap)
