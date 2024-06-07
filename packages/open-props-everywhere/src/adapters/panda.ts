/**
 * PandaCSS framework adapter module
 *
 * @module
 */

import type { Preset, Recursive, Token } from '@pandacss/types'
import { openPropsTokens } from '../tokens'
import type { TokenConfig, TokenConfigValue } from '../types'

function transformTokenConfigValue(tokenConfigValue: TokenConfigValue): Token<string> | Recursive<Token<string>> {
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

function transformTokenConfigs(tokenConfigs: TokenConfig[]): Recursive<Token<string>> {
  return Object.fromEntries(
    tokenConfigs.map((tokenConfig) => {
      return [tokenConfig.name, transformTokenConfigValue(tokenConfig.value)]
    }),
  )
}

function transformPlainTokenConfigs(tokenConfigs: TokenConfig<string>[]): Record<string, string> {
  return Object.fromEntries(
    tokenConfigs.map((tokenConfig) => {
      return [tokenConfig.name, tokenConfig.value]
    }),
  )
}

/**
 * PandaCSS Open Props Preset
 */
export const openPropsPandaPreset: Preset = {
  conditions: {
    extend: {
      // states
      hidden: '&:is([hidden])',
      inert: '&:is([inert])',
      // user OS preferences (less*)
      lessMotion: '@media (prefers-reduced-motion)',
      lessTransparency: '@media (prefers-reduced-transparency)',
      // display features (*Media)
      landscape: '@media (orientation: landscape)',
      portrait: '@media (orientation: portrait)',
      standalone: '@media (display-mode: standalone)',
      touchPointer: '@media (hover: none) and (pointer: coarse)',
      penPointer: '@media (hover: none) and (pointer: fine)',
      mousePointer: '@media (hover: hover) and (pointer: fine)',
      screenMedia: '@media screen',
      printMedia: '@media print',
      hdrColorMedia: '@media (dynamic-range: high) or (color-gamut:p3)',
      // supported browser features (*Ready)
      oklchReady: '@supports (color: oklch(0 0 0))',
    },
  },
  theme: {
    extend: {
      breakpoints: transformPlainTokenConfigs(openPropsTokens.screenSizes),
      tokens: {
        assets: transformTokenConfigs(openPropsTokens.noises),
        colors: transformTokenConfigs(openPropsTokens.colors),
        borderWidths: transformTokenConfigs(openPropsTokens.borderWidths),
        animations: transformTokenConfigs(openPropsTokens.animations),
        easings: transformTokenConfigs(openPropsTokens.easings),
        shadows: transformTokenConfigs(openPropsTokens.shadows),
        gradients: transformTokenConfigs(openPropsTokens.gradients),
        radii: transformTokenConfigs(openPropsTokens.radius),
        zIndex: transformTokenConfigs(openPropsTokens.zIndices),
        fontWeights: transformTokenConfigs(openPropsTokens.fontWeight),
        fontSizes: transformTokenConfigs(openPropsTokens.fontSizes),
        sizes: transformTokenConfigs(openPropsTokens.sizes),
        spacing: transformTokenConfigs(openPropsTokens.spacings),
        lineHeights: transformTokenConfigs(openPropsTokens.fontLineheight),
        letterSpacings: transformTokenConfigs(openPropsTokens.fontLetterspacing),
        aspectRatios: transformTokenConfigs(openPropsTokens.aspectRatios),
        fonts: transformTokenConfigs(openPropsTokens.fontFamilies),
        // Extras, not open-props tokens:
        opacity: {
          none: { value: 0 },
          subtle: { value: 0.125 },
          semisolid: { value: 0.5 },
          full: { value: 1 },
        },
        blurs: {
          xs: {
            value: '4px',
          },
          sm: {
            value: '8px',
          },
          md: {
            value: '12px',
          },
          lg: {
            value: '16px',
          },
          xl: {
            value: '24px',
          },
          '2xl': {
            value: '40px',
          },
          '3xl': {
            value: '64px',
          },
        },
        durations: {
          fastest: {
            value: '50ms',
          },
          faster: {
            value: '100ms',
          },
          fast: {
            value: '150ms',
          },
          normal: {
            value: '200ms',
          },
          slow: {
            value: '300ms',
          },
          slower: {
            value: '400ms',
          },
          slowest: {
            value: '500ms',
          },
        },
      },
    },
  },
}
