import React from "react";

function InputField() {
  const [guessInput, setGuessInput] = React.useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guessInput });
    setGuessInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        required
        pattern="[a-zA-Z]{5}"
        title="5 Letter Word"
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setGuessInput(newGuess);
        }}
      />
    </form>
  );
}

export default InputField;
