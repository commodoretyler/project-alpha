import React, { useState } from 'react';
import './styles/app.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [themeColor, setThemeColor] = useState('');

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  const changeTheme = () => {
    document.documentElement.style.setProperty('--main-bg-color', themeColor);
  };

  return (
    <div>
      <header className="header">
        <span className="title">
          CSS For Funsies
        </span>
      </header>
      <div className={`${theme} container`}>
        <h1>
          Hello Worlds!
        </h1>

        <h2>
          Welcome to the Matrix...
        </h2>

        <div className="theme-buttons">
          <button onClick={() => handleThemeChange('light') } className="btn btn-light">Light</button>
          <button onClick={() => handleThemeChange('dark') }className="btn bnt-dark">Dark</button>
        </div>

        <div>
          <label>
            Set a theme color
          </label>
          <input onChange={(e) => setThemeColor(`#${e.target.value}`)} type="text" />
          <button className="btn" onClick={changeTheme}>Submit</button>
        </div>

        <div style={{margin: '2rem 0'}}>
          <span className="animate" />
        </div>

        <div className="gurd">

        </div>
      </div>
    </div>

  );
};

export default App;
