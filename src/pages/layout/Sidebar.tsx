import { HeatMapOutlined } from "@ant-design/icons";
import { Layout, theme, Typography, Menu } from "antd";
import styled from "styled-components";
import { sidebarData } from "./sidebar.data";
import { useNavigate, useLocation } from "react-router-dom";
import { useSidebar } from "./context/SidebarProvider";

const { Sider: Wrapper } = Layout;
const { Title } = Typography;
const { useToken } = theme;

const Sidebar = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const location = useLocation();
  const { state } = useSidebar();
  const currentPage = location.pathname.split("/").filter(Boolean).pop();

  function getPath(data: string[]) {
    return data.reverse().reduce((sum, value) => {
      return sum + "/" + value;
    });
  }

  function navigateHome() {
    navigate("/Dashboard");
  }

  return (
    <Wrapper
      width={252}
      style={{
        minHeight: "100vh",
        backgroundColor: token.colorBgBase,
        borderRight: `1px solid ${token.colorBorder}`,
        boxShadow: `-22px 10px 50px ${token.colorPrimary}`,
      }}
      defaultCollapsed={false}
      collapsed={state.isOpen}
      hidden={state.isOpen}
    >
      <LogoContainer onClick={navigateHome}>
        <HeatMapOutlined
          style={{ fontSize: token.fontSizeXL, color: token.colorPrimary }}
        />
        {!state.isOpen && (
          <Title level={3} style={{ cursor: "pointer" }}>
            Admink
          </Title>
        )}
      </LogoContainer>
      <Menu
        items={sidebarData}
        mode="inline"
        defaultSelectedKeys={[currentPage || "Dashboard"]}
        onSelect={(props) => {
          navigate(getPath(props.keyPath));
        }}
      />
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
