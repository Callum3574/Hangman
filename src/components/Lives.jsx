import React from "react";

function Lives({ lives }) {
  return (
    <div className="mt-5">
      <h3>Guesses remaining: {lives}</h3>
    </div>
  );
}

export default Lives;
