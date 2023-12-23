import { MenuProps } from "antd";
import {
  PieChartOutlined,
  NotificationOutlined,
  SlidersOutlined,
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
      {
        key: "Products",
        label: "Products",
      },
      { key: "Categories", label: "Categories" },
      { key: "Attributes", label: "Attributes" },
      { key: "Coupons", label: "Coupons" },
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
