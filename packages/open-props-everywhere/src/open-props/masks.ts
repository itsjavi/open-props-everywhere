// TODO: port from https://github.com/argyleink/open-props/blob/main/src/props.masks.js
//      https://github.com/facebook/stylex/blob/main/packages/open-props/src/masksEdges.stylex.js
// TODO: Make it Panda-compatible

const cornerCuts = {
  circles1: 'radial-gradient(1rem at 1rem 1rem,#0000 99%,#000) -1rem -1rem',
  circles2: 'radial-gradient(2rem at 2rem 2rem,#0000 99%,#000) -2rem -2rem',
  circles3: 'radial-gradient(4rem at 4rem 4rem,#0000 99%,#000) -4rem -4rem',
  squares1: 'conic-gradient(at calc(2 * 1rem) calc(2 * 1rem), #000 75%, #0000 0) -1rem -1rem',
  squares2: 'conic-gradient(at calc(2 * 2rem) calc(2 * 2rem), #000 75%, #0000 0) -2rem -2rem',
  squares3: 'conic-gradient(at calc(2 * 4rem) calc(2 * 4rem), #000 75%, #0000 0) -4rem -4rem',
  angles1: `
      conic-gradient(from -45deg at 1rem 1rem, #0000 25%, #000 0)
      -1rem 0 / 100% 51% repeat-x,
      conic-gradient(from 135deg at 1rem calc(100% - 1rem), #0000 25%, #000 0)
      -1rem 100% / 100% 51% repeat-x
    `,
  angles2: `
      conic-gradient(from -45deg at 2rem 2rem, #0000 25%, #000 0)
      -2rem 0 / 100% 51% repeat-x,
      conic-gradient(from 135deg at 2rem calc(100% - 2rem), #0000 25%, #000 0)
      -2rem 100% / 100% 51% repeat-x
    `,
  angles3: `
      conic-gradient(from -45deg at 4rem 4rem, #0000 25%, #000 0)
      -4rem 0 / 100% 51% repeat-x,
      conic-gradient(from 135deg at 4rem calc(100% - 4rem), #0000 25%, #000 0)
      -4rem 100% / 100% 51% repeat-x
    `,
}

const edges = {
  scoopBottom: 'radial-gradient(20px at 50% 100%,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%',
  scoopTop: 'radial-gradient(20px at 50% 0,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%',
  scoopVertical: 'radial-gradient(20px at 50% 20px,#0000 97%,#000) 50% -20px/ calc(1.9 * 20px) 100%',
  scoopLeft: 'radial-gradient(20px at 0 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)',
  scoopRight: 'radial-gradient(20px at 100% 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)',
  scoopHorizontal: 'radial-gradient(20px at 20px 50%,#0000 97%,#000) -20px/ 100% calc(1.9 * 20px)',
  scalloped: `
    radial-gradient(farthest-side,#000 97%,#0000) 0 0 / 20px 20px round,
    linear-gradient(#000 0 0) 50%/calc(100% - 20px) calc(100% - 20px) no-repeat
  `,
  scallopedBottom: `
    linear-gradient(to top,#0000 20px,#000 0),
    radial-gradient(20px at top,#000 97%,#0000) bottom / calc(1.9 * 20px) 20px
  `,
  scallopedTop: `
    linear-gradient(to bottom,#0000 20px,#000 0),
    radial-gradient(20px at bottom,#000 97%,#0000) top / calc(1.9 * 20px) 20px
  `,
  scallopedVertical: `
    linear-gradient(0deg,#0000 calc(2 * 20px),#000 0) 0 20px,
    radial-gradient(20px,#000 97%,#0000) 50% / calc(1.9 * 20px) calc(2 * 20px) repeat space
  `,
  scallopedLeft: `
    linear-gradient(to right,#0000 20px,#000 0),
    radial-gradient(20px at right,#000 97%,#0000) left / 20px calc(1.9 * 20px)
  `,
  scallopedRight: `
    linear-gradient(to left,#0000 20px,#000 0),
    radial-gradient(20px at left,#000 97%,#0000) right / 20px calc(1.9 * 20px)
  `,
  scallopedHorizontal: `
    linear-gradient(-90deg,#0000 calc(2 * 20px),#000 0) 20px,
    radial-gradient(20px,#000 97%,#0000) 50% / calc(2 * 20px) calc(1.9 * 20px) space repeat
  `,
  dripBottom: `
    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 100% repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x
  `,
  dripTop: `
    radial-gradient(20px at top,#0000 97%,#000) 50% 20px / calc(2 * 20px) 100% repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 1% / calc(4 * 20px) calc(2 * 20px) repeat-x
  `,
  dripVertical: `
    radial-gradient(20px at top   ,#0000 97%,#000) 50%             20px  / calc(2 * 20px) 51% repeat-x,
    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 51% repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% -   20px) 1%  / calc(4 * 20px) calc(2 * 20px) repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 3*20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x
  `,
  dripLeft: `
    radial-gradient(20px at left,#0000 97%,#000) 20px 50% / 100% calc(2 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y
  `,
  dripRight: `
    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 100% calc(2 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y
  `,
  dripHorizontal: `
    radial-gradient(20px at left ,#0000 97%,#000)             20px  50% / 51% calc(2 * 20px) repeat-y,
    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 51% calc(2 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1%  calc(50% -   20px) / calc(2 * 20px) calc(4 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 3*20px) / calc(2 * 20px) calc(4 * 20px) repeat-y
  `,
  zigZagTop: 'conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%',
  zigZagBottom: 'conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%',
  zigZagLeft: 'conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)',
  zigZagRight: 'conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)',
  zigZagHorizontal: `
    conic-gradient(from   45deg at left ,#0000,#000 1deg 90deg,#0000 91deg) left  / 51% calc(2 * 20px) repeat-y,
    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right / 51% calc(2 * 20px) repeat-y
  `,
  zigZagVertical: `
    conic-gradient(from 135deg at top   ,#0000,#000 1deg 90deg,#0000 91deg) top    / calc(2 * 20px) 51% repeat-x,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom / calc(2 * 20px) 51% repeat-x
  `,
}

export const masks = {
  cornerCuts,
  edges,
}
