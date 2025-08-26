


import React from 'react';

function Toto(props) {
  console.log(props);
  const btnReponseToto = props.leState.messageMaman !== null ? (
    <button onClick={props.reponseToto}>Réponse</button>
  ) : (
    <button disabled>Réponse</button>
  );

  return (
    <div>
      <h2>{props.name}</h2>
      {btnReponseToto}
      <p>{props.leState.messageToto}</p>
    </div>
  );
}

export default Toto;
