import React from 'react'

// 1ere méthode
function Users(props) {
    //console.log(props);
    
    const {name, age} = props
  return (
    <div>
      <p>Chanteur :{name} {age} ans</p>
    </div>
  )
}

// 2eme méthode

// function Users({name, age}) {

//   return (
//     <div>
//       <p>Chanteur :{name} </p>
//     </div>
//   )
// }

export default Users
