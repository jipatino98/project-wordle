import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputField from "../InputField";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmitGuess(guess) {
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);
  }

  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <InputField handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
