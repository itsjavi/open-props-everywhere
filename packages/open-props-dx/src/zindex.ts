import type { PandaRecursiveToken } from './types'

export const zIndices = {
  layer_auto: { value: 'auto' },
  layer_hidden: { value: -1 },
  layer_0: { value: 0 },
  layer_1: { value: 1 },
  layer_2: { value: 200 },
  layer_3: { value: 300 },
  layer_4: { value: 400 },
  layer_5: { value: 500 },
  layer_important: { value: 2147483647 },
} satisfies PandaRecursiveToken<string | number>
