import React, { useState, useEffect } from "react";
import { useReward } from 'react-rewards';
import Die from "./components/Die";
import Conf from "./components/Confetti";
import Timer from "./components/Timer";
import "./App.css";

const randomValue = () => Math.floor(Math.random() * 6 + 1);
const setRandomDice = function() {
  return Array(10)
    .fill(1)
    .map((_, index) => {
      return {
        id: index + 1,
        status: false,
        value: randomValue(),
      };
    });
};

export default function App() {
  const randomValue = () => Math.floor(Math.random() * 6 + 1);
  const setRandomDice = function() {
    return Array(10)
      .fill(1)
      .map((_, index) => {
        return {
          id: index + 1,
          status: false,
          value: randomValue(),
        };
      });
  };
  const [dice, setDice] = useState(setRandomDice);
  const [selectedDice, setSelectedDice] = React.useState(new Set());
  const [tenzies, setTenzies] = useState(false);
  const [rollNumber, setRollNumber] = useState(0);
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState()
  const [score, setScore] = useState()
  const [bestScore, setBestScore] = useState()
  const [newText, setNewText] = useState("")
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'balloons');
  const { reward: balloonsReward2, isAnimating: isBalloonsAnimating2 } = useReward('balloonsReward2', 'balloons');

  // Side effect => clear timer and set appropriate scores if game ends
  useEffect(() => {
    clearInterval(timer)
    setTimer()
    // Check if games is at it's end state
    if (time !== 0) {
      const currentScore = time * rollNumber
      setScore(currentScore)
      setBestScore(() => {
        if (!score) {
          // window.sessionStorage.setItem("score", currentScore)
          return currentScore
        } else {
          const newBest = currentScore < score ? currentScore : score
          // window.sessionStorage.setItem("Bestscore", newBest)
          balloonsReward()
          balloonsReward2()
          setNewText("NEW")
          document.querySelector(".bestScore").classList.add("bestScore--new")
          return newBest
        }
      }
      )
    }
  }, [tenzies])

  // Side effect => checking end game by every dice change
  useEffect(() => {
    const isAllHeld = dice.every((die) => die.status);
    setTenzies(isAllHeld);
  }, [dice]);

  // Game logic functions
  function rollAllDice() {
    addTimer()
    if (tenzies) {
      setDice(setRandomDice);
      setSelectedDice(new Set());
      // let localScore = window.localStorage.setItem("score", score)
      setTime(0)
      setRollNumber(0)
      setNewText("")
      document.querySelector(".bestScore").classList.remove("bestScore--new")
    } else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          return die.status ? die : { ...die, value: randomValue() };
        });
      });
      setRollNumber((prev) => prev + 1);
    }
  }

  function holdDie(event, id, value) {
    // Disable holdDie functionality if the game is over
    if (!tenzies) {
      // Don't allow new value unless no die is selected yet
      if (selectedDice.size === 0 || selectedDice.has(value)) {
        setDice((prevDice) => {
          return prevDice.map((die) =>
            die.id === id ? { ...die, status: !die.status } : die
          );
        });
        setSelectedDice((prevSelectedDice) => {
          prevSelectedDice.add(value);
          return prevSelectedDice;
        });
      } else {
        event.target.classList.add("error");
        setTimeout(() => event.target.classList.remove("error"), 1 * 1000);
      }
    }
  }

  // Helper function
  function addTimer() {
    if (!timer) {
      setTimer(setInterval(() => setTime((prevTime) => prevTime + 1), 1 * 1000))
    }
  }
  return (
    <>
      <div className="App">
        <main>
          <div className="scores">
            <h3>Score {score}</h3>
            <h3 className="bestScore"><span id="balloonsReward" />{newText} Best Score {bestScore}<span id="balloonsReward2" /></h3>
          </div>
          {tenzies && (
            <Conf confettiPos={document.querySelector("main").getBoundingClientRect()} />)}
          < h1 className="main--header">Tenzies</h1>
          <h3 className="main--desc">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.<br /><u>Score = time * rolls</u>
          </h3>
          <h4>rolls {rollNumber}</h4>
          <h4>time <Timer time={time} /></h4>
          {/* <h4>time {time}</h4> */}
          <div className="dice--container">
            {dice.map((item) => (
              <Die
                key={item.id}
                id={item.id}
                status={item.status}
                value={item.value}
                holdDie={holdDie}
              />
            ))}
          </div>
          <button className="btn roll" onClick={rollAllDice}>
            {tenzies ? "Reset Game" : "Roll"}
          </button>
        </main>
      </div>
    </>
  );
}
