import React, { useState } from 'react';
import Header from "./Header";
import "./page.css";

const Page = ({ theme, onToggleTheme }) => {
  const [isGameActive, setIsGameActive] = useState(false);

  const handleStartGame = () => {
    setIsGameActive(!isGameActive);
  };

  return (
    <div id="app" className={theme}>
      <Header onToggleTheme={onToggleTheme} />
      <article style={{ display: isGameActive ? "none" : "block" }}>
        <h2>Visual Memory</h2>
        <p>Memorize the Squares</p>
      </article>
      <button className="btn" onClick={handleStartGame}>
        {isGameActive ? "Close Game" : "Start"}
      </button>
      {isGameActive && (
        <div className="game-container">
          {/* Your mini-game elements go here */}
        </div>
      )}
    </div>
  );
};

export default Page;