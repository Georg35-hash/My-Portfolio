import { createTheme } from "@mui/material";
import { useState, useMemo } from "react";

function useThemeMode() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: { default: darkMode ? "#323532" : "#fff" },
          text: { primary: darkMode ? "#fff" : "#000000" },
          customColor: { main: "#E4C85A" },
          secondary: { main: "#ED5F44" },
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return {
    theme,
    darkMode,
    toggleDarkMode,
  };
}

export default useThemeMode;
