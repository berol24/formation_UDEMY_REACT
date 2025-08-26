import car from "./car.svg";    
function Car(props) {
  return (
    <img className="carBorder" style={{background: props.color, height:props.height}} src={car} alt=""/>
  )
}

export default Car
