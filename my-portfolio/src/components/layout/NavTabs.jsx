import { AppBar, Tab, Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router';
import { usePosts } from '../../context/NewsContextProvider';
import { translations } from '../../context/translation';

export default function NavTabs() {
  const { language } = usePosts();
  const location = useLocation();

  const currentTab = location.pathname === '/all' ? 1 : 0;

  return (
    <AppBar
      component="div"
      sx={{ marginTop: 5 }}
      position="static"
      color="default"
    >
      <Tabs
        value={currentTab}
        textColor="secondary"
        indicatorColor="secondary"
        centered
      >
        <Tab
          label={translations[language].recent}
          component={Link}
          to="/recent"
        />
        <Tab label={translations[language].all} component={Link} to="/all" />
      </Tabs>
    </AppBar>
  );
}
