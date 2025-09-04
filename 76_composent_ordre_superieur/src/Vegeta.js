import vegeta from "./vegeta.jpg";
import countHits from "./countHits";
function Vegeta(props) {
const {addOneHit,hits,name,life} = props
  const lifeValue  = life > 0 ?  <td>{life} %</td> :  <td><span className="badge bg-danger">Mort</span></td>
  const button = life > 0 ? (<button onClick={addOneHit} className="btn btn-success m-3">{name}  Frappe</button>) : (<button  className="btn btn-danger m-3 disable">{name}  Mort</button>)

  return (
    <div className="col">
      <img src={vegeta} alt="vegeta" style={{ width: "100px" }} />
      <br />
     {button}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Coups</th>
            <th scope="col">Vie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{hits}</td>
            {lifeValue}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default countHits(Vegeta,10) ;
