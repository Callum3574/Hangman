import React, { useState, useEffect } from "react";
import data from "../data/data.json";

function Game({ setLives, lives }) {
  const [word, setWord] = useState([]);
  const [userGuess, setUserGuess] = useState([]);

  useEffect(() => {
    randomWord();
  }, []);

  useEffect(() => {}, [userGuess]);

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const randomNumber = () => {
    return Math.floor(Math.random() * data.words.length);
  };

  const randomWord = () => {
    setWord(data.words[randomNumber()].split(""));
  };

  const handleUserGuess = (e) => {
    const name = e.target.name;
    setUserGuess((prev) => [...prev, name]);
    setLives(lives - 1);
    console.log(lives);
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        {word.map((char) => {
          return (
            <div style={{ width: "10rem" }}>
              <h3
                style={{
                  borderBottom: "solid 1px black",
                  color: userGuess.includes(char) ? "red" : "transparent",
                  marginRight: "1rem",
                  fontSize: "4rem",
                }}
              >
                {char}
              </h3>
            </div>
          );
        })}
      </div>
      {letters.map((letter) => {
        return (
          <button onClick={handleUserGuess} name={letter}>
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Game;
