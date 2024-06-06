import { opConfig } from './config'
import type { TokenConfig } from './types'
import { cssvar, cssvarSteps } from './utils'

// It's tricky to generate the tokens out of what `open-props` npm package provides, so var names are hardcoded.
// Reference: https://open-props.style/

export const colorNames = [
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

export const animationNames = [
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

export const easingNames = [
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

export const screenSizes: Array<TokenConfig> = [
  { name: 'xxs', value: '240px' },
  { name: 'xs', value: '360px' },
  { name: 'sm', value: '480px' },
  { name: 'md', value: '768px' },
  { name: 'lg', value: '1024px' },
  { name: 'xl', value: '1440px' },
  { name: 'xxl', value: '1920px' },
]

export const colors: Array<TokenConfig> = colorNames.map((name): TokenConfig => {
  return {
    name,
    value: cssvarSteps(opConfig.steps.colors, name),
  }
})

export const gradients: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.gradients, 'gradient') },
]

export const noises: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.noise, 'noise') },
  { name: 'filter', value: cssvarSteps(opConfig.steps.noiseFilter, 'noise-filter') },
]

export const shadows: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.shadow, 'shadow') },
  { name: 'inner', value: cssvarSteps(opConfig.steps.innerShadow, 'inner-shadow') },
]

export const easings: Array<TokenConfig> = easingNames.map((name): TokenConfig => {
  return {
    name,
    value: cssvarSteps(opConfig.steps.easings, name),
  }
})

export const aspectRatios: Array<TokenConfig> = [
  { name: 'square', value: 'var(--ratio-square)' },
  { name: 'landscape', value: 'var(--ratio-landscape)' },
  { name: 'portrait', value: 'var(--ratio-portrait)' },
  { name: 'widescreen', value: 'var(--ratio-widescreen)' },
  { name: 'ultrawide', value: 'var(--ratio-ultrawide)' },
  { name: 'golden', value: 'var(--ratio-golden)' },
]

export const animations: Array<TokenConfig> = animationNames.map((name): TokenConfig => {
  return {
    name,
    value: `var(--animation-${name})`,
  }
})

export const fontFamilies: Array<TokenConfig> = [
  { name: 'sans', value: 'var(--font-sans)' },
  { name: 'serif', value: 'var(--font-serif)' },
  { name: 'mono', value: 'var(--font-mono)' },
]

export const fontSizes: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.fontSize, 'font-size') },
  { name: 'fluid', value: cssvarSteps(opConfig.steps.fontSizeFluid, 'font-size-fluid') },
]

export const fontWeight: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.fontWeight, 'font-weight') },
]
export const fontLetterspacing: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.fontLetterspacing, 'font-letterspacing') },
]

export const fontLineheight: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.fontLineheight, 'font-lineheight') },
]

export const sizes: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.sizesRem, 'size') },
  { name: 'px', value: cssvarSteps(opConfig.steps.sizesPx, 'size-px') },
  { name: 'fluid', value: cssvarSteps(opConfig.steps.sizesFluid, 'size-fluid') },
  { name: 'prose', value: cssvarSteps(opConfig.steps.sizesProseContainer, 'size-content') },
  { name: 'heading', value: cssvarSteps(opConfig.steps.sizesHeadlineContainer, 'size-header') },
  { name: 'ch', value: cssvarSteps(opConfig.steps.sizesRelativeChar, 'size-relative') },
  {
    name: 'screen',
    value: Object.fromEntries(screenSizes.map((size) => [size.name, size.value])) as TokenConfig['value'],
  },
]

export const borderSizes: Array<TokenConfig> = [
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.borderSizes, 'border-size') },
]

export const radius: Array<TokenConfig> = [
  { name: 'round', value: cssvar('radius-round') },
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.radii, 'radius') },
  { name: 'sketch', value: cssvarSteps(opConfig.steps.radii, 'radius-drawn') },
  { name: 'blob', value: cssvarSteps(opConfig.steps.radiiBlob, 'radius-blob') },
  { name: 'fluid', value: cssvarSteps(opConfig.steps.radii, 'radius-conditional') },
]

export const zIndices: Array<TokenConfig> = [
  { name: 'important', value: cssvar('layer-important') },
  { name: 'DEFAULT', value: cssvarSteps(opConfig.steps.zIndices, 'layer') },
]

// Media Queries
