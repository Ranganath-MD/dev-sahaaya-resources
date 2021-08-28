import { Header } from "./Header";
import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../theme";
import { Content, ColorLine } from "./styles";

export const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme }>
      <GlobalStyles />
      <ColorLine />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Content>{children}</Content>
    </ThemeProvider>
  );
};
