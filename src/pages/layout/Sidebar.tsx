import { DashboardOutlined, HeatMapOutlined } from "@ant-design/icons";
import { Layout, theme, Typography, Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import styled from "styled-components";

const { Sider: Wrapper } = Layout;
const { Title } = Typography;
const { useToken } = theme;

const items: ItemType<MenuItemType>[] = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined />,
    key: "dashboard",
  },
  {
    label: "products",
    icon: <DashboardOutlined />,
    key: "products",
  },
  {
    label: "categories",
    icon: <DashboardOutlined />,
    key: "categories",
  },
  {
    label: "chat",
    icon: <DashboardOutlined />,
    key: "chat",
  },
];
const Sidebar = () => {
  const { token } = useToken();
  return (
    <Wrapper
      width={252}
      style={{
        minHeight: "100vh",
        backgroundColor: token.colorBgBase,
        borderRight: `1px solid ${token.colorBorder}`,
        boxShadow: `-22px 10px 50px ${token.colorPrimary}`,
      }}
    >
      <LogoContainer>
        <HeatMapOutlined
          style={{ fontSize: token.fontSizeXL, color: token.colorPrimary }}
        />
        <Title level={3} style={{ cursor: "pointer" }}>
          Admink
        </Title>
      </LogoContainer>
      <Menu items={items} />
    </Wrapper>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 96px;

  cursor: pointer;

  h3 {
    padding: 0;
    margin: 0;
  }
`;

export default Sidebar;
