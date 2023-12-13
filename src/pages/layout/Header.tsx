import { Avatar, Breadcrumb, Flex, Input, Layout, theme } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useSidebar } from "./context/SidebarProvider";

const { Header: Wrapper } = Layout;
const { useToken } = theme;

const headerStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  padding: 0,
  height: 42,
  display: "flex",
  justifyContent: "space-between",
};

const Header = () => {
  const { token } = useToken();
  const { toggleSidebar } = useSidebar();

  return (
    <Wrapper style={headerStyle}>
      <Flex gap={token.sizeMS} align="center">
        <MenuIcon
          hoverBgColor={token.colorBgTextHover}
          hoverColor={token.colorPrimaryTextHover}
          onClick={toggleSidebar}
        >
          <MenuOutlined />
        </MenuIcon>
        <Breadcrumb items={[{ title: "Dashboards" }, { title: "Ecommerce" }]} />
      </Flex>
      <Flex gap={24} align="center" justify="end" style={{ flex: 1 }}>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ borderRadius: token.borderRadiusLG, width: 190 }}
        />
        <IconWrapper hoverBgColor={token.colorBgTextHover}>
          <SettingOutlined />
        </IconWrapper>
        <Avatar icon={<UserOutlined />} />
      </Flex>
    </Wrapper>
  );
};

const MenuIcon = styled.div<{ hoverBgColor: String; hoverColor: String }>(
  (props) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 6px;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props.hoverBgColor};
    color: ${props.hoverColor};
  }
`
);

const IconWrapper = styled.div<{ hoverBgColor: String }>(
  (props) => `
  transition: all 0.2s ease;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover{
    background-color: ${props.hoverBgColor};
  }
`
);

export default Header;
