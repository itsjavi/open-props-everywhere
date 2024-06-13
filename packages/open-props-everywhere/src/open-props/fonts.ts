import type { PandaRecursiveToken } from './types'

const families = {
  sans: { value: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif' },
  serif: { value: 'ui-serif,serif' },
  mono: {
    value:
      'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
  },
  // extra:
  comic: { value: 'Comic Neue,Comic Sans MS,Comic Sans,Chalkboard,Chalkboard SE,cursive' },
} satisfies PandaRecursiveToken

const weights = {
  weight_1: { value: '100' },
  weight_2: { value: '200' },
  weight_3: { value: '300' },
  weight_4: { value: '400' },
  weight_5: { value: '500' },
  weight_6: { value: '600' },
  weight_7: { value: '700' },
  weight_8: { value: '800' },
  weight_9: { value: '900' },
} satisfies PandaRecursiveToken

const lineHeights = {
  lineheight_00: { value: '0.95' },
  lineheight_0: { value: '1.1' },
  lineheight_1: { value: '1.25' },
  lineheight_2: { value: '1.375' },
  lineheight_3: { value: '1.5' },
  lineheight_4: { value: '1.75' },
  lineheight_5: { value: '2' },
} satisfies PandaRecursiveToken

const letterSpacings = {
  letterspacing_0: { value: '-.05em' },
  letterspacing_1: { value: '.025em' },
  letterspacing_2: { value: '.050em' },
  letterspacing_3: { value: '.075em' },
  letterspacing_4: { value: '.150em' },
  letterspacing_5: { value: '.500em' },
  letterspacing_6: { value: '.750em' },
  letterspacing_7: { value: '1em' },
} satisfies PandaRecursiveToken

const sizes = {
  size_00: { value: '.5rem' },
  size_0: { value: '.75rem' },
  size_1: { value: '1rem' },
  size_2: { value: '1.1rem' },
  size_3: { value: '1.25rem' },
  size_4: { value: '1.5rem' },
  size_5: { value: '2rem' },
  size_6: { value: '2.5rem' },
  size_7: { value: '3rem' },
  size_8: { value: '3.5rem' },
  size_9: { value: '4.5rem' },
  size_10: { value: '6rem' },
  fluid_0: { value: 'clamp(.75rem, 2vw, 1rem)' },
  fluid_1: { value: 'clamp(1rem, 4vw, 1.5rem)' },
  fluid_2: { value: 'clamp(1.5rem, 6vw, 2.5rem)' },
  fluid_3: { value: 'clamp(2rem, 9vw, 3.5rem)' },
} satisfies PandaRecursiveToken

export const fonts = { families, sizes, weights, lineHeights, letterSpacings }
