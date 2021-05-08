import { useEffect, useState } from 'react';

export const useDarkMode =  () => {
  
  const [theme, setTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    let toggle = document.getElementById("dark-light-mode");
    let homeButton = document.getElementById("home");
    let submitButton = document.getElementById("submitButton");
    let factButton = document.getElementById("factButton");
    let jokeButton = document.getElementById("jokeButton");

    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setMode('dark');
      toggle.className = "tag is-light";
      if (jokeButton !== null) {
        jokeButton.className = "button is-light";
      }
      if (homeButton !== null) {
        homeButton.className = "button is-light";
      }
      if (submitButton !== null) {
        submitButton.className = "button is-light";
      }
      if (factButton !== null) {
        factButton.className = "button is-light";
      }

    } else {
      window.localStorage.setItem('theme', 'light');
      setMode('light');
      toggle.className = "tag is-dark";
      if (homeButton !== null) {
        homeButton.className = "button is-dark";
      }
      if (submitButton !== null) {
        submitButton.className = "button is-dark";
      }
      if (factButton !== null) {
        factButton.className = "button is-dark";
      }
      if (jokeButton !== null) {
        jokeButton.className = "button is-dark";
      }
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);
  return [theme, toggleTheme]
};