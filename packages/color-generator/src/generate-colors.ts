import fs from 'node:fs'

import Color from 'colorjs.io'
import { colarPalette } from './palette-colar'
import { openColorPalette } from './palette-open-color'

type ColorMap = Record<string, Record<number, string>>

// Original: https://github.com/argyleink/open-props/blob/main/src/props.colors.src.js
// Result: colar.[hueName].[luminosityStep] => hexCode
const colar = colarPalette.reduce((root, { name, color }) => {
  let [hueName, luminosityStep] = name.split('-')

  hueName = hueName.toLowerCase()
  const luminosityStepInt = Number.parseInt(luminosityStep)

  const hue = root?.[hueName] ?? {}

  return Object.assign({}, root, {
    [hueName]: Object.assign({}, hue, { [luminosityStepInt]: color.toLowerCase() }),
  })
}, {} as ColorMap)

// Load `open-color` and restructure
// Result: openColor.[hueName].[luminosityStep] => hexCode
const openColor = Object.entries(openColorPalette)
  .filter((group) => typeof group[1] === 'object')
  .reduce(
    (root, [hueName, luminosityStepsObject]) =>
      Object.assign({}, root, {
        [hueName]: Object.fromEntries(
          Object.entries(luminosityStepsObject).map(([step, color]) => [
            step.replace('00', '').replace('50', '0'),
            color,
          ]),
        ),
      }),
    {} as ColorMap,
  )

// Combine `open-color` and `colar` palettes
const colors = Object.entries({
  // Extend `openColor.gray`
  gray: {
    ...openColor.gray,
    10: '#16191d',
    11: '#0d0f12',
    12: '#030507',
  },
  // Use `colar.gray` as "stone"
  stone: colar.gray,
  // Use all other colors in `colar`
  ...Object.fromEntries(Object.entries(colar).filter(([hueName]) => hueName !== 'gray')),
})

const hexTOhsl = (hex: string) =>
  new Color(hex)
    .to('lch')
    .coords.map(Math.round)
    .reduce((acc, coord, index) => {
      if (index > 0) {
        return `${acc} ${coord}%`
      }
      return `${acc}${coord}`
    }, '')

// const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const groupedObject = colors.reduce((root, [color, shades]) => {
  const base = `${color}_`
  let _root = `${root}\n\nexport const ${color}Color = {`

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(shades).forEach(
    ([num, hex]) => {
      _root = `${_root}
  ${base}${num}: '${hex}',`
      return _root
    },
    //   root += `
    // '${base}${num}': '${hex}',`
  )

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(shades).forEach(
    ([num, hex]) => {
      _root = `${_root}
  ${base}lch_${num}: '${hexTOhsl(hex)}',`
      return _root
    },
    //   root += `
    // '${base}${num}': '${hex}',`
  )

  _root += '\n}'

  return _root
}, '')

const hslVars = colors.reduce((root, [color, shades]) => {
  const base = `--${color}-`
  let _root = `${root}`

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(shades).forEach(([num, hex]) => {
    _root = `${_root}
    '${base}${num}-hsl': '${hexTOhsl(hex)}',`

    return _root
  })

  return _root
}, '')

const hexVars = colors.reduce((root, [color, shades]) => {
  const base = `--${color}-`
  let _root = `${root}`

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(shades).forEach(([num, hex]) => {
    _root = `${_root}
    '${base}${num}': ${hex}`

    return _root
  })

  return _root
}, '')

// console.log({ groupedObject })
// console.log(vars)
console.log('vars', hexVars, hslVars)

fs.writeFileSync('colors.js', groupedObject)
