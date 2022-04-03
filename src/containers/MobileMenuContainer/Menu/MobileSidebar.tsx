import { useState } from "react";
import { useSelector } from "react-redux";
import { includes } from "ramda";

import { TabsConfig } from "@constants/tabs";
import { Tab } from "@components/Tabs";
import { IconLogo } from "@components/Icons";
import { RouterLinks } from "@models/routes";
import { uniqueItemsCountSelector } from "@selectors/count";

import "./MobileSidebar.scss";

interface IProps {
  onClick: () => void;
}

export const MobileSidebar: React.FC<IProps> = (props) => {
  const { onClick } = props;

  const { count } = useSelector(uniqueItemsCountSelector);

  const [isActive, setIsActive] = useState(RouterLinks.WELCOME);

  const handleTabClick = (key: RouterLinks) => {
    setIsActive(key);
    onClick();
  };

  return (
    <div className="mobile__sidebar">
      <div className="mobile__sidebar__content">
        <div className="logo__wrapper">
          <IconLogo color="#3661ed" />
          <h6 className="logo__text">
            <span className="font--primary">Строительные</span>{" "}
            <span className="font--black">Решения</span>
          </h6>
        </div>
        <div className="tabs__wrapper">
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
      </div>
    </div>
  );
};
