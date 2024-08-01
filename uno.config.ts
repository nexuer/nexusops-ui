import {
  defineConfig,
  presetIcons,
  presetUno,
} from "unocss";

import type { Theme } from "@unocss/preset-uno";
import { themeCssVars } from "./src/theme/vars";

export default defineConfig<Theme>({
  content: {
    pipeline: {
      exclude: ["node_modules", ".git", "dist"],
    },
  },
  presets: [
    presetUno({ dark: "class" }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: {
    // position layout
    "position-x-center": "absolute left-1/2 -translate-x-1/2",
    "pxc": "position-x-center",
    "position-y-center": "absolute top-1/2 -translate-y-1/2",
    "pyc": "position-y-center",
    "position-center": "position-x-center position-y-center",
    "pc": "position-center",

    // size: wdith height
    "wh-0": "w-0 h-0",
    "wh-full": "w-full h-full",
    "wh-screen": "w-screen h-screen",
    "wh-1/2": "w-1/2 h-1/2",

    // flex layout
    "flex-center": "flex justify-center items-center",
    "flex-col-center": "flex-center flex-col",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center",

    "i-flex-center": "inline-flex justify-center items-center",
    "i-flex-x-center": "inline-flex justify-center",
    "i-flex-y-center": "inline-flex items-center",
    "flex-col": "flex flex-col",
    "flex-col-stretch": "flex-col items-stretch",
    "i-flex-col": "inline-flex flex-col",
    "i-flex-col-stretch": "i-flex-col items-stretch",
    "flex-1-hidden": "flex-1 overflow-hidden",
    "absolute-lt": "absolute left-0 top-0",
    "absolute-lb": "absolute left-0 bottom-0",
    "absolute-rt": "absolute right-0 top-0",
    "absolute-rb": "absolute right-0 bottom-0",
    "absolute-tl": "absolute-lt",
    "absolute-tr": "absolute-rt",
    "absolute-bl": "absolute-lb",
    "absolute-br": "absolute-rb",
    "absolute-center": "absolute-lt flex-center wh-full",
    "fixed-lt": "fixed left-0 top-0",
    "fixed-lb": "fixed left-0 bottom-0",
    "fixed-rt": "fixed right-0 top-0",
    "fixed-rb": "fixed right-0 bottom-0",
    "fixed-tl": "fixed-lt",
    "fixed-tr": "fixed-rt",
    "fixed-bl": "fixed-lb",
    "fixed-br": "fixed-rb",
    "fixed-center": "fixed-lt flex-center wh-full",
    "nowrap-hidden": "whitespace-nowrap overflow-hidden",
    "ellipsis-text": "nowrap-hidden overflow-ellipsis",
    "transition-base": "transition-all duration-300 ease-in-out",
  },
  theme: {
    ...themeCssVars,
    fontSize: {
      "icon-xs": "0.875rem",
      "icon-small": "1rem",
      "icon": "1.125rem",
      "icon-large": "1.5rem",
      "icon-xl": "2rem",
    },
  },
});
