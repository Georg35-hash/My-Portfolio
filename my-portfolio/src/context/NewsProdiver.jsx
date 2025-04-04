import { createContext, useContext } from "react";

const posts = [
  { id: 1, title: "Post 1", content: "React 19 introduces ...", recent: true },
  {
    id: 2,
    title: "JavaScript ESNext",
    content: "ESNext brings new syntax ...",
    recent: true,
  },
  {
    id: 3,
    title: "Understanding MUI",
    content: "MUI provides multiple styling approaches ...",
    recent: false,
  },
  {
    id: 4,
    title: "State Management",
    content: "From useState to Redux ...",
    recent: false,
  },
];

export const NewsContext = createContext();
export const usePosts = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const recentPosts = posts.filter((post) => post.recent);
  const allPosts = posts;
  const currPost = posts;
  return (
    <NewsContext.Provider value={{ recentPosts, allPosts, currPost }}>
      {children}
    </NewsContext.Provider>
  );
};
