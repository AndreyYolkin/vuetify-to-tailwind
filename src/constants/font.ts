const fontWeights = ['thin', 'light', 'regular', 'medium', 'bold', 'black']

export const fontWeightsMap = fontWeights.reduce((acc, value) => {
  acc[`font-weight-${value}`] = `font-${value}`
  return acc
}, {} as Record<string, string>)

export const monoMap = {
  'text-mono': 'font-mono',
}
