import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./Routes";

import "./common/styles/colors.css";
import "./common/styles/fonts.css";
import "./App.scss";

export const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
