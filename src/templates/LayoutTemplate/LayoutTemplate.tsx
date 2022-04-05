import React, { useState } from "react";
import { useMediaMatch } from "rooks";
import { Outlet } from "react-router-dom";

import {
  MainContainer,
  SidebarContainer,
  MobileMenuContainer,
} from "@containers/index";

import "./LayoutTemplate.scss";

export const LayoutTemplate: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobileScreen = useMediaMatch("(max-width: 980px)");
  return (
    <main className="main__wrapper">
      {!isMobileScreen && (
        <SidebarContainer
          isCollapsed={isCollapsed}
          setIsCollapsed={() => setIsCollapsed(!isCollapsed)}
        />
      )}
      {isMobileScreen && <MobileMenuContainer />}
      <MainContainer
        marginLeft={!isMobileScreen ? (isCollapsed ? "120px" : "320px") : "0px"}
      >
        <Outlet />
      </MainContainer>
    </main>
  );
};
