import { MenuProps } from "antd";
import {
  SlidersOutlined,
  HddOutlined,
  UserOutlined,
  CompassOutlined,
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
    key: "Orders",
    icon: <CompassOutlined />,
    label: "Orders",
  },
  {
    key: "Staff",
    icon: <UserOutlined />,
    label: "Staff",
  },
];
