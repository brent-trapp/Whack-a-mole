import { useMole } from "./Components/MoleContext/MoleContext";
import MoleField from "./Components/MoleField/MoleField";
import Scorebar from "./Components/ScoreBar/Scorebar";
import WelcomePage from "./Components/WelcomePage/WelcomePage";

export default function App() {
  const { gameOn } = useMole();
  return (
    <>
      <h1>Whack-A-Mole</h1>
      {gameOn ? (
        <>
          <Scorebar />
          <MoleField />
        </>
      ) : (
        <WelcomePage />
      )}
    </>
  );
}
