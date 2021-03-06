import classNames from "classnames";

import { Divider } from "@components/UI";
import { IconEnvelope, IconLogo, IconLogin } from "@components/Icons";
import { Tab } from "@components/Tabs";

import { SidebarTabs } from "./SidebarTabs";

import "./SidebarContainer.scss";

interface IProps {
  isCollapsed: boolean;
  setIsCollapsed: (isOpened: boolean) => void;
}

export const SidebarContainer: React.FC<IProps> = (props) => {
  const { isCollapsed, setIsCollapsed } = props;

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
        <SidebarTabs />
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
