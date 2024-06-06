import * as tokens from './tokens'

describe('generated tokens system', () => {
  console.log(JSON.stringify(tokens, null, 2))

  expect(tokens.colors).toHaveLength(19)

  it('has correct tokens with (1) as starting step', () => {
    expect(tokens.gradients).toHaveLength(1)

    const defaultSteps = Object.values(tokens.gradients[0].value)

    expect(defaultSteps).not.toContain('var(--gradient-0)')
    expect(defaultSteps).toContain('var(--gradient-1)')
    expect(defaultSteps).toContain('var(--gradient-30)')
    expect(defaultSteps).not.toContain('var(--gradient-31)')
  })

  it('has correct tokens with (0) as starting step', () => {
    expect(tokens.fontLetterspacing).toHaveLength(1)

    const defaultSteps = Object.values(tokens.fontLetterspacing[0].value)

    expect(defaultSteps).toHaveLength(8)
    expect(defaultSteps).not.toContain('var(--font-letterspacing-00)')
    expect(defaultSteps).toContain('var(--font-letterspacing-1)')
    expect(defaultSteps).toContain('var(--font-letterspacing-7)')
    expect(defaultSteps).not.toContain('var(--font-letterspacing-8)')
  })

  it('has correct tokens with (00) as starting step', () => {
    expect(tokens.fontSizes).toHaveLength(2)
    const nonFluidFontSizes = Object.values(tokens.fontSizes[0].value)

    expect(nonFluidFontSizes).toHaveLength(10)
    expect(nonFluidFontSizes).not.toContain('var(--font-size-000)')
    expect(nonFluidFontSizes).toContain('var(--font-size-00)')
    expect(nonFluidFontSizes).toContain('var(--font-size-8)')
    expect(nonFluidFontSizes).not.toContain('var(--font-size-9)')
  })

  it('has correct steps for two-dimensional tokens (named tokens)', () => {
    expect(tokens.easings).toHaveLength(10)

    const easingsJson = JSON.stringify(tokens.easings).replace(/[\\"]/g, '')
    expect(easingsJson).toContain('name:ease,')
    expect(easingsJson).toContain('name:ease-in,')
    expect(easingsJson).toContain('name:ease-spring,')
    expect(easingsJson).not.toContain('name:ease-elastic,')
    expect(easingsJson).not.toContain('name:ease-squish,')
  })
})
