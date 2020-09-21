import React, { useState, useRef, useEffect } from 'react';
import './styles/app.css';

let to: any;

const App: React.FC = () => {
  const [theme, setTheme] = useState('');
  const pieRef = useRef<HTMLDivElement>(null);
  const [piePct, setPiePct] = useState(0);
  const [themeColor, setThemeColor] = useState('');

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  const changeTheme = () => {
    document.documentElement.style.setProperty('--main-bg-color', themeColor);
  };

  useEffect(() => {
    to = setTimeout(() => {
      setPiePct((prevPct) => {
        if (prevPct < 100) {
          return prevPct + 5
        } else {
          return 0;
        }
      });
    }, 1000);

    return () => clearTimeout(to);
  }, [piePct]);

  if (pieRef && pieRef.current !== null) {
    pieRef.current.style.setProperty('--percent', String(piePct));
  }

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

        <div className="chart">
          <div ref={pieRef} className="pie pie--value"></div>
        </div>
      </div>
    </div>

  );
};

export default App;
