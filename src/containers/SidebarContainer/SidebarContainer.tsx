import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoSvg from "@icons/logo.svg";

import { Divider } from "@components/UI";
import { IconEnvelope } from "@components/Icons";
import { Tab } from "@components/Tabs";
import { RouterLinks } from "@models/routes";
import { TabsConfig } from "./Tabs";

import "./SidebarContainer.scss";

export const SidebarContainer: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
      className={
        isCollapsed
          ? "sidebar__wrapper__container--hidden"
          : "sidebar__wrapper__container"
      }
    >
      <div className="sidebar__logo">
        <img src={LogoSvg} alt="Logo Sidebar" />
        <h6 className="logo__text">
          <span className="font--primary">Строительные</span>{" "}
          <span className="font--black">Решения</span>
        </h6>
      </div>
      <Divider margin="24px 0" />
      <div className="sidebar__tabs__wrapper">
        {TabsConfig.map((tab) => (
          <Link to={tab.path}>
            <Tab
              isActive={isActive === tab.key}
              key={tab.key}
              title={tab.label}
              icon={tab.icon}
              onClick={() => handleTabClick(tab.key)}
            />
          </Link>
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
        <Tab
          title="Скрыть меню"
          onClick={handleCollapseClick}
          isActive={false}
          icon={<IconEnvelope color="#7178a1" />}
        />
      </div>
    </div>
  );
};
