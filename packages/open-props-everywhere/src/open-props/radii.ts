import type { PandaRecursiveToken } from '../types'

const baseRadii = {
  radius_1: { value: '2px' },
  radius_2: { value: '5px' },
  radius_3: { value: '1rem' },
  radius_4: { value: '2rem' },
  radius_5: { value: '4rem' },
  radius_6: { value: '8rem' },
} satisfies PandaRecursiveToken

export const radii = {
  ...baseRadii,
  //
  round: { value: '1e5px' },
  full: { value: '1e5px' },
  //
  drawn_1: { value: '255px 15px 225px 15px / 15px 225px 15px 255px' },
  drawn_2: { value: '125px 10px 20px 185px / 25px 205px 205px 25px' },
  drawn_3: { value: '15px 255px 15px 225px / 225px 15px 255px 15px' },
  drawn_4: { value: '15px 25px 155px 25px / 225px 150px 25px 115px' },
  drawn_5: { value: '250px 25px 15px 20px / 15px 80px 105px 115px' },
  drawn_6: { value: '28px 100px 20px 15px / 150px 30px 205px 225px' },
  //
  blob_1: { value: '30% 70% 70% 30% / 53% 30% 70% 47%' },
  blob_2: { value: '53% 47% 34% 66% / 63% 46% 54% 37%' },
  blob_3: { value: '37% 63% 56% 44% / 49% 56% 44% 51%' },
  blob_4: { value: '63% 37% 37% 63% / 43% 37% 63% 57%' },
  blob_5: { value: '49% 51% 48% 52% / 57% 44% 56% 43%' },
  //
  conditional_1: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius_1.value})` },
  conditional_2: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius_2.value})` },
  conditional_3: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius_3.value})` },
  conditional_4: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius_4.value})` },
  conditional_5: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius_5.value})` },
  conditional_6: { value: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseRadii.radius_6.value})` },
} satisfies PandaRecursiveToken
