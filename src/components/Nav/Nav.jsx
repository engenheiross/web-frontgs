import React from 'react';
import { Link } from 'react-router-dom';
import GWB from '../../assets/GW - Branco.png';



const Nav = () => {
  // Pegando o usuário logado
  const getUsuario = sessionStorage.getItem('usuario');

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/">
          <img src={GWB} alt="Logo" className="w-20 h-auto" />
        </Link>
      </div>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-400">
          Início
        </Link>
        <Link to="/login" className="hover:text-gray-400">
          Login
        </Link>
        <Link to="/cadastrar" className="hover:text-gray-400">
          Cadastrar
        </Link>
        <Link to="/sobre" className="hover:text-gray-400">
          Sobre
        </Link>
        <Link to="/solucao" className="hover:text-gray-400">
          Solução
        </Link>
      </div>

      <div>
        {getUsuario ? (
          <p className="text-sm">Usuário Logado: {getUsuario}</p>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
