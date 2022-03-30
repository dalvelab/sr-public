import { ReactNode } from "react";

import { Badge } from "@components/Badge";
import { RouterUrl, RouterLinks } from "@models/index";

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
  renderBadge?: (number: number, color: string, bgColor: string) => ReactNode;
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
    icon: <IconCatalog color="#7178a1" />,
    renderBadge: (number: number, color, bgColor) => (
      <Badge
        text={number}
        backgroundColor={bgColor}
        color={color}
        padding="4px 8px"
      />
    ),
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
  },
  {
    key: RouterLinks.CONTACTS,
    label: "Контакты",
    path: RouterUrl.contacts().path,
    icon: <IconCall color="#7178a1" />,
  },
];
