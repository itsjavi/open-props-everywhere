import type { PandaRecursiveToken } from './types'

const baseRadii = {
  radius1: { value: '2px' },
  radius2: { value: '5px' },
  radius3: { value: '1rem' },
  radius4: { value: '2rem' },
  radius5: { value: '4rem' },
  radius6: { value: '8rem' },
} satisfies PandaRecursiveToken

export const radii = {
  ...baseRadii,
  //
  round: { value: '1e5px' },
  full: { value: '1e5px' },
  //
  drawn1: { value: '255px 15px 225px 15px / 15px 225px 15px 255px' },
  drawn2: { value: '125px 10px 20px 185px / 25px 205px 205px 25px' },
  drawn3: { value: '15px 255px 15px 225px / 225px 15px 255px 15px' },
  drawn4: { value: '15px 25px 155px 25px / 225px 150px 25px 115px' },
  drawn5: { value: '250px 25px 15px 20px / 15px 80px 105px 115px' },
  drawn6: { value: '28px 100px 20px 15px / 150px 30px 205px 225px' },
  //
  blob1: { value: '30% 70% 70% 30% / 53% 30% 70% 47%' },
  blob2: { value: '53% 47% 34% 66% / 63% 46% 54% 37%' },
  blob3: { value: '37% 63% 56% 44% / 49% 56% 44% 51%' },
  blob4: { value: '63% 37% 37% 63% / 43% 37% 63% 57%' },
  blob5: { value: '49% 51% 48% 52% / 57% 44% 56% 43%' },
  //
  conditional1: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius1.value})` },
  conditional2: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius2.value})` },
  conditional3: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius3.value})` },
  conditional4: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius4.value})` },
  conditional5: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius5.value})` },
  conditional6: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius6.value})` },
} satisfies PandaRecursiveToken
