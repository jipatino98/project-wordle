import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputField from "../InputField";
import PreviousGuesses from "../PreviousGuesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleSubmitGuess(guess) {
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);

    if (newGuessList.length > NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    } else if (guess.toUpperCase() === answer) {
      setStatus("won");
    }
  }

  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <InputField handleSubmitGuess={handleSubmitGuess} status={status} />
      {status === "won" && <WonBanner numOfGuesses={guessList.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
