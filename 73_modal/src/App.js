import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
// import MyComponent from "./MyComponent";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(!showModal);
  };
  
  const handleHide = ()=>{
    setShowModal(false);
  }
  const modal = showModal ? <Modal close={handleHide}/> : null;

 

  return (
    <div className="App">  
      <button onClick={handleShow}>Afficher le Modal</button>
      {modal}
    </div>
  );
}

export default App;
