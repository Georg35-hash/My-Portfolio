import { ThemeProvider, CssBaseline } from '@mui/material';
import NavBar from './components/layout/NavBar';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import ThemeSwitcher from './components/layout/ThemeSwitcher';
import useThemeMode from './hooks/useThemeMode';
import { NewsContextProvider } from './context/NewsContextProvider';

export default function App() {
  const { theme, darkMode, toggleDarkMode } = useThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <NewsContextProvider>
        <NavBar>
          <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </NavBar>
        <Main />
        <Footer />
        <CssBaseline />
      </NewsContextProvider>
    </ThemeProvider>
  );
}
