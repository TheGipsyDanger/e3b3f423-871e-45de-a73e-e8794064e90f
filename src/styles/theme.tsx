import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { withChildren } from "@/utils";

export const theme = {
  fontSizes: {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    body: 13,
  },
  colors: {
    transparent: "transparent",
    black: "#000000",
    white: "#FFFFFF",
  },
};

export type IColors = typeof theme.colors;
export type IFontSizes = typeof theme.fontSizes;

export const ThemeProvider = ({ children }: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
