# @itsjavi/open-props-everywhere

A library to integrate Open Props CSS variables with PandaCSS and TailwindCSS, providing a unified design token system
for your projects.

## Installation

| Package Manager | Command                                           |
| --------------- | ------------------------------------------------- |
| deno            | `deno add @itsjavi/open-props-everywhere`         |
| bun             | `bunx jsr add @itsjavi/open-props-everywhere`     |
| pnpm            | `pnpm dlx jsr add @itsjavi/open-props-everywhere` |
| yarn            | `yarn dlx jsr add @itsjavi/open-props-everywhere` |
| npm             | `npx jsr add @itsjavi/open-props-everywhere`      |

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
import { openPropsPreset } from "@itsjavi/open-props-everywhere/panda";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", openPropsPreset],
});
```

You can combine it with any other preset you want.

#### Optimize final CSS

With `postcss-jit-props` you can also optimize the final CSS by removing unused properties.
Remember to add the plugin after the PandaCSS one.

```js
// postcss.config.cjs
const postcssjitprops = require("postcss-jit-props");
const allOpenProps = require("open-props");

module.exports = {
  plugins: [
    "@pandacss/dev/postcss",
    postcssjitprops(allOpenProps),
    "autoprefixer",
  ],
};
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
import { openPropsPreset } from "@itsjavi/open-props-everywhere/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  preflight: true,
  presets: [openPropsPreset],
};
```

You can combine it with any other preset you want.

#### Optimize final CSS

With `postcss-jit-props` you can also optimize the final CSS by removing unused properties.
Remember to add the plugin after the TailwindCSS one.

```js
// postcss.config.cjs
const postcssjitprops = require("postcss-jit-props");
const allOpenProps = require("open-props");

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    postcssjitprops(allOpenProps),
    "autoprefixer",
  ],
};
```

#### TailwindCSS Example

```jsx
export const Card = ({ children }) => (
  <div className="rounded-2 p-fluid-3 shadow-2 hover:shadow-3 motionOk:fade-in">
    {children}
  </div>
);
```
