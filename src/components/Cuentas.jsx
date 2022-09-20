import React from 'react'

function Cuentas() {
 const usuario1= {
    id:1,
    email:"federico@gmail.com",
    password:123456
 }
 const usuario2={
    id:2,
    email:"agus@gmail.com",
    password:123456
 }
 const usuario3={
   id:3,
   email:"martin@gmail.com",
   password:123456
}
 localStorage.setItem('usu1', JSON.stringify(usuario1));
 localStorage.setItem('usu2', JSON.stringify(usuario2));
 localStorage.setItem('usu3', JSON.stringify(usuario3));
  return 

}

export default Cuentas