import { ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/layout/NavBar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import ThemeSwitcher from "./components/layout/ThemeSwitcher";
import useThemeMode from "./hooks/useThemeMode";

export default function App() {
  const { theme, darkMode, toggleDarkMode } = useThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </NavBar>
      <Main />
      <Footer />
      <CssBaseline />
    
    </ThemeProvider>
  );
}
