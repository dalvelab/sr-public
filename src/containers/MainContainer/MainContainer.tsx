import React, { ReactNode } from "react";

import "./MainContainer.scss";

interface IProps {
  children: ReactNode;
  marginLeft: string;
}

export const MainContainer: React.FC<IProps> = (props) => {
  const { children, marginLeft } = props;
  return (
    <>
      <main className="main__container__wrapper" style={{ marginLeft }}>
        {children}
      </main>
    </>
  );
};
