
import { useRef } from "react";
import "./App.css";
import MyRef from "./MyRef";

function App(props) {
const refComp = useRef();
// const handleClick = () => {
//      refComp.current.addFocus();
//   };
  return (
    <div className="App">  
      <MyRef ref={refComp} />
      {/* <button onClick={handleClick}>Valider</button> */}
    </div>
  );
}

export default App;
