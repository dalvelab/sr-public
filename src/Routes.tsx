import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WelcomePage, StorePage, LayoutPage } from "./pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<WelcomePage />} />
          <Route path="shop" element={<StorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
