import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../numberGuessGame";
import InputSection from "./InputSection";
import Feedback from "./Feedback";

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [gameStarted, setGameStarted] = useState(false);

  const handleGuess = () => {
    if (state.attempts < 10) {
      dispatch({ type: "MAKE_GUESS" });
    }
  };

  const score =
    state.feedback === "Correct"
      ? Math.round((1 - state.attempts / 10) * 100)
      : state.attempts >= 10
        ? 0
        : null;

  const trialsRemaining = 10 - state.attempts;
  const lost = state.attempts >= 10 && state.feedback !== "Correct";

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Number Guessing Game</h1>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
            setGameStarted(true);
          }}
          disabled={gameStarted && !lost && state.feedback !== "Correct"}
        >
          New Game
        </button>
      </div>

      <p className="game-instructions">Guess a number between 1 and 100</p>

      <InputSection
        inputValue={state.input}
        onInputChange={(val) => dispatch({ type: "SET_INPUT", payload: val })}
        disabled={!gameStarted || state.feedback === "Correct" || lost}
      />

      <div className="guess-button">
        <button
          onClick={handleGuess}
          disabled={!gameStarted || state.feedback === "Correct" || lost}
        >
          Guess
        </button>
      </div>

      <Feedback feedback={state.feedback} />

      {state.feedback === "Correct" && (
        <p className="win-message">
          You guessed it right! Your score is {score}%.
        </p>
      )}

      {lost && (
        <p className="loss-message">
          Oops! You failed. The correct number was {state.target}. Your score is
          0%.
        </p>
      )}

      <p className="trials-remaining">
        {trialsRemaining} trial{trialsRemaining !== 1 ? "s" : ""} remaining
      </p>
    </div>
  );
};

export default Game;
