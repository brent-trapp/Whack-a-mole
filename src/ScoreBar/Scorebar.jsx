import { useMole } from "./MoleContext/MoleContext";

function Scorebar() {
  const { Score, restartGame } = useMole();
  return <div>Scorebar</div>;
}

export default Scorebar;
