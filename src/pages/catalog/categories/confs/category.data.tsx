import {
  ShoppingCartOutlined,
  LaptopOutlined,
  MobileOutlined,
  DesktopOutlined,
  CameraOutlined,
  AudioOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { ICategory } from "../CategoriesView";

const categoryData: ICategory[] = [
  {
    id: 1,
    icon: <ThunderboltOutlined />,
    name: "Electronics",
    desc: "Explore a wide range of electronic devices",
    children: [
      {
        id: 11,
        icon: <LaptopOutlined />,
        name: "Laptops",
        desc: "Powerful laptops for work and play",
      },
      {
        id: 12,
        icon: <MobileOutlined />,
        name: "Mobile Phones",
        desc: "Stay connected with the latest smartphones",
      },
      {
        id: 13,
        icon: <DesktopOutlined />,
        name: "Desktops",
        desc: "High-performance desktop computers",
      },
      {
        id: 14,
        icon: <CameraOutlined />,
        name: "Cameras",
        desc: "Capture moments with our top-notch cameras",
      },
      {
        id: 15,
        icon: <AudioOutlined />,
        name: "Audio Devices",
        desc: "Immerse yourself in premium audio experiences",
      },
    ],
  },
  {
    id: 2,
    icon: <ShoppingCartOutlined />,
    name: "Clothing",
    desc: "Discover the latest fashion trends",
    children: [
      {
        id: 21,
        icon: <ShoppingCartOutlined />,
        name: "Men's Clothing",
        desc: "Stylish clothing for men",
      },
      {
        id: 22,
        icon: <ShoppingCartOutlined />,
        name: "Women's Clothing",
        desc: "Trendy clothing options for women",
      },
    ],
  },
  // Add more categories as needed
];

export default categoryData;
