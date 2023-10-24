"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/app/lib/registry";
import { theme } from "@/app/styles/theme";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
