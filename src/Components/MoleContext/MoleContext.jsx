import { createContext, useState, useContext } from "react";

const NUM_HOLES = 9;

const MoleContext = createContext();

export function MoleProvider({ children }) {
  const [score, setScore] = useState(0);
  const [moleField, setMoleField] = useState(makeField());
  const [gameOn, setGameOn] = useState(false);

  const whackMole = () => {
    setMoleField(makeField());
    setScore(score + 1);
  };
  const startGame = () => {
    setScore(0);
    setGameOn(true);
    setMoleField(makeField());
  };
  const restart = () => setGameOn(false);

  const value = { score, moleField, gameOn, whackMole, startGame, restart };

  return <MoleContext.Provider value={value}>{children}</MoleContext.Provider>;
}

export function useMole() {
  const context = useContext(MoleContext);
  // if (!context) {
  //   throw Error("useMole must be used within a MoleProvider");
  // }
  return context;
}

function makeField(field = Array(NUM_HOLES).fill(false)) {
  const holes = field.reduce((holes, isMole, i) => {
    if (!isMole) holes.push(i);
    return holes;
  }, []);
  const mole = holes[Math.floor(Math.random() * holes.length)];
  const newField = Array(NUM_HOLES).fill(false);
  newField[mole] = true;
  return newField;
}
