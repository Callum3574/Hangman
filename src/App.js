import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState, useEffect } from "react";
import Lives from "./components/Lives.jsx";
import Start from "./components/Start.jsx";

function App() {
  const [highscore, setHighscore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [lives, setLives] = useState(10);
  const [gameStart, setGameStart] = useState(false);

  const startGame = () => {
    setGameStart(!gameStart);
    console.log(gameStart);
  };

  return (
    <div className="App">
      <Start startGame={startGame} />
      {gameStart && <Game setLives={setLives} lives={lives} />}
      {gameStart && <Lives lives={lives} />}
    </div>
  );
}

export default App;
