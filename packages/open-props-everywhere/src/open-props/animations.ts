import type { PandaRecursiveToken } from '../types'

export const animations = {
  fadeIn: { value: 'fade-in .5s {easings.ease_3}' },
  fadeInBloomLight: { value: 'fade-in-bloom-light 2s {easings.ease_3}' },
  fadeInBloomDark: { value: 'fade-in-bloom-dark 2s {easings.ease_3}' },
  fadeOut: { value: 'fade-out .5s {easings.ease_3}' },
  fadeOutBloomLight: { value: 'fade-out-bloom-light 2s {easings.ease_3}' },
  fadeOutBloomDark: { value: 'fade-out-bloom-dark 2s {easings.ease_3}' },
  scaleUp: { value: 'scale-up .5s {easings.ease_3}' },
  scaleDown: { value: 'scale-down .5s {easings.ease_3}' },
  slideOutUp: { value: 'slide-out-up .5s {easings.ease_3}' },
  slideOutDown: { value: 'slide-out-down .5s {easings.ease_3}' },
  slideOutRight: { value: 'slide-out-right .5s {easings.ease_3}' },
  slideOutLeft: { value: 'slide-out-left .5s {easings.ease_3}' },
  slideInUp: { value: 'slide-in-up .5s {easings.ease_3}' },
  slideInDown: { value: 'slide-in-down .5s {easings.ease_3}' },
  slideInRight: { value: 'slide-in-right .5s {easings.ease_3}' },
  slideInLeft: { value: 'slide-in-left .5s {easings.ease_3}' },
  shakeX: { value: 'shake-x .75s {easings.ease_out_5}' },
  shakeY: { value: 'shake-y .75s {easings.ease_out_5}' },
  shakeZ: { value: 'shake-z 1s {easings.ease_in_out_3}' },
  spin: { value: 'spin 2s linear infinite' },
  ping: { value: 'ping 5s {easings.ease_out_3} infinite' },
  blink: { value: 'blink 1s {easings.ease_out_3} infinite' },
  float: { value: 'float 3s {easings.ease_in_out_3} infinite' },
  bounce: { value: 'bounce 2s {easings.ease_elastic_in_out_2} infinite' },
  pulse: { value: 'pulse 2s {easings.ease_out_3} infinite' },
} satisfies PandaRecursiveToken
