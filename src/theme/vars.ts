function createColorVars() {
  const colorKeys: Theme.ColorKey[] = ["primary", "info", "success", "warning", "error"];
  const colorScaleKeys: Theme.ColorScaleKey[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const colors = {} as Theme.Colors;

  colorKeys.forEach((color) => {
    colors[color] = `rgb(var(--${color}-color))`;
    colorScaleKeys.forEach((number) => {
      colors[`${color}-${number}`] = `rgb(var(--${color}-${number}-color))`;
    });
  });

  return colors;
}

const colorVars = createColorVars();

console.log(colorVars);

export const themeCssVars: Theme.CssVars = {
  colors: {
    ...colorVars,
  },
};
