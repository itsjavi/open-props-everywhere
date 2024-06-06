import type { OpenPropsConfig } from './types'

export const opConfig: OpenPropsConfig = {
  steps: {
    colors: [0, 12],
    gradients: [1, 30],
    noise: [1, 5],
    noiseFilter: [1, 5],
    shadow: [1, 6],
    innerShadow: [0, 4],
    //
    easings: [1, 5],
    //
    fontSize: [-1, 8],
    fontSizeFluid: [0, 3],
    fontWeight: [1, 9],
    fontLetterspacing: [0, 7],
    fontLineheight: [-1, 5],
    //
    sizesRem: [-2, 15],
    sizesPx: [-2, 15],
    sizesFluid: [1, 10],
    sizesProseContainer: [1, 3],
    sizesHeadlineContainer: [1, 3],
    sizesRelativeChar: [-2, 15],
    //
    borderSizes: [1, 5],
    radii: [1, 6],
    radiiBlob: [1, 5],
    //
    zIndices: [1, 5],
  },
}
