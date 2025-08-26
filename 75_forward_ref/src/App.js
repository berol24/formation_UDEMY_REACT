
import { useRef } from "react";
import "./App.css";
import MyRef from "./MyForwardRef";

function App(props) {
const refComp = useRef();
const handleClick = () => {
refComp.current.focus()
}
console.log("refComp ",refComp);

  return (
    <div className="App">  
      <MyRef name='toto' ref={refComp} />
      <button onClick={handleClick}>Valider</button>
    </div>
  );
}

export default App;
