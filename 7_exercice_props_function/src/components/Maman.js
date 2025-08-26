import { useState } from 'react';
import Toto from './Toto';

function Maman () {
   
   const mystate = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }
 const [state, setState] = useState(mystate);

   const ordreMaman = (msg) => {
    setState({ messageMaman: msg, disabled: false });
   } 
   const reponseToto = (msg) =>{
    setState({ messageToto: msg });
   } 

   
        return (
            <div>
                <h1>Maman</h1>
                <button 
                    onClick={()=>ordreMaman("Va ranger ta chambre")}
                >Order de la mère</button>

                <p>{state.messageMaman}</p>

                <hr />
                
                <Toto 
                    name="Toto"
                    reponseTotoProps={reponseToto}
                    leState={state}
                />
            </div>
        )
    
}

export default Maman;