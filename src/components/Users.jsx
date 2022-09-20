import React from 'react'

function Users() {
  var objeto= [];
  const cantidad = window.localStorage.length;
  for (var i = 1; i <= cantidad; i++) {
    objeto.push(JSON.parse(localStorage.getItem('usu'+i)))
 }
  
            
  return (
    <div>
        {objeto.map(usuarios => <p key={usuarios.id}>{`${usuarios.email}, ${usuarios.password} datos`}</p>)}
    </div>
  )
}

export default Users
