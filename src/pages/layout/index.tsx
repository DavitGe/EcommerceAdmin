import { Layout as Wrapper } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Wrapper style={{ padding: 28 }}>
        <Header />
        Content
      </Wrapper>
    </Wrapper>
  );
};

export default Layout;
