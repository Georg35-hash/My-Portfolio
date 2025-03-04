import React from "react";
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const navItems = ["Home", "Blog", "Project", "Contact"];

export default function NavBar({ darkMode, setDarkMode }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    };

    return (
        <AppBar position="sticky" sx={{ background: "#ED5F44", height: "64px" }}> {/* Устанавливаем фиксированную высоту хедера */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: "#fff", padding: '8px 16px' }}>
                            {item}
                        </Button>
                    ))}
                </Box>
                <IconButton onClick={toggleDarkMode} color="inherit">
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ "& .MuiDrawer-paper": { width: 240 } }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton>{item}</ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}

