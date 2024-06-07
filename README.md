# open-props-everywhere

A library to integrate Open Props CSS variables with PandaCSS and TailwindCSS, providing a unified design token system
for your projects.

## Installation

In your PandaCSS or TailwindCSS project, install the `open-props-everywhere` package:

| Package Manager | Command                                 |
| --------------- | --------------------------------------- |
| pnpm            | `pnpm add -D open-props-everywhere`     |
| yarn            | `yarn add -D open-props-everywhere`     |
| bun             | `bun add -D open-props-everywhere`      |
| deno            | `deno add -D npm:open-props-everywhere` |
| npm             | `npm i -D open-props-everywhere`        |

You also need to install the following dependencies, e.g. with pnpm:

```sh
pnpm add -D autoprefixer postcss-import postcss-jit-props open-props
```

## Usage

This project only provides the presets to integrate Open Props as PandaCSS / TailwindCSS tokens.

Since this guide uses `postcss-jit-props` you won't need to include the Open Props stylesheet in your project, as
the plugin will generate the necessary CSS for you.

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

#### Optimize final CSS

With `postcss-jit-props` you can also optimize the final CSS by removing unused properties.
Remember to add the plugin after the PandaCSS one.

```js
// postcss.config.mjs
import allOpenProps from "open-props";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "postcss-import",
    "@pandacss/dev/postcss",
    ["postcss-jit-props", allOpenProps],
    "autoprefixer",
  ],
};

export default config;
```

#### PandaCSS Example

```jsx
import { styled } from '@/styled-system/jsx'

export const Card = ({children}) => (
  <styled.div
    css={{
      borderRadius: '2',
      padding: 'fluid-3',
      boxShadow: 'shadow-2',
      _hover: {
        boxShadow: 'shadow-3'
      }
      _motionOk: {
        animation: 'fade-in'
      }
    }}
  >
    {children}
  </styled.div>
)
```

### With TailwindCSS

Integrate Open Props with TailwindCSS through this preset to use the design tokens in your styles.

This is an example with the recommended configuration:

```js
// tailwind.config.js
import { openPropsTailwindPreset } from "open-props-everywhere";

/** @type {import('tailwindcss').Config} */
export default {
  preflight: true,
  presets: [openPropsTailwindPreset],
};
```

You can combine it with any other preset you want.

#### Optimize final CSS

With `postcss-jit-props` you can also optimize the final CSS by removing unused properties.
Remember to add the plugin after the TailwindCSS one.

```js
// postcss.config.mjs
import allOpenProps from "open-props";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    ["postcss-jit-props", allOpenProps],
    "autoprefixer",
  ],
};

export default config;
```

#### TailwindCSS Example

```jsx
export const Card = ({ children }) => (
  <div className="rounded-2 p-fluid-3 shadow-2 hover:shadow-3 motionOk:fade-in">
    {children}
  </div>
);
```
