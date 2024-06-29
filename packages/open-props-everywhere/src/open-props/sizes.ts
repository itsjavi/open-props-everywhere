import type { PandaRecursiveToken } from '../types'

const spacing = {
  size_000: { value: '-.5rem' },
  size_00: { value: '-.25rem' },
  size_1: { value: '.25rem' },
  size_2: { value: '.5rem' },
  size_3: { value: '1rem' },
  size_4: { value: '1.25rem' },
  size_5: { value: '1.5rem' },
  size_6: { value: '1.75rem' },
  size_7: { value: '2rem' },
  size_8: { value: '3rem' },
  size_9: { value: '4rem' },
  size_10: { value: '5rem' },
  size_11: { value: '7.5rem' },
  size_12: { value: '10rem' },
  size_13: { value: '15rem' },
  size_14: { value: '20rem' },
  size_15: { value: '30rem' },

  px_000: { value: '-8px' },
  px_00: { value: '-4px' },
  px_1: { value: '4px' },
  px_2: { value: '8px' },
  px_3: { value: '16px' },
  px_4: { value: '20px' },
  px_5: { value: '24px' },
  px_6: { value: '28px' },
  px_7: { value: '32px' },
  px_8: { value: '48px' },
  px_9: { value: '64px' },
  px_10: { value: '80px' },
  px_11: { value: '120px' },
  px_12: { value: '160px' },
  px_13: { value: '240px' },
  px_14: { value: '320px' },
  px_15: { value: '480px' },

  fluid_1: { value: 'clamp(.5rem, 1vw, 1rem)' },
  fluid_2: { value: 'clamp(1rem, 2vw, 1.5rem)' },
  fluid_3: { value: 'clamp(1.5rem, 3vw, 2rem)' },
  fluid_4: { value: 'clamp(2rem, 4vw, 3rem)' },
  fluid_5: { value: 'clamp(4rem, 5vw, 5rem)' },
  fluid_6: { value: 'clamp(5rem, 7vw, 7.5rem)' },
  fluid_7: { value: 'clamp(7.5rem, 10vw, 10rem)' },
  fluid_8: { value: 'clamp(10rem, 20vw, 15rem)' },
  fluid_9: { value: 'clamp(15rem, 30vw, 20rem)' },
  fluid_10: { value: 'clamp(20rem, 40vw, 30rem)' },

  relative_000: { value: '-.5ch' },
  relative_00: { value: '-.25ch' },
  relative_1: { value: '.25ch' },
  relative_2: { value: '.5ch' },
  relative_3: { value: '1ch' },
  relative_4: { value: '1.25ch' },
  relative_5: { value: '1.5ch' },
  relative_6: { value: '1.75ch' },
  relative_7: { value: '2ch' },
  relative_8: { value: '3ch' },
  relative_9: { value: '4ch' },
  relative_10: { value: '5ch' },
  relative_11: { value: '7.5ch' },
  relative_12: { value: '10ch' },
  relative_13: { value: '15ch' },
  relative_14: { value: '20ch' },
  relative_15: { value: '30ch' },
} satisfies PandaRecursiveToken

const containerSizes = {
  content_1: { value: '20ch' },
  content_2: { value: '45ch' },
  content_3: { value: '60ch' },

  header_1: { value: '20ch' },
  header_2: { value: '25ch' },
  header_3: { value: '35ch' },

  full: { value: '100%' },
  full_vw: { value: '100vw' },
  full_vh: { value: '100vh' },
} satisfies PandaRecursiveToken

const screenSizes = {
  xxs: '240px',
  xs: '360px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  xxl: '1920px',
}

const allSizes = {
  ...spacing,
  ...containerSizes,
  ...Object.fromEntries(Object.entries(screenSizes).map(([key, value]) => [`screen_${key}`, { value }])),
} satisfies PandaRecursiveToken

export const sizes = { spacing, containerSizes, screenSizes, all: allSizes }
