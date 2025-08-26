const Car = ({ color,  year ,nom }) => {
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  if (nom) {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
     
        <p>Marque: {nom}</p>
        <p>age: {year}</p>
        {colorInfo}
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>Pas de Data</p>
      </div>
    );
  }

  // return null // ce return est Facultatif
};

export default Car;
