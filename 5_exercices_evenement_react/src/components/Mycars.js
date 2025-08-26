import { useState } from "react";
import Car from "./Cars";
import Welcome from "./Welcome";

function Mycars(props) {
  const [state, setState] = useState({
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],
    monTitre: "Voici mon titre 2",
  });

  // Augmente l'âge après 10 ans
  const addTenYear = () => {
    const updatedVoitures = state.voitures.map((item) => {
      return { ...item, year: item.year - 10 };
    });

    setState({ ...state, voitures: updatedVoitures });
  };

  const year = new Date().getFullYear();

  // destructuring d'un objet

  const [ford, Mercedes, Peugeot] = state.voitures;

  console.log(ford, Mercedes, Peugeot);

  //  calcul de l'age
  const getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year;

    //  ans , an
    let frenchYearStr = "";
    if (age === 1) {
      frenchYearStr = "an";
    } else if (age === 0) {
      frenchYearStr = "an";
    } else {
      frenchYearStr = "ans";
    }

    return `${age}${frenchYearStr}`;
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      {state.voitures.map((voiture, index) => (
        <Car
          nom={voiture.name}
          key={index}
          year={voiture.year}
          color={voiture.color}
        />
      ))}
      <hr />
      <h1>{state.monTitre}</h1>
      <Car
        nom={state.voitures[0].name}
        color={state.voitures[0].color}
        year={year - state.voitures[0].year + "ans"}
      />

      <Car
        nom={state.voitures[1].name}
        color={state.voitures[1].color}
        year={year - state.voitures[1].year + "ans"}
      />

      <Car
        nom={state.voitures[2].name}
        color={state.voitures[2].color}
        year={year - state.voitures[2].year + "ans"}
      />

      <hr />

      <button onClick={addTenYear}>+10 ans</button>

      <h4>utilisation du destructuring</h4>
      <Car nom={ford.name} color={ford.color} year={year - ford.year + "ans"} />
      <Car
        nom={Mercedes.name}
        color={Mercedes.color}
        year={year - Mercedes.year + "ans"}
      />
      <Car
        nom={Peugeot.name}
        color={Peugeot.color}
        year={year - Peugeot.year + "ans"}
      />
      <hr />

      <h4>utilisation du destructuring sur le map</h4>

      {state.voitures.map(({ name, color, year }, index) => (
        <Car key={index} color={color} year={year}>
          {name}
        </Car>
      ))}

      <h4>calcul de l'age</h4>

      {state.voitures.map(({ name, color, year }, index) => (
        <Car key={index} color={color} year={getAge(year)}>
          {name}
        </Car>
      ))}

      <Welcome/>
    </div>
  );
}

export default Mycars;
