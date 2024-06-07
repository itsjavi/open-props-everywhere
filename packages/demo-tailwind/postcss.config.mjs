import allOpenProps from 'open-props'

/** @see https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins  */
/** @see https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor  */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'tailwindcss',
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
