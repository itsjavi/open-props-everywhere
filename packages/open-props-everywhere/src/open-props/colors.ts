import type { ColorGeneratorConfigMap } from '../types'

export const colorHues: ColorGeneratorConfigMap = {
  red: { hue: 27.768 },
  pink: { hue: 2.26422 },
  grape: { hue: 319.14 },
  violet: { hue: 294.097 },
  indigo: { hue: 285.498 },
  blue: { hue: 262.224 },
  cyan: { hue: 215.309 },
  teal: { hue: 178.741 }, // original is =~ 165, but it was too close to green
  green: { hue: 142.17 },
  lime: { hue: 119.932 },
  yellow: { hue: 82.1352 },
  lemon: { hue: 99.5612 },
  orange: { hue: 61.1974 },
  choco: { hue: 50.73 },
  brown: { hue: 62.49 },
  gray: { hue: 359, isGray: true },
  warmgray: { hue: 101.688, isGray: true },
  coldgray: { hue: 251.599, isGray: true },
}

export const LCH_SCALE: Array<[number, number, number]> = [
  // luminance, chroma, gray chroma:
  [98, 10, 2],
  [93, 20, 2],
  [85, 40, 3],
  [75, 46, 5],
  [66, 51, 5],
  [61, 52, 5],
  [55, 57, 5],
  [49, 58, 5],
  [43, 55, 5],
  [39, 48, 5],
  [31, 48, 4],
  [25, 48, 4],
  [15, 40, 2],
  [10, 30, 2],
  [5, 20, 2],
  [1, 5, 4],
]

export const LCH_SCALE_DARK: Array<[number, number, number]> = LCH_SCALE.slice().reverse()

/* 
Based on:
https://codepen.io/argyleink/pen/VwrKRrY?
* {
  gray: #adb5bd;
  red: #ff6b6b;
  pink: #f06595;
  purple: #cc5de8;
  violet: #f3f0ff;
  indigo: #5c7cfa;
  blue: #339af0;
  cyan: #22b8cf;
  teal: #20c997;
  green: #51cf66;
  lime: #94d82d;
  yellow: #fcc419;
  orange: #ff922b;

  base: var(indigo);

  color-0:  lch(from var(base) 98% 10 h);
  color-1:  lch(from var(base) 93% 20 h);
  color-2:  lch(from var(base) 85% 40 h);
  color-3:  lch(from var(base) 75% 46 h);
  color-4:  lch(from var(base) 66% 51 h);
  color-5:  lch(from var(base) 61% 52 h);
  color-6:  lch(from var(base) 55% 57 h);
  color-7:  lch(from var(base) 49% 58 h);
  color-8:  lch(from var(base) 43% 55 h);
  color-9:  lch(from var(base) 39% 48 h);
  color-10: lch(from var(base) 31% 48 h);
  color-11: lch(from var(base) 25% 48 h);
  color-12: lch(from var(base) 15% 40 h);
  color-13: lch(from var(base) 10% 30 h);
  color-14: lch(from var(base) 5% 20 h);
  color-15: lch(from var(base) 1% 5 h);
} 
*/
