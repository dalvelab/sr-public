import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouterUrl } from "@models/urls";

import { includes } from "ramda";

import classNames from "classnames";

import "./Tab.scss";

interface IProps {
  title: string;
  path?: string;
  isActive: boolean;
  icon?: ReactNode;
  badge?: string;
  onClick: () => void;
}

export const Tab: React.FC<IProps> = (props) => {
  const { title, icon: Icon, isActive, onClick, path, children } = props;

  const location = useLocation();

  return (
    <>
      {path ? (
        <Link
          className={classNames("tab__wrapper", {
            tab__active:
              path === RouterUrl.root().path
                ? path === location.pathname
                : includes(path, location.pathname),
          })}
          onClick={onClick}
          to={path}
        >
          {Icon && <div className="tab__icon">{Icon}</div>}
          <span className="tab__text">{title}</span>
          <div className="tab__badge">{children}</div>
        </Link>
      ) : (
        <div
          className={classNames("tab__wrapper", {
            tab__active: isActive,
          })}
          onClick={onClick}
        >
          {Icon && <div className="tab__icon">{Icon}</div>}
          <span className="tab__text">{title}</span>
          <div className="tab__badge">{children}</div>
        </div>
      )}
    </>
  );
};
