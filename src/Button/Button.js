import "./Button.css";
import { useState } from "react";
const initialState = true;

export default function Button({ answer }) {
  const [state, setState] = useState(initialState);
  console.log(state);
  return (
    <div>
      <button
        type="button"
        data-js="answer-button"
        className="card__button-answer"
        onClick={() => {
          setState((currentState) => {
            const newState = !currentState;
            return newState;
          });
        }}
      >
        Show answer
      </button>
      <p className={state ? " card__answer" : "card__answer--active"}>
        {answer}
      </p>
    </div>
  );
}
