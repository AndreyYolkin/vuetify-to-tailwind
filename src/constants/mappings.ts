import { displayMap } from './display'
import { flexMap } from './flex'
import { flexDirectionMap } from './flex-direction'
import { flexGrowMap } from './flex-grow'
import { flexShrinkMap } from './flex-shrink'
import { floatMap } from './float'

export const classMap: Record<string, string> = {
  // overflow is the same
  ...displayMap,
  ...floatMap,
  ...flexMap,
  ...flexDirectionMap,
  ...flexGrowMap,
  ...flexShrinkMap,
}
