import { AppBar, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router";

export default function NavTabs() {
  const location = useLocation();

  const currentTab = location.pathname === "/all" ? 1 : 0;

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
        <Tab label="Recent" component={Link} to="/recent" />
        <Tab label="All" component={Link} to="/all" />
      </Tabs>
    </AppBar>
  );
}
