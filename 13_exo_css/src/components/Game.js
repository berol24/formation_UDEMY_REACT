import { useState } from "react";

function Result() {
  const state = {
    name: "John",
    winner: true,
  };

  const [myState, setMyState] = useState(state.winner);
  const classColor = myState ? "alert-success" : "alert-danger" 
  const result = <h1 className={`alert ${classColor}`} role="alert">{myState ? `Bravo ${state.name}` : "Raté !!! "}</h1>

  const handleChangeState = () => {
    setMyState(!myState);
  };

  return (
    <>
      {result}
      <button className="btn btn-primary" onClick={handleChangeState}>Change state</button>
    </>
  );
}

export default Result;
