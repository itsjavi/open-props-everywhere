import type { PandaRecursiveToken } from '../types'

export const opacities = {
  invisible: { value: '0' },
  harder: { value: '0.125' },
  hard: { value: '0.25' },
  medium: { value: '0.5' },
  soft: { value: '0.75' },
  softer: { value: '0.825' },
  total: { value: '1' },
} satisfies PandaRecursiveToken
