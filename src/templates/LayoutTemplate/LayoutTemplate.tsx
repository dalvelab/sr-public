import React from "react";
import { Outlet } from "react-router-dom";

import { MainContainer, SidebarContainer } from "@containers/index";

import "./LayoutTemplate.scss";

export const LayoutTemplate: React.FC = () => {
  return (
    <main className="main__wrapper">
      <SidebarContainer />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </main>
  );
};
