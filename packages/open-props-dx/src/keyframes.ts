import type { CssKeyframes } from '@pandacss/types'

export const keyframes = {
  fadeIn: {
    to: { opacity: 1 },
  },
  fadeInBloomLight: {
    '0%': {
      opacity: 0,
      filter: 'brightness(1) blur(20px)',
    },
    '10%': {
      opacity: 1,
      filter: 'brightness(2) blur(10px)',
    },
    '100%': {
      opacity: 1,
      filter: 'brightness(1) blur(0)',
    },
  },
  fadeInBloomDark: {
    '0%': {
      opacity: 0,
      filter: 'brightness(1) blur(20px)',
    },
    '10%': {
      opacity: 1,
      filter: 'brightness(0.5) blur(10px)',
    },
    '100%': {
      opacity: 1,
      filter: 'brightness(1) blur(0)',
    },
  },
  fadeOut: { to: { opacity: 0 } },
  fadeOutBloomLight: {
    '100%': {
      opacity: 0,
      filter: 'brightness(1) blur(20px)',
    },
    '10%': {
      opacity: 1,
      filter: 'brightness(2) blur(10px)',
    },
    '0%': {
      opacity: 1,
      filter: 'brightness(1) blur(0)',
    },
  },
  fadeOutBloomDark: {
    '100%': {
      opacity: 0,
      filter: 'brightness(1) blur(20px)',
    },
    '10%': {
      opacity: 1,
      filter: 'brightness(0.5) blur(10px)',
    },
    '0%': {
      opacity: 1,
      filter: 'brightness(1) blur(0)',
    },
  },
  scaleUp: {
    to: { transform: 'scale(1.25)' },
  },
  scaleDown: {
    to: { transform: 'scale(.75)' },
  },
  slideOutUp: {
    to: { transform: 'translateY(-100%)' },
  },
  slideOutDown: {
    to: { transform: 'translateY(100%)' },
  },
  slideOutRight: {
    to: { transform: 'translateX(100%)' },
  },
  slideOutLeft: {
    to: { transform: 'translateX(-100%)' },
  },
  slideInUp: {
    from: { transform: 'translateY(100%)' },
  },
  slideInDown: {
    from: { transform: 'translateY(-100%)' },
  },
  slideInRight: {
    from: { transform: 'translateX(-100%)' },
  },
  slideInLeft: {
    from: { transform: 'translateX(100%)' },
  },
  shakeX: {
    '0%, 100%': { transform: 'translateX(0%)' },
    '20%': { transform: 'translateX(-5%)' },
    '40%': { transform: 'translateX(5%)' },
    '60%': { transform: 'translateX(-5%)' },
    '80%': { transform: 'translateX(5%)' },
  },
  shakeY: {
    '0%, 100%': { transform: 'translateY(0%)' },
    '20%': { transform: 'translateY(-5%)' },
    '40%': { transform: 'translateY(5%)' },
    '60%': { transform: 'translateY(-5%)' },
    '80%': { transform: 'translateY(5%)' },
  },
  shakeZ: {
    '0%, 100%': { transform: 'rotate(0)' },
    '20%': { transform: 'rotate(-2def)' },
    '40%': { transform: 'rotate(2deg)' },
    '60%': { transform: 'rotate(-2deg)' },
    '80%': { transform: 'rotate(2def)' },
  },
  spin: {
    to: { transform: 'rotate(1turn)' },
  },
  ping: {
    '90%, 100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
  blink: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 },
  },
  float: {
    '50%': { transform: 'translateY(-25%)' },
  },
  bounce: {
    '25%': { transform: 'translateY(-20%)' },
    '40%': { transform: 'translateY(-3%)' },
    '0%, 60%, 100%': { transform: 'translateY(0)' },
  },
  pulse: {
    '50%': { transform: 'scale(.9,.9)' },
  },
} satisfies CssKeyframes
