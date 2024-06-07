import { opConfig } from './config'
import type { TokenConfig, TokenConfigRecordValue } from './types'
import { cssvar, cssvarSteps } from './utils'

// It's tricky to generate the tokens out of what `open-props` npm package provides, so var names are hardcoded.
// Reference: https://open-props.style/

const colorNames = [
  'gray',
  'stone',
  'red',
  'pink',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
  'choco',
  'brown',
  'sand',
  'camo',
  'jungle',
] as const

const animationNames = [
  'fade-in',
  'fade-out',
  'fade-in-bloom',
  'fade-out-bloom',
  'shake-x',
  'shake-y',
  'shake-z',
  'slide-out-up',
  'slide-out-down',
  'slide-out-left',
  'slide-out-right',
  'slide-in-up',
  'slide-in-down',
  'slide-in-left',
  'slide-in-right',
  'spin',
  'ping',
  'blink',
  'float',
  'bounce',
  'pulse',
] as const

const easingNames = [
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'ease-elastic-out',
  'ease-elastic-in',
  'ease-elastic-in-out',
  'ease-spring',
  'ease-bounce',
  'ease-step',
  // deprecated:
  // 'ease-elastic',
  // 'ease-squish',
] as const

const screenSizes: Array<TokenConfig<string>> = [
  { name: 'xxs', value: '240px' },
  { name: 'xs', value: '360px' },
  { name: 'sm', value: '480px' },
  { name: 'md', value: '768px' },
  { name: 'lg', value: '1024px' },
  { name: 'xl', value: '1440px' },
  { name: 'xxl', value: '1920px' },
]

const colors: Array<TokenConfig<TokenConfigRecordValue>> = colorNames.map(
  (name): TokenConfig<TokenConfigRecordValue> => {
    return {
      name,
      value: cssvarSteps(opConfig.steps.colors, name) as TokenConfigRecordValue,
    }
  },
)

const gradients: Array<TokenConfig> = [{ name: 'gradient', value: cssvarSteps(opConfig.steps.gradients, 'gradient') }]

const noises: Array<TokenConfig> = [
  { name: 'noise', value: cssvarSteps(opConfig.steps.noise, 'noise') },
  { name: 'noise-filter', value: cssvarSteps(opConfig.steps.noiseFilter, 'noise-filter') },
]

const shadows: Array<TokenConfig> = [
  { name: 'shadow', value: cssvarSteps(opConfig.steps.shadow, 'shadow') },
  { name: 'inner', value: cssvarSteps(opConfig.steps.innerShadow, 'inner-shadow') },
]

const easings: Array<TokenConfig> = easingNames.map((name): TokenConfig => {
  return {
    name,
    value: cssvarSteps(opConfig.steps.easings, name),
  }
})

const aspectRatios: Array<TokenConfig> = [
  { name: 'square', value: 'var(--ratio-square)' },
  { name: 'landscape', value: 'var(--ratio-landscape)' },
  { name: 'portrait', value: 'var(--ratio-portrait)' },
  { name: 'widescreen', value: 'var(--ratio-widescreen)' },
  { name: 'ultrawide', value: 'var(--ratio-ultrawide)' },
  { name: 'golden', value: 'var(--ratio-golden)' },
]

const animations: Array<TokenConfig> = animationNames.map((name): TokenConfig => {
  return {
    name,
    value: `var(--animation-${name})`,
  }
})

const fontFamilies: Array<TokenConfig> = [
  { name: 'sans', value: 'var(--font-sans)' },
  { name: 'serif', value: 'var(--font-serif)' },
  { name: 'mono', value: 'var(--font-mono)' },
]

const fontSizes: Array<TokenConfig> = [
  { name: 'size', value: cssvarSteps(opConfig.steps.fontSize, 'font-size') },
  { name: 'fluid', value: cssvarSteps(opConfig.steps.fontSizeFluid, 'font-size-fluid') },
]

const fontWeight: Array<TokenConfig> = [{ name: 'lv', value: cssvarSteps(opConfig.steps.fontWeight, 'font-weight') }]
const fontLetterspacing: Array<TokenConfig> = [
  { name: 'space', value: cssvarSteps(opConfig.steps.fontLetterspacing, 'font-letterspacing') },
]

const fontLineheight: Array<TokenConfig> = [
  { name: 'height', value: cssvarSteps(opConfig.steps.fontLineheight, 'font-lineheight') },
]

// spacings are more for gaps, paddings and margins
const spacings: Array<TokenConfig> = [
  { name: 'size', value: cssvarSteps(opConfig.steps.sizesRem, 'size') },
  { name: 'px', value: cssvarSteps(opConfig.steps.sizesPx, 'size-px') },
  { name: 'fluid', value: cssvarSteps(opConfig.steps.sizesFluid, 'size-fluid') },
  { name: 'relative', value: cssvarSteps(opConfig.steps.sizesRelativeChar, 'size-relative') },
]

// sizes are more for layouts and containers widths and heights
const sizes: Array<TokenConfig> = [
  ...spacings,
  { name: 'content', value: cssvarSteps(opConfig.steps.sizesProseContainer, 'size-content') },
  { name: 'header', value: cssvarSteps(opConfig.steps.sizesHeadlineContainer, 'size-header') },
  // extras:
  { name: 'full', value: '100%' },
  { name: 'full-vw', value: '100vw' },
  { name: 'full-vh', value: '100vh' },
  {
    name: 'screen',
    value: Object.fromEntries(screenSizes.map((size) => [size.name, size.value])) as TokenConfig['value'],
  },
]

const borderWidths: Array<TokenConfig> = [
  { name: 'size', value: cssvarSteps(opConfig.steps.borderSizes, 'border-size') },
]

const radius: Array<TokenConfig> = [
  { name: 'radius', value: cssvarSteps(opConfig.steps.radii, 'radius') },
  { name: 'drawn', value: cssvarSteps(opConfig.steps.radii, 'radius-drawn') }, // aka. sketch(y)
  { name: 'blob', value: cssvarSteps(opConfig.steps.radiiBlob, 'radius-blob') },
  { name: 'conditional', value: cssvarSteps(opConfig.steps.radii, 'radius-conditional') }, // aka. fluid based on vw
  { name: 'round', value: cssvar('radius-round') },
  { name: 'full', value: cssvar('radius-round') },
]

const zIndices: Array<TokenConfig> = [
  { name: 'layer', value: cssvarSteps(opConfig.steps.zIndices, 'layer') },
  { name: 'layer-important', value: cssvar('layer-important') },
  { name: 'layer-hidden', value: '-1' },
]

export const openPropsTokens = {
  colors,
  gradients,
  noises,
  shadows,
  easings,
  aspectRatios,
  animations,
  fontFamilies,
  fontSizes,
  fontWeight,
  fontLetterspacing,
  fontLineheight,
  sizes,
  spacings,
  borderWidths,
  radius,
  zIndices,
  screenSizes,
}
