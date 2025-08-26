import React , { useState } from "react";
import Toto from "./Toto";


function Maman() {
  const myState = {
    messageMaman: null,
    messageToto: null,
  };

  const [state, setState] = useState(myState);

  const ordreMaman = () => {
    setState({
      messageMaman: "Va ranger ta chambre"
    });
  };

  const reponseToto = ()=>{
    setState(
        {
            messageToto : "d'accord maman"
        }
    )
  }
  return (
    <div>
      <h1>Maman</h1>
      <button onClick={ordreMaman}>Ordre de la mère</button>
      <p>{state.messageMaman}</p>
      <hr />
      <Toto name="Toto" leState={state} reponseToto ={reponseToto} />
    </div>
  );
}

export default Maman;



// import React, { useState } from "react";
// import Toto from "./Toto";

// function Maman() {
//   const myState = {
//     messageMaman: null,
//     messageToto: null,
//   };

//   const [state, setState] = useState(myState);

//   const ordreMaman = () => {
//     setState((prevState) => ({
//       ...prevState,
//       messageMaman: "Va ranger ta chambre"
//     }));
//   };

//   const reponseToto = () => {
//     setState((prevState) => ({
//       ...prevState,
//       messageToto: "d'accord maman"
//     }));
//   };

//   return (
//     <div>
//       <h1>Maman</h1>
//       <button onClick={ordreMaman}>Ordre de la mère</button>
//       <p>{state.messageMaman}</p>
//       <hr />
//       <Toto name="Toto" leState={state} reponseToto={reponseToto} />
//     </div>
//   );
// }

// export default Maman;
