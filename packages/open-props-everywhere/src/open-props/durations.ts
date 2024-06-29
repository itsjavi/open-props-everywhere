import type { PandaRecursiveToken } from '../types'

export const durations = {
  fastest: {
    value: '50ms',
  },
  faster: {
    value: '100ms',
  },
  fast: {
    value: '150ms',
  },
  normal: {
    value: '200ms',
  },
  slow: {
    value: '300ms',
  },
  slower: {
    value: '500ms',
  },
  slowest: {
    value: '1000ms',
  },
} satisfies PandaRecursiveToken
