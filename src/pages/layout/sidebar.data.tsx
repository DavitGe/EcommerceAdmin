import { MenuProps } from "antd";
import {
  PieChartOutlined,
  NotificationOutlined,
  SlidersOutlined,
  SettingOutlined,
  HddOutlined,
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
    key: "products",
    icon: <SlidersOutlined />,
    label: "Products",
  },
  {
    key: "References",
    icon: <SettingOutlined />,
    label: "References",
    children: [{ key: "categories", label: "Categories" }],
  },
  {
    key: "Reports",
    icon: <PieChartOutlined />,
    label: "Reports",
  },
];
