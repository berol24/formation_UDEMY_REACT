import goku from "./goku.png";
import { useState } from "react";
function Goku(props) {
  const [hits, setHits] = useState(0);
  const addOne = () => {
    setHits(hits + 1);
  };
  return (
    <div className="col">
      <img src={goku} alt="goku" style={{ width: "165px" }} />
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

export default Goku;
