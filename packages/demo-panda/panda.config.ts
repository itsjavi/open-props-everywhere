import { defineConfig } from '@pandacss/dev'
import { openPropsPandaPreset } from 'open-props-everywhere'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}', './lib/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // The presets to use
  presets: ['@pandacss/preset-base', openPropsPandaPreset],

  // framework
  jsxFramework: 'react',
})
