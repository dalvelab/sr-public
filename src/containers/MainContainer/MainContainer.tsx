import React, { ReactNode } from "react";

import { Container } from "@components/UI";

import "./MainContainer.scss";

interface IProps {
  marginLeft: string;
  children: ReactNode;
}

export const MainContainer: React.FC<IProps> = (props) => {
  const { children, marginLeft } = props;
  return (
    <div className="main__container__wrapper" style={{ marginLeft }}>
      <Container>{children}</Container>
    </div>
  );
};
