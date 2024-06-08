const families = {
  sans: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
  serif: 'ui-serif,serif',
  mono: 'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
}

const weights = {
  weight_1: 100,
  weight_2: 200,
  weight_3: 300,
  weight_4: 400,
  weight_5: 500,
  weight_6: 600,
  weight_7: 700,
  weight_8: 800,
  weight_9: 900,
}

const lineHeights = {
  lineheight_00: 0.95,
  lineheight_0: 1.1,
  lineheight_1: 1.25,
  lineheight_2: 1.375,
  lineheight_3: 1.5,
  lineheight_4: 1.75,
  lineheight_5: 2,
}

const letterSpacings = {
  letterspacing_0: '-.05em',
  letterspacing_1: '.025em',
  letterspacing_2: '.050em',
  letterspacing_3: '.075em',
  letterspacing_4: '.150em',
  letterspacing_5: '.500em',
  letterspacing_6: '.750em',
  letterspacing_7: '1em',
}

const sizes = {
  size_00: '.5rem',
  size_0: '.75rem',
  size_1: '1rem',
  size_2: '1.1rem',
  size_3: '1.25rem',
  size_4: '1.5rem',
  size_5: '2rem',
  size_6: '2.5rem',
  size_7: '3rem',
  size_8: '3.5rem',
  size_9: '4.5rem',
  size_10: '6rem',
  fluid_0: 'clamp(.75rem, 2vw, 1rem)',
  fluid_1: 'clamp(1rem, 4vw, 1.5rem)',
  fluid_2: 'clamp(1.5rem, 6vw, 2.5rem)',
  fluid_3: 'clamp(2rem, 9vw, 3.5rem)',
}

export const fonts = { families, sizes, weights, lineHeights, letterSpacings }
