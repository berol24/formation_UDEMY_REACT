import { useState, Fragment } from "react";
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

  return (
    <>
      <button onClick={addTenYear}>+10 ans</button>
      <table className="carsTable">
        <tr>
          <th>Marque</th>
          <th>Age</th>
          <th>Couleur</th>
        </tr>

        {state.voitures.map((voiture, index) => (
          <Fragment key={index}>
            <Car
              nom={voiture.name}
              color={voiture.color}
              year={year - voiture.year + "ans"}
            />
          </Fragment>
        ))}
      </table>
    </>
  );
}

export default Mycars;
