function Result() {
  const state = {
    name: "John",
    winner: true,
  };
  // 1ere méthode
  //   let result;
  //   if (state.winner) {
  //      result =  <h1>Bravo {state.name}</h1>
  //   }else{
  //      result = <h1>Raté !!!</h1>
  //   }
  //   return result;

  return (
    // 2eme méthode
    // state.winner ? <h1>Bravo {state.name}</h1>: <h1>Raté !!!</h1>
    // 3eme méthode
    state.winner && <h1>Bravo {state.name}</h1>
  );
}

export default Result;
