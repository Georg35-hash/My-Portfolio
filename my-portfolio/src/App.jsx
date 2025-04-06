import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/layout/NavBar";
import Main from "./components/Main";
import React, { useState, useMemo } from "react";
import { GlobalStyles } from "@mui/material";
import Fotter from "./components/layout/Footer";
import ThemeSwitcher from "./components/layout/ThemeSwitcher";

export default function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            display: "flex",
            justifyContent: "center",
          },
        }}
      />
      <NavBar>
        <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </NavBar>
      <Main />
      <Fotter />
      <CssBaseline />
    </ThemeProvider>
  );
}
