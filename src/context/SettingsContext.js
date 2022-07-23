import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [theme, setTheme] = useState("");

  const settings = {
    image,
    setImage,
    theme,
    setTheme,
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
