export type CssVarString = `var(--${string})`
export type DefaultTokenName = 'DEFAULT'

export type TokenConfigRecordValue = Record<string | number, string>
export type TokenConfigValue = string | TokenConfigRecordValue
export type TokenConfig<V extends TokenConfigValue = TokenConfigValue> = {
  name: string
  value: V
}

export type OpenPropsStepConfig = Readonly<[startIndex: number, numLevels: number]>

export type OpenPropsConfig = {
  steps: {
    colors: OpenPropsStepConfig
    gradients: OpenPropsStepConfig
    noise: OpenPropsStepConfig
    noiseFilter: OpenPropsStepConfig
    shadow: OpenPropsStepConfig
    innerShadow: OpenPropsStepConfig
    fontSize: OpenPropsStepConfig
    fontSizeFluid: OpenPropsStepConfig
    fontWeight: OpenPropsStepConfig
    fontLetterspacing: OpenPropsStepConfig
    fontLineheight: OpenPropsStepConfig
    easings: OpenPropsStepConfig
    sizesRem: OpenPropsStepConfig
    sizesPx: OpenPropsStepConfig
    sizesFluid: OpenPropsStepConfig
    sizesProseContainer: OpenPropsStepConfig
    sizesHeadlineContainer: OpenPropsStepConfig
    sizesRelativeChar: OpenPropsStepConfig
    borderSizes: OpenPropsStepConfig
    radii: OpenPropsStepConfig
    radiiBlob: OpenPropsStepConfig
    zIndices: OpenPropsStepConfig
  }
}
