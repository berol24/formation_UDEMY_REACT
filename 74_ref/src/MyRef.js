import { useEffect, useRef, useState } from "react";

function MyRef() {
    const [state , setState]= useState("")
    const handleChange = (e) => {
        setState(e.target.value);
    }
    const myTitle = useRef()
    console.log(myTitle.current);
    
   if(myTitle.current) {
        myTitle.current.style.color = "red";
    }

    const myInput = useRef();
  useEffect(() => {
    if (myInput.current) {
      myInput.current.focus();
    }
  }
  , []);

  // const handleClick = () => {
  //   console.log(myInput.current.value);  
  // }

  // const addFocus = () => {
  //     myInput.current.focus();
  // }
    return (
    <div>
      <h1 ref={myTitle}>Valeur : {state}</h1>
      <input ref={myInput} type="text" value={state} onChange={handleChange} />
       {/* <input ref={myInput} type="text" /> */}
      {/* <button onClick={handleClick}>Valider</button> */}
    </div>
  )
}

export default MyRef
