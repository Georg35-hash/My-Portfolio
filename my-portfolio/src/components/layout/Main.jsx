import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import RecentNews from "../News/RecentNews.jsx";
import AllNews from "../News/AllNews.jsx";
import PostPage from "../../pages/PostPage.jsx";
import NavTabs from "./NavTabs.jsx";
import AboutMe from "../../pages/AboutMe.jsx";
import MySkills from "../../pages/MySkills.jsx";
import ContactForm from "../../pages/ContactForm.jsx";
import { NewsContextProvider } from "../../context/NewsContextProvider.jsx";
import NotFound from "../../pages/NotFound.jsx";
import ProjectList from "../Projects/ProjectList.jsx";

export default function Main() {
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
    <Box component="main" sx={{ maxHeight:"1000px"}}>
      {!hideNavTabs && <NavTabs />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AboutMe />
              <MySkills />
              <ProjectList />
            </>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<ProjectList />} />

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
