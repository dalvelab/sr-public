import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { MainContainer, SidebarContainer } from "@containers/index";

import "./LayoutTemplate.scss";

export const LayoutTemplate: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <main className="main__wrapper">
      <SidebarContainer
        isCollapsed={isCollapsed}
        setIsCollapsed={() => setIsCollapsed(!isCollapsed)}
      />
      <MainContainer marginLeft={isCollapsed ? "60px" : "280px"}>
        <Outlet />
      </MainContainer>
    </main>
  );
};
