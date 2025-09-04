import { useState } from "react";
import "./App.css";
import Goku from "./Goku";
import Vegeta from "./Vegeta";

function App() {
  const [state, setState] = useState(
    {
      vegeta: 100,
      goku:100
    })

    const reduceLife = (param, param2) =>{
      if(param=== "Goku"){
      setState({...state, vegeta: state.vegeta -param2}) 
    }else{
      setState({...state, goku: state.goku - param2})  
    }}

  return (
    <div className="container text-center">
      <h1>Goku Vs Vegeta</h1>
      <hr/>
      <div className="row">
         <Vegeta name="Vegeta" life={state.vegeta} reduceHandle={reduceLife}/>
         <Goku name="Goku" life={state.goku} reduceHandle={reduceLife}/>
      </div>
    </div>
  );
}

export default App;
