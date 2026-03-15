import { useMole } from "../MoleContext/MoleContext";

function MoleField() {
  const { moleField } = useMole();
  return (
    <ul>
      {moleField.map((hasMole, i) => (
        <Mole key={i} hasMole={hasMole} />
      ))}
    </ul>
  );
}

function Mole({ hasMole }) {
  const { whackMole } = useMole();
  if (hasMole) return <li onClick={whackMole} className="moleHole"></li>;
  return <li className="noMoleHole"></li>;
}

export default MoleField;
