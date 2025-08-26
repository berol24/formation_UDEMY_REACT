import { useState } from "react";
import Car from "./Cars";

function Mycars(props) { 
  const [state, setState] = useState({
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],
    monTitre: "Voici mon titre 2"
  });

  // Augmente l'âge après 10 ans
  const addTenYear = () => {
    const updatedVoitures = state.voitures.map((item) => {
      return { ...item, year: item.year - 10 };
    });

    setState({ ...state, voitures: updatedVoitures });
  };

  const year = new Date().getFullYear();

  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      {state.voitures.map((voiture, index) => (
        <Car nom=  {voiture.name}  key={index} year={voiture.year} color={voiture.color}/>
        
      
      ))}
        <hr/> 
        <h1>{state.monTitre}</h1>
        <Car nom = {state.voitures[0].name} color={state.voitures[0].color} year={year - state.voitures[0].year + "ans"} />
        
      
        <Car nom = {state.voitures[1].name} color={state.voitures[1].color} year={year - state.voitures[1].year + "ans"} />

      
        <Car nom = {state.voitures[2].name} color={state.voitures[2].color} year={year - state.voitures[2].year + "ans"} />
          
      


      <hr />
     <h1></h1>
      <button onClick={addTenYear}>+10 ans</button>
      {state.voitures.map((voiture, index) => (
        <Car key={index} nom= {voiture.name} color={voiture.color} year={year - voiture.year + "ans"} />
         
     
      ))}



    </div>
  );
}

export default Mycars;
