import bedLinenShop from '../assets/myprojects/bed-linen-shop.png';
import petShop from '../assets/myprojects/pet-shop.png';
import immoTon from '../assets/myprojects/immo.png';
export const translations = {
  en: {
    recent: 'Recent',
    all: 'All',
    call: 'Shedule a call',
    recentPosts: 'Recent Posts',
    allNews: 'All News',
    home: 'Home',
    blog: 'Blog',
    projects: 'Projects',
    contact: 'Contact',
    languageDe: 'DE',
    languageEn: 'EN',
  },
  de: {
    recent: 'Vor kurzem',
    all: 'Nachrichten',
    call: 'Vereinbaren Sie einen Anruf',
    recentPosts: 'Neueste Beiträge',
    allNews: 'Alle Nachrichten',
    home: 'Startseite',
    blog: 'Blog',
    projects: 'Projekte',
    contact: 'Kontakt',
    languageDe: 'DE',
    languageEn: 'EN',
  },
};

export const postsByLanguage = {
  en: [
    {
      id: 1,
      title: 'May 2025 (version 1.101)',
      content: `Welcome to the May 2025 release of Visual Studio Code. There are many updates in this version that we hope you'll like, some of the key highlights include:

MCP

Expand your agent coding flow with support for prompts, resources, and sampling.
Access MCP servers that require authentication.
Debug MCP servers with development mode.
Publish MCP servers from an extension.
Chat

Group and manage related tools by combining them in a tool set.
Source Control

View files in Source Control Graph view.
Assign and track work for GitHub Copilot Coding Agent from within VS Code.`,
      recent: true,
      image:
        'https://www.jrebel.com/sites/default/files/image/2022-11/blog-jrebel-what-is-visual-studio-code.png',
      time: '2025-06-19T10:00:00Z',
    },
    {
      id: 2,
      title: "React 19: What's New?",
      content: `React 19 introduces several new features and performance improvements that make building modern web applications easier and more efficient. This version focuses on enhancing the developer experience with better error handling, improved rendering strategies, and a more intuitive API. Key highlights include improved support for concurrent rendering, React Server components, and updates to hooks that simplify state management.

Whether you're building small apps or large-scale systems, React 19 provides tools that streamline the development process. For example, the new useTransition hook enables smoother UI transitions, while the server-side rendering improvements boost initial load performance.

React's team also worked on making it easier to work with TypeScript, improving the type safety of the framework.`,
      recent: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      time: '2025-04-05T12:00:00Z',
    },
    {
      id: 3,
      title: 'JavaScript ESNext: New Features You Need to Know',
      content: `JavaScript ESNext brings an array of new features that allow developers to write more concise, readable, and efficient code. In this post, we explore the new syntax introduced in the latest ECMAScript version, including top-level await, private class fields, and logical assignment operators.

- Top-Level Await: One of the most anticipated features, allowing you to use await outside of async functions, making asynchronous code easier to write and read.
- Private Class Fields: Enclosing properties in classes using the # syntax, making them private and inaccessible from outside the class.
- Logical Assignment Operators: A new shorthand for conditional assignment that reduces the need for repetitive checks.

These new features empower developers to create cleaner and more effective codebases that are easier to maintain.`,
      recent: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      time: '2025-04-05T14:00:00Z',
    },
    {
      id: 4,
      title: 'Understanding MUI: A Comprehensive Guide',
      content: `Material-UI (MUI) is one of the most popular React UI libraries, providing a comprehensive set of customizable components for building beautiful and responsive user interfaces. In this post, we dive deep into how MUI works, how to customize its theme, and how to integrate it into your React projects.

MUI offers out-of-the-box components like buttons, sliders, and tables that follow Google's Material Design guidelines. The library also offers theming support, allowing you to define your color palette, typography, and overall look and feel of your application.

Key features:
- Theming: Customize the global theme of your app easily using MUI's createTheme function.
- Responsive Design: Use MUI’s grid system to build fluid layouts that adapt to different screen sizes.
- Custom Components: Build your own reusable components using MUI’s Box, Grid, and other utility components.

With its powerful theming and customization options, MUI is a must-have tool for React developers who want to create polished, accessible, and user-friendly interfaces.`,
      recent: false,
      image: 'https://mui.com/static/logo.svg',
      time: '2025-04-03T09:00:00Z',
    },
    {
      id: 5,
      title: 'Mastering State Management in React: From useState to Redux',
      content: `Managing state in React applications is crucial for building interactive UIs. In this post, we explore the different tools and strategies available for state management, from React's built-in useState hook to more complex solutions like Redux.

- useState: Perfect for managing simple local state within a component. It’s the go-to solution for managing UI-related state.
- Context API: Useful for passing data deeply throughout your component tree without having to prop-drill.
- Redux: A powerful state management tool for larger applications. It helps manage global state with actions, reducers, and a store, making it ideal for more complex apps.

Choosing the right state management solution depends on the complexity of your application. For smaller apps, React’s built-in state and context may suffice. For larger apps, you may want to look into Redux or even alternatives like Recoil or Zustand.`,
      recent: false,
      image:
        'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
      time: '2025-04-02T16:00:00Z',
    },
    {
      id: 6,
      title: 'Advanced JavaScript: Understanding Closures',
      content: `Closures are one of the most powerful features of JavaScript, yet they often confuse new developers. In this post, we break down closures and show you how they can be used to create more efficient and modular code.

What is a closure?
A closure is created when a function is defined within another function and gains access to the outer function's variables. Even after the outer function has finished execution, the inner function retains access to the outer function’s variables. This is due to the concept of lexical scoping.

Use cases for closures:
- Data encapsulation: Closures allow you to hide private data and expose only the necessary methods.
- Memoization: Use closures to create functions that remember previous calculations, optimizing performance.
- Callbacks and event handling: Closures are often used in asynchronous programming, such as with promises and event listeners.

Understanding closures is key to mastering JavaScript, as they provide a flexible way to handle data and functionality.`,
      recent: false,
      image:
        'https://miro.medium.com/v2/resize:fit:1400/1*AJWhia2_QH77RYEWhsLsWA.jpeg',
      time: '2025-04-01T10:00:00Z',
    },
  ],

  de: [
    {
      id: 1,
      title: 'Mai 2025 (Version 1.101)',
      content: `Willkommen zur Mai 2025 Version von Visual Studio Code. Es gibt viele Updates in dieser Version, die Ihnen gefallen werden. Einige der wichtigsten Highlights sind:

MCP

Erweitern Sie Ihren Agenten-Coding-Flow mit Unterstützung für Prompts, Ressourcen und Sampling.
Zugriff auf MCP-Server, die eine Authentifizierung erfordern.
Debuggen Sie MCP-Server im Entwicklungsmodus.
Veröffentlichen Sie MCP-Server über eine Erweiterung.
Chat

Gruppieren und verwalten Sie verwandte Werkzeuge, indem Sie sie in einem Toolset kombinieren.
Source Control

Zeigen Sie Dateien in der Source Control Graph-Ansicht an.
Weisen Sie Arbeit zu und verfolgen Sie sie für den GitHub Copilot Coding Agent direkt in VS Code.`,
      recent: true,
      image:
        'https://www.jrebel.com/sites/default/files/image/2022-11/blog-jrebel-what-is-visual-studio-code.png',
      time: '2025-06-19T10:00:00Z',
    },
    {
      id: 2,
      title: 'React 19: Was ist neu?',
      content: `React 19 bringt mehrere neue Features und Leistungsverbesserungen mit sich, die das Erstellen moderner Webanwendungen einfacher und effizienter machen. Diese Version konzentriert sich auf die Verbesserung der Entwicklererfahrung mit besserer Fehlerbehandlung, verbesserten Rendering-Strategien und einer intuitiveren API. Wichtige Highlights sind die verbesserte Unterstützung für Concurrent Rendering, React Server Components und Updates bei Hooks, die das State-Management vereinfachen.

Egal, ob Sie kleine Apps oder große Systeme bauen, React 19 bietet Werkzeuge, die den Entwicklungsprozess vereinfachen. Zum Beispiel ermöglicht der neue useTransition-Hook flüssigere UI-Übergänge, während die Verbesserungen im Server-Side Rendering die initiale Ladezeit verkürzen.

Das React-Team hat auch daran gearbeitet, die Arbeit mit TypeScript zu erleichtern und die Typsicherheit des Frameworks zu verbessern.`,
      recent: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      time: '2025-04-05T12:00:00Z',
    },
    {
      id: 3,
      title: 'JavaScript ESNext: Neue Funktionen, die Sie kennen sollten',
      content: `JavaScript ESNext bringt eine Reihe neuer Funktionen, mit denen Entwickler prägnanteren, lesbareren und effizienteren Code schreiben können. In diesem Beitrag untersuchen wir die neue Syntax der neuesten ECMAScript-Version, einschließlich Top-Level Await, privater Klassenfelder und logischer Zuweisungsoperatoren.

- Top-Level Await: Eine der meist erwarteten Funktionen, mit der Sie await außerhalb von async-Funktionen verwenden können, was das Schreiben und Lesen asynchronen Codes erleichtert.
- Private Klassenfelder: Eigenschaften in Klassen mit der # Syntax einschließen, wodurch sie privat und von außen unzugänglich sind.
- Logische Zuweisungsoperatoren: Eine neue Kurzschreibweise für bedingte Zuweisungen, die wiederholte Prüfungen reduziert.

Diese neuen Funktionen ermöglichen es Entwicklern, sauberere und effektivere Codebasen zu erstellen, die leichter zu warten sind.`,
      recent: true,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      time: '2025-04-05T14:00:00Z',
    },
    {
      id: 4,
      title: 'Verstehen von MUI: Ein umfassender Leitfaden',
      content: `Material-UI (MUI) ist eine der beliebtesten React UI-Bibliotheken und bietet eine umfassende Sammlung anpassbarer Komponenten für den Bau schöner und responsiver Benutzeroberflächen. In diesem Beitrag tauchen wir tief ein, wie MUI funktioniert, wie man das Theme anpasst und wie man es in React-Projekte integriert.

MUI bietet sofort einsatzbereite Komponenten wie Buttons, Slider und Tabellen, die den Material Design Richtlinien von Google folgen. Die Bibliothek bietet auch Theming-Unterstützung, mit der Sie Ihre Farbpalette, Typografie und das gesamte Aussehen Ihrer Anwendung definieren können.

Hauptfunktionen:
- Theming: Passen Sie das globale Theme Ihrer App einfach mit der Funktion createTheme von MUI an.
- Responsives Design: Verwenden Sie das Grid-System von MUI, um flexible Layouts zu bauen, die sich an verschiedene Bildschirmgrößen anpassen.
- Eigene Komponenten: Erstellen Sie Ihre eigenen wiederverwendbaren Komponenten mit den Utility-Komponenten Box, Grid und anderen von MUI.

Mit seinen leistungsstarken Theming- und Anpassungsoptionen ist MUI ein unverzichtbares Werkzeug für React-Entwickler, die polierte, barrierefreie und benutzerfreundliche Interfaces erstellen wollen.`,
      recent: false,
      image: 'https://mui.com/static/logo.svg',
      time: '2025-04-03T09:00:00Z',
    },
    {
      id: 5,
      title: 'State Management in React meistern: Von useState bis Redux',
      content: `Das Verwalten von State in React-Anwendungen ist entscheidend für interaktive Benutzeroberflächen. In diesem Beitrag erkunden wir die verschiedenen Tools und Strategien für das State Management, von Reacts eingebautem useState-Hook bis hin zu komplexeren Lösungen wie Redux.

- useState: Perfekt für die Verwaltung einfachen lokalen State innerhalb einer Komponente. Die Standardlösung für UI-bezogenen State.
- Context API: Nützlich, um Daten tief durch die Komponentenstruktur zu reichen, ohne Props weiterzugeben.
- Redux: Ein leistungsstarkes State Management Tool für größere Anwendungen. Es verwaltet globalen State mit Aktionen, Reducern und einem Store, ideal für komplexere Apps.

Die Wahl der richtigen State Management Lösung hängt von der Komplexität Ihrer Anwendung ab. Für kleinere Apps reicht oft der eingebaute State und Context von React aus. Für größere Apps sollten Sie Redux oder Alternativen wie Recoil oder Zustand in Betracht ziehen.`,
      recent: false,
      image:
        'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
      time: '2025-04-02T16:00:00Z',
    },
    {
      id: 6,
      title: 'Fortgeschrittenes JavaScript: Closures verstehen',
      content: `Closures sind eine der mächtigsten Funktionen von JavaScript, verwirren aber oft neue Entwickler. In diesem Beitrag erklären wir Closures und zeigen, wie sie verwendet werden können, um effizienteren und modulareren Code zu schreiben.

Was ist ein Closure?
Ein Closure entsteht, wenn eine Funktion innerhalb einer anderen Funktion definiert wird und Zugriff auf die Variablen der äußeren Funktion hat. Selbst nachdem die äußere Funktion beendet ist, behält die innere Funktion Zugriff auf die Variablen der äußeren Funktion. Dies liegt am Konzept der lexikalischen Scoping.

Anwendungsfälle für Closures:
- Datenkapselung: Closures ermöglichen das Verbergen privater Daten und das Freigeben nur der notwendigen Methoden.
- Memoisierung: Verwenden Sie Closures, um Funktionen zu erstellen, die sich frühere Berechnungen merken und so die Leistung optimieren.
- Callbacks und Event-Handling: Closures werden häufig in der asynchronen Programmierung verwendet, z. B. bei Promises und Event-Listenern.

Das Verständnis von Closures ist entscheidend, um JavaScript zu meistern, da sie eine flexible Handhabung von Daten und Funktionalität ermöglichen.`,
      recent: false,
      image:
        'https://miro.medium.com/v2/resize:fit:1400/1*AJWhia2_QH77RYEWhsLsWA.jpeg',
      time: '2025-04-01T10:00:00Z',
    },
  ],
};

