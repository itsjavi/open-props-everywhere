import type { CssVarString, OpenPropsStepConfig, TokenConfig } from './types'

export function extractOpPrefixes(opTokens: Record<string, string>, splitLast: boolean): string[] {
  const names = Object.keys(opTokens).map((name) => name.replace(/^[-]+/g, ''))

  return Array.from(
    new Set(
      splitLast
        ? names.map((name) => {
            const parts = name.split('-')
            parts.pop()
            return parts.join('-')
          })
        : names,
    ),
  )
}

export function cssvar(name: string): CssVarString {
  return `var(--${name})`
}

export function cssvarSteps(stepConfig: OpenPropsStepConfig, name: string, keyPrefix = ''): TokenConfig['value'] {
  const [start, finalStep] = stepConfig
  const values: CssVarString[] = []

  if (start <= 0) {
    for (let i = start; i <= 0; i++) {
      values.push(cssvar(`${name}-${''.padStart(-i + 1, '0')}`))
    }
  }

  for (let i = 1; i <= finalStep; i++) {
    values.push(cssvar(`${name}-${i}`))
  }

  return Object.fromEntries(values.map((value, i) => [`${keyPrefix}${i + 1}`, value]))
}
