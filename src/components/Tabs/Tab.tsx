import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouterUrl } from "@models/urls";

import { includes } from "ramda";

import { Badge } from "@components/Badge";
import { isVoid } from "@utils/common";

import classNames from "classnames";

import "./Tab.scss";

interface IProps {
  title: string;
  path?: string;
  isActive: boolean;
  icon?: ReactNode;
  badge?: string | number;
  badgeProps?: {
    color: string;
    bgColor: string;
    activeColor: string;
    activeBgColor: string;
  };
  onClick: () => void;
}

export const Tab: React.FC<IProps> = (props) => {
  const { title, icon: Icon, badge, isActive, onClick, path } = props;

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
          {!isVoid(badge) && (
            <div className="tab__badge">
              <Badge
                text={badge}
                backgroundColor={
                  includes(path, location.pathname) ? "#3661ed" : "#ebf0fe"
                }
                color={
                  includes(path, location.pathname) ? "#ebf0fe" : "#3661ed"
                }
                padding="4px 8px"
              />
            </div>
          )}
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
        </div>
      )}
    </>
  );
};