export const sentensesByLanguage = {
  en: [
    {
      aboutMe:
        "I'm a Web Developer and IT Specialist focused on learning new technologies and sharing knowledge with others",
    },
    { mySkills: '' },
    { myProjects: '' },
    { footerSub: 'Subscribe to my updates' },
    {
      footerUp: 'Get the latest news about my projects and updates.',
    },
    { footerPolicy: 'We care about your data.' },
    {
      footerRightsURL: 'Read our privacy policy.',
    },
    {
      footerRights: '© 2025 Heorhii Vasyliev All rights reserved.',
    },
  ],

  de: [
    {
      aboutMe:
        'Ich bin Webentwickler und IT-Spezialist und konzentriere mich darauf, neue Technologien zu erlernen und mein Wissen mit anderen zu teilen',
    },
    { mySkills: '' },
    { myProjects: '' },
    { footerSub: 'Abonnieren Sie meine Updates' },
    {
      footerUp:
        'Erhalten Sie die neuesten Nachrichten zu meinen Projekten und Updates.',
    },
    {
      footerPolicy: 'Ihre Daten sind uns wichtig.',
    },
    {
      footerRightsURL: 'Lesen Sie unsere Datenschutzerklärung.',
    },
    {
      footerRights: '© 2025 Heorhii Vasyliev Alle Rechte vorbehalten.',
    },
  ],
};
export const projectsList = {
  en: [
    {
      id: 1,
      title: 'Bed Linen Shop',
      image: bedLinenShop,
      desc: 'Online store for bed linen products. This project includes HTML&&SCSS and JS, vite as build tool',
      githubLink: 'https://github.com/Georg35-hash/bed-linen-shop1',
      liveDemoLink: 'https://bed-linen-shop1.vercel.app/',
    },
    {
      id: 2,
      title: 'Pet Shop',
      image: petShop,
      desc: 'Online store for pet products. This project includes working with Zustand, Axios, and React Router, Express and Node JS',
      githubLink: 'https://github.com/Georg35-hash/Pet-shop/tree/main/pet-shop',
      liveDemoLink: 'https://pet-shop-react-ebon.vercel.app/',
    },
    {
      id: 3,
      title: 'Real estate company',
      image: immoTon,
      desc: 'A website for a real german estate company. The project was developed using React.js + Typescript, nodemailer, Recaptcha, Node.js, and MUI.',
      liveDemoLink: 'https://immo-tonn.de/',
    },
  ],
  de: [
    {
      id: 1,
      title: 'Bettwäsche-Shop',
      image: bedLinenShop,
      desc: 'Onlineshop für Bettwäscheprodukte. Dieses Projekt beinhaltet HTML, SCSS und JS. Vite als Build-Tool verwenden.',
      githubLink: 'https://github.com/Georg35-hash/bed-linen-shop1',
      liveDemoLink: 'https://bed-linen-shop1.vercel.app/',
    },
    {
      id: 2,
      title: 'Tiershop',
      image: petShop,
      desc: 'Onlineshop für Tierprodukte. Dieses Projekt umfasst die Arbeit mit Zustand, Axios, React Router, Express und Node JS.',
      githubLink: 'https://github.com/Georg35-hash/Pet-shop/tree/main/pet-shop',
      liveDemoLink: 'https://pet-shop-react-ebon.vercel.app/',
    },
    {
      id: 3,
      title: 'Immobilienunternehmen',
      image: immoTon,
      desc: 'Eine Website für ein deutsches Immobilienunternehmen. Das Projekt wurde mit React.js + TypeScript, Nodemailer, Recaptcha, Node.js und MUI entwickelt.',
      liveDemoLink: 'https://immo-tonn.de/',
    },
  ],
};
export const titles = {
  en: [
    {
      project: ' My Projects',
    },
    {
      skills: 'My Skills',
    },
  ],
  de: [
    {
      project: 'Meine Projekte',
    },
    {
      skills: 'Meine Fächigkeiten',
    },
  ],
};
export const contactForm = {
  en: {
    contactTitle: 'Contact Me',
    name: {
      label: 'Name',
      placeholder: 'Enter your full name',
      errorRequired: 'Name is required',
    },
    email: {
      label: 'Email',
      placeholder: 'Enter your email',
      errorRequired: 'Email is required',
      errorPattern: 'Invalid email format',
    },
    message: {
      label: 'Message',
      placeholder: 'Write your message here',
      errorRequired: 'Message is required',
    },
    successMessage: 'Message sent successfully!',
    sendButton: 'Send',
  },
  de: {
    contactTitle: 'Kontaktieren Sie mich',
    name: {
      label: 'Name',
      placeholder: 'Geben Sie Ihren vollständigen Namen ein',
      errorRequired: 'Name ist erforderlich',
    },
    email: {
      label: 'Email',
      placeholder: 'Geben Sie Ihre E-Mail ein',
      errorRequired: 'E-Mail ist erforderlich',
      errorPattern: 'Ungültiges E-Mail-Format',
    },
    message: {
      label: 'Nachricht',
      placeholder: 'Schreiben Sie hier Ihre Nachricht',
      errorRequired: 'Nachricht ist erforderlich',
    },
    successMessage: 'Nachricht erfolgreich gesendet!',
    sendButton: 'Senden',
  },
};
