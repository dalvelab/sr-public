import { useState, ReactNode } from "react";
import { useSelector } from "react-redux";

import { Tab } from "@components/Tabs";
import { RouterUrl, RouterLinks } from "@models/index";
import { uniqueItemsCountSelector } from "@selectors/count";
import { favouriteItemsSelectorIds } from "@selectors/shop";

import {
  IconHome,
  IconCatalog,
  IconCall,
  IconAbout,
  IconShipping,
  IconLike,
} from "@components/Icons";

interface ITab {
  key: RouterLinks;
  label: string;
  path: string;
  icon: ReactNode;
  badge?: string | number;
}

export const SidebarTabs: React.FC = () => {
  const { count } = useSelector(uniqueItemsCountSelector);
  const { id: favouriteItemsIds } = useSelector(favouriteItemsSelectorIds);

  const [isActive, setIsActive] = useState(RouterLinks.WELCOME);

  const handleTabClick = (key: RouterLinks) => {
    setIsActive(key);
  };

  const TabsConfig: ITab[] = [
    {
      key: RouterLinks.WELCOME,
      label: "Главная",
      path: RouterUrl.root().path,
      icon: <IconHome color="#7178a1" />,
    },
    {
      key: RouterLinks.SHOP,
      label: "Каталог",
      path: RouterUrl.shop().path,
      icon: <IconCatalog color="#7178a1" />,
      badge: count,
    },
    {
      key: RouterLinks.ABOUT,
      label: "О компании",
      path: RouterUrl.about().path,
      icon: <IconAbout color="#7178a1" />,
    },
    {
      key: RouterLinks.PAYMENTANDSHIPMENT,
      label: "Оплата и доставка",
      path: RouterUrl.shipAndPayment().path,
      icon: <IconShipping color="#7178a1" />,
    },
    {
      key: RouterLinks.FAVOURITE,
      label: "Избранное",
      path: RouterUrl.favourite().path,
      icon: <IconLike color="#7178a1" />,
      badge: favouriteItemsIds.length,
    },
    {
      key: RouterLinks.CONTACTS,
      label: "Контакты",
      path: RouterUrl.contacts().path,
      icon: <IconCall color="#7178a1" />,
    },
  ];

  return (
    <>
      {TabsConfig.map((tab) => (
        <Tab
          path={tab.path}
          isActive={isActive === tab.key}
          key={tab.key}
          title={tab.label}
          icon={tab.icon}
          onClick={() => handleTabClick(tab.key)}
          badge={tab.badge}
        />
      ))}
    </>
  );
};
