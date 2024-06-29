# open-props-everywhere

A library to integrate [Open Props](https://open-props.style) with [PandaCSS](https://panda-css.com/)
and [TailwindCSS](https://tailwindcss.com/), providing a unified design token system for your projects.

Features:

- Ready to use PandaCSS theme presets. TailwindCSS support coming soon.
- Automatic dark mode support, thanks to the semantic color palettes.
- Create custom Open Props-like palettes, using `generatePandaColorPreset`.
- A more convenient way to access Open Props tokens in your projects, by importing the `openProps` object.
- A more intuitive token and token value naming, avoiding confusion with real integers
  in PandaCSS, e.g. `borderRadius: "radius_2"` instead of `borderRadius: "2"`. This also improves TypeScript efficiency
  and IDE code completion.
- Thanks to PandaCSS and TailwindCSS bundlers, the final build will only include the used tokens, reducing the final CSS size, compared to including the entire Open Props styles.

## Installation

In your PandaCSS or TailwindCSS project, install the `open-props-everywhere` package:

| Package Manager | Command                                 |
| --------------- | --------------------------------------- |
| pnpm            | `pnpm add -D open-props-everywhere`     |
| yarn            | `yarn add -D open-props-everywhere`     |
| bun             | `bun add -D open-props-everywhere`      |
| deno            | `deno add -D npm:open-props-everywhere` |
| npm             | `npm i -D open-props-everywhere`        |

## Usage

This project provides the presets to integrate Open Props as PandaCSS / TailwindCSS tokens. The tokens are built-in and there is no need to install the `open-props` package separately.

### With PandaCSS

Integrate Open Props with PandaCSS through this preset to use the design tokens in your styles.

This is an example with the recommended configuration:

```js
// panda.config.js
import { defineConfig } from "@pandacss/dev";
import { openPropsPandaPreset } from "open-props-everywhere";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", openPropsPandaPreset],
});
```

You can combine it with any other preset you want.

#### PandaCSS + React Example

```jsx
import { styled } from "@/styled-system/jsx";

export const Card = ({ children }) => (
  <styled.div
    css={{
      borderRadius: "radius_2",
      padding: "fluid_3",
      boxShadow: "shadow_2",
      _hover: {
        boxShadow: "shadow_3",
      },
      _motionSafe: {
        animation: "fade-in, shake-z forwards",
      },
    }}
  >
    {children}
  </styled.div>
);
```

### With TailwindCSS

TailwindCSS support is coming soon.

## Add custom Color Palette

You can generate custom color palettes using the `generatePandaColorPreset` or `generateTailwindColorPreset`\*
functions to generate a semantic color palette preset. This is an example for PandaCSS:

```ts
import { defineConfig } from "@pandacss/dev";
import {
  openPropsPandaPreset,
  generatePandaColorPreset,
} from "open-props-everywhere";

export default defineConfig({
  // ...
  presets: [
    "@pandacss/preset-base",
    openPropsPandaPreset,
    generatePandaColorPreset({
      blueberry: 252,
    }),
  ],
  // ...
});
```

(\*) Limitations:

- Since it is auto-generated based on hues, the number of steps is predefined to 16.
- Currently only LCH color palettes are generated.
- TailwindCSS support is not yet implemented.
