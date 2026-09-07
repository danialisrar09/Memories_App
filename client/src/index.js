import React from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from '@mui/styles';

import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);