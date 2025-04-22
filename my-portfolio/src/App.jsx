import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import NavBar from "./components/layouts/NavBar";
import Main from "./components/Main";
import Fotter from "./components/layouts/Footer";
import ThemeSwitcher from "./components/layouts/ThemeSwitcher";
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
