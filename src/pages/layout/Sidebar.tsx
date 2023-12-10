import { Layout, theme } from "antd";
const { Sider: Wrapper } = Layout;

const { useToken } = theme;
const Sidebar = () => {
  const { token } = useToken();
  return (
    <Wrapper
      width={252}
      style={{
        minHeight: "100vh",
        backgroundColor: token.colorBgBase,
        boxShadow: `-24px 10px 50px ${token.colorPrimary}`,
      }}
    />
  );
};

export default Sidebar;
