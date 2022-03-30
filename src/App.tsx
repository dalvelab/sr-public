import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUniqueItemsCount } from "@actions/count";

import { Router } from "./Routes";

import "./common/styles/colors.css";
import "./common/styles/fonts.css";
import "./App.scss";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniqueItemsCount());
  }, [dispatch]);

  return (
    <>
      <Router />;
    </>
  );
};

export default App;
