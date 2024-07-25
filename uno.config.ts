import {
  defineConfig,
  presetIcons,
  presetUno,
} from "unocss";

/** Create color palette vars */
function createColorPaletteVars() {
  const colors: App.Theme.ThemeColorKey[] = ["primary", "info", "success", "warning", "error"];
  const colorPaletteNumbers: App.Theme.ColorPaletteNumber[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const colorPaletteVar = {} as App.Theme.ThemePaletteColor;

  colors.forEach((color) => {
    colorPaletteVar[color] = `rgb(var(--${color}-color))`;
    colorPaletteNumbers.forEach((number) => {
      colorPaletteVar[`${color}-${number}`] = `rgb(var(--${color}-${number}-color))`;
    });
  });

  return colorPaletteVar;
}

const colorPaletteVars = createColorPaletteVars();

console.log(colorPaletteVars);

export default defineConfig({
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
    colors: {
      primary: "var(--primary-color)",
      primary_hover: "var(--primary-color-hover)",
      primary_suppl: "var(--primary-color-suppl)",
      primary_pressed: "var(--primary-color-pressed)",
      primary_active: "var(--primary-color-active)",
      primary_1: "var(--primary-color-1)",
      primary_2: "var(--primary-color-2)",
      primary_3: "var(--primary-color-3)",
      primary_4: "var(--primary-color-4)",
      primary_5: "var(--primary-color-5)",
      primary_6: "var(--primary-color-6)",
      primary_7: "var(--primary-color-7)",
      primary_8: "var(--primary-color-8)",
      primary_9: "var(--primary-color-9)",
      primary_10: "var(--primary-color-10)",
      action: "var(--action-color)",
      info: "var(--info-color)",
      info_hover: "var(--info-color-hover)",
      info_suppl: "var(--info-color-suppl)",
      info_pressed: "var(--info-color-pressed)",
      info_active: "var(--info-color-active)",
      success: "var(--success-color)",
      success_hover: "var(--success-color-hover)",
      success_suppl: "var(--success-color-suppl)",
      success_pressed: "var(--success-color-pressed)",
      success_active: "var(--success-color-active)",
      warning: "var(--warning-color)",
      warning_hover: "var(--warning-color-hover)",
      warning_suppl: "var(--warning-color-suppl)",
      warning_pressed: "var(--warning-color-pressed)",
      warning_active: "var(--warning-color-active)",
      error: "var(--error-color)",
      error_hover: "var(--error-color-hover)",
      error_suppl: "var(--error-color-suppl)",
      error_pressed: "var(--error-color-pressed)",
      error_active: "var(--error-color-active)",
      dark: "#18181c",

      container: "rgb(var(--container-bg-color))",
      boxShadow: {
        header: "var(--header-box-shadow)",
        sider: "var(--sider-box-shadow)",
        tab: "var(--tab-box-shadow)",
      },
    },
    fontSize: {
      "icon-xs": "0.875rem",
      "icon-small": "1rem",
      "icon": "1.125rem",
      "icon-large": "1.5rem",
      "icon-xl": "2rem",
    },
  },
});
