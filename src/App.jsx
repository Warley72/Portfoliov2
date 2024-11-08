import React from "react";
import Header from "./components/layout/header";
import Home from "./components/layout/home";

import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Home/>
      </ThemeProvider>
    </>
  );
}
