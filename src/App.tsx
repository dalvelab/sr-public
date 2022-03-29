import React from "react";
import { Provider } from "react-redux";

import { store } from "@store/store";

import { Router } from "./Routes";

import "./common/styles/colors.css";
import "./common/styles/fonts.css";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
