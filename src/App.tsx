import { ConfigProvider, theme } from "antd";
import { CoverEditor } from "./components/editor/CoverEditor";
import { useEffect, useState } from "react";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/editor" element={<CoverEditor />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
