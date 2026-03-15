import { createContext, useState, useContext } from "react";

const MoleContext = createContext();

export function MoleProvider({ children }) {
  const [score, setScore] = useState(0);
  const [moleUp, setMoleUp] = useState(false);

  const mole = moleUp ? "up" : "down";
  const whackMole = () => setMoleUp(!moleUp);
  const scoreIncrement = score;
  const restartGame = setScore(0);

  const values = { mole, whackMole, scoreIncrement, restartGame };
  return (
    <MoleContext.Provider values={values}>{children}</MoleContext.Provider>
  );
}

export function useMole() {
  const context = useContext(MoleContext);
  if (!context) {
    throw Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
