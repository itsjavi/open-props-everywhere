import type { CssVarString, OpenPropsStepConfig, TokenConfig, TokenConfigRecordValue } from './types'

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

/**

Another way to generate them is with the new relative color CSS functions.

As you can see, the scale goes from 98% luminance to 1% luminance, also variating the chromacity, with the colors
at the center being more saturated than the ones at the extremes.

// https://codepen.io/argyleink/pen/VwrKRrY?
{
  --gray: #adb5bd;
  --red: #ff6b6b;
  --pink: #f06595;
  --purple: #cc5de8;
  --violet: #f3f0ff;
  --indigo: #5c7cfa;
  --blue: #339af0;
  --cyan: #22b8cf;
  --teal: #20c997;
  --green: #51cf66;
  --lime: #94d82d;
  --yellow: #fcc419;
  --orange: #ff922b;

  --base: var(--indigo);

  --color-0:  lch(from var(--base) 98% 10 h);
  --color-1:  lch(from var(--base) 93% 20 h);
  --color-2:  lch(from var(--base) 85% 40 h);
  --color-3:  lch(from var(--base) 75% 46 h);
  --color-4:  lch(from var(--base) 66% 51 h);
  --color-5:  lch(from var(--base) 61% 52 h);
  --color-6:  lch(from var(--base) 55% 57 h);
  --color-7:  lch(from var(--base) 49% 58 h);
  --color-8:  lch(from var(--base) 43% 55 h);
  --color-9:  lch(from var(--base) 39% 48 h);
  --color-10: lch(from var(--base) 31% 48 h);
  --color-11: lch(from var(--base) 25% 48 h);
  --color-12: lch(from var(--base) 15% 40 h);
  --color-13: lch(from var(--base) 10% 30 h);
  --color-14: lch(from var(--base) 5% 20 h);
  --color-15: lch(from var(--base) 1% 5 h);
}
 */
// @see https://github.com/argyleink/open-props/blob/main/src/props.colors-oklch.js
export function generateOklchColorStops(colorName: string, colorHue: number): TokenConfig<TokenConfigRecordValue> {
  const oklchScale = [
    ['99%', '.03'],
    ['95%', '.06'],
    ['88%', '.12'],
    ['80%', '.14'],
    ['74%', '.16'],
    ['68%', '.19'],
    ['63%', '.20'],
    ['58%', '.21'],
    ['53%', '.20'],
    ['49%', '.19'],
    ['42%', '.17'],
    ['35%', '.15'],
    ['27%', '.12'],
    ['20%', '.09'],
    ['14%', '.07'],
    ['11%', '.05'],
  ]

  const config: TokenConfig<TokenConfigRecordValue> = {
    name: colorName,
    value: {},
  }

  const values: Record<string, string> = {}

  for (let i = 0; i < oklchScale.length; i++) {
    const step = i + 1
    const l = oklchScale[i][0]
    const c = oklchScale[i][1]
    values[`${step}`] = `oklch(${l} ${c} ${colorHue})`
  }

  config.value = values
  return config
}
