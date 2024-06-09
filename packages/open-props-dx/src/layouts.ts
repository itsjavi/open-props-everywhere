const gridAdaptMixinViewportContext = '100vw'
const gridAdaptMixinBreak1 = '1024px'
const gridAdaptMixinBreak2 = '480px'
const aboveBreak1Columns = '5'
const aboveBreak2Columns = '2'

// Ported from https://github.com/facebook/stylex/blob/main/packages/open-props/src/layouts.stylex.js
// TODO: try to adapt it to the PandaCSS world

export const layouts = {
  gridCell: '[stack] 1fr / [stack] 1fr',
  gridCellName: 'stack',

  gridRam: 'repeat(auto-fit, minmax(min(0, 100%), 1fr))',
  gridHolyGrail: 'auto 1fr auto / auto 1fr auto',
  gridAdaptMixinViewportContext: gridAdaptMixinViewportContext,
  gridAdaptMixinContainerContext: '100%',
  gridAdaptMixinContext: gridAdaptMixinViewportContext,

  gridAdaptMixinBreak1: gridAdaptMixinBreak1,
  aboveBreak1Columns: aboveBreak1Columns,
  gridAdaptMixinBreak2: gridAdaptMixinBreak2,
  aboveBreak2Columns: aboveBreak2Columns,
  gridAdaptMixin: `repeat(auto-fill,
        minmax(
          clamp(
            clamp(
              calc(100% / calc(${aboveBreak1Columns} + 1) + 0.1%),
              calc(calc(${gridAdaptMixinBreak1} - ${gridAdaptMixinViewportContext}) * 1e5),
              calc(100% / calc(${aboveBreak2Columns} + 1) + 0.1%)
            ),
            calc(calc(${gridAdaptMixinBreak2} - ${gridAdaptMixinViewportContext}) * 1e5),
            100%
          ),
        1fr)
    )`,
}
