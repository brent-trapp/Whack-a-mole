import { useMole } from "../MoleContext/MoleContext";

function MoleField() {
  const { moleField } = useMole();
  return (
    <ul className="field">
      {moleField.map((hasMole, i) => (
        <Mole key={i} hasMole={hasMole} />
      ))}
    </ul>
  );
}

function Mole({ hasMole }) {
  const { whackMole } = useMole();
  if (hasMole) return <li onClick={whackMole} className="moleHole"><img src=".././public/mole.png" /></li>;
  return <li className="noMoleHole"><img src=".././public/hole.png" /></li>;
}

export default MoleField;
