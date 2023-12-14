import { ConfigProvider } from "antd";
import Layout from "./pages/layout";
import enUS from "antd/locale/en_US";
import { theme } from "antd";
import { useDarkMode } from "./Global.Context";

function App() {
  // const { darkAlgorithm, compactAlgorithm } = theme;
  const { isDarkMode } = useDarkMode();

  return (
    <ConfigProvider
      locale={enUS}
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout />
    </ConfigProvider>
  );
}

export default App;
