import type { PandaRecursiveSemanticToken, PandaRecursiveToken } from './types'

// Ported from https://github.com/facebook/stylex/blob/main/packages/open-props/src/shadows.stylex.js

const shadowStrength = '1%'
const shadowStrengthDark = '25%'

const shadowColor = '220 3% 15%'
const shadowColorDark = '220 40% 2%'

const innerHighlight = 'inset 0 -.5px 0 0 #fff2, inset 0 .5px 0 0 #0007'

export const shadows = {
  innerHighlight: {
    value: innerHighlight,
  },
} satisfies PandaRecursiveToken

export const semanticShadows = {
  shadow1: {
    value: {
      base: `0 1px 2px -1px hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
      _dark: `0 1px 2px -1px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 9%))`,
    },
  },
  shadow2: {
    value: {
      base: `
    0 3px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
    0 7px 14px -5px hsl(${shadowColor} / calc(${shadowStrength} + 5%))`,
      _dark: `
    0 3px 5px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
    0 7px 14px -5px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 5%))`,
    },
  },
  shadow3: {
    value: {
      base: `
      0 -1px 3px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
      0 1px 2px -5px hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
      0 2px 5px -5px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
      0 4px 12px -5px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
      0 12px 15px -5px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
      _dark: `
    0 -1px 3px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 2%)),
    0 1px 2px -5px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 2%)),
    0 2px 5px -5px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 4%)),
    0 4px 12px -5px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 5%)),
    0 12px 15px -5px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 7%))`,
    },
  },
  shadow4: {
    value: {
      base: `
      0 -2px 5px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
      0 1px 1px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
      0 2px 2px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
      0 5px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
      0 9px 9px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
      0 16px 16px -2px hsl(${shadowColor} / calc(${shadowStrength} + 6%))`,
      _dark: `
    0 -2px 5px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 2%)),
    0 1px 1px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
    0 2px 2px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
    0 5px 5px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 4%)),
    0 9px 9px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 5%)),
    0 16px 16px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 6%))`,
    },
  },
  shadow5: {
    value: {
      base: `
      0 -1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
      0 2px 1px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
      0 5px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
      0 10px 10px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
      0 20px 20px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
      0 40px 40px -2px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
      _dark: `
    0 -1px 2px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 2%)),
    0 2px 1px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
    0 5px 5px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
    0 10px 10px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 4%)),
    0 20px 20px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 5%)),
    0 40px 40px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 7%))`,
    },
  },
  shadow6: {
    value: {
      base: `
      0 -1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)),
      0 3px 2px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
      0 7px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)),
      0 12px 10px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)),
      0 22px 18px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)),
      0 41px 33px -2px hsl(${shadowColor} / calc(${shadowStrength} + 6%)),
      0 100px 80px -2px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
      _dark: `
      0 -1px 2px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 2%)),
      0 3px 2px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
      0 7px 5px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 3%)),
      0 12px 10px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 4%)),
      0 22px 18px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 5%)),
      0 41px 33px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 6%)),
      0 100px 80px -2px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 7%))`,
    },
  },
  inner0: {
    value: {
      base: `inset 0 0 0 1px hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
      _dark: `inset 0 0 0 1px hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 9%))`,
    },
  },
  inner1: {
    value: {
      base: `inset 0 1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%)), ${innerHighlight}`,
      _dark: `inset 0 1px 2px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 9%)), ${innerHighlight}`,
    },
  },
  inner2: {
    value: {
      base: `inset 0 1px 4px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%)), ${innerHighlight}`,
      _dark: `inset 0 1px 4px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 9%)), ${innerHighlight}`,
    },
  },
  inner3: {
    value: {
      base: `inset 0 2px 8px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%)), ${innerHighlight}`,
      _dark: `inset 0 2px 8px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 9%)), ${innerHighlight}`,
    },
  },
  inner4: {
    value: {
      base: `inset 0 2px 14px 0 hsl(${shadowColor} / calc(${shadowStrength} + 9%)), ${innerHighlight}`,
      _dark: `inset 0 2px 14px 0 hsl(${shadowColorDark} / calc(${shadowStrengthDark} + 9%)), ${innerHighlight}`,
    },
  },
} satisfies PandaRecursiveSemanticToken
