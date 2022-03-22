import React from "react";
import { Outlet } from "react-router-dom";

import { MainContainer, SidebarContainer } from "../../containers";

export const LayoutPage: React.FC = () => {
  return (
    <>
      <SidebarContainer />
      <MainContainer marginLeft="415px">
        <Outlet />
      </MainContainer>
    </>
  );
};
