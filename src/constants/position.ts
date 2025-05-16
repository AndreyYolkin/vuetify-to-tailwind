const values = 'static relative fixed absolute sticky'.split(' ')

export const positionMap = values.reduce((acc, option) => {
  acc[`position-${option}`] = option
  return acc
}, {} as Record<string, string>)
