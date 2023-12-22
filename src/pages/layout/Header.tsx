import {
  Avatar,
  Breadcrumb,
  Flex,
  Input,
  Layout,
  Popover,
  Space,
  Switch,
  theme,
} from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useSidebar } from "./context/SidebarProvider";
import { useDarkMode } from "../../Global.Context";
import SelectorList from "../../components/shared/dataDisplay/SelectorList";
import { useLocation } from "react-router-dom";

const { Header: Wrapper } = Layout;
const { useToken } = theme;

const headerStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  padding: 0,
  marginBottom: "2vh",
  height: "5vh",
  display: "flex",
  justifyContent: "space-between",
};

const Header = () => {
  const { token } = useToken();
  const { toggleSidebar } = useSidebar();
  const { toggleDarkMode } = useDarkMode();
  let location = useLocation();

  const changeTheme = (value: boolean) => {
    toggleDarkMode(value);
  };

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
        <Breadcrumb
          items={location.pathname.split("/")?.map((el) => {
            return {
              title: el,
            };
          })}
        />
      </Flex>
      <Flex gap={24} align="center" justify="end" style={{ flex: 1 }}>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ borderRadius: token.borderRadiusLG, width: 190 }}
        />
        <Popover
          trigger={"click"}
          content={
            <SelectorList
              elements={[
                <Space>
                  <span>Dark Mode</span>
                  <Switch onChange={changeTheme} />
                </Space>,
              ]}
              withoutHover
            />
          }
        >
          <IconWrapper hoverBgColor={token.colorBgTextHover}>
            <SettingOutlined />
          </IconWrapper>
        </Popover>
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
