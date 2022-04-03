import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  WelcomePage,
  StorePage,
  SingleItemPage,
  AboutPage,
  ShipAndPaymentPage,
} from "@pages/index";
import { RouterUrl } from "@models/urls";
import { LayoutTemplate } from "@templates/LayoutTemplate";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterUrl.root().path} element={<LayoutTemplate />}>
          <Route index element={<WelcomePage />} />
          <Route path={RouterUrl.shop().path} element={<StorePage />} />
          <Route
            path={RouterUrl.shopItem().path}
            element={<SingleItemPage />}
          />
          <Route path={RouterUrl.about().path} element={<AboutPage />} />
          <Route
            path={RouterUrl.shipAndPayment().path}
            element={<ShipAndPaymentPage />}
          />

          <Route path={RouterUrl.favourite().path} element={<WelcomePage />} />
          <Route path={RouterUrl.contacts().path} element={<WelcomePage />} />
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
