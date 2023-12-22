import { MenuProps } from "antd";
import {
  PieChartOutlined,
  NotificationOutlined,
  SlidersOutlined,
  SettingOutlined,
  HddOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const sidebarData: MenuProps["items"] = [
  {
    key: "Dashboard",
    icon: <HddOutlined />,
    label: "Dashboard",
  },
  {
    key: "Annoucments",
    icon: <NotificationOutlined />,
    label: "Annoucments",
  },
  {
    key: "Users",
    icon: <UserOutlined />,
    label: "Users",
  },
  {
    key: "Products",
    icon: <SlidersOutlined />,
    label: "Products",
  },
  {
    key: "References",
    icon: <SettingOutlined />,
    label: "References",
    children: [{ key: "Categories", label: "Categories" }],
  },
  {
    key: "Reports",
    icon: <PieChartOutlined />,
    label: "Reports",
  },
];
