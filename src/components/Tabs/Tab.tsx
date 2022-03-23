import React, { ReactNode } from "react";

import "./Tab.scss";

interface IProps {
  title: string;
  isActive: boolean;
  icon?: ReactNode;
  badge?: string;
  onClick: () => void;
}

export const Tab: React.FC<IProps> = (props) => {
  const { title, icon: Icon, isActive, onClick } = props;
  return (
    <div
      className={`tab__wrapper ${isActive && "tab__active"}`}
      onClick={onClick}
    >
      {Icon && <div className="tab__icon">{Icon}</div>}
      <span className="tab__text">{title}</span>
    </div>
  );
};
