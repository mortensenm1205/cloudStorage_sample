import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./config/store";
import Root from "./screens/Root";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement
);
