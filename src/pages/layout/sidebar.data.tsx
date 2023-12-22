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
    key: "Catalog",
    icon: <SlidersOutlined />,
    label: "Catalog",
    children: [
      { key: "Categories", label: "Categories" },
      {
        key: "Products",
        label: "Products",
      },
    ],
  },
  {
    key: "Annoucments",
    icon: <NotificationOutlined />,
    label: "Annoucments",
  },
  {
    key: "Staff",
    icon: <UserOutlined />,
    label: "Staff",
  },
  {
    key: "Reports",
    icon: <PieChartOutlined />,
    label: "Reports",
  },
];
