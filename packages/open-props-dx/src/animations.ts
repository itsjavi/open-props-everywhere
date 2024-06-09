import type { PandaRecursiveToken } from './types'

// TODO:
// 1 - replace var(--ease-*) with {easings.ease*}
export const animations = {
  fadeIn: { value: 'fade-in .5s var(--ease-3)' },
  fadeInBloomLight: { value: 'fade-in-bloom-light 2s var(--ease-3)' },
  fadeInBloomDark: { value: 'fade-in-bloom-dark 2s var(--ease-3)' },
  fadeOut: { value: 'fade-out .5s var(--ease-3)' },
  fadeOutBloomLight: { value: 'fade-out-bloom-light 2s var(--ease-3)' },
  fadeOutBloomDark: { value: 'fade-out-bloom-dark 2s var(--ease-3)' },
  scaleUp: { value: 'scale-up .5s var(--ease-3)' },
  scaleDown: { value: 'scale-down .5s var(--ease-3)' },
  slideOutUp: { value: 'slide-out-up .5s var(--ease-3)' },
  slideOutDown: { value: 'slide-out-down .5s var(--ease-3)' },
  slideOutRight: { value: 'slide-out-right .5s var(--ease-3)' },
  slideOutLeft: { value: 'slide-out-left .5s var(--ease-3)' },
  slideInUp: { value: 'slide-in-up .5s var(--ease-3)' },
  slideInDown: { value: 'slide-in-down .5s var(--ease-3)' },
  slideInRight: { value: 'slide-in-right .5s var(--ease-3)' },
  slideInLeft: { value: 'slide-in-left .5s var(--ease-3)' },
  shakeX: { value: 'shake-x .75s var(--ease-out-5)' },
  shakeY: { value: 'shake-y .75s var(--ease-out-5)' },
  shakeZ: { value: 'shake-z 1s var(--ease-in-out-3)' },
  spin: { value: 'spin 2s linear infinite' },
  ping: { value: 'ping 5s var(--ease-out-3) infinite' },
  blink: { value: 'blink 1s var(--ease-out-3) infinite' },
  float: { value: 'float 3s var(--ease-in-out-3) infinite' },
  bounce: { value: 'bounce 2s var(--ease-squish-2) infinite' },
  pulse: { value: 'pulse 2s var(--ease-out-3) infinite' },
} satisfies PandaRecursiveToken
