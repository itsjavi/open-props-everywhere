import type { Conditions } from '@pandacss/types'

const selector = {
  dark: '.dark &',
  light: '.light &',
} satisfies Conditions

const media = {
  osDark: '@media (prefers-color-scheme: dark)',
  osLight: '@media (prefers-color-scheme: light)',
  motionReduce: '@media (prefers-reduced-motion: reduce)',
  motionSafe: '@media (prefers-reduced-motion: no-preference)',
  transparencyReduce: '@media (prefers-reduced-transparency: reduce)',
  transparencySafe: '@media (prefers-reduced-transparency: no-preference)',
  standalone: '@media (display-mode: standalone)',
  printMedia: '@media print',
  landscape: '@media (orientation: landscape)',
  portrait: '@media (orientation: portrait)',
  touchCapable: '@media (hover: none) and (pointer: coarse)',
  stylusCapable: '@media (hover: none) and (pointer: fine)',
  mouseCapable: '@media (hover: hover) and (pointer: fine)',
  p3Capable: '@media (dynamic-range: high) or (color-gamut:p3)',
} satisfies Conditions

const supports = {
  oklchCapable: '@supports (color: oklch(0 0 0))',
} satisfies Conditions

export const conditions = { selector, media, supports }
