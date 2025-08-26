import React, { useState } from "react";
import Car from "./Car";

function Form() {
  const state = {
    username: "",
    color:"",
    colors:["select color","red", "green", "blue", "yellow", "black", "white"],
    comment: "",
  };
  const [username, setUsername] = useState(state.username);
  const [color, setColor] = useState(state.color);
  const [comment, setComment] = useState(state.comment);

  const handlePseudo = (e) => {
   console.log(e.target.value);
    setUsername(e.target.value);
  };
   const handleColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };
  const handleComment = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Pseudo: ${username} Couleur:, ${color} Commentaire: ${comment}`)
  }
  return (
    <div>
      <Car color={color} height="300px" />

      <h1>Comment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pseudo:</label>
          <input
            type="text"
            value={username}
            onChange={handlePseudo}
            placeholder="Entrez votre pseudo"
          />
        </div>
        <div>
          <label>Couleur</label>
          <select value={color} onChange={handleColor}>
           {
            state.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))
           }
          </select>
        </div>

        <div>
          <label>Commentaire</label>
          <textarea
            value = {comment}
            onChange={handleComment}
            placeholder="Entrez votre commentaire"
            rows="5"
            cols="30"
          />
        </div>

        <button>Valider</button>
      </form>
    </div>
  );
}

export default Form;
