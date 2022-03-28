import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WelcomePage, StorePage } from "@pages/index";
import { RouterUrl } from "@models/urls";
import { LayoutTemplate } from "@templates/LayoutTemplate";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterUrl.root().path} element={<LayoutTemplate />}>
          <Route index element={<WelcomePage />} />
          <Route path={RouterUrl.shop().path} element={<StorePage />} />
          <Route path={RouterUrl.shopItem().path} element={<StorePage />} />
          <Route
            path={RouterUrl.shipAndPayment().path}
            element={<WelcomePage />}
          />
          <Route path={RouterUrl.about().path} element={<WelcomePage />} />

          <Route path={RouterUrl.favourite().path} element={<WelcomePage />} />
          <Route path={RouterUrl.contacts().path} element={<WelcomePage />} />
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
