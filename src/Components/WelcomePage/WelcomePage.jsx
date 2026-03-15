import { useMole } from "../MoleContext/MoleContext";

function WelcomePage() {
  const { startGame } = useMole();
  return (
    <div>
      <p>Step right up to whack a mole!</p>
      <p>Bonk a mole on the head to earn points!</p>
      <p>Are you ready? You've gotta be quick!</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default WelcomePage;
