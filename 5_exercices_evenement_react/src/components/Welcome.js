import React from 'react'

function Welcome() {
  
    const bonjour =()=>{
        console.log("Bonjour");
    }

    const bonsoir = arg =>{
        console.log(arg);
    }
    
    // bonsoir('Bonsoir')

  return (
    <div>
      <button onClick={bonjour}>Invoquer une function</button><br/>
      <button onClick={()=>bonsoir("Bonsoir")}>Invoquer une function avec arg "Bonsoir"</button><br/>
      <button onClick={()=>console.log("Bonne nuit")}>click sans invoquer une function</button><br/>
    </div>
  )
}

export default Welcome
