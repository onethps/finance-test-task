import React, { Component } from "react";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import store, { configuredStore } from "../redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4c14ed",
    },
    secondary: {
      main: "#141629",
    },
    background: {
      default: "#f5f7fb",
    },
  },
  typography: {
    body2: {
      fontWeight: 600,
    },
  },
});

function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={configuredStore}>{children}</Provider>
    </ThemeProvider>
  );
}

Providers.propTypes = {
  children: Component,
};

export default Providers;
