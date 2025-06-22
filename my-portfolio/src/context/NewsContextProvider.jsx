import { createContext, useContext, useState } from 'react';
import { postsByLanguage } from './translation';

const NewsContext = createContext();

export const usePosts = () => useContext(NewsContext);

export const NewsContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currPost, setCurrPost] = useState(null);

  const posts = postsByLanguage[language] || postsByLanguage['en'];
  const recentPosts = posts.filter(post => post.recent);

  const selectPost = id => {
    const foundPost = posts.find(post => post.id === id);
    setCurrPost(foundPost || null);
  };

  const changeLanguage = lang => {
    if (postsByLanguage[lang]) {
      setLanguage(lang);
      setCurrPost(null);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        recentPosts,
        allPosts: posts,
        currPost,
        selectPost,
        language,
        changeLanguage,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
