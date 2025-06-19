import { createContext, useContext } from 'react';

const posts = [
  {
    id: 1,
    title: 'May 2025 (version 1.101)',
    content: `
     Welcome to the May 2025 release of Visual Studio Code. There are many updates in this version that we hope you'll like, some of the key highlights include:

MCP

Expand your agent coding flow with support for prompts, resources, and sampling.
Access MCP servers that require authentication.
Debug MCP servers with development mode.
Publish MCP servers from an extension.
Chat

Group and manage related tools by combining them in a tool set .
Source Control

View files in Source Control Graph view.
Assign and track work for GitHub Copilot Coding Agent from within VS Code.
    `,
    recent: true,
    image:
      'https://www.jrebel.com/sites/default/files/image/2022-11/blog-jrebel-what-is-visual-studio-code.png',
    time: '2025-06-19T10:00:00Z',
  },
  {
    id: 2,
    title: "React 19: What's New?",
    content: `
      React 19 introduces several new features and performance improvements that make building modern web applications easier and more efficient. This version focuses on enhancing the developer experience with better error handling, improved rendering strategies, and a more intuitive API. Key highlights include improved support for concurrent rendering, React Server components, and updates to hooks that simplify state management.
      
      Whether you're building small apps or large-scale systems, React 19 provides tools that streamline the development process. For example, the new useTransition hook enables smoother UI transitions, while the server-side rendering improvements boost initial load performance.
      
      React's team also worked on making it easier to work with TypeScript, improving the type safety of the framework.
    `,
    recent: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    time: '2025-04-05T12:00:00Z',
  },
  {
    id: 3,
    title: 'JavaScript ESNext: New Features You Need to Know',
    content: `
      JavaScript ESNext brings an array of new features that allow developers to write more concise, readable, and efficient code. In this post, we explore the new syntax introduced in the latest ECMAScript version, including top-level await, private class fields, and logical assignment operators.
      
      - Top-Level Await: One of the most anticipated features, allowing you to use await outside of async functions, making asynchronous code easier to write and read.
      - Private Class Fields: Enclosing properties in classes using the # syntax, making them private and inaccessible from outside the class.
      - Logical Assignment Operators**: A new shorthand for conditional assignment that reduces the need for repetitive checks.

      These new features empower developers to create cleaner and more effective codebases that are easier to maintain.
    `,
    recent: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    time: '2025-04-05T14:00:00Z',
  },

  {
    id: 4,
    title: 'Understanding MUI: A Comprehensive Guide',
    content: `
      Material-UI (MUI) is one of the most popular React UI libraries, providing a comprehensive set of customizable components for building beautiful and responsive user interfaces. In this post, we dive deep into how MUI works, how to customize its theme, and how to integrate it into your React projects.
      
      MUI offers out-of-the-box components like buttons, sliders, and tables that follow Google's Material Design guidelines. The library also offers theming support, allowing you to define your color palette, typography, and overall look and feel of your application.

      Key features:
      - Theming: Customize the global theme of your app easily using MUI's createTheme function.
      - Responsive Design: Use MUI’s grid system to build fluid layouts that adapt to different screen sizes.
      - Custom Components: Build your own reusable components using MUI’s Box, Grid, and other utility components.

      With its powerful theming and customization options, MUI is a must-have tool for React developers who want to create polished, accessible, and user-friendly interfaces.
    `,
    recent: false,
    image: 'https://mui.com/static/logo.svg',
    time: '2025-04-03T09:00:00Z',
  },
  {
    id: 5,
    title: 'Mastering State Management in React: From useState to Redux',
    content: `
      Managing state in React applications is crucial for building interactive UIs. In this post, we explore the different tools and strategies available for state management, from React's built-in useState hook to more complex solutions like Redux.
      
      - useState: Perfect for managing simple local state within a component. It’s the go-to solution for managing UI-related state.
      - Context API: Useful for passing data deeply throughout your component tree without having to prop-drill.
      - Redux: A powerful state management tool for larger applications. It helps manage global state with actions, reducers, and a store, making it ideal for more complex apps.

      Choosing the right state management solution depends on the complexity of your application. For smaller apps, React’s built-in state and context may suffice. For larger apps, you may want to look into Redux or even alternatives like Recoil or Zustand.
    `,
    recent: false,
    image:
      'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    time: '2025-04-02T16:00:00Z',
  },
  {
    id: 6,
    title: 'Advanced JavaScript: Understanding Closures',
    content: `
      Closures are one of the most powerful features of JavaScript, yet they often confuse new developers. In this post, we break down closures and show you how they can be used to create more efficient and modular code.
      
      What is a closure?
      A closure is created when a function is defined within another function and gains access to the outer function's variables. Even after the outer function has finished execution, the inner function retains access to the outer function’s variables. This is due to the concept of lexical scoping.

      Use cases for closures:
      - Data encapsulation: Closures allow you to hide private data and expose only the necessary methods.
      - Memoization: Use closures to create functions that remember previous calculations, optimizing performance.
      - Callbacks and event handling: Closures are often used in asynchronous programming, such as with promises and event listeners.

      Understanding closures is key to mastering JavaScript, as they provide a flexible way to handle data and functionality.
    `,
    recent: false,
    image:
      'https://miro.medium.com/v2/resize:fit:1400/1*AJWhia2_QH77RYEWhsLsWA.jpeg',
    time: '2025-04-01T10:00:00Z',
  },
];

export const NewsContext = createContext();
export const usePosts = () => useContext(NewsContext);

export const NewsContextProvider = ({ children }) => {
  const recentPosts = posts.filter(post => post.recent);
  const allPosts = posts;
  const currPost = posts;
  return (
    <NewsContext.Provider value={{ recentPosts, allPosts, currPost }}>
      {children}
    </NewsContext.Provider>
  );
};
