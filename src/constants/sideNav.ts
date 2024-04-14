import { DashboardPath } from "./path";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

type SvgInHtml = typeof LuLayoutDashboard;

interface INavLInk {
  name: string;
  path: string;
  icon: SvgInHtml;
}
const USER_SIDENAV: INavLInk[] = [
  {
    name: "Dashboard",
    path: DashboardPath.DASHBOARD,
    icon: LuLayoutDashboard,
  },
  {
    name: "Account",
    path: DashboardPath.ACCOUNT,
    icon: MdAnalytics,
  },
  {
    name: "User Information",
    path: DashboardPath.INFO,
    icon: MdAnalytics,
  },
  {
    name: "Cart",
    path: DashboardPath.CART,
    icon: MdAnalytics,
  },
];
const ADMIN_SIDENAV: INavLInk[] = [
  {
    name: "Product",
    path: DashboardPath.PRODUCT,
    icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "Settings",
    path: DashboardPath.SETTINGS,
    icon: RiSettingsFill,
  },
];

export { USER_SIDENAV, ADMIN_SIDENAV };
