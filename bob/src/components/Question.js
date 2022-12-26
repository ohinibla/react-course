import React from "react";
import Checkmark from "./Checkmark";

export default function Question(props) {
  const { i, question, answers, correctAns, selectedAns, selectAns, end } =
    props;

  const answersList = answers.map((a, index) => {
    return (
      <button
        key={index}
        onClick={() => selectAns(a, i)}
        disabled={end}
        // rewrite this
        className={`btn answer--btn ${a === selectedAns ? "selected" : ""} ${
          end && correctAns === a ? "correct" : ""
        } ${
          end && a === selectedAns && selectedAns !== correctAns
            ? "incorrect"
            : ""
        } `}
      >
        {" "}
        {a}
      </button>
    );
  });

  return (
    <div className="question--container">
      <h2 className="question--title">{question}</h2>
      <div className="answers--container">
        <div className="answers">{answersList}</div>
        <div className="result">
          {end && <Checkmark result={selectedAns === correctAns} />}
        </div>
      </div>
    </div>
  );
}
