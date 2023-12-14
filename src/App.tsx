import { ConfigProvider } from "antd";
import Layout from "./pages/layout";
import enUS from "antd/locale/en_US";

function App() {
  return (
    <ConfigProvider locale={enUS}>
      <Layout />
    </ConfigProvider>
  );
}

export default App;
