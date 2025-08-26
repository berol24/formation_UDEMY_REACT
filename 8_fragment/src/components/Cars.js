const Car = ({ color, nom, year   }) => {
  const colorInfo = color ? (`Couleur: ${color}`): "Couleur: Néant";

  if (nom) {
    return (
      <tr>
        <td>Marque: {nom}</td>
        <td>age: {year}</td>
        <td>{colorInfo}</td>
      </tr>
    );
    
  } 
  else {
    return null;
  }

};

export default Car;
