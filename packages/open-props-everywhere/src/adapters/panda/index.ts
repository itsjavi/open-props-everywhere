import type { Preset } from '@pandacss/types'
import { animations } from '../../open-props/animations'
import { aspectRatios } from '../../open-props/aspects'
import { blurs } from '../../open-props/blurs'
import { borderWidths } from '../../open-props/borders'
import { colorHues } from '../../open-props/colors'
import { conditions } from '../../open-props/conditions'
import { durations } from '../../open-props/durations'
import { easings } from '../../open-props/easings'
import { fonts } from '../../open-props/fonts'
import { gradients } from '../../open-props/gradients'
import { keyframes } from '../../open-props/keyframes'
import { masks } from '../../open-props/masks'
import { noiseAssets, noiseFilters } from '../../open-props/noises'
import { opacities } from '../../open-props/opacities'
import { radii } from '../../open-props/radii'
import { semanticShadows, shadows } from '../../open-props/shadows'
import { sizes } from '../../open-props/sizes'
import { zIndices } from '../../open-props/zindex'
import { generatePandaColors } from './utils'

const generatedColors = generatePandaColors(colorHues)

/**
 * PandaCSS Open Props Preset
 */
export const openPropsPandaPreset: Preset = {
  conditions: {
    extend: {
      ...conditions.selector,
      ...conditions.media,
      ...conditions.supports,
    },
  },
  theme: {
    extend: {
      breakpoints: sizes.screenSizes,
      semanticTokens: {
        colors: generatedColors.semanticColors,
        shadows: semanticShadows,
      },
      keyframes: keyframes,
      tokens: {
        assets: {
          ...noiseAssets,
        },
        colors: generatedColors.colors,
        borderWidths: borderWidths,
        animations: animations,
        easings: easings,
        shadows: shadows,
        gradients: { ...gradients, mask: masks },
        radii: radii,
        zIndex: zIndices,
        fontWeights: fonts.weights,
        fontSizes: fonts.sizes,
        sizes: sizes.all,
        spacing: sizes.spacing,
        lineHeights: fonts.lineHeights,
        letterSpacings: fonts.letterSpacings,
        aspectRatios: aspectRatios,
        fonts: fonts.families,
        blurs: blurs,
        durations: durations,
        opacity: opacities,
      },
    },
  },
  utilities: {
    extend: {
      noiseFilter: {
        className: 'noise-filter',
        values: noiseFilters,
        transform(value) {
          return { filter: value }
        },
      },
    },
  },
}
