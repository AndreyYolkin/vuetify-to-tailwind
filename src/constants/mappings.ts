import { alignContentMap } from './align-content'
import { alignItemsMap } from './align-items'
import { alignSelfMap } from './align-self'
import { displayMap } from './display'
import { flexMap } from './flex'
import { flexDirectionMap } from './flex-direction'
import { flexGrowMap } from './flex-grow'
import { flexShrinkMap } from './flex-shrink'
import { flexWrapMap } from './flex-wrap'
import { floatMap } from './float'
import { fontWeightsMap, monoMap } from './font'
import { gapMap } from './gap'
import { justifyContentMap } from './justify-content'
import { marginMap } from './margin'
import { orderMap } from './order'
import { paddingMap } from './padding'
import { positionMap } from './position'
import { roundedMap } from './rounded'
import { textDecorationMap } from './textDecoration'
import { textTransformMap } from './textTransform'
import { whiteSpaceMap } from './whiteSpace'

export const classMap: Record<string, string> = {
  // overflow is the same
  ...displayMap,
  ...floatMap,
  ...flexMap,
  ...flexDirectionMap,
  ...flexGrowMap,
  ...flexShrinkMap,
  ...flexWrapMap,
  ...justifyContentMap,
  ...alignItemsMap,
  ...alignContentMap,
  ...alignSelfMap,
  ...orderMap,
  ...gapMap,
  ...marginMap,
  ...paddingMap,
  ...roundedMap,
  ...positionMap,
  ...monoMap,
  ...fontWeightsMap,
  ...textTransformMap,
  ...textDecorationMap,
  ...whiteSpaceMap,
}
