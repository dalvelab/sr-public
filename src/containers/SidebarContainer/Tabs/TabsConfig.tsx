import { ReactNode } from "react";
import { RouterUrl, RouterLinks } from "@models/index";

import { IconHome } from "@components/Icons";

interface ITab {
  key: RouterLinks;
  label: string;
  path: string;
  icon: ReactNode;
  renderBadge?: () => ReactNode;
}

export const TabsConfig: ITab[] = [
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
    icon: <IconHome color="#7178a1" />,
  },
  {
    key: RouterLinks.ABOUT,
    label: "О компании",
    path: RouterUrl.about().path,
    icon: <IconHome color="#7178a1" />,
  },
  {
    key: RouterLinks.PAYMENTANDSHIPMENT,
    label: "Оплата и доставка",
    path: RouterUrl.shipAndPayment().path,
    icon: <IconHome color="#7178a1" />,
  },
  {
    key: RouterLinks.FAVOURITE,
    label: "Избранное",
    path: RouterUrl.favourite().path,
    icon: <IconHome color="#7178a1" />,
  },
  {
    key: RouterLinks.CONTACTS,
    label: "Контакты",
    path: RouterUrl.contacts().path,
    icon: <IconHome color="#7178a1" />,
  },
];
