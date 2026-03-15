import { useMole } from "../MoleContext/MoleContext";

function Scorebar() {
  const { score, restart } = useMole();
  return (
    <div>
      <p className="scoreCard">Score: {score}</p>
      <button className="restartButton" onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default Scorebar;
