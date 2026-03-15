import { useMole } from "./MoleContext/MoleContext";

function Mole() {
  const { mole, whackMole, scoreIncrement } = useMole();
  return <div>Mole</div>;
}

export default Mole;
