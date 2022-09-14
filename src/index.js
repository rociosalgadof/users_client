import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);