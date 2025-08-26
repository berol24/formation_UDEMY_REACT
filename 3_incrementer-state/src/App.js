import React, { useState } from "react";
import Mycars from "./components/Mycars";
import "./App.css";

// class App extends Component {
function App() {
  const [state, setState] = useState({
    titre: "Mon Catalogue Voitures",
  });

  // render() {
  return (
    <div className="App">
      <Mycars title={state.titre} />
    </div>
  );
}

export default App;
