import { ConfigProvider, theme } from "antd";
import { BannerEditor } from "./components/editor/BannerEditor";
import { useEffect, useState } from "react";
import Homepage from "./pages/homepage";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode, mounted]);

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted || !theme) return null;

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
      <Homepage />
    </ConfigProvider>
  );
}

export default App;
