import React from 'react'
import {Link} from 'react-router-dom';

export default function LoginSucesso() {
  return (
    <div>Seja Bem vindo à Green WATT 
        <Link to='/'>Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/solucao">Solução</Link>
    </div>
  )
}
