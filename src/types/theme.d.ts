declare namespace Theme {
  /**
   * the color scale number
   *
   */
  export type ColorScaleKey = keyof ColorScale;

  /**
   * value is color hex
   */
  interface ColorScale {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }

  type ColorKey = keyof Color;

  interface Color {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
  }

  type Colors = {
    [key in ColorKey | `${ColorKey}-${ColorScaleKey}`]: string;
  };

}
