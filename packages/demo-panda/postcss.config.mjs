import allOpenProps from 'open-props'

/** @see https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins  */
/** @see https://panda-css.com/docs/installation/nextjs  */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    '@pandacss/dev/postcss',
    ['postcss-jit-props', allOpenProps],
    [
      'postcss-preset-env',
      {
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}

export default config
