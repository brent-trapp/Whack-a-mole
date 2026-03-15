import { useMole } from "./MoleContext/MoleContext";

export default function App() {
  return (
    <>
      <h1>Whack-A-Mole</h1>
      <ScoreBar />
      <MoleField />
    </>
  );
}
