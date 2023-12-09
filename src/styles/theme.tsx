import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { withChildren } from "@/utils";

export const theme = {
  colors: {
    transparent: "transparent",
    black: "#000000",
    white: "#FFFFFF",
  },
};

export type IColors = typeof theme.colors;

export const ThemeProvider = ({ children }: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
