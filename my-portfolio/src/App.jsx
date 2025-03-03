import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Main from './components/Main';
import React, { useState, useMemo } from "react";
import { GlobalStyles } from "@mui/material";
import Fotter from './components/Fotter';
export default function App() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const theme = useMemo(() => createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: { main: darkMode ? "#293035" : "#1976d2" },
            background: { default: darkMode ? "#323532" : "#fff" },
            text: { primary: darkMode ? "#fff" : "#00000 " },

        }
    }), [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    body: {
                        display: "flex",
                        justifyContent: 'center'
                    },
                }}
            />
            <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
            <Main />
            <Fotter />
            <CssBaseline />
        </ThemeProvider>
    );
};


