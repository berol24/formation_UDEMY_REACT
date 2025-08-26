import { forwardRef } from "react";

const MyForwardRef = forwardRef((props,ref)=> {

console.log("props ",props);
console.log("refComp ",ref);

 
    return (
    <div>
      {/* <h1 ref={myTitle}>Valeur : {state}</h1> */}
      <input type="text" ref={ref} />

    </div>
  )
})

export default MyForwardRef
