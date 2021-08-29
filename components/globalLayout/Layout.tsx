import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../theme";
import { Content, ColorLine } from "./styles";
import useDarkMode from "use-dark-mode";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), { ssr: false });

export const Layout: React.FC = ({ children }) => {
  const { value, toggle } = useDarkMode(false);

  const toggleTheme = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <ThemeProvider theme={value ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ColorLine />
      <Header toggleTheme={toggleTheme} theme={value} />
      <Content>{children}</Content>
    </ThemeProvider>
  );
};
