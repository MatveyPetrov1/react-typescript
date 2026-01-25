import { AboutIcon, MainIcon, ProfileIcon } from "@/shared/assets/icons";
import { RoutePath } from "@/shared/config/route/routeConfig";

export interface SidebarItemType {
  path: string;
  text: string;
  //eslint-disable-next-line
  Icon: any;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "Главная",
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: "О нас",
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: "Профиль",
    Icon: ProfileIcon,
    authOnly: true,
  },
];
