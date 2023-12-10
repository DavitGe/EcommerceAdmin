import { ConfigProvider } from "antd";
import Layout from "./pages/layout";

function App() {
  return (
    <ConfigProvider>
      <Layout />
    </ConfigProvider>
  );
}

export default App;
