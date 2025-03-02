import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const drawerWidth = 240;
const navItems = ['Home', 'Blog', 'Project', 'Contact'];

function NavBar(props) {
    const { window } = props;
    const [darkMode, setDarkMode] = React.useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                    primary: {
                        main: darkMode ? '#293035' : '#1976d2',
                    },
                    background: {
                        default: darkMode ? '#323532' : '#fff',
                        paper: darkMode ? '#1e1e1e' : '#f5f5f5',
                    },
                    text: {
                        primary: darkMode ? '#fff' : '#000',
                    },
                },
            }),
        [darkMode]
    );

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ background: '#ED5F44' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <IconButton onClick={toggleDarkMode} color="inherit">
                            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
             
            </Box>
        </ThemeProvider>
    );
}

NavBar.propTypes = {
    window: PropTypes.func,
};

export default NavBar;
