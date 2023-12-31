import { Layout as Wrapper } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { SidebarProvider } from "./context/SidebarProvider";

const Layout = () => {
  return (
    <Wrapper hasSider style={{ minHeight: "100vh" }}>
      <SidebarProvider>
        <Sidebar />
        <Wrapper
          style={{
            padding: 28,
            paddingTop: "2vh",
            maxHeight: "100vh",
            overflow: "scroll",
          }}
        >
          <Header />
          <Content />
        </Wrapper>
      </SidebarProvider>
    </Wrapper>
  );
};

export default Layout;
