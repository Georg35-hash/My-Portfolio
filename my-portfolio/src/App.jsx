import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import NavBar from "./components/layout/NavBar";
import Main from "./components/Main";
import Fotter from "./components/layout/Footer";
import ThemeSwitcher from "./components/layout/ThemeSwitcher";
import useThemeMode from "./hooks/useThemeMode";

export default function App() {
  const { theme, darkMode, toggleDarkMode } = useThemeMode();

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
