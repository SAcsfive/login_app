import React from "react";
import Base from "../Components/Base";
import { useState, useEffect } from "react";
function Theme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
    
        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <h1>Hello, world!</h1>
        </div>
     
    </div>
  );
}

export default Theme;