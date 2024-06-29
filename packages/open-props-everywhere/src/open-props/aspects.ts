import type { PandaRecursiveToken } from '../types'

export const aspectRatios = {
  square: { value: '1' },
  landscape: { value: '4/3' },
  portrait: { value: '3/4' },
  widescreen: { value: '16/9' },
  ultrawide: { value: '18/5' },
  golden: { value: '1.6180/1' },
} satisfies PandaRecursiveToken
