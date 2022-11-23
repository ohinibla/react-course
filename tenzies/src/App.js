import React from "react";
import Die from "./components/Die";
import Conf from "./components/Confetti";
import "./App.css";

function App() {
  const randomValue = () => Math.floor(Math.random() * 6 + 1);
  const setRandomDice = function () {
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

  const [dice, setDice] = React.useState(setRandomDice);
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const isAllHeld = dice.every((die) => die.status);
    setTenzies(isAllHeld);
  }, [dice]);

  function rollAllDice() {
    if (tenzies) {
      setDice(setRandomDice);
    } else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          return die.status ? die : { ...die, value: randomValue() };
        });
      });
    }
  }

  function holdDie(event, id, value) {
    // Disable holdDie functionality if the game is over
    if (!tenzies) {
      setDice((prevDice) => {
        return prevDice.map((die) =>
          die.id === id ? { ...die, status: !die.status } : die
        );
      });
    }
  }

  return (
    <div className="App">
      <main>
        {tenzies && (
          <Conf
            confettiPos={document.querySelector("main").getBoundingClientRect()}
          />
        )}
        <h1 className="main--header">Tenzies</h1>
        <h3 className="main--desc">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h3>
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
  );
}

export default App;