import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      accent: string;
      light: string;
    };
    typography: {
      mainFontFamily: string;
      secondaryFont: string;
    };
  }
}
