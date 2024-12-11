// App.js (modified)

import React, { useState } from 'react';
import Page from "./components/Page";

const App = () => {
  const [theme, setTheme] = useState('light'); // Initial theme

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle theme state
  };

  return (
    <Page theme={theme} onToggleTheme={toggleTheme} /> // Pass theme and toggle function to Page
  );
};

export default App;