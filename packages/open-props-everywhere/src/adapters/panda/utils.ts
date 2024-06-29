import type { Preset, Recursive, SemanticToken } from '@pandacss/types'
import { LCH_SCALE, LCH_SCALE_DARK } from '../../open-props/colors'
import type {
  ColorGeneratorConfig,
  ColorGeneratorConfigMap,
  PandaRecursiveSemanticToken,
  PandaRecursiveToken,
} from '../../types'

export function generateColorStop(
  lchScale: Array<[number, number, number]>,
  index: number,
  colorConfig: ColorGeneratorConfig,
): string {
  const midPoint = lchScale.length / 2

  const midPointDivider = Math.max(Math.abs(index - midPoint), 1)
  const relativeLuminanceShift = (colorConfig.luminanceShift ?? 0) / midPointDivider
  const relativeChromaShift = (colorConfig.chromaShift ?? 0) / midPointDivider

  const chromaValue = colorConfig.isGray ? lchScale[index][2] : lchScale[index][1]
  const luminance = lchScale[index][0] + relativeLuminanceShift
  const chroma = index <= midPoint ? chromaValue + relativeChromaShift : chromaValue - relativeChromaShift

  return `lch(${luminance}% ${chroma} ${colorConfig.hue})`
}

/**
 * Returns a PandaCSS color scale based on the LCH color space.
 *
 * Based on Open Props Colors vNext, from Adam Argyle.
 *
 * @see https://codepen.io/argyleink/pen/VwrKRrY
 */
export function generateLchColorStops(colorConfig: ColorGeneratorConfig): PandaRecursiveToken<string> {
  const config = {
    light: {} as PandaRecursiveToken<string>,
    dark: {} as PandaRecursiveToken<string>,
  } satisfies PandaRecursiveToken<string>

  for (let i = 0; i < LCH_SCALE.length; i++) {
    const stepName = i + 1
    config.light[`${stepName}`] = { value: generateColorStop(LCH_SCALE, i, colorConfig) }
    config.dark[`${stepName}`] = {
      value: generateColorStop(LCH_SCALE_DARK, i, colorConfig),
    }
  }

  return config
}

export function transformColorTokensToSemanticTokens(
  colorNames: string[],
  colorStopCount = LCH_SCALE.length,
): Recursive<SemanticToken<string>> {
  const semanticConfig: Recursive<SemanticToken<string>> = {}

  for (const colorName of colorNames) {
    for (let i = 0; i < colorStopCount; i++) {
      const scaleName = i + 1

      semanticConfig[colorName] = {
        ...semanticConfig[colorName],
        [scaleName]: {
          value: { base: `{colors.${colorName}.light.${scaleName}}`, _dark: `{colors.${colorName}.dark.${scaleName}}` },
        },
      }
    }
  }

  return semanticConfig
}

export function generatePandaColors(colors: ColorGeneratorConfigMap): {
  colors: PandaRecursiveToken<string>
  semanticColors: PandaRecursiveSemanticToken<string>
} {
  const colorEntries = Object.entries(colors)
  const mergedColors: PandaRecursiveToken<string> = Object.fromEntries(
    colorEntries.map(([name, color]) => [name, generateLchColorStops(color)]),
  )

  return {
    colors: mergedColors,
    semanticColors: transformColorTokensToSemanticTokens(Object.keys(colors), LCH_SCALE.length),
  }
}

export function generatePandaColorPreset(colors: ColorGeneratorConfigMap): Preset {
  const pandaColors = generatePandaColors(colors)

  return {
    theme: {
      extend: {
        tokens: {
          colors: pandaColors.colors,
        },
        semanticTokens: {
          colors: pandaColors.semanticColors,
        },
      },
    },
  }
}

// Function to interpolate luminance and chroma values with scaling
// function interpolateLch(index: number, luminanceFactor = 1, chromaFactor = 1) {
//   // Ensure index is within bounds
//   if (index < 0 || index >= LCH_SCALE.length) {
//     throw new Error('Index out of range')
//   }

//   // Linear interpolation
//   if (index === 0) {
//     return {
//       luminance: LCH_SCALE[0][0] * luminanceFactor,
//       chroma: LCH_SCALE[0][1] * chromaFactor,
//     }
//   }

//   const lowerIndex = Math.floor(index)
//   const upperIndex = Math.ceil(index)

//   const lowerLuminance = LCH_SCALE[lowerIndex][0] * luminanceFactor
//   const upperLuminance = LCH_SCALE[upperIndex][0] * luminanceFactor
//   const lowerChroma = LCH_SCALE[lowerIndex][1] * chromaFactor
//   const upperChroma = LCH_SCALE[upperIndex][1] * chromaFactor

//   // Interpolate between the two points
//   const fraction = index - lowerIndex
//   const interpolatedLuminance = lowerLuminance + fraction * (upperLuminance - lowerLuminance)
//   const interpolatedChroma = lowerChroma + fraction * (upperChroma - lowerChroma)

//   return { l: interpolatedLuminance, c: interpolatedChroma }
// }
