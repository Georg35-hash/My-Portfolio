import { Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeSwitcher({ darkMode, toggleDarkMode }) {
  return (
    <Box
      onClick={toggleDarkMode}
      sx={{
        width: 60,
        height: 30,
        borderRadius: 20,
        backgroundColor: darkMode ? '#333' : '#fff',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.4s ease, box-shadow 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        padding: '1.5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        ':hover': {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box
        sx={{
          width: 26,
          height: 26,
          borderRadius: '50%',
          backgroundColor: darkMode ? '#fff' : '#333',
          transform: darkMode ? 'translateX(30px)' : 'translateX(0)',
          transition:
            'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        {darkMode ? (
          <Brightness4Icon
            sx={{ fontSize: 18, color: darkMode ? '#333' : '#fff' }}
          />
        ) : (
          <Brightness7Icon
            sx={{ fontSize: 18, color: darkMode ? '#333' : '#fff' }}
          />
        )}
      </Box>
    </Box>
  );
}
