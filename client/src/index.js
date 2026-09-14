import React from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk';

import reducers from "./reducers"
import App from "./App";

const theme = createTheme();
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);