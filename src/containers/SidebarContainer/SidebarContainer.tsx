import React, { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { includes } from "ramda";
import { useLocation } from "react-router-dom";

import { TabsConfig } from "@constants/tabs";
import { Divider } from "@components/UI";
import { IconEnvelope, IconLogo, IconLogin } from "@components/Icons";
import { Tab } from "@components/Tabs";
import { RouterLinks } from "@models/routes";
import { uniqueItemsCountSelector } from "@selectors/count";

import "./SidebarContainer.scss";

interface IProps {
  isCollapsed: boolean;
  setIsCollapsed: (isOpened: boolean) => void;
}

export const SidebarContainer: React.FC<IProps> = (props) => {
  const { isCollapsed, setIsCollapsed } = props;

  const location = useLocation();
  const { count } = useSelector(uniqueItemsCountSelector);

  const [isActive, setIsActive] = useState(RouterLinks.WELCOME);

  const handleTabClick = (key: RouterLinks) => {
    setIsActive(key);
  };

  const handleContactTab = () => {
    console.log("Clicked");
  };

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={classNames("sidebar__wrapper__container", {
        "sidebar--visible": !isCollapsed,
        "sidebar--hidden": isCollapsed,
      })}
    >
      <div className="sidebar__logo">
        <IconLogo color="#3661ed" />
        <h6 className="logo__text">
          <span className="font--primary">Строительные</span>{" "}
          <span className="font--black">Решения</span>
        </h6>
      </div>
      <Divider margin="24px 0" />
      <div className="sidebar__tabs__wrapper">
        {TabsConfig.map((tab) => (
          <Tab
            path={tab.path}
            isActive={isActive === tab.key}
            key={tab.key}
            title={tab.label}
            icon={tab.icon}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.renderBadge &&
              tab.renderBadge(
                count,
                includes(tab.path, location.pathname) ? "#ebf0fe" : "#3661ed",
                includes(tab.path, location.pathname) ? "#3661ed" : "#ebf0fe"
              )}
          </Tab>
        ))}
      </div>
      <div className="sidebar__controls__wrapper">
        <Tab
          title="Связаться с нами"
          onClick={handleContactTab}
          isActive={false}
          icon={<IconEnvelope color="#7178a1" />}
        />
        <Divider margin="12px 0" />
        <div className="sidebar__conterols--hide">
          <Tab
            title="Скрыть меню"
            onClick={handleCollapseClick}
            isActive={false}
            icon={<IconLogin color="#7178a1" />}
          />
        </div>
      </div>
    </div>
  );
};
