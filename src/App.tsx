import { ConfigProvider, theme } from "antd";
import { BannerEditor } from "./components/editor/BannerEditor";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f8c4dc",
          colorPrimaryText: "#1a1a1a",
          colorTextLightSolid: "#1a1a1a", // This controls text color for primary buttons
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <BannerEditor />
    </ConfigProvider>
  );
}

export default App;
