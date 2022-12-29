import { useRef, useState } from "react";
import Question from "./components/Question";
import Loading from "./components/Loading";
import Blob from "./components/Blob";
import Animation from "./components/Animation";
import he from "he";
import Axios from "axios";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    setIsLoading(true);
    const url = "https://opentdb.com/api.php?amount=5&type=multiple";
    Axios.get(url).then((res) => {
      if (res.status === 200) {
        const q = res.data.results;
        setQuestions(
          q.map((item, index) => {
            return {
              [index]: {
                question: he.decode(item.question),
                answers: [...item.incorrect_answers, item.correct_answer]
                  .sort(() => Math.random() - 0.5)
                  .map((i) => he.decode(i)),
                correctAns: he.decode(item.correct_answer),
                selectedAns: "",
              },
            };
          })
        );
        setIsLoading(false);
      }
    });
  }

  function startGame() {
    setQuestions([]);
    setStart(!start);
    setScore(0);
    setEnd(false);
    fetchData();
  }

  function selectAns(ans, i) {
    setQuestions((prevQ) => {
      const newQ = [...prevQ];
      newQ[i][i].selectedAns = ans;
      return newQ;
    });
  }

  function checkAns() {
    Object.values(questions).forEach((q) => {
      const currentQ = Object.values(q)[0];
      currentQ.correctAns === currentQ.selectedAns &&
        setScore((prevScore) => prevScore + 1);
    });
    setEnd(true);
  }

  const questionList = questions.map((q, index) => {
    const a = q[index];
    return (
      <Question
        key={index}
        i={index}
        {...a}
        selectAns={selectAns}
        start={start}
        end={end}
      />
    );
  });

  return (
    <>
      <div className="App">
        <div className="main">
          {!start && (
            <div className="intro">
              <h1>Quizzical</h1>
              <h3>Scrimba elementry React course final project</h3>
              <button onClick={startGame} className="btn start">
                Start quiz
              </button>
            </div>
          )}
          {start &&
            (isLoading ? (
              <Loading isLoading={isLoading} />
            ) : (
              <div className="quizz">
                <div className="qlist--container">{questionList}</div>
                {end ? (
                  <div className="score">
                    <div>You scored {score} correct answers </div>
                    <button onClick={startGame} className="btn play-again">
                      Play again
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={checkAns}
                      disabled={isLoading}
                      className="btn check-answers"
                    >
                      Check answers
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <Animation end={end} start={start} isLoading={isLoading} />
      <Blob />
    </>
  );
}

export default App;
