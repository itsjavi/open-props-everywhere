import type { Preset, Recursive, SemanticToken, Token } from '@pandacss/types'
import deepmerge from 'deepmerge'
import type { TokenConfig, TokenConfigRecordValue, TokenConfigValue } from '../types'
import { generateOklchColorStops } from '../utils'

export function transformTokenConfigValue(
  tokenConfigValue: TokenConfigValue,
): Token<string> | Recursive<Token<string>> {
  if (typeof tokenConfigValue === 'string') {
    return {
      value: tokenConfigValue as string,
    }
  }
  return Object.fromEntries(
    Object.entries(tokenConfigValue).map(([key, value]) => [
      key,
      {
        value,
      },
    ]),
  )
}

export function transformPlainTokenConfigs(tokenConfigs: TokenConfig<string>[]): Record<string, string> {
  return Object.fromEntries(
    tokenConfigs.map((tokenConfig) => {
      return [tokenConfig.name, tokenConfig.value]
    }),
  )
}

export function transformTokenConfigs(tokenConfigs: TokenConfig[]): Recursive<Token<string>> {
  return Object.fromEntries(
    tokenConfigs.map((tokenConfig) => {
      return [tokenConfig.name, transformTokenConfigValue(tokenConfig.value)]
    }),
  )
}

export function transformTokenConfigsToColors(
  tokenConfigs: TokenConfig<TokenConfigRecordValue>[],
): Recursive<Token<string>> {
  const tokenConfig: Recursive<Token<string>> = {}

  for (const colorConfig of tokenConfigs) {
    const colorName = colorConfig.name
    const scaleKeys = Object.keys(colorConfig.value)

    for (let i = 0; i < scaleKeys.length; i++) {
      const key = scaleKeys[i]
      const value = colorConfig.value[key]
      const reverseKey = scaleKeys[scaleKeys.length - 1 - i]
      const lightValue = colorConfig.value[reverseKey]

      tokenConfig[colorName] = deepmerge(tokenConfig[colorName], {
        light: {
          [reverseKey]: {
            value: lightValue,
          },
        },
        dark: {
          [reverseKey]: {
            value: value,
          },
        },
      })
    }
  }

  return tokenConfig
}

export function transformTokenConfigsToSemanticColors(
  tokenConfigs: TokenConfig<TokenConfigRecordValue>[],
): Recursive<SemanticToken<string>> {
  const semanticConfig: Recursive<SemanticToken<string>> = {}

  for (const colorConfig of tokenConfigs) {
    const colorName = colorConfig.name
    const scaleKeys = Object.keys(colorConfig.value)

    for (let i = 0; i < scaleKeys.length; i++) {
      const key = scaleKeys[i]

      semanticConfig[colorName] = {
        ...semanticConfig[colorName],
        [key]: {
          value: { base: `{colors.${colorName}.light.${key}}`, _dark: `{colors.${colorName}.dark.${key}}` },
        },
      }
    }
  }

  return semanticConfig
}

/**
 * @param colorHueMap A map of the color names and their base hue
 * @returns A PandaCSS preset with color tokens and semantic tokens
 */
export function generatePandaColorPreset(colorHueMap: Record<string, number>): Preset {
  const colors = Object.entries(colorHueMap)
  const colorConfigs: Array<TokenConfig<TokenConfigRecordValue>> = colors.map(([name, hue]) =>
    generateOklchColorStops(name, hue),
  )

  return {
    theme: {
      extend: {
        tokens: {
          colors: transformTokenConfigsToColors(colorConfigs),
        },
        semanticTokens: {
          colors: transformTokenConfigsToSemanticColors(colorConfigs),
        },
      },
    },
  }
}
