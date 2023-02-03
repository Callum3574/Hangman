import React from "react";

function Start({ startGame }) {
  return (
    <div className="mt-5">
      {startGame && <button onClick={startGame}>START GAME!</button>}
    </div>
  );
}

export default Start;
