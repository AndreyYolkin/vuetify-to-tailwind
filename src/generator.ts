import { writeFileSync } from 'node:fs'
import { classMap } from './constants/mappings'

writeFileSync('src/mappings.json', JSON.stringify(classMap, null, 2))
