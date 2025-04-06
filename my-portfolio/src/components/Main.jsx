import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import RecentNews from "../../src/components/News/RecentNews";
import AllNews from "../../src/components/News/AllNews";
import PostPage from "../pages/PostPage";
import NavTabs from "../components/layout/NavTabs";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import ContactForm from "../pages/ContactForm";
import { NewsContextProvider } from "../context/NewsContextProvider";
import NotFound from "../../src/pages/NotFound.jsx";
import MyProjects from "./projects/MyProjects.jsx";

function Main() {
  const location = useLocation();

  const hiddenTabsPaths = ["/", "/projects", "/contact"];
  const isPostPage = location.pathname.startsWith("/posts/");
  const knownPaths = ["/", "/projects", "/contact", "/recent", "/all"];

  const is404 = !knownPaths.some(
    (path) =>
      location.pathname === path || location.pathname.startsWith("/posts/")
  );

  const hideNavTabs =
    isPostPage || hiddenTabsPaths.includes(location.pathname) || is404;

  return (
    <Box>
      {!hideNavTabs && <NavTabs />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AboutMe />
              <MySkills />
              <MyProjects />
            </>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<MyProjects />} />

        <Route
          path="/recent"
          element={
            <NewsContextProvider>
              <RecentNews />
            </NewsContextProvider>
          }
        />
        <Route
          path="/all"
          element={
            <NewsContextProvider>
              <AllNews />
            </NewsContextProvider>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <NewsContextProvider>
              <PostPage />
            </NewsContextProvider>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default Main;
