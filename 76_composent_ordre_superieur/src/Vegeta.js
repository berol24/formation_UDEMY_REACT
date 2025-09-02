import vegeta from "./vegeta.jpg";
import { useState } from "react";
function Vegeta(props) {
  const [hits, setHits] = useState(0);
  const addOne = () => {
    setHits(hits + 1);
  };
  return (
    <div className="col">
      <img src={vegeta} alt="vegeta" style={{ width: "100px" }} />
      <br />
      <button onClick={addOne} className="btn btn-success m-3">
      {props.name}  Frappe
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Coups</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Vegeta;
