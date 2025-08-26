const Car = ({ color,children,  year ,nom  }) => {
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

  if (children) {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
     
        <p>Marque: {children}</p>
        <p>age: {year}</p>
        {colorInfo}
      </div>
    );
    
  } 
  else if (nom) {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
     
        <p>Marque: {children}</p>
        <p>age: {year}</p>
        {colorInfo}
      </div>
    );
    
  } 
  
  
  else {
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
