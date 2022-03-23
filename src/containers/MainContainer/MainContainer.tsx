import React, { ReactNode } from "react";

import { Container } from "@components/UI";

import "./MainContainer.scss";

interface IProps {
  children: ReactNode;
}

export const MainContainer: React.FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="main__container__wrapper">
      <Container>{children}</Container>
    </div>
  );
};
