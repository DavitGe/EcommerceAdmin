import { Layout as Wrapper } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

const Layout = () => {
  return (
    <Wrapper hasSider>
      <Sidebar />
      <Wrapper style={{ padding: 28 }}>
        <Header />
        <Content />
      </Wrapper>
    </Wrapper>
  );
};

export default Layout;
