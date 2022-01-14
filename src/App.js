import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  const [theme, setTheme] = useState(getStorageTheme());
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={toggleTheme}
          />
          <label htmlFor="checkbox" className="label">
            <BsFillMoonStarsFill className="icon-moon" />
            <BsFillSunFill className="icon-sun" />
            <div className="ball"></div>
          </label>
        </div>
        <p className="inspired">
          Inspired by{' '}
          <a href="https://overreacted.io/" target="_blank" rel="noreferrer">
            Overreacted
          </a>
        </p>
      </nav>

      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
