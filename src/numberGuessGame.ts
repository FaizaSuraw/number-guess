type State = {
  target: number;
  input: string;
  feedback: string;
  attempts: number;
};

type Action =
  | { type: "SET_INPUT"; payload: string }
  | { type: "MAKE_GUESS" }
  | { type: "RESET" };

export const initialState: State = {
  target: Math.floor(Math.random() * 100) + 1,
  input: "",
  feedback: "",
  attempts: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "MAKE_GUESS": {
      const guess = parseInt(state.input);
      if (isNaN(guess) || guess < 1 || guess > 100) {
        return { ...state, feedback: "Enter a number between 1 and 100" };
      }

      let feedback = "";
      if (guess === state.target) {
        feedback = "Correct";
      } else if (guess < state.target) {
        feedback = "Too low!";
      } else {
        feedback = " Too high!";
      }

      return {
        ...state,
        feedback,
        attempts: state.attempts + 1,
        input: "",
      };
    }

    case "RESET":
      return {
        target: Math.floor(Math.random() * 100) + 1,
        input: "",
        feedback: "",
        attempts: 0,
      };

    default:
      return state;
  }
};
