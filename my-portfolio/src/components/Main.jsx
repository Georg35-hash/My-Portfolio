import { Box } from "@mui/material";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyProjects from "./Projects/MyProjects";
import { useRef } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@mui/material";
import RecentNews from "../../src/components/News/RecentNews";
import AllNews from "../../src/components/News/AllNews";
import { NewsProvider } from "../context/NewsProdiver";
import PostPage from "../pages/PostPage";

function NavTabs() {
  const location = useLocation();
  const currentTab = location.pathname === "/all" ? 1 : 0;

  return (
    <AppBar sx={{ marginTop: 5 }} position="static" color="default">
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

export default function Main() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; // Adjust scroll amount as needed
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      <AboutMe />
      <MySkills />
      <MyProjects />
      <NewsProvider>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Navigate to="/recent" />} />{" "}
          <Route
            path="/recent"
            element={<RecentNews scroll={handleScroll} scrollRef={scrollRef} />}
          />
          <Route path="/all" element={<AllNews scroll={handleScroll} />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </NewsProvider>
    </Box>
  );
}
