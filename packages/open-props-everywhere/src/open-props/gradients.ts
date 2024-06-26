import type { PandaRecursiveToken } from '../types'

export const gradients = {
  gradient_1: {
    value: 'linear-gradient(to bottom right,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)',
  },
  gradient_2: { value: 'linear-gradient(to bottom right,#48005c, #8300e2, #a269ff)' },
  gradient_3: {
    value: `
    radial-gradient(
      circle at top right,
      hsl(180 100% 50%), hsl(180 100% 50% / 0%)
    ),
    radial-gradient(
      circle at bottom left,
      hsl(328 100% 54%), hsl(328 100% 54% / 0%)
    )`,
  },
  gradient_4: { value: 'linear-gradient(to bottom right,#00F5A0,#00D9F5)' },
  gradient_5: { value: 'conic-gradient(from -270deg at 75% 110%, fuchsia, floralwhite)' },
  gradient_6: { value: 'conic-gradient(from -90deg at top left, black, white)' },
  gradient_7: { value: 'linear-gradient(to bottom right,#72C6EF,#004E8F)' },
  gradient_8: { value: 'conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111)' },
  gradient_9: { value: 'conic-gradient(from .5turn at bottom center, lightblue, white)' },
  gradient_10: {
    value:
      'conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)',
  },
  gradient_11: { value: 'conic-gradient(at bottom left, deeppink, cyan)' },
  gradient_12: { value: 'conic-gradient(from 90deg at 25% -10%, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85)' },
  gradient_13: {
    value: 'radial-gradient(circle at 50% 200%, #000142, #3b0083, #b300c3, #ff059f, #ff4661, #ffad86, #fff3c7)',
  },
  gradient_14: { value: 'conic-gradient(at top right, lime, cyan)' },
  gradient_15: { value: 'linear-gradient(to bottom right, #c7d2fe, #fecaca, #fef3c7)' },
  gradient_16: { value: 'radial-gradient(circle at 50% -250%, #374151, #111827, #000)' },
  gradient_17: { value: 'conic-gradient(from -90deg at 50% -25%, blue, blueviolet)' },
  gradient_18: {
    value: `
    linear-gradient(0deg,   hsla(0   100% 50% / 80%), hsla(0   100% 50% / 0) 75%),
    linear-gradient(60deg,  hsla(60  100% 50% / 80%), hsla(60  100% 50% / 0) 75%),
    linear-gradient(120deg, hsla(120 100% 50% / 80%), hsla(120 100% 50% / 0) 75%),
    linear-gradient(180deg, hsla(180 100% 50% / 80%), hsla(180 100% 50% / 0) 75%),
    linear-gradient(240deg, hsla(240 100% 50% / 80%), hsla(240 100% 50% / 0) 75%),
    linear-gradient(300deg, hsla(300 100% 50% / 80%), hsla(300 100% 50% / 0) 75%)
  `,
  },
  gradient_19: { value: 'linear-gradient(to bottom right,#ffe259,#ffa751)' },
  gradient_20: {
    value: 'conic-gradient(from -135deg at -10% center, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)',
  },
  gradient_21: {
    value:
      'conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)',
  },
  gradient_22: { value: 'linear-gradient(to bottom right,#acb6e5,#86fde8)' },
  gradient_23: { value: 'linear-gradient(to bottom right,#536976,#292E49)' },
  gradient_24: { value: 'conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)' },
  gradient_25: { value: 'conic-gradient(at 125% 50%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)' },
  gradient_26: { value: 'linear-gradient(to bottom right,#9796f0,#fbc7d4)' },
  gradient_27: { value: 'conic-gradient(from .5turn at bottom left, deeppink, rebeccapurple)' },
  gradient_28: { value: 'conic-gradient(from -90deg at 50% 105%, white, orchid)' },
  gradient_29: {
    value: `
    radial-gradient(
      circle at top right,
      hsl(250 100% 85%), hsl(250 100% 85% / 0%)
    ),
    radial-gradient(
      circle at bottom left,
      hsl(220 90% 75%), hsl(220 90% 75% / 0%)
    )`,
  },
  gradient_30: {
    value: `radial-gradient(
      circle at top right,
      hsl(150 100% 50%), hsl(150 100% 50% / 0%)
    ),
    radial-gradient(
      circle at bottom left,
      hsl(150 100% 84%), hsl(150 100% 84% / 0%)
    )`,
  },
} satisfies PandaRecursiveToken
